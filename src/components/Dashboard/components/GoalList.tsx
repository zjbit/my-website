import { useState, useEffect } from 'react';
import type { Goal } from '../data/mockData';

interface GoalListProps {
  initialGoals: Goal[];
}

function GoalList({ initialGoals }: GoalListProps) {
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('study-goals');
    return saved ? JSON.parse(saved) : initialGoals;
  });

  useEffect(() => {
    localStorage.setItem('study-goals', JSON.stringify(goals));
  }, [goals]);

  const toggleGoal = (id: string) => {
    setGoals((prev) =>
      prev.map((g) => (g.id === id ? { ...g, completed: !g.completed } : g))
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        今日目标
      </h3>
      <ul className="space-y-3">
        {goals.map((goal) => (
          <li key={goal.id}>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
                className="w-5 h-5 rounded border-slate-300 text-purple-600 focus:ring-purple-500"
              />
              <span
                className={`${
                  goal.completed
                    ? 'text-slate-400 line-through'
                    : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {goal.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalList;
