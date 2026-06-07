export default function QuickLinks() {
  const links = [
    { name: 'Google', url: 'https://google.com', iconBg: 'bg-on-surface text-surface', defaultIcon: 'G' },
    { name: 'YouTube', url: 'https://youtube.com', iconBg: 'bg-[#FF0000] text-white', iconName: 'play_arrow' },
    { name: 'GitHub', url: 'https://github.com', iconBg: 'bg-[#24292e] text-white', iconName: 'code' },
    { name: 'Twitter', url: 'https://twitter.com', iconBg: 'bg-[#1DA1F2] text-white', iconName: 'tag' },
  ];

  return (
    <section className="col-span-1 md:col-span-12 mt-4">
      <h3 className="text-headline-md font-headline-md mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined">grid_view</span> Quick Links
      </h3>
      <div className="flex flex-wrap gap-4">
        {links.map((link, index) => (
          <a 
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-20 bg-surface-container rounded-xl brutalist-border brutalist-shadow flex flex-col items-center justify-center gap-1 brutalist-hover transition-all group relative overflow-hidden"
          >
            <div className={`w-8 h-8 rounded flex items-center justify-center group-hover:scale-110 transition-transform ${link.iconBg}`}>
              {link.iconName ? (
                <span className="material-symbols-outlined" style={link.iconName === 'play_arrow' ? {fontVariationSettings: '"FILL" 1'} : {}}>
                  {link.iconName}
                </span>
              ) : (
                <img 
                  src={`https://www.google.com/s2/favicons?domain=${link.url}&sz=64`} 
                  alt={link.name} 
                  className="w-6 h-6 object-contain rounded"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              )}
              {/* Fallback if favicon fails, though above logic requires sibling */}
              {!link.iconName && (
                <span className="hidden w-full h-full items-center justify-center">{link.defaultIcon}</span>
              )}
            </div>
            <span className="text-[10px] font-label-bold uppercase">{link.name}</span>
          </a>
        ))}
        
      </div>
    </section>
  );
}
