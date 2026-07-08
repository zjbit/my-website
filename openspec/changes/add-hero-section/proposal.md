# Change Proposal: add-hero-section

## 基本信息

| 字段 | 内容 |
|------|------|
| 变更 ID | add-hero-section |
| 提出时间 | 2026-07-08 |
| 状态 | completed |

---

## 概述

为个人品牌站添加 Hero Section，作为用户访问时的首屏入口。

---

## 上下文

- **项目**：个人品牌站（Personal Website）
- **技术栈**：React 19 + Vite 7 + TypeScript + Tailwind CSS v4
- **部署**：GitHub Pages，base path 为 /my-website/

---

## 动机

1. 提供清晰的品牌展示和身份介绍
2. 为用户提供明确的行动引导（CTA 跳转项目）
3. 建立科技感的第一印象

---

## 范围

### In Scope

- 全屏高度的 Hero 区域，居中展示姓名、职业、一句话介绍
- CSS 渐变背景（静态，无动画）
- Canvas 粒子叠加层（静态粒子，非动画）
- 支持亮/暗模式自动切换

### Out of Scope（严禁开发）

- ❌ 任何动画效果（粒子动画、渐变动画、悬停动画）
- ❌ 导航栏
- ❌ 后端 API
- ❌ 项目展示区（CTA 跳转目标待后续实现）

---

## 对现有功能的影响

**无影响**。Hero Section 为全新功能，不修改现有组件或样式。

---

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| Canvas 粒子影响性能 | 粒子数量限制在 50 个以内，不使用 requestAnimationFrame |
| 首屏加载超时 | 渐变背景优先渲染，粒子在 useEffect 中延迟初始化 |

---

## 验收标准

### Spec 1: Hero 布局

**Given** 用户访问网站首页
**When** 页面加载完成
**Then** Hero 区域占据整个视口高度，内容垂直水平居中显示

**边界/异常场景**：
- 窗口高度变化时，Hero 高度自动适配（无滚动条）
- 窗口宽度 < 320px 时，字体缩小但布局不破坏

---

### Spec 2: 渐变背景

**Given** 用户在亮色模式
**When** Hero 渲染
**Then** 背景为深蓝到紫色渐变（`from-slate-900 to-purple-900`）

**Given** 用户在暗色模式
**When** Hero 渲染
**Then** 背景为更深的渐变（`from-slate-950 to-purple-950`）

**边界/异常场景**：
- `prefers-reduced-motion` 用户看到纯色背景（无粒子）
- CSS 变量未加载时使用 fallback 颜色

---

### Spec 3: Canvas 粒子

**Given** 用户未启用 `prefers-reduced-motion`
**When** Hero 渲染
**Then** Canvas 在渐变上方叠加 30-50 个静态白色小圆点

**Given** 用户启用了 `prefers-reduced-motion`
**When** Hero 渲染
**Then** Canvas 不渲染，背景保持纯渐变

**边界/异常场景**：
- Canvas 不支持时（极少情况），背景渐变正常显示
- 移动端粒子数量减少至 20 个

---

### Spec 4: CTA 按钮

**Given** 用户查看 Hero 区域
**When** 页面加载完成
**Then** CTA 按钮显示文字"查看项目"，点击跳转 `#projects`

**边界/异常场景**：
- `#projects` 锚点不存在时，按钮点击后页面不滚动（无报错）
- 按钮需有 `:focus-visible` 样式（键盘导航可访问）

---

### Spec 5: 暗色模式切换

**Given** 用户操作系统设置为暗色模式
**When** Hero 渲染
**Then** 背景、粒子颜色自动切换为暗色适配版本

**Given** 用户手动切换主题（如果主题切换功能存在）
**When** 主题切换
**Then** Hero 背景同步切换

**边界/异常场景**：
- 初始主题由系统 `prefers-color-scheme` 决定

---

## 依赖

无第三方依赖。使用原生 Canvas API。

---

## 预估工时

- Phase 1: Hero 布局 + 渐变背景（15 分钟）
- Phase 2: Canvas 粒子叠加（15 分钟）
- Phase 3: CTA 按钮 + 暗色模式适配（15 分钟）

**总计**：45 分钟，分为 3 个 Phase
