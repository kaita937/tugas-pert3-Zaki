export default function Navigation() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-between items-center w-full px-gutter h-20 max-w-container-max mx-auto bg-surface dark:bg-surface border-b-4 border-on-surface z-50 relative">
        <div className="text-headline-md font-headline-md font-black tracking-tighter text-primary uppercase">life dashboard</div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 bg-surface dark:bg-surface-dim border-t-4 border-on-surface dark:border-on-surface-variant">
        <a className="flex flex-col items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-xl p-2 scale-110 border-2 border-on-surface shadow-[2px_2px_0px_0px_rgba(30,27,27,1)]" href="#">
          <span className="material-symbols-outlined" style={{fontVariationSettings: '"FILL" 1'}}>hourglass_top</span>
          <span className="text-label-bold font-label-bold text-[10px] mt-1">Focus</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-2 hover:bg-surface-variant rounded-xl" href="#">
          <span className="material-symbols-outlined">task_alt</span>
          <span className="text-label-bold font-label-bold text-[10px] mt-1">To-Do</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-surface-variant dark:text-surface-variant p-2 hover:bg-surface-variant rounded-xl" href="#">
          <span className="material-symbols-outlined">grid_view</span>
          <span className="text-label-bold font-label-bold text-[10px] mt-1">Links</span>
        </a>
      </nav>
    </>
  );
}
