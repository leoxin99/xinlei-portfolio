window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Xin Lei / 雷鑫",
    headline: "AI 产品经理 × Agent / AI 开发",
    summary:
      "人工智能硕士，具备计算机与商科复合背景。关注如何把复杂 AI 项目拆解为清晰的问题定义、可验证的评估标准和可迭代的工程流程。",
    location: "Leiden / Beijing",
    avatar: "assets/profile_placeholder.png",
    contacts: [
      { label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
      { label: "GitHub", value: "github.com/your-handle", href: "#" },
      { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: "#" }
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
      "当前站点是纯静态 HTML/CSS/JS，入口文件已经放在根目录，可以直接发布到 GitHub Pages、Cloudflare Pages 或 Vercel。",
    steps: [
      "新建 GitHub 仓库，建议命名为 xinlei-portfolio；如果想使用 https://用户名.github.io，则仓库名使用 <github用户名>.github.io。",
      "把 portfolio 目录内的 index.html、cellsam.html、assets、README.md、.nojekyll 推到仓库根目录。",
      "在仓库 Settings -> Pages 中选择 Deploy from branch，分支选择 main，目录选择 /root。",
      "发布完成后访问 https://<github用户名>.github.io/<仓库名>/；用户主页仓库则访问 https://<github用户名>.github.io/。",
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
      items: ["真实邮箱", "GitHub 主页", "LinkedIn 主页", "所在城市/求职地区"]
    },
    {
      title: "个人素材",
      items: ["正式头像或职业照", "最终版 AI PM PDF 简历", "Agent / AI 开发版 PDF 简历"]
    },
    {
      title: "经历核对",
      items: ["小米实习是否使用 SQL", "CellSAM 量化结果", "CellSAM 仓库/论文/答辩材料链接", "各课程项目仓库或报告链接"]
    },
    {
      title: "定位强化",
      items: ["若主攻 Agent，可把 Hero 副标题改为 AI Application Engineer / Agent Engineer", "为每个项目补充截图、demo、评估指标和失败案例复盘"]
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
        "面向复杂心肌细胞生物影像场景，基于 CellSAM 进行三通道适配，并结合 DAPI/Actn2 候选生成、CellFinder 微调、统一推理与固定评估协议，推动项目从实验探索走向可复现验证。",
      tags: ["CellSAM", "Instance Segmentation", "Evaluation", "Inference Pipeline"],
      highlights: [
        "三通道 decoder-only CellSAM 适配",
        "DAPI/Actn2-aware 候选生成",
        "candidate-aware CellFinder 自动框提示",
        "统一端到端推理与固定协议评估"
      ]
    },
    {
      id: "automl",
      type: "课程项目",
      title: "AML / HPO-AutoML",
      role: "搜索策略与配置优化实验",
      summary:
        "围绕自动化机器学习实验设计、搜索策略和模型配置优化开展比较，形成对 AI 方案选择和性能评估的结构化理解。",
      tags: ["AutoML", "HPO", "Experiment Design"]
    },
    {
      id: "reinforce",
      type: "课程项目",
      title: "REINFORCE 强化学习实验",
      role: "训练配置与结果分析",
      summary:
        "完成强化学习训练实验，对训练策略、参数设置和结果表现进行系统比较，并通过复盘分析理解模型行为差异。",
      tags: ["Reinforcement Learning", "Ablation", "Analysis"]
    },
    {
      id: "xiaomi",
      type: "实习经历",
      title: "小米手机部门数据分析实习",
      role: "北京小米移动软件有限公司，2022.09 - 2022.11",
      summary:
        "参与手机业务相关数据整理与基础分析，支持业务理解和结果输出，积累技术、业务与数据之间的连接经验。",
      tags: ["Data Analysis", "Business Understanding", "SQL 待确认"]
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
          "核心路线包括三通道 decoder-only CellSAM 适配，使用 [BF, DAPI, Actn2] 处理输入；通过 DAPI/Actn2-aware 候选生成定位心肌细胞；训练 candidate-aware CellFinder 完成自动框提示；最后采用统一推理核心衔接检测与分割。"
      },
      {
        title: "评估机制",
        body:
          "项目保留固定 split 协议，并使用统一端到端评估入口进行结果比较。最终推理流程采用官方 CellSAM 预处理链、项目锁定分割路径、概率冲突处理以及受控后处理，避免不同实验路径之间不可比较。"
      },
      {
        title: "产品 / 工程价值",
        body:
          "对 AI PM 方向，这个项目体现了从模糊研究目标到评估闭环的推进能力；对 Agent / AI 开发方向，它体现了把多阶段 AI 流程工程化、自动化和可复盘化的能力。"
      },
      {
        title: "面试可讲点",
        body:
          "可以围绕问题定义、为什么选择候选感知提示、如何保证不同方案可比较、如何定位瓶颈、以及如何把研究型代码整理成可发布的核心流程展开。具体量化结果和论文指标待补充。"
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
