# Change Proposal: add-navigation

## 基本信息

| 字段 | 内容 |
|------|------|
| 变更 ID | add-navigation |
| 提出时间 | 2026-07-08 |
| 状态 | completed |
| 依赖 | add-hero-section (completed) |

---

## 概述

为个人品牌站添加顶部导航栏，提供页面内导航和品牌展示。

---

## 上下文

- **项目**：个人品牌站（Personal Website）
- **技术栈**：React 19 + Vite 7 + TypeScript + Tailwind CSS v4
- **部署**：GitHub Pages，base path 为 /my-website/

---

## 动机

1. 提供清晰的页面内导航路径
2. 提升品牌识别度（左侧 Logo/名字）
3. 改善用户体验，支持平滑滚动定位

---

## 范围

### In Scope

- 固定在页面顶部的导航栏
- 左侧：个人 Logo 或名字（"郑江"）
- 右侧：导航链接（首页、项目、联系我）
- 点击链接平滑滚动到对应 section
- 滚动时背景模糊效果（backdrop-blur）
- 支持亮/暗模式适配

### Out of Scope（严禁开发）

- ❌ 搜索功能
- ❌ 多级下拉菜单
- ❌ 用户登录和注册

---

## 对现有功能的影响

- Hero Section 已存在（`#hero`），首页锚点链接到该区域
- 需要在页面其他区域添加 `#projects` 和 `#contact` section 占位
- 导航栏 z-index 需要高于 Hero 内容

---

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| 固定定位遮挡内容 | Hero 区域添加顶部 padding 留出导航栏空间 |
| 移动端导航拥挤 | 使用 Tailwind 响应式类，小屏幕横向滚动或收起 |

---

## 验收标准

### Spec 1: 导航栏布局

**Given** 用户访问网站首页
**When** 页面加载完成
**Then** 导航栏固定在页面顶部，高度 64px，左侧显示"郑江"，右侧显示导航链接

**边界/异常场景**：
- 窗口宽度 < 640px 时，导航链接字号缩小或换行
- 导航栏始终可见，滚动时位置不变

---

### Spec 2: 导航链接

**Given** 用户查看导航栏
**When** 点击"首页"
**Then** 页面平滑滚动到 `#hero` 区域

**Given** 用户查看导航栏
**When** 点击"项目"
**Then** 页面平滑滚动到 `#projects` 区域（该区域尚未实现，页面不滚动无报错）

**Given** 用户查看导航栏
**When** 点击"联系我"
**Then** 页面平滑滚动到 `#contact` 区域（该区域尚未实现，页面不滚动无报错）

**边界/异常场景**：
- 链接点击后添加 `aria-current="page"` 状态指示
- 键盘用户可以使用 Tab 聚焦导航链接，Enter 触发跳转

---

### Spec 3: 滚动模糊效果

**Given** 用户未滚动页面
**When** 导航栏初始渲染
**Then** 导航栏背景为透明

**Given** 用户开始滚动页面
**When** 滚动距离 > 0
**Then** 导航栏背景变为 `bg-white/80 dark:bg-slate-900/80` 配合 `backdrop-blur-md`

**边界/异常场景**：
- `prefers-reduced-motion` 用户禁用滚动动画效果，立即显示背景
- 滚动回顶部时，背景恢复透明

---

### Spec 4: 暗色模式适配

**Given** 用户操作系统为暗色模式
**When** 导航栏渲染
**Then** 文字颜色为 `text-white`，背景模糊效果在暗色下正常显示

**Given** 用户操作系统为亮色模式
**When** 导航栏渲染
**Then** 文字颜色为 `text-slate-900`，背景模糊效果在亮色下正常显示

---

### Spec 5: 平滑滚动

**Given** 用户点击导航链接
**When** 滚动行为触发
**Then** 使用 CSS `scroll-behavior: smooth` 实现平滑滚动

**Given** 用户启用了 `prefers-reduced-motion`
**When** 点击导航链接
**Then** 立即跳转到目标位置，不使用平滑动画

---

## 依赖

无第三方依赖。使用原生 CSS `scroll-behavior` 和 `backdrop-filter`。

---

## 预估工时

- Phase 1: 导航栏基础布局 + 固定定位（15 分钟）
- Phase 2: 导航链接 + 平滑滚动（15 分钟）
- Phase 3: 滚动模糊效果 + 暗色模式（15 分钟）

**总计**：45 分钟，分为 3 个 Phase
