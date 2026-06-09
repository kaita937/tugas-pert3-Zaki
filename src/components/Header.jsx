import { useState, useEffect } from 'react';

export default function Header({ userName }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateClock(); // Initial call
    const interval = setInterval(updateClock, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="col-span-1 md:col-span-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-4 border-on-surface pb-4">
      <div>
        <h1 className="text-headline-lg-mobile md:text-display-xl font-display-xl text-primary">
          {time || '00:00'}
        </h1>
        <p className="text-headline-md font-headline-md text-on-surface mt-2">
          Selamat Malam, <span className="text-secondary">{userName || 'Pengguna'}</span>
        </p>
      </div>
      <div className="mt-4 md:mt-0 flex gap-2">
        <span className="inline-block bg-secondary-container text-on-secondary-container text-label-bold font-label-bold px-4 py-2 rounded-full brutalist-border">
          Deep Work Mode
        </span>
      </div>
    </header>
  );
}
