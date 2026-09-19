"use client";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { ScatterplotLayer, TextLayer, GeoJsonLayer } from "@deck.gl/layers";
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
  HiGlobeAmericas,
  HiXMark,
} from "react-icons/hi2";

// CARTO Dark Matter raster basemap (Free, high-speed CDN, no API key required, universally accessible)
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

// Global Top-Down perspective (Pitch is strictly 0 for top-down flat 2D view)
const WORLD_CENTER: [number, number] = [15, 20];
const WORLD_ZOOM = 1.7;

export interface CountryMeta {
  iso3: string;
  name: string;
  nameFa: string;
  flag: string;
  center: [number, number];
  bbox?: [number, number, number, number];
  zoom: number;
}

export const TOP_COUNTRIES: CountryMeta[] = [
  {
    iso3: "WORLD",
    name: "World",
    nameFa: "کل جهان",
    flag: "🌍",
    center: WORLD_CENTER,
    zoom: WORLD_ZOOM,
  },
  {
    iso3: "IRN",
    name: "Iran",
    nameFa: "ایران",
    flag: "🇮🇷",
    center: [53.232, 33.354],
    bbox: [44.109, 25.078, 63.317, 39.713],
    zoom: 5,
  },
  {
    iso3: "USA",
    name: "United States of America",
    nameFa: "آمریکا",
    flag: "🇺🇸",
    center: [-98.58, 39.83],
    bbox: [-125.0, 24.5, -66.9, 49.4],
    zoom: 3.8,
  },
  {
    iso3: "DEU",
    name: "Germany",
    nameFa: "آلمان",
    flag: "🇩🇪",
    center: [10.691, 51.044],
    bbox: [5.989, 47.302, 15.017, 54.983],
    zoom: 5.5,
  },
  {
    iso3: "GBR",
    name: "United Kingdom",
    nameFa: "انگلستان",
    flag: "🇬🇧",
    center: [-3.613, 53.971],
    bbox: [-7.572, 49.96, 1.682, 58.635],
    zoom: 5.5,
  },
  {
    iso3: "CAN",
    name: "Canada",
    nameFa: "کانادا",
    flag: "🇨🇦",
    center: [-96.8, 56.1],
    bbox: [-140.0, 42.0, -53.0, 70.0],
    zoom: 3.5,
  },
  {
    iso3: "JPN",
    name: "Japan",
    nameFa: "ژاپن",
    flag: "🇯🇵",
    center: [137.156, 37.22],
    bbox: [129.408, 31.03, 145.543, 45.551],
    zoom: 5.2,
  },
  {
    iso3: "ARE",
    name: "United Arab Emirates",
    nameFa: "امارات",
    flag: "🇦🇪",
    center: [54.243, 24.195],
    bbox: [51.58, 22.497, 56.397, 26.055],
    zoom: 6.8,
  },
  {
    iso3: "FRA",
    name: "France",
    nameFa: "فرانسه",
    flag: "🇫🇷",
    center: [2.21, 46.22],
    bbox: [-4.8, 41.3, 9.6, 51.1],
    zoom: 5.2,
  },
  {
    iso3: "NLD",
    name: "Netherlands",
    nameFa: "هلند",
    flag: "🇳🇱",
    center: [5.49, 52.103],
    bbox: [3.315, 50.804, 7.092, 53.51],
    zoom: 6.8,
  },
  {
    iso3: "AUS",
    name: "Australia",
    nameFa: "استرالیا",
    flag: "🇦🇺",
    center: [134.195, -25.085],
    bbox: [113.339, -43.635, 153.569, -10.668],
    zoom: 3.8,
  },
  {
    iso3: "CHE",
    name: "Switzerland",
    nameFa: "سوئیس",
    flag: "🇨🇭",
    center: [8.307, 46.797],
    bbox: [6.023, 45.777, 10.443, 47.831],
    zoom: 7,
  },
  {
    iso3: "SWE",
    name: "Sweden",
    nameFa: "سوئد",
    flag: "🇸🇪",
    center: [16.563, 62.739],
    bbox: [11.027, 55.362, 23.903, 69.106],
    zoom: 4.5,
  },
];

