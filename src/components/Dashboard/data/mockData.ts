export interface DailyStats {
  date: string;
  studyMinutes: number;
}

export interface Goal {
  id: string;
  title: string;
  completed: boolean;
}

export interface AIRecommendation {
  id: string;
  title: string;
  reason: string;
}

export const initialGoals: Goal[] = [
  { id: '1', title: '完成 React 组件学习', completed: false },
  { id: '2', title: '刷题 5 道', completed: false },
  { id: '3', title: '复习数据库索引', completed: false },
];

export const weeklyData: DailyStats[] = [
  { date: '周一', studyMinutes: 45 },
  { date: '周二', studyMinutes: 60 },
  { date: '周三', studyMinutes: 30 },
  { date: '周四', studyMinutes: 90 },
  { date: '周五', studyMinutes: 60 },
  { date: '周六', studyMinutes: 0 },
  { date: '周日', studyMinutes: 0 },
];

export const monthlyData: DailyStats[] = weeklyData.concat([
  { date: '下周一', studyMinutes: 45 },
  { date: '下周二', studyMinutes: 60 },
  { date: '下周三', studyMinutes: 75 },
  { date: '下周四', studyMinutes: 30 },
  { date: '下周五', studyMinutes: 90 },
  { date: '下周六', studyMinutes: 60 },
  { date: '下周日', studyMinutes: 45 },
]);

export const aiRecommendations: AIRecommendation[] = [
  { id: '1', title: '建议加强算法练习', reason: '根据学习数据分析，您的薄弱环节在算法' },
  { id: '2', title: '保持连续学习', reason: '您已连续学习 7 天，再坚持 3 天可获得成就徽章' },
];

export const statsCards = [
  { label: '今日学习', value: '45分钟', icon: '📅' },
  { label: '本周学习', value: '4.5小时', icon: '📆' },
  { label: '连续天数', value: '7天', icon: '🔥' },
  { label: '完成任务', value: '12个', icon: '✅' },
];
