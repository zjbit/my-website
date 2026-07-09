import { useState } from 'react';
import { DashboardNav } from './components/DashboardNav';
import GoalList from './components/GoalList';
import { ChatPage } from '../Chat';
import { AnalyticsPage } from '../Analytics';
import { initialGoals } from './data/mockData';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('analytics');

  const renderContent = () => {
    switch (activeMenu) {
      case 'analytics':
        return <AnalyticsPage />;
      case 'chat':
        return <ChatPage />;
      case 'goals':
        return (
          <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              学习目标
            </h1>
            <GoalList initialGoals={initialGoals} />
          </div>
        );
      default:
        return <AnalyticsPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100 dark:bg-slate-900">
      <DashboardNav activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      <main className="flex-1">
        {renderContent()}
      </main>
    </div>
  );
}

export default Dashboard;
