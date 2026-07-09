import type { CalendarDay } from './types';

interface LearningCalendarProps {
  calendar: CalendarDay[];
  year: number;
  month: number;
}

function LearningCalendar({ calendar, year, month }: LearningCalendarProps) {
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  const firstDay = new Date(year, month - 1, 1).getDay();
  const emptyDays = Array(firstDay).fill(null);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow mb-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
        {year}年{month}月学习日历
      </h3>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm text-slate-500 py-2">
            {day}
          </div>
        ))}
        {emptyDays.map((_, idx) => (
          <div key={`empty-${idx}`} className="aspect-square" />
        ))}
        {calendar.map((day) => (
          <div
            key={day.date}
            className={`aspect-square rounded flex items-center justify-center text-sm font-medium ${
              day.completed
                ? 'bg-green-500 text-white'
                : day.minutes > 0
                ? 'bg-green-200 dark:bg-green-800 text-slate-700 dark:text-white'
                : 'bg-slate-100 dark:bg-slate-700 text-slate-400'
            }`}
            title={`${day.date}: ${day.minutes}分钟`}
          >
            {new Date(day.date).getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LearningCalendar;
