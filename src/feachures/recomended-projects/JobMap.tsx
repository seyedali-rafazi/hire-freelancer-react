"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { ScatterplotLayer, TextLayer } from "@deck.gl/layers";
import type { Project } from "../../types";
import {
  HiMagnifyingGlassPlus,
  HiMagnifyingGlassMinus,
  HiMapPin,
  HiBuildingOffice2,
  HiBriefcase,
  HiCurrencyDollar,
  HiSparkles,
  HiArrowPath,
} from "react-icons/hi2";

// CARTO Dark Matter raster basemap (Free, high-speed CDN, no API key required, universally accessible without geo/sanction blocks)
const DARK_MAP_STYLE: any = {
  version: 8,
  sources: {
    "carto-dark": {
      type: "raster",
      tiles: [
        "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
        "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
        "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
        "https://d.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
      ],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  },
  layers: [
    {
      id: "carto-dark-layer",
      type: "raster",
      source: "carto-dark",
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

// Coordinates for Iran center and major job hub cities
const IRAN_CENTER: [number, number] = [53.688, 32.4279];
const IRAN_ZOOM = 5.2;

export const IRAN_CITIES_COORDS: Record<string, { center: [number, number]; zoom: number }> = {
  "همه ایران": { center: IRAN_CENTER, zoom: IRAN_ZOOM },
  تهران: { center: [51.389, 35.72], zoom: 10.5 },
  اصفهان: { center: [51.666, 32.654], zoom: 11 },
  مشهد: { center: [59.606, 36.29], zoom: 11 },
  شیراز: { center: [52.523, 29.621], zoom: 11.5 },
  تبریز: { center: [46.321, 38.075], zoom: 11.5 },
  کرج: { center: [50.981, 35.82], zoom: 11 },
  اهواز: { center: [48.685, 31.338], zoom: 11.5 },
  رشت: { center: [49.588, 37.3], zoom: 11.5 },
  یزد: { center: [54.356, 31.867], zoom: 11.5 },
  کیش: { center: [53.978, 26.532], zoom: 11.5 },
};

// Category vibrant neon colors for dark map visualization [R, G, B]
const CATEGORY_COLORS: Record<string, [number, number, number]> = {
  programming: [16, 185, 129], // Emerald
  "ai-data": [6, 182, 212], // Cyan
  "ui-ux": [168, 85, 247], // Purple/Violet
  "seo-marketing": [245, 158, 11], // Amber
  mobile: [244, 63, 94], // Rose
  devops: [99, 102, 241], // Indigo
};

const DEFAULT_COLOR: [number, number, number] = [59, 130, 246]; // Blue

interface JobMapProps {
  jobs: Project[];
  selectedJobId?: string | null;
  onSelectJob?: (job: Project) => void;
  activeCity?: string;
  onCityChange?: (city: string) => void;
}

export default function JobMap({
  jobs,
  selectedJobId,
  onSelectJob,
  activeCity = "همه ایران",
  onCityChange,
}: JobMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const overlayRef = useRef<MapboxOverlay | null>(null);

  const [hoveredJob, setHoveredJob] = useState<Project | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // Filter jobs that have valid coordinates
  const geoJobs = useMemo(() => {
    return jobs.filter(
      (job) =>
        Array.isArray(job.coordinates) &&
        job.coordinates.length === 2 &&
        typeof job.coordinates[0] === "number" &&
        typeof job.coordinates[1] === "number"
    );
  }, [jobs]);

  // Aggregate job counts by city for labels
  const cityClusters = useMemo(() => {
    const map = new Map<string, { city: string; count: number; coordinates: [number, number] }>();
    for (const job of geoJobs) {
      const city = job.city || "نامشخص";
      const existing = map.get(city);
      if (existing) {
        existing.count += 1;
      } else if (job.coordinates) {
        map.set(city, {
          city,
          count: 1,
          coordinates: job.coordinates,
        });
      }
    }
    return Array.from(map.values());
  }, [geoJobs]);

  // Build deck.gl layers
  const buildLayers = useCallback(() => {
    return [
      // 1. Outer Pulse / Glowing Radar Ring Layer
      new ScatterplotLayer<Project>({
        id: "job-pulse-rings",
        data: geoJobs,
        getPosition: (d) => d.coordinates as [number, number],
        getRadius: (d) => (d._id === selectedJobId ? 42000 : 26000),
        getFillColor: (d) => {
          const color = CATEGORY_COLORS[d.category?.englishTitle || ""] || DEFAULT_COLOR;
          return [color[0], color[1], color[2], d._id === selectedJobId ? 90 : 35];
        },
        getLineColor: (d) => {
          const color = CATEGORY_COLORS[d.category?.englishTitle || ""] || DEFAULT_COLOR;
          return [color[0], color[1], color[2], d._id === selectedJobId ? 255 : 130];
        },
        stroked: true,
        filled: true,
        lineWidthMinPixels: 1.5,
        radiusMinPixels: 14,
        radiusMaxPixels: 45,
        updateTriggers: {
          getRadius: [selectedJobId],
          getFillColor: [selectedJobId],
          getLineColor: [selectedJobId],
        },
      }),

      // 2. Core Interactive Job Markers
      new ScatterplotLayer<Project>({
        id: "job-core-markers",
        data: geoJobs,
        pickable: true,
        getPosition: (d) => d.coordinates as [number, number],
        getRadius: (d) => (d._id === selectedJobId ? 18000 : 11000),
        getFillColor: (d) => {
          const color = CATEGORY_COLORS[d.category?.englishTitle || ""] || DEFAULT_COLOR;
          return [color[0], color[1], color[2], 255];
        },
        getLineColor: (d) => {
          if (d._id === selectedJobId) return [255, 255, 255, 255];
          return [15, 23, 42, 220];
        },
        stroked: true,
        filled: true,
        lineWidthMinPixels: 2.5,
        radiusMinPixels: 8,
        radiusMaxPixels: 22,
        onHover: (info) => {
          if (info.object) {
            setHoveredJob(info.object as Project);
            setTooltipPos({ x: info.x, y: info.y });
          } else {
            setHoveredJob(null);
            setTooltipPos(null);
          }
        },
        onClick: (info) => {
          if (info.object && onSelectJob) {
            onSelectJob(info.object as Project);
            if (mapRef.current && info.object.coordinates) {
              mapRef.current.flyTo({
                center: info.object.coordinates as [number, number],
                zoom: 10,
                duration: 1200,
                essential: true,
              });
            }
          }
        },
        updateTriggers: {
          getRadius: [selectedJobId],
          getFillColor: [selectedJobId],
          getLineColor: [selectedJobId],
        },
      }),

      // 3. City Names and Job Counts Badge Layer
      new TextLayer({
        id: "city-labels-layer",
        data: cityClusters,
        pickable: false,
        getPosition: (d) => d.coordinates,
        getText: (d) => `${d.city} (${d.count.toLocaleString("fa-IR")})`,
        getSize: 12,
        getColor: [255, 255, 255, 240],
        getBackgroundColor: [15, 23, 42, 210],
        backgroundPadding: [6, 4],
        fontFamily: "inherit",
        fontWeight: "bold",
        pixelOffset: [0, -22],
        billboard: true,
        sizeScale: 1,
        characterSet: "auto",
      }),
    ];
  }, [geoJobs, cityClusters, selectedJobId, onSelectJob]);

  // Initialize MapLibre GL and Deck.gl MapboxOverlay
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: DARK_MAP_STYLE,
      center: IRAN_CENTER,
      zoom: IRAN_ZOOM,
      pitch: 25,
      bearing: 0,
      maxZoom: 16,
      minZoom: 4,
      attributionControl: false,
    });

    // Suppress unhandled tile fetch warnings in console if network hiccups
    map.on("error", (e) => {
      if (e?.error?.message?.includes("fetch") || (e?.error as any)?.status === 0) {
        return;
      }
    });

    const overlay = new MapboxOverlay({
      layers: buildLayers(),
    });

    map.addControl(overlay);
    mapRef.current = map;
    overlayRef.current = overlay;

    // Resize map when window or container size changes
    const handleResize = () => map.resize();
    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver(() => {
      map.resize();
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      map.remove();
      mapRef.current = null;
      overlayRef.current = null;
    };
  }, []);

  // Update deck.gl overlay layers when dependencies change
  useEffect(() => {
    if (overlayRef.current) {
      overlayRef.current.setProps({
        layers: buildLayers(),
      });
    }
  }, [buildLayers]);

  // Sync map center when selectedJobId changes externally
  useEffect(() => {
    if (!selectedJobId || !mapRef.current) return;
    const target = geoJobs.find((j) => j._id === selectedJobId);
    if (target?.coordinates) {
      mapRef.current.flyTo({
        center: target.coordinates,
        zoom: 9.5,
        duration: 1000,
        essential: true,
      });
    }
  }, [selectedJobId, geoJobs]);

  // Focus on a selected city
  const handleCitySelect = (cityName: string) => {
    onCityChange?.(cityName);
    const target = IRAN_CITIES_COORDS[cityName] || { center: IRAN_CENTER, zoom: IRAN_ZOOM };
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: target.center,
        zoom: target.zoom,
        pitch: cityName === "همه ایران" ? 25 : 30,
        duration: 1400,
        essential: true,
      });
    }
  };

  const handleZoomIn = () => {
    mapRef.current?.zoomIn({ duration: 300 });
  };

  const handleZoomOut = () => {
    mapRef.current?.zoomOut({ duration: 300 });
  };

  const handleResetView = () => {
    handleCitySelect("همه ایران");
  };

  return (
    <div className="relative w-full h-full min-h-[350px] overflow-hidden bg-slate-950">
      
      {/* Map Container */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Header Overlay: City Filter Chips */}
      <div className="absolute top-3 inset-x-3 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pointer-events-none">
        
        {/* Title & Live Counter */}
        <div className="pointer-events-auto bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700/60 flex items-center gap-2 text-white shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-xs sm:text-sm font-extrabold">
            نقشه موقعیت‌های شغلی ایران
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded-full">
            {geoJobs.length.toLocaleString("fa-IR")} آگهی فعال
          </span>
        </div>

        {/* City Filter Pills */}
        <div className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-none bg-slate-950/80 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-lg">
          {Object.keys(IRAN_CITIES_COORDS).map((city) => {
            const isActive = activeCity === city;
            return (
              <button
                key={city}
                onClick={() => handleCitySelect(city)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/30 scale-105"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Interactive Tooltip */}
      {hoveredJob && tooltipPos && (
        <div
          style={{
            left: `${Math.min(tooltipPos.x + 12, (mapContainerRef.current?.clientWidth || 500) - 260)}px`,
            top: `${Math.max(tooltipPos.y - 120, 20)}px`,
          }}
          className="absolute z-20 pointer-events-none w-64 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl shadow-2xl text-white animate-fade-in-up"
        >
          <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
            <div className="flex-1">
              <h4 className="text-xs font-black text-white leading-tight line-clamp-2">
                {hoveredJob.title}
              </h4>
              <div className="flex items-center gap-1 text-[11px] text-slate-300 mt-1">
                <HiBuildingOffice2 className="w-3.5 h-3.5 text-primary-400 shrink-0" />
                <span className="truncate">{hoveredJob.company || "شرکت معتبر"}</span>
              </div>
            </div>
            <span className="text-[10px] bg-primary-950 text-primary-300 border border-primary-800 px-1.5 py-0.5 rounded font-bold shrink-0">
              {hoveredJob.city}
            </span>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300 mb-2">
            <div className="flex items-center gap-1">
              <HiBriefcase className="w-3.5 h-3.5 text-slate-400" />
              <span>{hoveredJob.jobType || "تمام وقت"}</span>
            </div>
            <div className="flex items-center gap-1 font-bold text-emerald-400">
              <HiCurrencyDollar className="w-3.5 h-3.5" />
              <span>{hoveredJob.salaryText || `${hoveredJob.budget.toLocaleString("fa-IR")} ت`}</span>
            </div>
          </div>

          {hoveredJob.tags && hoveredJob.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-2">
              {hoveredJob.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-[10px] text-primary-400 font-bold flex items-center justify-center gap-1 pt-1 border-t border-slate-800/80">
            <HiSparkles className="w-3 h-3" />
            <span>کلیک برای مشاهده جزئیات آگهی</span>
          </div>
        </div>
      )}

      {/* Map Control Buttons (Bottom Right) */}
      <div className="absolute bottom-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          title="بزرگ‌نمایی"
          className="w-9 h-9 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-700/80 flex items-center justify-center shadow-lg transition-transform active:scale-95"
        >
          <HiMagnifyingGlassPlus className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          title="کوچک‌نمایی"
          className="w-9 h-9 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white rounded-xl border border-slate-700/80 flex items-center justify-center shadow-lg transition-transform active:scale-95"
        >
          <HiMagnifyingGlassMinus className="w-5 h-5" />
        </button>
        <button
          onClick={handleResetView}
          title="تمرکز روی کل ایران"
          className="w-9 h-9 bg-primary-900/90 hover:bg-primary-800 text-primary-200 hover:text-white rounded-xl border border-primary-700/80 flex items-center justify-center shadow-lg transition-transform active:scale-95"
        >
          <HiArrowPath className="w-5 h-5" />
        </button>
      </div>

      {/* Legend Badge (Bottom Left) */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-300">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
          <span>برنامه‌نویسی</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
          <span>هوش مصنوعی</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500/50" />
          <span>طراحی</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
          <span>مارکتینگ</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shadow-sm shadow-rose-500/50" />
          <span>موبایل</span>
        </div>
      </div>

    </div>
  );
}
