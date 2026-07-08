# Projects Spec

## 概述

项目展示区，以卡片形式展示个人项目成果。

---

## 组件

### Projects

主容器组件，包含项目卡片网格。

#### Props

无外部 Props，项目数据硬编码。

#### 布局

- `id="projects"` 用于锚点导航
- 响应式 Grid：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- 间距：`gap-6`

#### 样式

- 背景：`bg-slate-50 dark:bg-slate-900`
- 内边距：`py-16 px-4`

---

### ProjectCard

项目卡片，通过 map 渲染。

#### Props

| Prop | 类型 | 说明 |
|------|------|------|
| `name` | `string` | 项目名称 |
| `description` | `string` | 项目简介 |
| `github` | `string` | GitHub 链接 |
| `image` | `string` | 项目截图（可选） |

#### 行为

- 点击在新标签页打开 GitHub
- 悬浮时 `scale-105` + `shadow-xl`
- `prefers-reduced-motion` 时禁用动画

---

### LazyImage

懒加载图片组件。

#### Props

| Prop | 类型 | 说明 |
|------|------|------|
| `src` | `string` | 图片地址（可选） |
| `alt` | `string` | 图片 alt 文字 |
| `className` | `string` | 容器样式类 |

#### 行为

- 使用 `IntersectionObserver` 实现懒加载
- `rootMargin: '100px'` 提前加载
- 加载中显示渐变背景 + 首字母占位
- 加载成功淡入显示
- 加载失败显示占位符

---

## 项目数据

| 项目 | 名称 | 简介 | GitHub |
|------|------|------|--------|
| 1 | Cursor_Test | Cursor_Test | https://github.com/zjbit/Cursor_Test |
| 2 | smartPolicy | smartPolicy | https://github.com/luoy2/smartPolicyNlpValidate |
| 3 | Serving | Serving | https://github.com/zjbit/Serving |
| 4 | STANet | STANet | https://github.com/zjbit/STANet |

---

## 实现文件

- `src/components/Projects/Projects.tsx`
- `src/components/Projects/index.ts`
