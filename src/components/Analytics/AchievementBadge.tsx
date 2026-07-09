import type { Achievement } from './types';

interface AchievementBadgeProps {
  achievements: Achievement[];
}

function AchievementBadge({ achievements }: AchievementBadgeProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        成就徽章
      </h3>
      <div className="flex flex-wrap gap-3">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className={`px-4 py-2 rounded-full border-2 ${
              ach.unlocked
                ? 'bg-purple-100 dark:bg-purple-900 border-purple-500 text-purple-700 dark:text-purple-200'
                : 'bg-slate-100 dark:bg-slate-700 border-slate-300 text-slate-400'
            }`}
            title={ach.description}
          >
            <span className="mr-1">{ach.unlocked ? '🏆' : '🔒'}</span>
            {ach.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementBadge;
