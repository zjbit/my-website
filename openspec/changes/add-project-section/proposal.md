# Change Proposal: add-project-section

## 基本信息

| 字段 | 内容 |
|------|------|
| 变更 ID | add-project-section |
| 提出时间 | 2026-07-08 |
| 状态 | completed |
| 依赖 | add-hero-section (completed), add-navigation (completed) |

---

## 概述

为个人品牌站添加项目展示区，以卡片形式展示个人项目。

---

## 上下文

- **项目**：个人品牌站（Personal Website）
- **技术栈**：React 19 + Vite 7 + TypeScript + Tailwind CSS v4
- **部署**：GitHub Pages，base path 为 /my-website/

---

## 动机

1. 展示个人项目成果
2. 为招聘方/合作伙伴提供项目参考
3. 通过 GitHub 链接引导用户深入了解

---

## 范围

### In Scope

- 项目展示区位于 Hero Section 下方（`#projects` 锚点）
- 卡片式布局，每个卡片包含：
  - 项目截图
  - 项目名称
  - 项目简介
  - GitHub 链接
- 最少展示 4 个项目
- 鼠标悬浮时的微特效（scale 变换）
- Hero Section CTA 按钮锚点更新为 `#projects`

### Out of Scope（严禁开发）

- ❌ 项目详情页
- ❌ 项目搜索功能

---

## 对现有功能的影响

| 影响 | 说明 |
|------|------|
| Hero CTA 按钮 | `href` 从 `#projects` 保持不变（已正确指向），无需修改 |
| 导航栏链接 | "项目" 链接已指向 `#projects`，无需修改 |

---

## 风险与缓解

| 风险 | 缓解措施 |
|------|----------|
| 图片加载影响性能 | 所有图片使用 lazy loading |
| 移动端卡片拥挤 | 使用 CSS Grid 响应式布局 |
| 项目内容缺失 | **需要用户提供实际项目内容** |

---

## 验收标准

### Spec 1: 项目展示区布局

**Given** 用户访问网站首页
**When** 页面加载完成
**Then** 项目展示区显示在 Hero 下方，`id="projects"`

**边界/异常场景**：
- 窗口宽度 < 768px 时，卡片单列显示
- 窗口宽度 >= 768px 时，卡片 2 列显示
- 窗口宽度 >= 1024px 时，卡片 4 列显示

---

### Spec 2: 项目卡片内容

**Given** 用户查看项目展示区
**When** 卡片渲染
**Then** 每个卡片包含：截图、名称、简介、GitHub 链接

**Given** 用户点击卡片的 GitHub 链接
**When** 点击
**Then** 在新标签页打开 GitHub 仓库

**边界/异常场景**：
- 图片加载失败时显示占位背景
- GitHub 链接可选（项目可以没有 GitHub）

---

### Spec 3: 悬浮微特效

**Given** 用户将鼠标移动到项目卡片上
**When** 悬浮
**Then** 卡片有微特效：`scale-105` + `shadow-lg`

**Given** 用户将鼠标移出项目卡片
**When** 离开
**Then** 卡片恢复原状

**边界/异常场景**：
- `prefers-reduced-motion` 用户禁用悬浮动画
- 触摸设备无悬浮效果（基于 hover）

---

### Spec 4: 图片懒加载

**Given** 用户查看项目卡片
**When** 图片进入视口
**Then** 图片才开始加载

**Given** 图片加载中
**When** 加载完成
**Then** 图片淡入显示

**边界/异常场景**：
- 图片加载失败显示占位符

---

### Spec 5: Hero CTA 锚点验证

**Given** 用户查看 Hero 区域
**When** 页面渲染
**Then** CTA 按钮 href 为 `#projects`

**边界/异常场景**：
- `#projects` 存在时，点击按钮平滑滚动到项目区
- `#projects` 不存在时，页面位置不变（无报错）

---

## 项目内容（待用户提供）

| 项目 | 名称 | 简介 | GitHub |
|------|------|------|--------|
| 1 | - | - | - |
| 2 | - | - | - |
| 3 | - | - | - |
| 4 | - | - | - |

**请提供至少 4 个项目的内容（名称、简介、GitHub 链接），截图可选。**

---

## 依赖

无第三方依赖。

---

## 预估工时

- Phase 1: 项目卡片基础布局（15 分钟）
- Phase 2: 卡片内容 + 响应式布局（15 分钟）
- Phase 3: 悬浮微特效 + 懒加载（15 分钟）

**总计**：45 分钟，分为 3 个 Phase
