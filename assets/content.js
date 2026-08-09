window.PORTFOLIO_CONTENT = {
  profile: {
    name: "雷鑫 / Xin Lei",
    headline: "AI 产品经理 · AI 应用产品 · 产品工程实践",
    summary:
      "人工智能硕士、计算机本科，具备手机产品实习、AI 科研与独立产品实践。关注 AI 如何进入真实场景，能够完成用户调研、需求拆解、原型、评估和网页交付，并在合适环节引入 Agent 工作流提升执行与协作效率。",
    location: "北京",
    focus: "AI 产品 · 用户研究 · Agent 应用",
    avatar: "assets/profile.jpg",
    resumeHref: "assets/files/xin-lei-ai-product-manager-resume.pdf",
    contacts: [
      { label: "Email", value: "leixin.lx99@gmail.com", href: "mailto:leixin.lx99@gmail.com" },
      { label: "GitHub", value: "github.com/leoxin99", href: "https://github.com/leoxin99" },
      { label: "个人主页", value: "xinlei99.com", href: "https://xinlei99.com/" },
      { label: "微信", value: "可通过邮件或招聘平台联系后提供" }
    ]
  },
  projects: [
    {
      id: "pixeltravelmap",
      category: "featured",
      featured: true,
      layout: "lead",
      type: "已发布项目",
      title: "像素旅行助手：已有行程的变化处理工具",
      role: "独立产品与工程实现 · 公开在线产品",
      image: "assets/pixeltravelmap-replan-preview.png",
      imageAlt: "像素旅行助手的行程变化处理界面，展示晚点上报、固定预约保护、调整差异和确认操作",
      links: [
        {
          label: "打开在线产品",
          href: "https://leoxin99.github.io/PixelTravelMap/dist/index.html",
          external: true,
          primary: true
        },
        {
          label: "查看示例",
          href: "https://leoxin99.github.io/PixelTravelMap/dist/italy_france_switzerland_demo.html",
          external: true
        },
        {
          label: "查看代码",
          href: "https://github.com/leoxin99/PixelTravelMap",
          external: true
        }
      ],
      summary:
        "面向已有详细行程的自由行用户，在晚点、闭馆、天气或体力变化后保护固定预约，并低成本调整当天后续安排。产品支持差异预览、用户确认、撤销、地图同步和离线导出。",
      tags: [
        "用户问题重构",
        "约束建模",
        "Schema-first",
        "Human-in-the-loop",
        "Offline-first",
        "网页部署"
      ],
      highlights: [
        "问题：已有行程遇到临时变化后，用户需要重新梳理预约、路线和当天安排，调整成本高",
        "取舍：先保护固定预约，只调整当天后续安排；信息不足时提示补充关键信息",
        "交付：完成行程导入、事件上报、调整差异预览、确认与撤销、地图同步和离线导出"
      ]
    },
    {
      id: "cellsam",
      category: "featured",
      featured: true,
      layout: "standard",
      type: "硕士毕业设计 / 研究项目",
      title: "CellSAM：hiPSC-CM 全细胞实例分割",
      role: "Leiden University 实验室 · 复杂 AI 项目实践",
      visualFlow: ["显微图像", "候选生成", "CellSAM 分割", "Oracle / E2E 评估", "Agent 审计"],
      summary:
        "面向 hiPSC-CM 心肌细胞弱边界、粘连与多通道信息对齐问题，推进视觉 foundation model 的场景适配、候选生成、统一推理评估与实验审计。",
      tags: ["Transformer / ViT", "SAM / CellSAM", "Prompt Generation", "Evaluation", "AI Workflow"],
      highlights: [
        "问题：真实显微图像存在弱边界、细胞粘连、形态差异和标注边界差异",
        "工程：把研究问题拆成实验矩阵、模型适配、训练评估、结果审计和论文交接，支持多路线并行探索",
        "质量：区分 GT-box Oracle 与 fully automatic E2E，由独立审核角色确认结论后再进入论文材料"
      ]
    },
    {
      id: "pet-diabetes",
      category: "featured",
      featured: true,
      layout: "standard",
      type: "可运行 Web 产品",
      title: "糖宠照护：犬猫糖尿病长期照护记录工具",
      role: "独立产品与工程实现 · local-first Web App",
      image: "assets/pet-diabetes-preview.png",
      imageAlt: "糖宠照护今日页，包含今日计划、快捷记录和照护时间线",
      links: [
        {
          label: "打开在线 Demo",
          href: "pet-diabetes-care-log/index.html",
          primary: true
        }
      ],
      summary:
        "面向初次面对犬猫糖尿病、需要长期照护的宠物家长，把分散的照护行为和观察数据整理为低负担记录闭环，并生成可打印的复诊沟通材料。",
      tags: ["用户同理心", "数据产品", "Local-first", "安全边界", "质量门禁"],
      highlights: [
        "问题：长期照护信息分散，新手家长复诊时难以完整回忆并向兽医准确说明",
        "设计：多宠档案、结构化照护记录、趋势分析、CSV/报告导出与本地数据迁移",
        "治理：只记录已执行行为，不提供诊断和剂量建议；混合单位、缺失字段与资料审核状态显式提示",
        "进展：完成自动化网页测试和安全检查；下一阶段开展真实用户任务测试与兽医字段审核"
      ]
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
  cellsamDetail: {
    title: "CellSAM：面向 hiPSC-CM 生物影像的实例分割项目",
    intro:
      "这个项目展示的是如何把科研问题拆解为模型适配、训练调优、自动候选生成、推理评估和 Agent 辅助科研工作流。",
    sections: [
      {
        title: "问题背景",
        body:
          "项目面向 human hiPSC-derived cardiomyocyte whole-cell instance segmentation。该场景存在弱边界、细胞粘连、形态差异和标注不完整等挑战，需要针对显微图像特征适配通用视觉模型。"
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
          "项目体现了面向实际应用环境的工程能力：训练配置管理、通道策略对比、prompt source 对比、推理链路统一、后处理规则设计、结果复盘和失败案例分析。核心是结合数据噪声、标注边界、候选质量和部署链路约束稳定比较方案、定位瓶颈，并把科研探索沉淀为可维护流程。"
      },
      {
        title: "评估设计",
        body:
          "评估上明确区分 GT-box Oracle 与 fully automatic E2E：前者用于判断分割分支能力，后者用于判断自动候选生成与真实部署链路。这个拆分帮助判断问题到底来自 mask decoder、prompt generation 还是 candidate generation。"
      },
      {
        title: "Agent 辅助科研工作流",
        body:
          "在开发过程中，我将 Agent 用于实验规划、配置审查、训练监控、结果复盘、论文材料整理和多条技术路线推进。下面的 workflow 展示这套方法如何把复杂科研项目组织成可执行、可审核、可交付的工程流程。"
      },
      {
        title: "我能展示的能力",
        body:
          "这个项目可展示 Transformer-based 视觉模型适配、训练与调优、科研代码工程化、多阶段推理链路设计、指标体系拆解、失败案例复盘，以及使用 Agent 辅助复杂科研任务规划和协作的能力。项目详情重点呈现模型进入真实问题环境后的工程取舍。"
      },
      {
        title: "项目展示重点",
        body:
          "网站聚焦项目问题、技术路线、工程能力与 Agent 辅助科研方法；量化指标、baseline 和论文图表在论文及面试材料中结合评估口径展开。"
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
        "这套 workflow 把复杂科研项目组织成有计划、有证据链、有审核、有交接和有决策记录的研究系统。",
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
          body: "负责研究问题定义、路线取舍、论文叙事和最终结论审核。"
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
