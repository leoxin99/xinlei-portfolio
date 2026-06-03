window.PORTFOLIO_CONTENT = {
  profile: {
    name: "Xin Lei / 雷鑫",
    headline: "AI 项目实践 × Agent 工程探索",
    summary:
      "人工智能硕士，具备计算机、AI 实验与商科复合背景。关注复杂 AI 项目的问题定义、模型训练、推理评估、工程化流程，以及 Agent 辅助科研与协作式工作流。",
    location: "北京",
    avatar: "assets/profile_placeholder.png",
    contacts: [
      { label: "Email", value: "leixin.lx99@gmail.com", href: "mailto:leixin.lx99@gmail.com" },
      { label: "Phone / WeChat", value: "18957124638", href: "tel:+8618957124638" },
      { label: "GitHub", value: "github.com/leoxin99", href: "https://github.com/leoxin99" },
      { label: "Portfolio", value: "leoxin99.github.io/xinlei-portfolio", href: "https://leoxin99.github.io/xinlei-portfolio/" }
    ]
  },
  projects: [
    {
      id: "cellsam",
      type: "主项目",
      title: "CellSAM：hiPSC-CM 全细胞实例分割",
      role: "硕士毕业设计 / 导师实验室项目",
      href: "cellsam.html",
      summary:
        "面向 hiPSC-derived cardiomyocytes 的全细胞实例分割任务，基于 Transformer / ViT 架构的 CellSAM / SAM 系列 foundation model 做三通道适配，结合生物学先验候选生成、CellFinder refinement、统一推理评估和 Agent 辅助科研工作流，展示从模型适配到工程化复盘的完整能力。",
      tags: ["Transformer", "ViT-B", "SAM / CellSAM", "Prompt Generation", "AI Workflow"],
      highlights: [
        "将 Transformer-based 视觉 foundation model 适配到 hiPSC-CM 场景",
        "围绕 [BF, Actn2, DAPI] 三通道输入设计模型适配和候选生成流程",
        "构建从候选生成、box prompt、mask decoder 到后处理的推理链路",
        "用固定评估协议定位模型分割能力、自动提示生成和实际推理链路之间的瓶颈",
        "使用 Agent 辅助科研规划、实验复盘和文档沉淀"
      ]
    },
    {
      id: "automl",
      type: "课程项目",
      title: "AML / HPO-AutoML",
      role: "搜索策略与配置优化实验",
      summary:
        "围绕模型选择与超参数优化搭建实验流程，关注搜索空间、评价指标、配置比较和资源约束。放到 Agent 方向，可迁移为对 prompt、工具选择、检索参数和 workflow 配置的评估驱动优化能力。",
      tags: ["AutoML", "HPO", "Agent Eval", "Optimization"]
    },
    {
      id: "reinforce",
      type: "课程项目",
      title: "REINFORCE 强化学习实验",
      role: "训练配置与结果分析",
      summary:
        "实现基于 policy gradient 的 REINFORCE 训练流程，围绕 reward、训练稳定性、关键超参数和 variance/baseline 问题进行复盘。放到 Agent 方向，可用于解释 reward design、RLHF/RLAIF、策略优化和反馈闭环的基础概念。",
      tags: ["Reinforcement Learning", "Policy Gradient", "Reward Design", "RLHF Concepts"]
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
