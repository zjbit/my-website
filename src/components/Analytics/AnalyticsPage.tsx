import { useState } from 'react';
import StatsOverview from './StatsOverview';
import LearningCalendar from './LearningCalendar';
import AchievementBadge from './AchievementBadge';
import type { AnalyticsSummary, CalendarDay, Achievement } from './types';

const mockSummary: AnalyticsSummary = {
  today_minutes: 45,
  week_minutes: 285,
  month_minutes: 1260,
  streak_days: 7,
  total_tasks: 42,
  achievements: ['first_login', 'week_streak'],
};

const mockCalendar: CalendarDay[] = [
  { date: '2026-07-01', minutes: 90, completed: true },
  { date: '2026-07-02', minutes: 120, completed: true },
  { date: '2026-07-03', minutes: 60, completed: true },
  { date: '2026-07-04', minutes: 0, completed: false },
  { date: '2026-07-05', minutes: 45, completed: true },
  { date: '2026-07-06', minutes: 30, completed: true },
  { date: '2026-07-07', minutes: 0, completed: false },
  { date: '2026-07-08', minutes: 120, completed: true },
  { date: '2026-07-09', minutes: 45, completed: true },
];

const mockAchievements: Achievement[] = [
  { id: 'first_login', name: '初次登录', description: '完成首次登录', unlocked: true, unlocked_at: '2026-07-01' },
  { id: 'week_streak', name: '连续一周', description: '连续学习7天', unlocked: true, unlocked_at: '2026-07-08' },
  { id: 'month_streak', name: '连续一月', description: '连续学习30天', unlocked: false, unlocked_at: null },
];

function AnalyticsPage() {
  const [summary] = useState<AnalyticsSummary>(mockSummary);
  const [calendar] = useState<CalendarDay[]>(mockCalendar);
  const [achievements] = useState<Achievement[]>(mockAchievements);
  const [year] = useState(new Date().getFullYear());
  const [month] = useState(new Date().getMonth() + 1);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
        学习数据分析
      </h1>

      <StatsOverview stats={summary} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LearningCalendar calendar={calendar} year={year} month={month} />
        <AchievementBadge achievements={achievements} />
      </div>
    </div>
  );
}

export default AnalyticsPage;
