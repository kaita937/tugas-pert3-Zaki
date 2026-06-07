import { useState } from 'react';

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const completedCount = tasks.filter(t => t.completed).length;

  const handleAdd = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      isUrgent: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(t => !t.completed));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'done') return t.completed;
    return true;
  });

  return (
    <section className="col-span-1 md:col-span-7 bg-surface-container-lowest rounded-2xl brutalist-border brutalist-shadow p-8 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-secondary-container brutalist-border rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined text-on-secondary-container">task_alt</span>
          </div>
          <h2 className="text-headline-md font-headline-md">Tasks</h2>
        </div>
        <div className="bg-surface-variant px-4 py-2 rounded-full brutalist-border font-label-bold text-label-bold flex items-center gap-2">
          <span>{completedCount}/{tasks.length}</span>
          <span className="text-secondary">✅</span>
        </div>
      </div>

      {/* Add Task Input */}
      <form onSubmit={handleAdd} className="flex gap-2 mb-6">
        <div className="flex-1 relative">
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="What needs to be done?" 
            className="w-full bg-surface py-3 px-4 rounded-xl brutalist-border focus:outline-none focus:border-primary focus:ring-0 font-body-md shadow-[inset_2px_2px_0px_rgba(30,27,27,0.1)]" 
          />
        </div>
        <button type="submit" className="bg-secondary text-on-secondary px-6 rounded-xl brutalist-border brutalist-shadow font-label-bold text-label-bold uppercase brutalist-hover brutalist-active transition-all">
          Add
        </button>
      </form>

      {/* Filters */}
      <div className="flex gap-2 mb-4 border-b-2 border-on-surface pb-2">
        <button 
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded-full text-label-bold font-label-bold brutalist-border text-xs uppercase ${filter === 'all' ? 'bg-on-surface text-surface' : 'bg-surface text-on-surface hover:bg-surface-variant'}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={`px-3 py-1 rounded-full text-label-bold font-label-bold brutalist-border text-xs uppercase ${filter === 'active' ? 'bg-on-surface text-surface' : 'bg-surface text-on-surface hover:bg-surface-variant'}`}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('done')}
          className={`px-3 py-1 rounded-full text-label-bold font-label-bold brutalist-border text-xs uppercase ${filter === 'done' ? 'bg-on-surface text-surface' : 'bg-surface text-on-surface hover:bg-surface-variant'}`}
        >
          Done
        </button>
        <div className="flex-1 text-right">
          <button onClick={clearCompleted} className="text-xs font-label-bold text-primary hover:underline">
            Clear Done
          </button>
        </div>
      </div>

      {/* Task List */}
      <ul className="flex-1 overflow-y-auto space-y-3 pr-2 custom-scrollbar max-h-[350px]">
        {filteredTasks.map(task => (
          <li 
            key={task.id} 
            className={`group flex items-center justify-between p-4 rounded-xl brutalist-border transition-all hover:-translate-y-1 
              ${task.completed ? 'bg-surface opacity-70' : task.isUrgent ? 'bg-error-container brutalist-shadow' : 'bg-surface brutalist-shadow'}`}
          >
            <div className="flex items-center gap-3 flex-1">
              <button 
                onClick={() => toggleTask(task.id)}
                className={`w-6 h-6 rounded border-2 border-on-surface flex items-center justify-center 
                  ${task.completed ? 'bg-secondary text-surface' : 'bg-surface'}`}
              >
                {task.completed && <span className="material-symbols-outlined" style={{fontSize: '16px'}}>check</span>}
              </button>
              <span className={`font-body-md ${task.completed ? 'line-through text-on-surface-variant' : 'text-on-surface font-semibold'}`}>
                {task.text}
              </span>
              {task.isUrgent && !task.completed && (
                <span className="bg-primary text-on-primary text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">
                  Urgent
                </span>
              )}
            </div>
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">edit</span>
              </button>
              <button onClick={() => deleteTask(task.id)} className="text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
