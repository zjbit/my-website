import { statsCards } from '../data/mockData';

interface DashboardNavProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
}

const menuItems = [
  { id: 'analytics', label: '学习数据', icon: '📊' },
  { id: 'chat', label: 'AI 对话建议', icon: '🤖' },
  { id: 'goals', label: '学习目标', icon: '🎯' },
];

function DashboardNav({ activeMenu, onMenuChange }: DashboardNavProps) {
  return (
    <nav className="w-64 bg-slate-900 text-white min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold">StudyPal</h1>
        <p className="text-slate-400 text-sm">学习助手</p>
      </div>

      <ul className="flex-1">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onMenuChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                activeMenu === item.id
                  ? 'bg-purple-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="text-slate-500 text-sm">
        <p>v1.0.0</p>
      </div>
    </nav>
  );
}

export { DashboardNav, statsCards };
