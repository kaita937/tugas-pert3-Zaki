import { useState, useEffect } from 'react';

export default function FocusTimer() {
  const [totalTime, setTotalTime] = useState(25 * 60);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const changeDuration = (minutes) => {
    setIsRunning(false);
    const newTime = minutes * 60;
    setTotalTime(newTime);
    setTimeLeft(newTime);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(totalTime);
  };

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (timeLeft / totalTime) * circumference;

  return (
    <section className="col-span-1 md:col-span-5 bg-surface-container rounded-2xl brutalist-border brutalist-shadow p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative inner border */}
      <div className="absolute inset-2 border-2 border-on-surface rounded-xl pointer-events-none opacity-20"></div>
      
      <div className="w-full bg-on-surface text-surface py-2 px-4 rounded-lg mb-8 brutalist-border flex justify-between items-center">
        <span className="font-label-bold text-label-bold uppercase">Pomodoro Timer</span>
        <span className="material-symbols-outlined text-secondary-fixed">hourglass_top</span>
      </div>
      
      <div className="relative w-64 h-64 flex items-center justify-center mb-8">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle className="svg-ring-bg" cx="50" cy="50" fill="none" r="45" strokeWidth="8"></circle>
          <circle 
            className="svg-ring-progress" 
            cx="50" 
            cy="50" 
            fill="none" 
            r="45" 
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset} 
            strokeLinecap="round" 
            strokeWidth="8"
          ></circle>
        </svg>
        <div className="absolute flex flex-col items-center">
          <span className="text-display-xl font-display-xl text-on-surface">{minutes}:{seconds}</span>
          <span className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest mt-2">Focus</span>
        </div>
      </div>
      
      <div className="flex gap-4 w-full">
        {!isRunning ? (
          <button 
            onClick={handleStart}
            className="flex-1 bg-primary text-on-primary brutalist-border brutalist-shadow py-3 rounded-xl font-label-bold text-label-bold uppercase brutalist-hover brutalist-active transition-all"
          >
            Start
          </button>
        ) : (
          <button 
            onClick={handlePause}
            className="flex-1 bg-secondary text-on-secondary brutalist-border brutalist-shadow py-3 rounded-xl font-label-bold text-label-bold uppercase brutalist-hover brutalist-active transition-all"
          >
            Pause
          </button>
        )}
        <button 
          onClick={handleReset}
          className="w-14 bg-surface text-on-surface brutalist-border brutalist-shadow rounded-xl flex items-center justify-center brutalist-hover brutalist-active transition-all"
        >
          <span className="material-symbols-outlined">refresh</span>
        </button>
      </div>
      
      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="text-label-bold font-label-bold text-on-surface-variant flex items-center gap-1 mr-2">
          <span className="material-symbols-outlined" style={{fontSize: '16px'}}>timer</span> Durasi
        </span>
        <button onClick={() => changeDuration(15)} className={`px-3 py-1 rounded-full text-xs font-bold border-2 border-on-surface transition-colors ${totalTime === 15*60 ? 'bg-primary text-on-primary brutalist-shadow translate-x-[-2px] translate-y-[-2px]' : 'bg-surface hover:bg-surface-variant'}`}>15m</button>
        <button onClick={() => changeDuration(25)} className={`px-3 py-1 rounded-full text-xs font-bold border-2 border-on-surface transition-colors ${totalTime === 25*60 ? 'bg-primary text-on-primary brutalist-shadow translate-x-[-2px] translate-y-[-2px]' : 'bg-surface hover:bg-surface-variant'}`}>25m</button>
        <button onClick={() => changeDuration(50)} className={`px-3 py-1 rounded-full text-xs font-bold border-2 border-on-surface transition-colors ${totalTime === 50*60 ? 'bg-primary text-on-primary brutalist-shadow translate-x-[-2px] translate-y-[-2px]' : 'bg-surface hover:bg-surface-variant'}`}>50m</button>
      </div>
    </section>
  );
}
