function SideBar({ children }) {
  return (
    <div className="bg-secondery-0 row-start-1 row-span-2 h-screen border-l border-secondery-200">
      <div className="p-5 border-b border-secondery-200">
        <p className="text-xs font-bold text-secondery-400 uppercase tracking-wide">
          منو
        </p>
      </div>
      <ul className="flex flex-col gap-y-1 p-4">{children}</ul>
    </div>
  );
}

export default SideBar;
