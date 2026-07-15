window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Xin Lei / 雷鑫",
    headline: "AI 产品经理｜AI 应用与 Agent 工作流",
    summary:
      "人工智能硕士、计算机本科，具备 AI 项目实践、手机产品经理实习和产品协作背景。关注 AI 如何进入真实用户场景，能从用户问题、MVP 范围、评估指标与风险边界出发推进 AI 功能设计与落地。",
    location: "北京",
    focus: "AI 产品 · AI 应用 · Agent 工作流",
    avatar: "assets/profile.jpg",
    resumeHref: "assets/files/xin-lei-ai-product-manager-resume.pdf",
    contacts: [
      { label: "Email", value: "leixin.lx99@gmail.com", href: "mailto:leixin.lx99@gmail.com" },
      { label: "GitHub", value: "github.com/leoxin99", href: "https://github.com/leoxin99" },
      { label: "个人主页", value: "leoxin99.github.io/xinlei-portfolio", href: "https://leoxin99.github.io/xinlei-portfolio/" },
      { label: "微信", value: "可通过邮件或招聘平台联系后提供" }
    ]
  },
  projects: [
    {
      id: "pixeltravelmap",
      category: "featured",
      featured: true,
      type: "已发布项目",
      title: "PixelTravelMap：离线 AI 旅行地图 Artifact 生成器",
      role: "独立完成 · 可在线访问 Demo",
      image: "assets/pixeltravelmap-preview.png",
      imageAlt: "PixelTravelMap 意大利、法国和瑞士旅行路线交互地图与行程概览",
      links: [
        {
          label: "打开 Demo",
          href: "https://leoxin99.github.io/PixelTravelMap/dist/italy_france_switzerland_demo.html",
          external: true,
          primary: true
        },
        {
          label: "查看代码",
          href: "https://github.com/leoxin99/PixelTravelMap",
          external: true
        }
      ],
      summary:
        "面向旅行者与内容创作者，将自然语言计划转换为结构化 itinerary JSON，再生成可离线打开、修改和分享的交互地图与旅行 poster。",
      tags: [
        "Python",
        "HTML/CSS/JavaScript",
        "SVG",
        "JSON Schema",
        "GitHub Pages",
        "GitHub Actions",
        "localStorage",
        "Offline-first"
      ],
      highlights: [
        "问题：传统旅行 AI 输出是一段难以复用的文本，路线、地点和备注缺少稳定结构",
        "决策：使用 schema-first 数据链路，把自然语言计划转为可验证的 itinerary JSON",
        "交付：完成交互地图、离线 HTML、浏览器本地备注、旅行 poster、CI 校验与公开 Demo"
      ]
    },
    {
      id: "cellsam",
      category: "featured",
      featured: true,
      type: "硕士毕业设计 / 研究项目",
      title: "CellSAM：hiPSC-CM 全细胞实例分割",
      role: "Leiden University 实验室 · 复杂 AI 项目实践",
      href: "cellsam.html",
      visualFlow: ["显微图像", "候选生成", "CellSAM 分割", "Oracle / E2E 评估", "Agent 审计"],
      summary:
        "面向 hiPSC-CM 心肌细胞弱边界、粘连与多通道信息对齐问题，推进视觉 foundation model 的场景适配、候选生成、统一推理评估与实验审计。",
      tags: ["Transformer / ViT", "SAM / CellSAM", "Prompt Generation", "Evaluation", "AI Workflow"],
      highlights: [
        "问题：真实显微图像存在弱边界、细胞粘连、形态差异和标注边界差异",
        "拆解：分别评估模型分割能力、候选生成质量与完整自动推理链路",
        "方法：区分 GT-box Oracle 与 fully automatic E2E，定位瓶颈并沉淀 Agent-assisted research workflow"
      ]
    },
    {
      id: "vlm-game-companion",
      category: "exploration",
      featured: false,
      type: "产品研究 / 原型设计",
      title: "VLM 游戏陪伴 Agent：低打扰多模态陪伴原型",
      role: "自驱产品研究 / 面向 AI 游戏陪伴岗位",
      summary:
        "围绕“能看、能听、能聊”的 AI 游戏陪伴场景，设计一个读取游戏截图或视频帧、输出结构化 game_state、再生成短句语音陪伴的 VLM Agent 原型。项目当前定位为产品研究和 MVP 方案设计，重点验证实时多模态理解、低打扰回复策略、情绪价值和用户反馈闭环。",
      tags: ["VLM", "Multimodal Agent", "Game Companion", "TTS", "Context Engineering"],
      highlights: [
        "MVP：截图/视频帧 -> game_state -> 回复时机判断 -> 陪伴式短回复 -> 语音输出",
        "边界：不自动操作游戏，不承诺复杂战术指挥，优先验证低打扰陪伴价值",
        "评估：识别准确率、回复相关性、打扰感、负反馈率与留存意愿"
      ]
    },
    {
      id: "pet-diabetes",
      category: "exploration",
      featured: false,
      type: "产品原型",
      title: "糖宠照护记录：猫狗糖尿病长期照护 Web App",
      role: "自驱产品探索 / Web 版，后续规划小程序",
      summary:
        "面向首次遇到宠物糖尿病、缺少长期照护经验的猫狗家长，设计一套记录血糖、饮食、胰岛素执行、症状、复诊和备注的 Web 工具。产品目标是降低记录混乱和复盘困难，帮助家长把日常照护信息整理成可与兽医沟通的结构化材料。",
      tags: ["C-end Product", "Health Record", "Long-term Care", "Risk Boundary", "Web App"],
      highlights: [
        "场景：每日记录、异常标记、趋势复盘与复诊前材料整理",
        "产物：完成 PRD、用户流程、MVP 范围和数据结构设计",
        "边界：只做记录、知识提示和沟通辅助，不提供诊断、治疗或剂量建议"
      ]
    },
    {
      id: "model-optimization",
      category: "exploration",
      featured: false,
      type: "技术方法实践",
      title: "AI 模型优化与反馈学习",
      role: "AutoML / HPO 与 REINFORCE",
      summary:
        "围绕模型配置优化和反馈学习链路，拆解 baseline、搜索空间、评价指标、资源约束、reward design 与训练稳定性，形成先定义评价口径、再比较方案的迭代方法。",
      tags: ["AutoML / HPO", "Reinforcement Learning", "Reward Design", "Agent Eval"]
    }
  ],
  experiences: [
    {
      organization: "北京小米移动软件有限公司",
      title: "手机产品经理实习生（数据分析与上线支持方向）",
      period: "2022.09 - 2023.01",
      location: "北京",
      summary:
        "面向 Xiaomi 12 Pro 等手机产品项目，参与需求沟通与上线支持，梳理业务目标、用户/业务反馈、核心指标、分析口径和交付范围，将模糊问题转化为可执行的分析任务与推进事项。",
      highlights: [
        "围绕产品效果判断和迭代讨论，输出数据分析材料与实施方案",
        "协助团队定位问题、对齐优化优先级，积累数据驱动决策、跨团队沟通和项目节奏管理经验"
      ],
      tags: ["需求沟通", "指标口径", "数据分析", "上线支持", "跨团队协作"]
    },
    {
      organization: "Leiden University 实验室",
      title: "生物图像识别与分割科研实习",
      period: "2025.09 - 2026.03",
      location: "荷兰莱顿",
      summary:
        "围绕 hiPSC-CM 显微图像识别与实例分割开展实践，理解实验数据、图像质量、标注边界和模型输出之间的关系。",
      highlights: [
        "参与 CellSAM / SAM 类模型适配与评估",
        "梳理数据预处理、候选生成、模型推理、结果复盘与论文材料整理链路"
      ],
      tags: ["科研协作", "计算机视觉", "模型评估", "证据整理"]
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
  honors: [
    {
      title: "Leiden University Scholarship / 莱顿大学奖学金",
      detail: "硕士阶段获得莱顿大学奖学金资助，支持人工智能方向学习与研究。"
    },
    {
      title: "2022 美国大学生数学竞赛二等奖",
      detail: "应用建模类竞赛奖项，体现问题建模、数据分析、方案表达与团队协作能力。"
    }
  ],
  productNotes: [
    {
      featured: true,
      title: "PixelTravelMap 产品复盘：从旅行计划到离线 AI artifact",
      theme: "AI Artifact / Schema-first",
      summary:
        "复盘为什么旅行 AI 不应只生成文本游记，而应把路线、POI、备注、地图和 poster 组织成可修改、可离线打开、可分享的结构化 artifact。",
      tags: ["PixelTravelMap", "AI Application", "Offline-first"],
      takeaways: [
        "讲清楚自然语言到 itinerary JSON 的 schema-first 设计",
        "解释离线 artifact 对分享、复盘和长期保存的价值"
      ]
    },
    {
      featured: false,
      title: "VLM 游戏陪伴：低打扰陪伴式 AI 的产品边界",
      theme: "VLM / Game Companion",
      summary:
        "从游戏截图理解、实时上下文、语音回复、打扰感和情绪价值出发，拆解 AI 游戏陪伴为什么不能只做攻略问答。",
      tags: ["VLM", "Multimodal Agent", "Companion"],
      takeaways: [
        "定义 game_state schema 和回复时机策略",
        "用打扰感、相关性和负反馈率评估陪伴体验"
      ]
    },
    {
      featured: false,
      title: "糖宠照护记录：长期照护场景下的信息结构",
      theme: "C-end Product / Long-term Care",
      summary:
        "围绕新手宠物家长的焦虑、记录混乱和复诊沟通成本，梳理健康记录类产品如何设置功能边界和风险提示。",
      tags: ["Pet Care", "Health Record", "Risk Boundary"],
      takeaways: [
        "强调记录、提醒、复盘和沟通辅助，不触碰诊断和剂量建议",
        "把复杂照护动作转成低负担的日常记录流程"
      ]
    },
    {
      featured: true,
      title: "Agent 辅助科研：复杂 AI 项目的规划、审计与交付",
      theme: "Agent Workflow / Research",
      summary:
        "基于 CellSAM 项目复盘 Agent 如何用于实验规划、配置审查、训练监控、结果审计和论文材料交接。",
      tags: ["Agent Workflow", "CellSAM", "Research Ops"],
      takeaways: [
        "展示 Agent 不是代写工具，而是复杂项目协作系统",
        "强调证据链、交接文档和 audit-first writing"
      ]
    },
    {
      featured: true,
      title: "AI 应用评估框架：从 Demo 到可上线系统",
      theme: "AI Product Evaluation",
      summary:
        "从任务成功率、引用质量、延迟、成本、幻觉、安全边界和用户反馈闭环出发，梳理 AI 应用如何从演示效果走向可迭代、可评估的真实系统。",
      tags: ["AI PM", "Evaluation", "RAG", "Agent"],
      takeaways: [
        "把模型能力、产品体验和业务指标拆开评估",
        "用 badcase 和用户反馈驱动迭代，而不是只看 demo 效果"
      ]
    }
  ],
  cellsamDetail: {
    title: "CellSAM：面向 hiPSC-CM 生物影像的实例分割项目",
    intro:
      "这个项目展示的是如何把科研问题拆解为模型适配、训练调优、自动候选生成、推理评估和 Agent 辅助科研工作流。",
    sections: [
      {
        title: "问题背景",
        body:
          "项目面向 human hiPSC-derived cardiomyocyte whole-cell instance segmentation。该场景存在弱边界、细胞粘连、形态差异和标注不完整等挑战，不能只依赖通用分割模型的直接迁移。"
      },
      {
        title: "主要创新贡献",
        body:
          "围绕 CellSAM / SAM 类 foundation model 的场景适配，使用 [BF, Actn2, DAPI] 三通道显微图像作为输入，引入 DAPI / Actn2 生物学先验做候选生成和身份过滤，并把检测、提示、分割、后处理和评估整合成可复盘的工作流。"
      },
      {
        title: "底层模型理解",
        body:
          "CellSAM 继承了 SAM 系列的 Transformer / Vision Transformer 思路：图像编码器用自注意力建模全局上下文，prompt encoder 接收 box 等提示信息，mask decoder 根据图像特征和提示生成分割结果。对非生物 AI 面试官来说，这个项目本质上是一次 Transformer-based 视觉 foundation model 的领域适配与工程落地。"
      },
      {
        title: "模型与技术路线",
        body:
          "技术上使用 CellSAM ViT-B backbone，采用 decoder-focused adaptation：冻结 image encoder 和 prompt encoder，重点调优 mask decoder；候选侧结合 DAPI-CM biology-prior prompt generation 与 CellFinder refinement 生成 box prompts，再由统一推理流程输出实例 mask。"
      },
      {
        title: "工程、训练与调优能力",
        body:
          "项目体现了面向实际应用环境的工程能力：训练配置管理、通道策略对比、prompt source 对比、推理链路统一、后处理规则设计、结果复盘和失败案例分析。重点不是单个指标，而是如何在数据噪声、标注边界、候选质量和部署链路约束下稳定比较方案、定位瓶颈，并把科研探索沉淀为可维护流程。"
      },
      {
        title: "评估设计",
        body:
          "评估上明确区分 GT-box Oracle 与 fully automatic E2E：前者用于判断分割分支能力，后者用于判断自动候选生成与真实部署链路。这个拆分帮助判断问题到底来自 mask decoder、prompt generation 还是 candidate generation。"
      },
      {
        title: "Agent 辅助科研工作流",
        body:
          "在开发过程中，我不是简单让 AI 写代码或写论文，而是把 Agent 当作科研协作和执行系统使用：用于规划实验、审查配置、监控训练、复盘结果、整理论文材料和推进多条技术路线。下面的 workflow 展示这套方法如何把复杂科研项目组织成可执行、可审核、可交付的工程流程。"
      },
      {
        title: "我能展示的能力",
        body:
          "这个项目可展示 Transformer-based 视觉模型适配、训练与调优、科研代码工程化、多阶段推理链路设计、指标体系拆解、失败案例复盘，以及使用 Agent 辅助复杂科研任务规划和协作的能力。面试中可以重点讲如何把模型放进真实问题环境，而不是只讲模型结构。"
      },
      {
        title: "谨慎表达边界",
        body:
          "网站不把具体指标作为主展示；指标、baseline 和论文图表保留在本地简历/论文材料中按场景使用。对外不声称临床或生产可用，不夸大跨场景泛化，也不把内部科研协作流程包装成超出事实边界的系统成果。"
      }
    ],
    stack: [
      "Python",
      "PyTorch",
      "Transformer / ViT",
      "CellSAM",
      "SAM / ViT-B",
      "CellFinder",
      "Prompt Generation",
      "OpenCV",
      "scikit-image",
      "pycocotools",
      "Agent Skills / Workflows"
    ],
    agentResearchSystem: {
      eyebrow: "Agent-assisted Research System",
      title: "Agent 辅助科研工作流",
      summary:
        "这套 workflow 的价值不是“用 AI 代写”，而是把复杂科研项目从零散尝试变成有计划、有证据链、有审核、有交接和有决策记录的研究系统。",
      resumeLine:
        "Designed an agent-assisted research workflow for CellSAM, coordinating experiment planning, implementation, training monitoring, multi-agent audit, result consolidation, and paper / portfolio handoff for a complex biomedical segmentation project.",
      flow: [
        {
          title: "Research Question",
          body: "把模糊问题拆成可验证问题，例如瓶颈在 segmentation decoder，还是 prompt / box generation。"
        },
        {
          title: "Experiment Matrix",
          body: "把路线组织成实验矩阵，覆盖 segmentation adaptation、detector line、noisy-box adaptation 和 post-processing audit。"
        },
        {
          title: "Implementation",
          body: "用 Agent 辅助检查代码、配置、训练入口和评估入口，降低实验名正确但配置不一致的风险。"
        },
        {
          title: "Training / Evaluation",
          body: "跟踪本地与 HPC 训练评估任务，区分 Oracle evaluation 和 End-to-End evaluation。"
        },
        {
          title: "Multi-agent Audit",
          body: "通过交叉审核检查指标口径、路径一致性、后处理混杂、训练和推理是否对齐。"
        },
        {
          title: "Paper / Portfolio Handoff",
          body: "把通过审核的结论整理成论文叙事、图表说明和作品集案例。"
        }
      ],
      roles: [
        {
          title: "Decision Owner",
          body: "负责研究问题定义、路线取舍、论文叙事边界、公开范围和最终判断。"
        },
        {
          title: "Research Orchestrator",
          body: "把想法转成可运行实验，负责实验设计、代码实现、配置检查、评估脚本和结果整理。"
        },
        {
          title: "Experiment Reviewer",
          body: "审核实验方案、运行训练和评估、回填结果，并检查指标口径或流程不一致问题。"
        },
        {
          title: "Paper Writer",
          body: "把通过审核的实验结论整合为论文正文、图表说明和 LaTeX 材料。"
        },
        {
          title: "Branch Agents",
          body: "针对 box refiner、biology-prior detector integration 等子路线并行推进，再通过 handover 汇总。"
        }
      ],
      artifacts: [
        {
          title: "Agent Inbox",
          body: "同步审核意见、实验结论、待办事项和论文写作交接。"
        },
        {
          title: "Project Onboarding",
          body: "新窗口或新 agent 先读 onboarding、backlog、实验文档和最新 handover，快速恢复上下文。"
        },
        {
          title: "Experiment Docs",
          body: "记录实验目标、配置、训练入口、评估入口、结果、失败原因和是否进入论文。"
        },
        {
          title: "Handover Bundles",
          body: "阶段性任务结束后整理交接材料，支持后续 agent 或论文写作继续推进。"
        },
        {
          title: "Audit-first Writing",
          body: "论文写作先经过实验审核、指标口径确认和对照关系确认，再进入公开叙事。"
        },
        {
          title: "Dry-run Checks",
          body: "清理、上传、训练提交和配置变更优先使用 dry-run、manifest、hash 和脚本检查。"
        }
      ],
      why: [
        "展示复杂 AI 项目管理能力：把研究问题拆成可执行路线，并保留决策记录。",
        "展示工程落地能力：把训练、推理、评估、后处理和文档交接组织成稳定流程。",
        "展示问题解决能力：通过多 agent audit 定位指标口径、配置、路径和推理链路问题。",
        "展示交付意识：论文、网站和简历只使用通过审核、适合公开的材料。"
      ]
    }
  }
};
