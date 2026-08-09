# 雷鑫 / Xin Lei

AI 产品经理与 AI 应用作品集，记录我如何从真实场景出发，将需求、AI 技术与工程实现组织成可体验、可验证的产品。

**[访问个人网站](https://xinlei99.com/)**

## 精选项目

### [像素旅行助手](https://leoxin99.github.io/PixelTravelMap/dist/index.html)

面向已有详细行程的自由行用户，在晚点、闭馆、天气或体力变化后保护固定预约，并局部调整当天后续安排。

- 支持 Word / 文字行程导入、事件上报、差异预览、确认和撤销。
- 调整结果同步到时间线、城市关系地图、每日简报和离线导出内容。
- 核心流程采用可解释的确定性规则，模糊输入和固定安排冲突交由用户确认。

[GitHub](https://github.com/leoxin99/PixelTravelMap) · [在线产品](https://leoxin99.github.io/PixelTravelMap/dist/index.html) · [示例行程](https://leoxin99.github.io/PixelTravelMap/dist/italy_france_switzerland_demo.html)

### [糖宠照护](https://xinlei99.com/pet-diabetes-care-log/)

面向初次照护糖尿病犬猫的家长，用较少步骤记录进食、测量、治疗执行和日常观察，并整理为复诊沟通材料。

- 支持多宠档案、结构化照护记录、趋势分析、CSV 和打印报告。
- 健康数据默认保存在本地，混合单位、缺失字段和资料审核状态会被明确提示。
- 产品聚焦事实记录与兽医沟通，治疗方案由执业兽医负责。

[在线产品](https://xinlei99.com/pet-diabetes-care-log/) · [产品案例](https://xinlei99.com/pet-diabetes.html)

### [CellSAM：心肌细胞显微图像实例分割](https://xinlei99.com/cellsam.html)

针对 hiPSC-CM 心肌细胞弱边界、粘连、形态差异和多通道信息对齐问题，推进视觉基础模型的场景适配与实验评估。

- 覆盖 Transformer / ViT / SAM 模型适配、候选生成、训练调优和统一推理。
- 通过 Oracle 与端到端评估拆分定位分割模型和自动候选链路的瓶颈。
- 使用 Agent 辅助组织实验规划、配置审查、训练监控、结果复盘和论文交接。

## Site Structure

```text
index.html          Portfolio homepage
cellsam.html        CellSAM case detail page
pet-diabetes.html   糖宠照护 product progress page
pet-diabetes-care-log/  Runnable 糖宠照护 Web MVP
assets/content.js   Main content data source
assets/config.js    Optional analytics configuration
assets/site.js      Client-side rendering
assets/site.css     Visual styling
assets/files/       Public, sanitized resume PDF
assets/             Images and static assets
```

Local preparation notes, resume drafts, and interview materials live under `local-notes/` and are not part of the public site strategy.

## Local Preview

Open `index.html` directly in a browser, or run a local static server:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Then visit:

```text
http://127.0.0.1:8000/index.html
```

## Editing Content

Most homepage content lives in:

```text
assets/content.js
```

The site is intentionally static:

- no backend;
- no database;
- no public API;
- all links are relative or public project links.

## Deployment

This repository is deployed through GitHub Pages from the `main` branch root.

Public URL:

```text
https://xinlei99.com/
```

## Public Resume

The website links to the sanitized one-page product-manager resume at:

```text
assets/files/xin-lei-ai-product-manager-resume.pdf
```

It intentionally excludes a phone number and public WeChat ID. Private application copies under `local-notes/` are not modified or published.

## Cloudflare Web Analytics

Analytics is disabled by default. With an empty token, the site does not request or load any analytics script.

To enable Cloudflare Web Analytics later, set the token in `assets/config.js`:

```js
window.PORTFOLIO_CONFIG = {
  cloudflareAnalyticsToken: "YOUR_TOKEN"
};
```

Cloudflare Web Analytics provides aggregate traffic insights. Do not treat it as a visitor identity tool, and review the applicable privacy and disclosure requirements before enabling it.

## Custom Domain Migration

GitHub Pages can continue hosting this site with a custom domain; no migration to another host is required.

1. Buy and configure the domain with the registrar or DNS provider.
2. Add the custom domain in the repository's GitHub Pages settings and follow GitHub's DNS instructions.
3. Replace the current GitHub Pages URL in `index.html`, `cellsam.html`, `robots.txt`, `sitemap.xml`, and `assets/content.js`.
4. Add the resulting `CNAME` file to the repository root.
5. Wait for DNS validation, enable HTTPS, and verify every canonical and Open Graph URL.

## Content Principles

- Project status is labeled as shipped, prototype, product research, or research project.
- Public claims link back to project artifacts, tests, research notes, or user evidence.
- Public pages focus on user problems, product decisions, working outputs, and evaluation.
- Detailed risk logs, release gates, and interview preparation remain in local project documents.
