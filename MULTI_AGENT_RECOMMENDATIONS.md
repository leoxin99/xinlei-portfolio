# Multi-Agent Project Recommendations

调研日期：2026-06-01

目标：把 Agent 方向补强项目做成能展示、能复盘、能写进简历的作品，而不是只堆框架名。

## 推荐结论

### 1. Portfolio / CellSAM QA Agent

优先级：最高。

建议技术栈：

- OpenAI Agents SDK：适合快速搭建 tools、handoffs、guardrails、tracing。
- LlamaIndex 或轻量向量检索：负责简历、CellSAM 论文、README、项目报告的 RAG。
- 简单 eval set：20-30 个面试问题，覆盖 AI PM 和 Agent Engineer 两种视角。

建议 agent 拆分：

- Triage Agent：判断问题属于简历、CellSAM、课程项目、实习还是求职定位。
- AI PM Interview Agent：从问题定义、评估设计、方案取舍角度回答。
- Agent Engineer Interview Agent：从数据流、推理流程、评估脚本、系统可靠性角度回答。
- Citation Verifier：检查回答是否有引用来源，拒绝无依据扩写。

可写入简历的成果口径：

- Built a portfolio QA agent over resume and CellSAM materials with cited answers, interviewer-mode handoffs, tracing, and an eval set for unsupported-answer control.

## 2. CellSAM Experiment Review Copilot

优先级：第二。

建议技术栈：

- LangGraph：适合 stateful workflow、长流程、多步骤审阅、人类确认点。
- Markdown / JSON result parser：读取实验配置、评估指标、日志摘要。
- 静态前端或 CLI：先把输入输出做清楚，再考虑 UI。

建议 agent / node 拆分：

- Result Parser：抽取 split、metric、baseline、ablation、失败案例。
- Metric Analyst：区分 Oracle 与 E2E，避免错误解读 F1 / PQ。
- Failure Reviewer：整理低质量样本、漏检、边界重叠、标注争议。
- Next Experiment Planner：给出下一步实验建议，并标明依据。
- Verifier：检查是否把待验证内容写成确定结论。
- Report Writer：生成可放入作品集的实验复盘报告。

可写入简历的成果口径：

- Built a LangGraph-based experiment review copilot for CellSAM results, separating Oracle and E2E metrics and generating verifiable ablation summaries with failure-case notes.

## 3. GitHub Agent Trend Research Assistant

优先级：第三。

适合用途：展示调研自动化、信息结构化和产品判断。

建议技术栈：

- Firecrawl 或 browser-use：抓取仓库 README、release、issue、topic 页面。
- LangGraph 或 CrewAI：做分类、摘要、报告生成。
- Markdown report：输出每周趋势、项目分类和学习路线。

建议分类维度：

- Agent framework：LangGraph、CrewAI、AutoGen / Microsoft Agent Framework、OpenAI Agents SDK。
- Browser / web automation：browser-use、Firecrawl 类项目。
- Memory / RAG：mem0、RAGFlow、LlamaIndex 类项目。
- Serving / infrastructure：vLLM、SGLang、OpenAI-compatible server。

## 框架选择建议

### OpenAI Agents SDK

适合：OpenAI-native、需要 tools / handoffs / guardrails / tracing 的轻量项目。

放在你的项目里：先做 Portfolio / CellSAM QA Agent 的 MVP。原因是面试演示链路短，能直接体现“工具调用、转交、引用、评估、追踪”。

### LangGraph

适合：状态机式、多步骤、长流程、可恢复、人类参与的 workflow。

放在你的项目里：做 CellSAM Experiment Review Copilot。原因是实验审阅天然是分阶段流程，且需要明确状态、指标校验和人工确认。

### CrewAI

适合：快速展示多角色协作 demo，例如 researcher / analyst / writer 这样的角色分工。

放在你的项目里：可以用于 GitHub Agent 趋势研究助手的快速原型，但不是第一优先。

### AutoGen

适合：研究多 agent conversation pattern。

放在你的项目里：暂不作为第一选择。官方仓库已提示旧用户迁移到 Microsoft Agent Framework，当前更适合作为生态了解对象。

## 不建议现在做的事

- 不要同时开三个 Agent 项目。
- 不要把 vLLM、SGLang、LangGraph、CrewAI 都写进简历技能，除非有可运行 repo。
- 不要在前端暴露 LLM API key。
- 不要让 Agent 对外执行高风险动作，例如发邮件、改数据库、提交 PR，除非有明确审批边界。

## 两周执行路线

第 1-3 天：

- 整理简历、CellSAM 论文、README、项目报告为 Markdown。
- 准备 20 个面试问题和标准答案要点。

第 4-7 天：

- 完成 Portfolio / CellSAM QA Agent MVP。
- 实现引用回答、拒答无依据问题、两种面试官模式。

第 8-10 天：

- 增加 eval：引用命中率、事实准确率、unsupported-answer rate。
- 写 README、截图和失败案例复盘。

第 11-14 天：

- 把 demo 链接放到作品集。
- 简历中只加入已经跑通的功能和指标。
