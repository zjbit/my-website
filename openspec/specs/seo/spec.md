# SEO Spec

## 概述

网站基础 SEO 优化配置。

---

## HTML Meta Tags

| 标签 | 内容 |
|------|------|
| `<title>` | 郑江 - 人工智能技术开发人员 |
| `<meta name="description">` | 郑江的个人品牌网站，专注于金融业务领域人工智能技术的应用落地 |
| `<meta name="keywords">` | 个人品牌, AI, 人工智能, 金融科技, 郑江 |
| `<meta name="author">` | 郑江 |
| `<meta name="robots">` | index, follow |
| `<html lang>` | zh-CN |

---

## 语义化结构

| 标签 | 用途 |
|------|------|
| `header` | 页面头部（包含导航栏） |
| `main` | 主要内容区域 |
| `nav` | 导航链接 |
| `section` | 各内容区块（Hero、Projects、About） |

---

## 社交分享

### Open Graph

| 属性 | 内容 |
|------|------|
| `og:title` | 郑江 - 人工智能技术开发人员 |
| `og:description` | 郑江的个人品牌网站... |
| `og:type` | website |
| `og:locale` | zh_CN |

### Twitter Card

| 属性 | 内容 |
|------|------|
| `twitter:card` | summary |
| `twitter:title` | 郑江 - 人工智能技术开发人员 |
| `twitter:description` | 郑江的个人品牌网站... |

---

## robots.txt

```
User-agent: *
Allow: /

Sitemap: https://zjbit.github.io/my-website/sitemap.xml
```

---

## 实现文件

- `index.html`
- `src/App.tsx`
- `public/robots.txt`
