import type { AnalyticsSummary } from './types';

interface StatsOverviewProps {
  stats: AnalyticsSummary;
}

function StatsOverview({ stats }: StatsOverviewProps) {
  const statCards = [
    { label: '今日学习', value: `${stats.today_minutes}分钟`, icon: '📅' },
    { label: '本周学习', value: `${stats.week_minutes}分钟`, icon: '📆' },
    { label: '本月学习', value: `${stats.month_minutes}分钟`, icon: '🗓️' },
    { label: '连续天数', value: `${stats.streak_days}天`, icon: '🔥' },
    { label: '完成任务', value: `${stats.total_tasks}个`, icon: '✅' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
      {statCards.map((card) => (
        <div key={card.label} className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow">
          <div className="text-2xl mb-1">{card.icon}</div>
          <p className="text-slate-500 text-sm">{card.label}</p>
          <p className="text-xl font-bold text-slate-900 dark:text-white">{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsOverview;
