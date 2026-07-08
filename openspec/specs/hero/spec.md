# Hero Spec

## 概述

首屏入口区域，全屏高度，展示个人信息。

---

## 组件

### Hero

主 Hero 组件，包含内容区域和粒子背景。

#### Props

| Prop | 类型 | 必填 | 说明 |
|------|------|------|------|
| `name` | `string` | 是 | 姓名 |
| `title` | `string` | 是 | 职业 |
| `intro` | `string` | 是 | 一句话介绍 |

#### 子组件

- `HeroParticles`：Canvas 粒子背景

#### 样式

- 全屏高度：`min-h-screen`
- 顶部留空：`pt-16`（为固定导航栏留空间）
- 背景：`bg-gradient-to-br from-slate-900 to-purple-900 dark:from-slate-950 dark:to-purple-950`

#### 内容布局

- 垂直水平居中
- 响应式字体（`text-5xl md:text-6xl`）

#### CTA 按钮

- 文字："查看项目"
- 链接：`#projects`
- 样式：`bg-purple-600 hover:bg-purple-700`

---

### HeroParticles

Canvas 粒子背景层。

#### 行为

- 桌面端：40 个粒子
- 移动端（< 768px）：20 个粒子
- `prefers-reduced-motion`：不渲染

#### 粒子样式

- 白色小圆点
- 随机位置、大小（1-3px）、透明度（0.3-0.8）
- 静态（无动画）

---

## 实现文件

- `src/components/Hero/Hero.tsx`
- `src/components/Hero/HeroParticles.tsx`
- `src/components/Hero/index.ts`
