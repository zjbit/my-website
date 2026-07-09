export interface AnalyticsSummary {
  today_minutes: number;
  week_minutes: number;
  month_minutes: number;
  streak_days: number;
  total_tasks: number;
  achievements: string[];
}

export interface CalendarDay {
  date: string;
  minutes: number;
  completed: boolean;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  unlocked_at: string | null;
}
