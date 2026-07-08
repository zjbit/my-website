# Navigation Spec

## 概述

顶部导航栏，提供页面内导航和品牌展示。

---

## 组件

### Navbar

固定在页面顶部的导航栏。

#### Props

无外部 Props，品牌名称硬编码为"郑江"。

#### 状态

| 状态 | 类型 | 说明 |
|------|------|------|
| `current` | `string` | 当前高亮的锚点（如 `#hero`） |
| `scrolled` | `boolean` | 是否已滚动（用于背景模糊切换） |

#### 行为

- 初始渲染：背景透明，文字白色
- 滚动后：背景变为 `bg-white/80 dark:bg-slate-900/80 backdrop-blur-md`
- 点击链接：平滑滚动到对应锚点
- `prefers-reduced-motion`：禁用滚动动画和背景模糊切换

#### 可访问性

- `aria-current="page"` 标记当前页面
- `focus-visible:ring-2` 支持键盘导航

#### 链接

| 标签 | 锚点 |
|------|------|
| 首页 | `#hero` |
| 项目 | `#projects` |
| 联系我 | `#contact` |

---

## 实现文件

- `src/components/Navbar/Navbar.tsx`
- `src/components/Navbar/index.ts`
