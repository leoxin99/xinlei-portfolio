window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Xin Lei / 雷鑫",
    headline: "AI 产品经理 × Agent / AI 开发",
    summary:
      "人工智能硕士，具备计算机、AI 实验与商科复合背景。关注如何把复杂 AI 项目拆解为清晰的问题定义、可验证的评估标准和可迭代的工程流程。",
    location: "北京",
    avatar: "assets/profile_placeholder.png",
    contacts: [
      { label: "Email", value: "leixin.lx99@gmail.com", href: "mailto:leixin.lx99@gmail.com" },
      { label: "Phone / WeChat", value: "18957124638", href: "tel:+8618957124638" },
      { label: "GitHub", value: "github.com/leoxin99", href: "https://github.com/leoxin99" },
      { label: "Portfolio", value: "leoxin99.github.io/xinlei-portfolio", href: "https://leoxin99.github.io/xinlei-portfolio/" }
    ]
  },
  resumeLinks: {
    aiPm: {
      label: "下载 AI PM 简历",
      href: "assets/files/xin-lei-ai-pm-resume.pdf"
    }
  },
  deployment: {
    recommended: "GitHub Pages",
    summary:
      "当前站点是纯静态 HTML/CSS/JS，已推送到 GitHub 仓库 leoxin99/xinlei-portfolio，可通过 GitHub Pages 发布为公网作品集。",
    steps: [
      "确认 GitHub 仓库 https://github.com/leoxin99/xinlei-portfolio 已存在，且 main 分支包含 index.html。",
      "本地更新后运行 publish_github_pages.ps1，把 portfolio 目录内文件推送到仓库根目录。",
      "在仓库 Settings -> Pages 中选择 Deploy from branch，分支选择 main，目录选择 /root。",
      "发布完成后访问 https://leoxin99.github.io/xinlei-portfolio/。",
      "如需自定义域名，在 Pages 设置里添加域名，并到 DNS 服务商配置 apex 与 www 记录，最后开启 Enforce HTTPS。"
    ],
    alternatives: [
      {
        name: "Cloudflare Pages",
        summary: "可以拖拽上传整个静态文件夹或 zip，适合最快拿到 pages.dev 公网地址。"
      },
      {
        name: "Vercel",
        summary: "适合未来升级为 Next.js；当前纯静态站也可直接通过 Git 导入或 CLI 发布。"
      }
    ]
  },
  updateChecklist: [
    {
      title: "联系信息",
      items: ["已确认：北京", "已公开：手机号/微信 18957124638", "目标岗位：Agent 开发相关、AI 产品经理", "不需要 LinkedIn / 英文简历"]
    },
    {
      title: "个人素材",
      items: ["正式头像或职业照", "最终版 AI 产品经理 PDF 简历", "最终版 Agent 开发 PDF 简历"]
    },
    {
      title: "经历核对",
      items: ["小米实习使用过的工具和产出", "CellSAM 论文/答辩材料是否可公开", "各课程项目仓库或报告链接"]
    },
    {
      title: "定位强化",
      items: ["后续完成 Portfolio / CellSAM QA Agent", "后续完成 CellSAM Experiment Review Copilot", "为每个项目补充截图、demo、评估指标和失败案例复盘"]
    }
  ],
  tracks: [
    {
      id: "pm",
      label: "AI 产品经理",
      eyebrow: "Product Track",
      headline: "从问题定义到评估闭环",
      summary:
        "擅长把研究型或探索型 AI 任务转化为可执行方案，围绕用户场景、成功指标、失败案例和迭代优先级推动决策。",
      strengths: ["问题拆解", "需求抽象", "评估标准设计", "方案取舍", "实验验证", "跨角色协作"],
      proof:
        "在 CellSAM 项目中，围绕复杂生物影像识别任务梳理问题边界、评估路径与迭代机制，让方案比较和瓶颈定位更清晰。"
    },
    {
      id: "agent",
      label: "Agent / AI 开发",
      eyebrow: "Engineering Track",
      headline: "把实验流程沉淀为可复用系统",
      summary:
        "能够拆解多阶段 AI 流程，组织数据处理、模型调用、结果验证与自动化评测，重视可靠性、可维护性和复盘效率。",
      strengths: ["Python", "AI Workflow", "Evaluation", "Automation", "数据处理", "Git"],
      proof:
        "在 CellSAM 项目中参与训练、检测、推理与评估核心流程，沉淀统一推理路径和固定协议评估。"
    }
  ],
  projects: [
    {
      id: "cellsam",
      type: "主项目",
      title: "CellSAM：hiPSC-CM 全细胞实例分割",
      role: "硕士毕业设计 / 导师实验室项目",
      href: "cellsam.html",
      summary:
        "面向 hiPSC-derived cardiomyocytes 密集显微图像，基于 CellSAM ViT-B backbone 做 decoder-focused 三通道适配，并结合 DAPI-CM biology-prior prompt generation、CellFinder refinement、统一推理和固定评估协议，区分 GT-box Oracle 与自动 E2E 部署瓶颈。",
      tags: ["CellSAM", "Instance Segmentation", "Oracle PQ 0.691", "E2E F1 0.617"],
      highlights: [
        "使用 [BF, Actn2, DAPI] 三通道输入，冻结 image/prompt encoder，仅微调 mask decoder",
        "固定 split：334 train / 71 val / 73 test",
        "Oracle test73：PQ 0.691 / BM-Dice 0.819 / AJI 0.698 / F1 0.981",
        "自动 E2E DAPI-CM pipeline：F1 0.617 / PQ 0.398",
        "结论：自动部署主要瓶颈来自 prompt generation / candidate generation"
      ]
    },
    {
      id: "automl",
      type: "课程项目",
      title: "AML / HPO-AutoML",
      role: "搜索策略与配置优化实验",
      summary:
        "围绕模型选择与超参数优化搭建实验流程，关注搜索空间、评价指标、配置比较和资源约束，作为 AI 方案评估与自动化实验设计能力的补充项目。",
      tags: ["AutoML", "HPO", "Experiment Design", "指标待确认"]
    },
    {
      id: "reinforce",
      type: "课程项目",
      title: "REINFORCE 强化学习实验",
      role: "训练配置与结果分析",
      summary:
        "实现基于 policy gradient 的 REINFORCE 训练流程，围绕 reward 曲线、训练稳定性、关键超参数和 variance/baseline 问题进行复盘，作为 AI 系统评估能力的补充项目。",
      tags: ["Reinforcement Learning", "Policy Gradient", "Analysis", "环境待确认"]
    },
    {
      id: "xiaomi",
      type: "实习经历",
      title: "小米手机部门数据分析实习",
      role: "北京小米移动软件有限公司，2022.09 - 2022.11",
      summary:
        "在手机部门担任数据分析实习生，与产品同学沟通数据分析需求，设计分析报告和实施方案，支持 Xiaomi 12 Pro 等产品项目，并关注数据仓库系统运行维护和模块稳定性。",
      tags: ["Data Analysis", "Product Collaboration", "Data Warehouse"]
    }
  ],
  education: [
    {
      school: "Leiden University",
      program: "人工智能硕士，2024 春季 - 2026 春季",
      details: "重点方向包括 AI 系统、机器学习实验、评估与复杂任务建模。"
    },
    {
      school: "北京语言大学",
      program: "计算机科学与技术，本科，2018.09 - 2022.06",
      details: "计算机基础、数据分析、算法与工程实践背景。"
    },
    {
      school: "北京语言大学",
      program: "国际贸易与政治，二学位，2022.09 - 2023.07",
      details: "补充商业、国际视角与跨领域沟通能力。"
    }
  ],
  agentRoadmap: [
    {
      title: "个人简历 / CellSAM 问答 Agent",
      value: "把网站从静态作品集升级成可交互面试助手。",
      summary:
        "基于简历、CellSAM README、论文/答辩材料做 RAG，回答时给出引用，并支持 AI PM 面试官与 Agent Engineer 面试官两种提问视角。",
      stack: ["OpenAI Agents SDK", "PydanticAI", "RAG", "Eval Set", "Citations"],
      deliverables: ["在线 demo", "README", "10-20 条面试问答评测集", "失败回答复盘"]
    },
    {
      title: "CellSAM 实验评估 Copilot",
      value: "把既有科研项目转成 Agent 方向强证据。",
      summary:
        "读取实验配置、结果 JSON/Markdown 和训练日志，自动生成方案对比、瓶颈判断、失败案例和下一步实验建议。",
      stack: ["LangGraph", "PydanticAI", "Evaluation", "Experiment Reports", "Human-in-the-loop"],
      deliverables: ["实验报告生成器", "样例输入输出", "评估规则说明", "CellSAM 详情页链接"]
    },
    {
      title: "GitHub Agent 趋势研究助手",
      value: "展示你对 Agent 生态、调研自动化和产品判断的理解。",
      summary:
        "定期抓取热门 Agent 项目，按工程平台、网页自动化、RAG、沙箱执行、长期记忆、多 Agent 工作流分类，并生成学习路线和机会判断。",
      stack: ["Firecrawl", "browser-use", "CrewAI", "LangGraph", "Markdown Report"],
      deliverables: ["趋势周报", "项目分类表", "可视化截图", "学习路线"]
    }
  ],
  contributionTargets: [
    {
      title: "糖尿病动物记录 App",
      type: "自有产品项目",
      value: "最适合展示 AI PM、数据建模和医疗场景谨慎性。",
      summary:
        "做成面向实验动物或宠物慢病管理的记录工具，核心不是替代兽医判断，而是把血糖、体重、饮食、胰岛素/药物、异常事件和复查记录结构化，帮助使用者回顾趋势并生成汇总。",
      contributions: [
        "设计动物档案、血糖记录、体重、饮食、用药、异常事件和备注的数据模型",
        "实现 CRUD、筛选、趋势图、CSV 导出和复查提醒",
        "增加非医疗建议式的周报摘要，只做记录归纳和异常提示",
        "补充隐私说明、数据备份和免责声明，避免剂量建议等高风险功能"
      ],
      stack: ["Product Design", "React / Static MVP", "Data Model", "Charts", "Privacy"],
      firstStep: "先做 1 个静态交互原型和 1 份 PRD，再决定是否接数据库。"
    },
    {
      title: "vLLM",
      type: "开源贡献目标",
      value: "适合展示 LLM serving、OpenAI-compatible API、structured outputs 和测试文档能力。",
      summary:
        "对新贡献者，优先从文档、示例、最小复现、前端/API 测试入手，不建议一开始碰 CUDA kernel 或大型架构改动。",
      contributions: [
        "补 structured outputs / tool calling 的可运行示例和常见失败案例说明",
        "为 OpenAI-compatible server 行为补最小测试或 repro script",
        "整理 Windows / 单卡 / 低显存部署排错文档",
        "跟踪 good first issue、新 model request 或文档类 issue，提交小而完整的 PR"
      ],
      stack: ["Python", "pytest", "OpenAI API", "Structured Outputs", "Docs"],
      firstStep: "从 `[Doc]` 或 `[Frontend]` 小 PR 开始，提交时按 vLLM 要求 sign-off，并说明 AI 辅助使用情况。"
    },
    {
      title: "SGLang",
      type: "开源贡献目标",
      value: "适合展示高性能推理框架理解、benchmark、unit tests 和 agentic workload 观察。",
      summary:
        "SGLang 当前 roadmap 强调生产可靠性、易安装部署、speculative decoding、hierarchical cache、RL 和多模态等方向；新贡献者适合从文档、测试、benchmark 和复现开始。",
      contributions: [
        "补从源码安装、最小服务启动、OpenAI-compatible API 的新手文档",
        "为 Python runtime 组件补 `test/registered/unit` 下的单元测试",
        "做 agentic workload 的 benchmark/repro，例如长上下文、结构化输出或 speculative decoding",
        "选择 good first issue 或 help wanted，先 fork、建分支，再开 PR"
      ],
      stack: ["Python", "pytest", "pre-commit", "Benchmark", "Serving"],
      firstStep: "先跑通 Mini-SGLang / Code Walk-through，再选 docs/tests/benchmark 类任务。"
    }
  ],
  cellsamDetail: {
    title: "CellSAM：面向 hiPSC-CM 生物影像的实例分割项目",
    intro:
      "这个项目不是单点模型尝试，而是一条围绕数据、候选生成、提示框、分割推理和正式评估组织起来的 AI 工作流。",
    sections: [
      {
        title: "问题背景",
        body:
          "项目面向 human hiPSC-derived cardiomyocyte whole-cell instance segmentation。该场景涉及复杂生物影像，单纯迁移通用分割流程难以直接获得稳定、可解释、可复现的结果。"
      },
      {
        title: "我的角色",
        body:
          "参与复杂 AI 项目的问题拆解、流程设计、效果验证和复盘沉淀，围绕目标效果组织评估标准与迭代路径，并支持技术方案与实际应用目标对齐。"
      },
      {
        title: "技术路线",
        body:
          "核心路线包括基于 CellSAM ViT-B foundation backbone 的 decoder-focused adaptation：冻结 image encoder 和 prompt encoder，仅微调 mask decoder；使用 [BF, Actn2, DAPI] 三通道输入；通过 DAPI-CM biology-prior prompt generation 定位候选，再交由 CellFinder refinement 生成 box prompts，最后由统一推理核心衔接检测与分割。"
      },
      {
        title: "评估机制",
        body:
          "项目使用固定 split：334 train / 71 val / 73 test，并明确区分 GT-box Oracle 与 fully automatic E2E 两类评估。Oracle 评估用于判断 mask decoder 的分割能力，E2E 评估用于判断自动 prompt generation 与 detector-to-segmenter 部署效果，避免把两类瓶颈混在一起。"
      },
      {
        title: "关键结果",
        body:
          "在 locked test73 上，三通道 decoder 在 Oracle 设置下达到 PQ 0.691 / BM-Dice 0.819 / AJI 0.698 / F1 0.981；自动 E2E DAPI-CM pipeline 达到 F1 0.617 / PQ 0.398。论文结论强调：在正确空间提示下分割分支已经较强，自动部署的主要瓶颈转向 prompt generation / candidate generation。"
      },
      {
        title: "产品 / 工程价值",
        body:
          "对 AI PM 方向，这个项目体现了从模糊研究目标到任务定义、指标拆解、方案取舍和评估闭环的推进能力；对 Agent / AI 开发方向，它体现了把多阶段 AI workflow 工程化、自动化和可复盘化的能力。"
      },
      {
        title: "面试可讲点",
        body:
          "可以围绕为什么 instance segmentation 不能只看 semantic overlap、为什么 Oracle 与 E2E 要拆开评估、为什么 Actn2/DAPI 能作为生物学先验、为什么 DAPI-CM 指标略低但更具 identity control、以及为什么 noisy prompt training 没有解决部署瓶颈来展开。"
      },
      {
        title: "谨慎表达边界",
        body:
          "不要把 Oracle F1 0.981 写成自动部署结果；不要声称临床/生产可用或跨物种泛化；170 个 Actn2-supported but unlabeled cases 只能作为潜在标注审查线索，不能直接说成确定漏标。论文 PDF、图表和个人贡献边界仍需确认公开范围。"
      }
    ],
    stack: [
      "Python",
      "PyTorch",
      "CellSAM",
      "CellFinder",
      "OpenCV",
      "scikit-image",
      "pycocotools"
    ]
  }
};
