# Change Proposal: add-seo

## 基本信息

| 字段 | 内容 |
|------|------|
| 变更 ID | add-seo |
| 提出时间 | 2026-07-08 |
| 状态 | completed |
| 依赖 | add-hero-section (completed), add-navigation (completed), add-project-section (completed), add-about-section (completed) |

---

## 概述

为个人品牌站添加基础 SEO 优化和社交身份支持。

---

## 上下文

- **项目**：个人品牌站（Personal Website）
- **技术栈**：React 19 + Vite 7 + TypeScript + Tailwind CSS v4
- **部署**：GitHub Pages，base path 为 /my-website/

---

## 动机

1. 提升网站在搜索引擎中的可见性
2. 提供准确的网站描述和关键词
3. 支持社交平台分享预览
4. 允许搜索引擎爬虫索引

---

## 范围

### In Scope

- 设置 HTML meta tags（title、description、keywords）
- 语义化 HTML 结构审查（header、main、footer、nav、section）
- 添加 robots.txt，允许 Google 爬虫索引
- Open Graph 和 Twitter Card meta tags

### Out of Scope

无

---

## 对现有功能的影响

无影响。仅为 HTML 头部信息和文件添加。

---

## 验收标准

### Spec 1: HTML Meta Tags

**Given** 用户访问网站
**When** 页面加载
**Then** `<title>` 显示"郑江 - 人工智能技术开发人员"

**Given** 搜索引擎爬虫抓取页面
**When** 读取 HTML
**Then** `<meta name="description">` 包含网站简介

---

### Spec 2: 语义化 HTML

**Given** 用户查看页面源码
**When** HTML 结构
**Then** 使用语义化标签：`header`、`main`、`nav`、`section`、`footer`

**边界/异常场景**：
- 确保 ARIA 属性正确使用
- 确保 heading 层级正确（h1 > h2 > h3）

---

### Spec 3: robots.txt

**Given** 搜索引擎爬虫访问网站
**When** 请求 `/robots.txt`
**Then** 返回允许爬虫索引的配置

---

### Spec 4: 社交分享标签

**Given** 用户在社交平台分享网站链接
**When** 链接被解析
**Then** 显示 Open Graph 和 Twitter Card 预览信息

---

## 内容

| 项目 | 内容 |
|------|------|
| 网站标题 | 郑江 - 人工智能技术开发人员 |
| 网站描述 | 郑江的个人品牌网站，专注于金融业务领域人工智能技术的应用落地 |
| keywords | 个人品牌, AI, 人工智能, 金融科技, 郑江 |
| 作者 | 郑江 |

---

## 依赖

无第三方依赖。

---

## 预估工时

- Phase 1: HTML meta tags + 语义化审查（15 分钟）
- Phase 2: robots.txt + 社交分享标签（15 分钟）

**总计**：30 分钟，分为 2 个 Phase