const COUNTRY_FLAGS: Record<string, string> = {
  IRN: "🇮🇷",
  Iran: "🇮🇷",
  USA: "🇺🇸",
  "United States of America": "🇺🇸",
  DEU: "🇩🇪",
  Germany: "🇩🇪",
  GBR: "🇬🇧",
  "United Kingdom": "🇬🇧",
  CAN: "🇨🇦",
  Canada: "🇨🇦",
  JPN: "🇯🇵",
  Japan: "🇯🇵",
  ARE: "🇦🇪",
  "United Arab Emirates": "🇦🇪",
  FRA: "🇫🇷",
  France: "🇫🇷",
  NLD: "🇳🇱",
  Netherlands: "🇳🇱",
  AUS: "🇦🇺",
  Australia: "🇦🇺",
  CHE: "🇨🇭",
  Switzerland: "🇨🇭",
  SWE: "🇸🇪",
  Sweden: "🇸🇪",
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
  allJobs?: Project[];
  selectedJobId?: string | null;
  onSelectJob?: (job: Project) => void;
  selectedCountry?: string | null;
  onSelectCountry?: (country: any | null) => void;
}

export default function JobMap({
  jobs,
  allJobs,
  selectedJobId,
  onSelectJob,
  selectedCountry,
  onSelectCountry,
}: JobMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const overlayRef = useRef<MapboxOverlay | null>(null);

  const [geoData, setGeoData] = useState<any>(null);
  const [hoveredCountry, setHoveredCountry] = useState<any | null>(null);
  const [hoveredJob, setHoveredJob] = useState<Project | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

  const fullJobList = allJobs && allJobs.length > 0 ? allJobs : jobs;

  // Load local simplified world GeoJSON once on client mount
  useEffect(() => {
    let isMounted = true;
    fetch("/data/world-countries.json")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setGeoData(data);
      })
      .catch((err) => console.error("Could not load world countries GeoJSON:", err));
    return () => {
      isMounted = false;
    };
  }, []);

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

  // Aggregate job counts by country for styling and tooltips
  const countryJobCounts = useMemo(() => {
    const map = new Map<string, number>();
    for (const job of fullJobList) {
      const c1 = job.countryEn?.toLowerCase();
      const c2 = job.country?.toLowerCase();
      const c3 = job.countryCode?.toLowerCase();
      if (c1) map.set(c1, (map.get(c1) || 0) + 1);
      if (c2) map.set(c2, (map.get(c2) || 0) + 1);
      if (c3) map.set(c3, (map.get(c3) || 0) + 1);
    }
    return map;
  }, [fullJobList]);

  // Helper to count jobs for a GeoJSON feature
  const getJobCount = useCallback(
    (props: any): number => {
      if (!props) return 0;
      const count1 = countryJobCounts.get(props.name?.toLowerCase()) || 0;
      const count2 = countryJobCounts.get(props.nameFa?.toLowerCase()) || 0;
      const count3 = countryJobCounts.get(props.iso3?.toLowerCase()) || 0;
      return Math.max(count1, count2, count3);
    },
    [countryJobCounts]
  );

  // Check if a country matches selectedCountry
  const isSelectedCountry = useCallback(
    (props: any): boolean => {
      if (!selectedCountry || !props) return false;
      const target = selectedCountry.toLowerCase();
      return (
        props.name?.toLowerCase() === target ||
        props.nameFa?.toLowerCase() === target ||
        props.iso3?.toLowerCase() === target
      );
    },
    [selectedCountry]
  );

  // Check if a country matches hoveredCountry
  const isHoveredCountry = useCallback(
    (props: any): boolean => {
      if (!hoveredCountry || !props) return false;
      return (
        props.name === hoveredCountry.name ||
        (props.iso3 && props.iso3 === hoveredCountry.iso3)
      );
    },
    [hoveredCountry]
  );

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

  // Focus on clicked country
  const handleCountryClick = useCallback(
    (props: any) => {
      onSelectCountry?.(props);

      if (mapRef.current) {
        // Strict top-down view (pitch: 0, bearing: 0)
        if (props.bbox && Array.isArray(props.bbox) && props.bbox.length === 4) {
          const [minX, minY, maxX, maxY] = props.bbox;
          mapRef.current.fitBounds(
            [
              [minX, minY],
              [maxX, maxY],
            ],
            {
              padding: { top: 60, bottom: 60, left: 60, right: 60 },
              maxZoom: 6,
              pitch: 0,
              bearing: 0,
              duration: 1200,
              essential: true,
            }
          );
        } else if (props.center && Array.isArray(props.center)) {
          mapRef.current.flyTo({
            center: props.center as [number, number],
            zoom: 4.5,
            pitch: 0,
            bearing: 0,
            duration: 1200,
            essential: true,
          });
        }
      }
    },
    [onSelectCountry]
  );

  // Build deck.gl layers
  const buildLayers = useCallback(() => {
    const layers: any[] = [];

    // 1. World Countries GeoJSON Layer (Interactive hover highlight & country click)
    if (geoData) {
      layers.push(
        new GeoJsonLayer({
          id: "world-countries-layer",
          data: geoData,
          pickable: true,
          stroked: true,
          filled: true,
          lineWidthMinPixels: 1,
          getLineWidth: (f: any) => {
            if (isSelectedCountry(f.properties)) return 2.8;
            if (isHoveredCountry(f.properties)) return 2.2;
            const count = getJobCount(f.properties);
            return count > 0 ? 1.2 : 0.8;
          },
          getLineColor: (f: any) => {
            if (isSelectedCountry(f.properties)) return [96, 165, 250, 255]; // Bright blue border
            if (isHoveredCountry(f.properties)) return [255, 255, 255, 240]; // Luminous white hover border
            const count = getJobCount(f.properties);
            if (count > 0) return [94, 234, 212, 140]; // Teal border for active tech countries
            return [51, 65, 85, 90]; // Muted dark slate border
          },
          getFillColor: (f: any) => {
            if (isSelectedCountry(f.properties)) return [37, 99, 235, 175]; // Highlight selected country
            if (isHoveredCountry(f.properties)) return [14, 165, 233, 145]; // Luminous cyan hover color change!
            const count = getJobCount(f.properties);
            if (count > 0) return [30, 58, 138, 75]; // Deep navy glow for countries with jobs
            return [15, 23, 42, 50]; // Base subtle dark fill
          },
          updateTriggers: {
            getLineWidth: [selectedCountry, hoveredCountry?.name],
            getLineColor: [selectedCountry, hoveredCountry?.name, fullJobList.length],
            getFillColor: [selectedCountry, hoveredCountry?.name, fullJobList.length],
          },
          onHover: (info: any) => {
            if (info.object && info.object.properties) {
              setHoveredCountry(info.object.properties);
              setHoveredJob(null);
              setTooltipPos({ x: info.x, y: info.y });
            } else {
              setHoveredCountry(null);
              setTooltipPos(null);
            }
          },
          onClick: (info: any) => {
            if (info.object && info.object.properties) {
              handleCountryClick(info.object.properties);
            }
          },
        })
      );
    }

    // 2. Outer Pulse Rings for Job Pins
    layers.push(
      new ScatterplotLayer<Project>({
        id: "job-pulse-rings",
        data: geoJobs,
        getPosition: (d) => d.coordinates as [number, number],
        getRadius: (d) => (d._id === selectedJobId ? 50000 : 26000),
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
        radiusMinPixels: 12,
        radiusMaxPixels: 45,
        updateTriggers: {
          getRadius: [selectedJobId],
          getFillColor: [selectedJobId],
          getLineColor: [selectedJobId],
        },
      })
    );

    // 3. Core Interactive Job Markers
    layers.push(
      new ScatterplotLayer<Project>({
        id: "job-core-markers",
        data: geoJobs,
        pickable: true,
        getPosition: (d) => d.coordinates as [number, number],
        getRadius: (d) => (d._id === selectedJobId ? 20000 : 12000),
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
        onHover: (info: any) => {
          if (info.object) {
            setHoveredJob(info.object as Project);
            setHoveredCountry(null);
            setTooltipPos({ x: info.x, y: info.y });
          } else {
            setHoveredJob(null);
          }
        },
        onClick: (info: any) => {
          if (info.object && onSelectJob) {
            onSelectJob(info.object as Project);
            if (mapRef.current && info.object.coordinates) {
              mapRef.current.flyTo({
                center: info.object.coordinates as [number, number],
                zoom: 9.5,
                pitch: 0,
                bearing: 0,
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
      })
    );

    // 4. City Names and Job Counts Badge Layer
    if (cityClusters.length > 0) {
      layers.push(
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
        })
      );
    }

    return layers;
  }, [
    geoData,
    geoJobs,
    cityClusters,
    selectedJobId,
    onSelectJob,
    selectedCountry,
    hoveredCountry,
    fullJobList.length,
    isSelectedCountry,
    isHoveredCountry,
    getJobCount,
    handleCountryClick,
  ]);

  // Initialize MapLibre GL and Deck.gl MapboxOverlay
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Strict Top-Down Planar 2D View: pitch: 0, bearing: 0, maxPitch: 0
    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: DARK_MAP_STYLE,
      center: WORLD_CENTER,
      zoom: WORLD_ZOOM,
      pitch: 0,
      bearing: 0,
      maxPitch: 0,
      minPitch: 0,
      dragRotate: false,
      touchPitch: false,
      pitchWithRotate: false,
      maxZoom: 16,
      minZoom: 1.2,
      attributionControl: false,
    });

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
        pitch: 0,
        bearing: 0,
        duration: 1000,
        essential: true,
      });
    }
  }, [selectedJobId, geoJobs]);

  // Reset view back to global world perspective
  const handleResetToWorld = () => {
    onSelectCountry?.(null);
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: WORLD_CENTER,
        zoom: WORLD_ZOOM,
        pitch: 0,
        bearing: 0,
        duration: 1200,
        essential: true,
      });
    }
  };

  // Select a country via top chip bar
  const handleCountryChipSelect = (countryMeta: CountryMeta) => {
    if (countryMeta.iso3 === "WORLD") {
      handleResetToWorld();
      return;
    }

    const payload = {
      name: countryMeta.name,
      nameFa: countryMeta.nameFa,
      iso3: countryMeta.iso3,
      bbox: countryMeta.bbox,
      center: countryMeta.center,
    };
    handleCountryClick(payload);
  };

  const handleZoomIn = () => {
    mapRef.current?.zoomIn({ duration: 300 });
  };

  const handleZoomOut = () => {
    mapRef.current?.zoomOut({ duration: 300 });
  };

  const hoveredCountryJobCount = hoveredCountry ? getJobCount(hoveredCountry) : 0;
  const hoveredCountryFlag =
    hoveredCountry &&
    (COUNTRY_FLAGS[hoveredCountry.iso3] || COUNTRY_FLAGS[hoveredCountry.name] || "🌐");

  return (
    <div className="relative w-full h-full min-h-[350px] overflow-hidden bg-slate-950 select-none">
      
      {/* Map Canvas */}
      <div ref={mapContainerRef} className="w-full h-full" />

      {/* Header Overlay: Country Filter Chips & Global Live Indicator */}
      <div className="absolute top-3 inset-x-3 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pointer-events-none">
        
        {/* Title & Live Counter */}
        <div className="pointer-events-auto bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-700/70 flex items-center gap-2 text-white shadow-xl">
          <HiGlobeAmericas className="w-4 h-4 text-primary-400 animate-spin-slow" />
          <span className="text-xs sm:text-sm font-extrabold">
            نقشه جهانی موقعیت‌های شغلی
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-bold px-2 py-0.5 rounded-full">
            {jobs.length.toLocaleString("fa-IR")} آگهی
          </span>
          {selectedCountry && (
            <button
              onClick={handleResetToWorld}
              title="پاک کردن فیلتر کشور"
              className="mr-1 text-slate-400 hover:text-white bg-slate-800/80 p-0.5 rounded"
            >
              <HiXMark className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Quick Country Filter Pills */}
        <div className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 scrollbar-none bg-slate-950/85 backdrop-blur-md p-1 rounded-xl border border-slate-800 shadow-xl">
          {TOP_COUNTRIES.map((country) => {
            const isWorld = country.iso3 === "WORLD";
            const isActive = isWorld
              ? !selectedCountry
              : selectedCountry === country.nameFa ||
                selectedCountry === country.name ||
                selectedCountry === country.iso3;

            return (
              <button
                key={country.iso3}
                onClick={() => handleCountryChipSelect(country)}
                className={`text-xs px-2.5 py-1 rounded-lg font-bold transition-all whitespace-nowrap flex items-center gap-1 ${
                  isActive
                    ? "bg-primary-600 text-white shadow-md shadow-primary-600/40 scale-105"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                }`}
              >
                <span>{country.flag}</span>
                <span>{country.nameFa}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating Interactive Country Hover Tooltip */}
      {hoveredCountry && tooltipPos && (
        <div
          style={{
            left: `${Math.min(tooltipPos.x + 15, (mapContainerRef.current?.clientWidth || 500) - 260)}px`,
            top: `${Math.max(tooltipPos.y - 95, 20)}px`,
          }}
          className="absolute z-20 pointer-events-none w-64 bg-slate-900/95 backdrop-blur-md border border-cyan-500/40 p-3 rounded-xl shadow-2xl text-white animate-fade-in-up"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xl">{hoveredCountryFlag}</span>
              <div>
                <h4 className="text-xs font-black text-white leading-tight">
                  {hoveredCountry.nameFa || hoveredCountry.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-medium">
                  {hoveredCountry.name}
                </p>
              </div>
            </div>
            <span
              className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                hoveredCountryJobCount > 0
                  ? "bg-emerald-950 text-emerald-300 border border-emerald-800"
                  : "bg-slate-800 text-slate-400"
              }`}
            >
              {hoveredCountryJobCount > 0
                ? `${hoveredCountryJobCount.toLocaleString("fa-IR")} موقعیت`
                : "بدون آگهی"}
            </span>
          </div>

          <div className="text-[10px] text-cyan-400 font-bold flex items-center justify-center gap-1 pt-1">
            <HiSparkles className="w-3 h-3 text-cyan-400" />
            <span>کلیک برای زوم روی کشور و فیلتر آگهی‌ها</span>
          </div>
        </div>
      )}

      {/* Floating Interactive Job Tooltip */}
      {hoveredJob && tooltipPos && (
        <div
          style={{
            left: `${Math.min(tooltipPos.x + 15, (mapContainerRef.current?.clientWidth || 500) - 270)}px`,
            top: `${Math.max(tooltipPos.y - 120, 20)}px`,
          }}
          className="absolute z-20 pointer-events-none w-68 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 p-3 rounded-xl shadow-2xl text-white animate-fade-in-up"
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
              {hoveredJob.city || hoveredJob.country}
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
          onClick={handleResetToWorld}
          title="نمای کل جهان (ریست)"
          className="w-9 h-9 bg-primary-900/90 hover:bg-primary-800 text-primary-200 hover:text-white rounded-xl border border-primary-700/80 flex items-center justify-center shadow-lg transition-transform active:scale-95"
        >
          <HiGlobeAmericas className="w-5 h-5" />
        </button>
      </div>

      {/* Legend Badge (Bottom Left) */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] text-slate-300 shadow-lg">
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
