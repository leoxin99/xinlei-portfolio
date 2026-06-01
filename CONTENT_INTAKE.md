# Content Intake and Project Enrichment Checklist

这份清单用于把当前个人网站从“可上线作品集”升级为“可投递、可面试展开、能证明 Agent/AI 能力的作品集”。

## 1. 个人基础信息

需要补充：

- 当前所在城市和目标求职地区：已写入北京
- 是否公开手机号、微信或备用邮箱：已写入手机号/微信 `18957124638`
- 目标岗位优先级：AI 产品经理、Agent Engineer、AI Application Engineer、Technical PM
- 求职偏好：全职 / 实习 / 远程 / 线下 / 海外 / 国内
- 一张正式头像或职业照，替换 `assets/profile_placeholder.png`

优化方式：

- Hero 一句话不要太泛，要回答“我是谁 + 我能解决什么问题”。
- 如果主攻 Agent，可把标题改为 `AI Application Engineer / Agent Engineer`，AI PM 作为第二叙事。
- 联系方式只放愿意公开的信息；手机号和微信如果不想公开，可以只放在 PDF 简历里。

## 2. 简历和附件

需要补充：

- 最终版 AI PM PDF 简历
- Agent / AI 开发版 PDF 简历
- 英文简历是否需要：本轮不需要
- 作品集源码仓库链接
- CellSAM 公开代码仓库链接
- 论文、答辩 PPT、项目报告或可公开摘要

优化方式：

- 网站首页提供 1 个主简历下载按钮，项目详情页可提供相关附件链接。
- 如果有双轨简历，建议按钮写成 `AI PM 简历` 和 `Agent / AI 开发简历`。
- PDF 文件名建议使用英文、短横线和版本日期，例如 `xin-lei-agent-engineer-resume-2026.pdf`。

## 3. CellSAM 主项目

需要补充：

- 项目时间线：开始时间、结束时间、当前状态
- 你的具体职责边界：数据、训练、检测、推理、评估、文档、协作分别做了哪些
- 数据集规模：样本数量、split 数量、输入通道、任务定义
- Baseline：原始 CellSAM、CellFinder 或其他对照方法
- 最终指标：AP、IoU、Dice、Precision/Recall 或项目采用的正式指标
- 关键 ablation：三通道输入、候选生成、query 数量、后处理策略分别带来什么变化
- 失败案例：哪些影像场景效果差，原因是什么
- 可视化素材：输入图、候选框图、分割 mask、错误案例、流程图
- 公开链接：代码仓库、论文/答辩、结果报告

推荐展示结构：

1. 问题：为什么 hiPSC-CM 全细胞实例分割难。
2. 目标：项目要优化什么指标或流程。
3. 方法：三通道适配、候选生成、CellFinder prompt、统一推理。
4. 评估：固定 split、统一入口、baseline 对比、ablation。
5. 结果：指标、可视化、失败案例。
6. 复盘：如果继续做，会优先优化什么。

可写成简历 bullet：

- Built a unified detector-to-segmenter inference and evaluation pipeline for hiPSC-CM whole-cell instance segmentation, aligning preprocessing, prompting, postprocessing, and fixed split evaluation.
- Adapted CellSAM to three-channel microscopy inputs `[BF, Actn2, DAPI]` and integrated DAPI/Actn2-aware candidate generation for cardiomyocyte localization.
- Designed reproducible evaluation reports to compare detector and segmenter variants, enabling faster bottleneck diagnosis and iteration planning.

## 4. AML / HPO-AutoML 课程项目

需要补充：

- 课程名称和项目时间
- 任务数据集和目标指标
- 使用的搜索策略：grid/random/Bayesian/evolutionary/multi-fidelity 等
- 搜索空间：模型、学习率、batch size、正则、结构参数
- Baseline 和最终结果
- 你的贡献：实验设计、代码实现、结果分析、报告撰写
- 仓库、notebook、报告或截图

优化方式：

- 不要只写“做了 HPO”，要写“如何定义搜索空间 + 如何判断策略好坏”。
- Agent 方向可强调自动化实验、配置管理和评估报告。
- AI PM 方向可强调方案比较、资源约束和优先级判断。

## 5. REINFORCE 强化学习实验

需要补充：

- 环境名称，例如 CartPole、LunarLander 或课程自定义环境
- reward 曲线、收敛速度、稳定性表现
- 关键超参数：learning rate、gamma、baseline、episode 数
- 对比实验：不同参数、不同 reward 处理、是否使用 baseline
- 失败案例：不收敛、震荡、方差大，以及你如何分析
- 仓库、notebook、报告或截图

优化方式：

- 用 1 张 reward curve 讲清楚训练过程。
- 用一段复盘说明你如何判断“模型没学到”和“只是还没收敛”。
- 如果代码质量不错，可以强调可复现实验脚本和配置记录。

## 6. 小米数据分析实习

需要补充：

- 所属业务线或分析主题，注意不要泄露内部敏感信息
- 使用工具：Excel、SQL、Python、BI、内部平台等；当前不要写入 SQL / Python / BI，除非确认实际使用过
- 数据类型：销售、用户、设备、渠道、质量、运营等
- 你的产出：报表、分析结论、问题定位、周报、dashboard
- 影响：节省时间、支持决策、发现异常、提升分析效率

优化方式：

- 如果没有可公开指标，可以写“支持某类业务判断”，不要虚构数字。
- AI PM 方向重点写业务理解和数据驱动判断。
- Agent 方向可以弱化实习，把它作为数据意识和业务语境补充。

## 7. Agent 方向新增项目

### 项目 A：个人简历 / CellSAM 问答 Agent

需要准备：

- 简历 PDF 或 Markdown
- CellSAM README、RUNNING、结果报告
- 10-20 个面试问题
- 每个问题的标准答案要点和引用来源

建议指标：

- 引用命中率
- 回答事实准确率
- 无依据回答数量
- 面试官视角覆盖度

### 项目 B：CellSAM 实验评估 Copilot

需要准备：

- 实验配置样例
- 结果 JSON/Markdown
- 训练日志或评估日志
- baseline 与 ablation 的对照表

建议指标：

- 能否正确提取指标
- 能否生成可信对比摘要
- 能否指出下一步实验建议
- 是否能识别缺失或异常数据

### 项目 C：GitHub Agent 趋势研究助手

需要准备：

- 目标 topic 或仓库列表
- 项目分类规则
- 星标、活跃度、issue、release 等字段
- 周报模板

建议指标：

- 抓取成功率
- 分类准确率
- 报告可读性
- 对求职项目选择的帮助程度

## 8. 网站体验优化

优先优化：

- 增加真实头像和 favicon
- 增加项目截图、流程图、指标卡片
- 增加英文版本或英文摘要
- 增加 Open Graph 分享图
- 增加 `projects.html`，把项目从首页卡片扩展成可浏览列表
- 给每个项目增加 `Problem / Role / Method / Result / Reflection`

暂不建议：

- 在纯前端直接接 LLM API key
- 做复杂登录系统
- 做过重动画或营销式 hero
- 放未验证指标或无法解释的夸张描述
