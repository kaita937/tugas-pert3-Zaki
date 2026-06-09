import { useState } from 'react';

export default function WelcomeModal({ onSave }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSave(name.trim());
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/80 backdrop-blur-sm">
      <div className="bg-surface-container-lowest p-8 rounded-2xl brutalist-border brutalist-shadow max-w-md w-full mx-4 transform transition-all">
        <h2 className="text-headline-md font-headline-md mb-2 text-primary">Halo! 👋</h2>
        <p className="font-body-md text-on-surface-variant mb-6">Sebelum mulai fokus, siapa nama Anda?</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ketik nama Anda..." 
            className="w-full bg-surface py-3 px-4 rounded-xl brutalist-border focus:outline-none focus:border-primary focus:ring-0 font-body-md shadow-[inset_2px_2px_0px_rgba(30,27,27,0.1)]"
            autoFocus
          />
          <button 
            type="submit" 
            className="w-full bg-primary text-on-primary py-3 rounded-xl brutalist-border brutalist-shadow font-label-bold text-label-bold uppercase brutalist-hover brutalist-active transition-all"
          >
            Mulai Dashboard
          </button>
        </form>
      </div>
    </div>
  );
}
