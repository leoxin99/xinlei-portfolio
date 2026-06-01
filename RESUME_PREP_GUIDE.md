# Resume Prep Guide: AI Product and AI Agent Developer Tracks

目标：把现有材料整理成两版可投递简历。

- 产品方向：AI Product Manager / Technical PM / AI Strategy
- 开发方向：AI Agent Engineer / AI Application Engineer / AI Engineer

原则：两版简历共享同一套事实，但叙事重点不同。不要为不同方向编造经历，而是调整证据的呈现方式。

## 1. 先补通用资料

这些信息两版都需要：

- 姓名：中文名、英文名、是否使用 `Xin Lei / 雷鑫`
- 联系方式：邮箱、GitHub、LinkedIn、作品集链接、是否公开手机号或微信
- 求职地点：国内 / 海外 / 远程 / 线下，优先城市
- 目标岗位：每个方向各列 3-5 个岗位标题
- 教育信息：学校英文名、专业英文名、GPA 是否公开、毕业时间是否确定
- 语言能力：中文、英文、其他语言，是否有考试成绩
- 可公开链接：GitHub、论文、答辩材料、项目报告、demo、网站
- 简历长度：中文 1 页优先；英文 1 页优先；作品集承载更多细节

请先准备成这个格式：

```text
邮箱：
GitHub：
LinkedIn：
作品集：
目标城市：
目标岗位：
是否需要英文简历：
是否公开手机号/微信：
```

## 2. 产品方向需要补什么

产品版关注：问题定义、需求抽象、评估设计、方案取舍、协作推进、业务/用户价值。

### 你需要补充的资料

CellSAM：

- 项目目标：这个项目要解决谁的什么问题
- 使用者/利益相关方：导师、实验室、研究人员、下游分析人员
- 成功指标：用哪些指标判断好坏，例如 AP、IoU、Dice、可复现性、评估效率
- 方案取舍：为什么选三通道、候选生成、CellFinder、统一推理
- 关键瓶颈：数据、模型、候选框、后处理、评估不一致中的哪几个最难
- 你推动了什么：问题拆解、评估标准、实验计划、结果复盘、文档整理
- 结果：指标、对比、流程效率、可复现性提升，若没有数字就写定性事实

课程项目：

- AutoML/HPO：任务目标、搜索空间、评价指标、资源约束、方案比较结论
- REINFORCE：实验目标、为什么做参数对比、结果如何指导后续优化

小米实习：

- 业务问题是什么
- 你处理了什么数据
- 用了什么工具
- 最终产出是报表、分析结论、周报还是 dashboard
- 对团队决策有什么支持

### 产品版 bullet 写法

公式：

```text
围绕 [用户/业务/研究目标]，拆解 [问题]，设计 [评估/流程/方案]，推动 [协作/迭代/决策]，产出 [结果]。
```

示例：

```text
围绕复杂生物影像实例分割任务，拆解检测、提示、分割与评估链路，设计固定 split 与统一评估流程，支持团队更稳定地比较方案并定位效果瓶颈。
```

产品版不要过度写：

- 具体代码文件名
- 过深模型实现细节
- 没有解释价值的工具堆叠

## 3. AI Agent 开发方向需要补什么

开发版关注：架构、实现、数据流、自动化、评测、测试、部署、可维护性。

### 你需要补充的资料

CellSAM：

- 代码仓库链接
- 你写过或改过的模块：训练、检测、推理、评估、metrics、postprocess
- 输入输出格式：`[BF, DAPI, Actn2]`、mask、box、JSON/Markdown report
- 自动化程度：训练命令、评估脚本、固定 split、结果文件
- 测试/验证：有哪些 regression test、py_compile、bash syntax check、formal eval
- 工程难点：统一推理路径、冲突处理、后处理、candidate-aware prompting
- 结果指标：最终性能、baseline 对比、失败案例

Agent/LLM 项目：

