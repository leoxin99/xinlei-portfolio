# 雷鑫 / Xin Lei

北京｜18957124638｜leixin.lx99@gmail.com｜github.com/leoxin99｜leoxin99.github.io/xinlei-portfolio

## 求职方向

AI Agent Engineer｜AI Application Engineer｜AI Engineer

## 个人总结

人工智能硕士，具备 AI workflow、模型评估、实验自动化和数据分析经验。能够将复杂 AI 任务拆解为数据处理、模型调用、推理流程、结果验证与复盘分析等模块，关注系统可靠性、可维护性和可复现实验。

## 教育背景

**Leiden University｜人工智能硕士**  
2024 春季 - 2026 春季

**北京语言大学｜计算机科学与技术 本科**  
2018.09 - 2022.06

**北京语言大学｜国际贸易与政治 二学位**  
2022.09 - 2023.07

## 技术项目

### CellSAM 适配：hiPSC-CM 全细胞实例分割推理与评估流程

硕士毕业设计 / 导师实验室项目

- 基于 CellSAM ViT-B foundation backbone，冻结 image encoder 和 prompt encoder，仅微调 mask decoder，完成面向 hiPSC-CM 的 decoder-focused 三通道适配。
- 构建 `[BF, Actn2, DAPI]` 三通道输入与统一预处理 / 推理接口，保证训练、验证和测试阶段的数据格式与评估口径一致。
- 设计 DAPI-CM biology-prior prompt generation：先用 DAPI 定位核候选，再用 Actn2 覆盖率过滤 cardiomyocyte-consistent candidates，并交由 CellFinder 做 box refinement。
- 搭建 detector-to-segmenter E2E 推理流程：CellFinder 生成 box prompts，CellSAM decoder 输出 per-box masks，再通过 overlap resolution 和 morphology post-processing 合成全图实例分割。
- 完成 channel strategy、prompt source、detector variants 等对比实验，证明三通道 decoder-focused adaptation 在复杂度和性能之间更稳健。
- 在 locked test73 上，Oracle 设置下 proposed decoder 达到 PQ 0.691 / BM-Dice 0.819 / AJI 0.698 / F1 0.981；E2E 设置下 DAPI-CM pipeline 达到 F1 0.617 / PQ 0.398。

### AutoML / HPO 课程实验：模型选择与超参数优化

- 围绕模型选择与超参数优化搭建实验流程，定义搜索空间、评价方式与实验记录结构，对不同配置进行批量比较与结果分析。
- 总结搜索策略、资源约束与模型表现之间的关系，沉淀可复现实验报告，为后续 AI workflow 自动评测与调参提供经验。

### REINFORCE 强化学习实验：Policy Gradient 与训练稳定性分析

- 实现基于 policy gradient 的 REINFORCE 训练流程，围绕 reward 曲线、收敛稳定性和关键超参数进行实验对比。
- 分析训练不稳定、reward 波动、variance 和 baseline 等问题，形成可复盘的实验记录与调参经验。

## 实习经历

### 北京小米移动软件有限公司｜手机部门数据分析实习生

2022.09 - 2022.11

- 参与手机业务数据分析项目，将产品侧需求转化为可执行的数据分析任务、报告结构与实施计划，积累从业务问题到数据处理流程的落地经验。
- 支持 Xiaomi 12 Pro 等产品项目的数据分析与上线实施，理解数据链路、分析交付与项目节奏之间的关系。
- 参与数据仓库系统运行监控与维护支持，关注模块稳定性和可靠性，形成对数据基础设施、异常排查和持续交付的初步理解。
- 面对大规模数据导致建模困难的场景，通过请教团队和调整处理方案解决问题，体现对数据规模、建模可行性和工程约束的敏感度。

## 技能

- 编程与工程：Python、Git、实验脚本、结果分析、Markdown / LaTeX 文档
- AI / ML：计算机视觉、实例分割、模型评估、AutoML / HPO、强化学习基础
- AI Workflow：数据处理、推理流程、自动化评测、ablation、失败案例复盘
- Agent 方向后续计划：Portfolio / CellSAM QA Agent、CellSAM Experiment Review Copilot、vLLM / SGLang serving benchmark

## 谨慎边界

- vLLM、SGLang、多 Agent 项目目前为后续计划，不作为已完成经历写入主项目。
- CellSAM 指标需区分 Oracle 与 E2E：F1 0.981 是 Oracle，不是自动部署结果。
- 课程项目暂不写具体数据集、环境和指标，等待课程报告或代码确认。