- 简历 / CellSAM QA Agent 是否已经开始
- 使用框架：OpenAI Agents SDK、PydanticAI、LangGraph、CrewAI 等
- RAG 数据源：简历、README、论文、报告
- 评估集：问题数量、引用命中率、准确率、unsupported-answer rate
- serving 后端：hosted API、vLLM、SGLang、Ollama 等
- 部署方式：本地、Vercel、Cloudflare Workers、Docker、GPU server

### 开发版 bullet 写法

公式：

```text
Built / implemented / evaluated [system/component] using [tools], enabling [capability], measured by [metric/evidence].
```

示例：

```text
Built a unified detector-to-segmenter inference and evaluation pipeline for CellSAM adaptation, standardizing preprocessing, prompting, postprocessing, and fixed-protocol evaluation for reproducible experiment comparison.
```

开发版不要过度写：

- “了解”“熟悉”但没有项目证据
- 只列框架名不写用途
- 没有结果的“负责开发”

## 4. 两版简历的推荐结构

### AI Product Manager 版

```text
Header
Summary: 2-3 行，强调 AI 产品理解、评估设计、技术沟通
Education
Experience
Selected Projects
  1. CellSAM AI research/productization project
  2. AutoML/HPO experiment design
  3. Xiaomi data analysis internship
Skills
Awards / Additional
```

重点排序：

1. CellSAM
2. 小米数据分析
3. AutoML/HPO
4. REINFORCE
5. Agent 项目作为补充或作品集链接

### AI Agent Developer 版

```text
Header
Summary: 2-3 行，强调 AI workflow、evaluation、Python、LLM/Agent
Education
Technical Projects
  1. CellSAM inference/evaluation pipeline
  2. Portfolio / CellSAM QA Agent
  3. LLM serving evaluation with vLLM/SGLang
  4. AutoML/HPO or REINFORCE
Experience
Skills
```

重点排序：

1. CellSAM 工程化流程
2. Portfolio / CellSAM QA Agent
3. vLLM/SGLang serving benchmark
4. AutoML/HPO
5. 小米实习

## 5. 一步步准备顺序

### Step 1: 先补基础信息

交付物：

- 联系方式
- 目标岗位列表
- 投递地区
- 是否需要英文版
- 最终头像和 PDF 简历文件

### Step 2: 补 CellSAM 主项目

回答这 12 个问题：

```text
1. 项目完整时间：
2. 数据集规模：
3. 你的具体职责：
4. 你写过/维护过的模块：
5. baseline 是什么：
6. 最终指标：
7. 最重要的 ablation：
8. 最大失败案例：
9. 如何定位问题：
10. 统一推理/评估解决了什么：
11. 有哪些可公开链接：
12. 面试时最想讲的亮点：
```

### Step 3: 补课程项目

AutoML/HPO：

```text
任务：
数据集：
搜索策略：
搜索空间：
评价指标：
baseline：
最终结果：
你的贡献：
仓库/报告链接：
```

REINFORCE：

```text
环境：
算法实现：
关键参数：
对比实验：
reward 曲线：
失败案例：
你的贡献：
仓库/报告链接：
```

### Step 4: 补小米实习

```text
业务主题：
数据类型：
使用工具：
分析方法：
输出形式：
对团队有什么帮助：
不能公开的边界：
```

### Step 5: 决定 Agent 补强项目

先不要同时做太多。推荐优先级：

1. 简历 / CellSAM QA Agent
2. vLLM vs SGLang serving benchmark
3. 糖尿病动物记录 App

每个新增项目必须至少有：

- GitHub repo
- README
- 截图或 demo
- 评估指标
- 失败案例复盘

## 6. 投递前检查

每版简历都检查：

- 是否有真实联系方式
- 是否有作品集链接
- 每个项目是否有“我做了什么”
- 是否至少 1 个项目有指标或可验证结果
- 是否没有夸大开源贡献
- 是否没有把计划写成已完成
- 是否没有写无法解释的 buzzword
- 是否 PDF 文件名专业、英文、无空格

推荐 PDF 文件名：

```text
xin-lei-ai-product-manager-resume-2026.pdf
xin-lei-ai-agent-engineer-resume-2026.pdf
```

