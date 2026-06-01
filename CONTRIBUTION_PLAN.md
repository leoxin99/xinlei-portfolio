# Contribution Plan: Diabetes Animal Records App, vLLM, and SGLang

This document turns three possible directions into practical contribution plans for the portfolio.

## 1. Diabetes Animal Records App

Positioning: an original product project for AI PM + data workflow + responsible health-adjacent UX.

### What to Build First

- Animal profile: name, species, age, sex, weight, diagnosis note.
- Daily records: blood glucose, weight, diet, water intake, insulin/medication, symptoms, notes.
- Review tools: timeline, trend charts, abnormal value flags, weekly summary, CSV export.
- Reminders: check-up reminders and medication/measurement reminders.
- Safety boundary: no dosage recommendations, no diagnosis, no treatment advice.

### What You Can Claim in Resume

- Designed a structured health-record workflow for chronic animal care scenarios, balancing usability, data completeness, and safety boundaries.
- Built a record-to-summary prototype that turns daily logs into trend review and handoff summaries.
- Defined privacy and risk boundaries for a health-adjacent AI feature, avoiding unsupported medical advice.

### Best First Deliverable

Create a static MVP or clickable prototype with sample data, then add screenshots and a short PRD to the portfolio.

## 2. vLLM Contribution Plan

vLLM's official contribution guide points new contributors to good first issues, onboarding tasks, and new model requests. It recommends Python 3.12, `uv`, `pre-commit`, and `pytest`, and it requires DCO sign-off for commits. It also asks contributors to disclose non-trivial AI-assisted contributions in PR descriptions.

Official guide: https://docs.vllm.ai/en/stable/contributing/

### Contribution Areas That Fit You

- Documentation and examples for structured outputs, tool calling, or OpenAI-compatible server usage.
- Minimal repro scripts for API-server edge cases.
- Frontend/API behavior tests around request/response compatibility.
- Deployment notes for single-GPU, Windows-adjacent, low-VRAM, or beginner setups.
- Issue triage writeups: reproduce, minimize, document expected vs actual behavior.

### Avoid at First

- CUDA kernels.
- Large scheduler or KV-cache architectural changes.
- Model support PRs without local reproducibility.

### First PR Shape

- Title prefix: `[Doc]` or `[Frontend]`.
- Scope: one runnable example, one doc page, or one small test.
- Include: reproduction steps, expected output, local test command, screenshots/log snippets if useful.

## 3. SGLang Contribution Plan

SGLang's contribution guide asks new contributors to fork the repo, create a branch rather than committing to main, run `pre-commit`, and add unit tests for feature or bugfix changes. It points newcomers to `good first issue` and `help wanted`, and recommends Mini-SGLang and code walkthrough materials.

Official guide: https://github.com/sgl-project/sglang/blob/main/docs/developer_guide/contribution_guide.md

Current Q2 2026 roadmap themes include production reliability, installation/usability, kernel optimization, RL integration, multimodal support, speculative decoding, and hierarchical cache.

Roadmap: https://github.com/sgl-project/sglang/issues/22949

### Contribution Areas That Fit You

- Newcomer documentation: source install, minimal server launch, OpenAI-compatible API examples.
- Unit tests under `test/registered/unit` for Python runtime components.
- Benchmark/repro scripts for agentic workloads, long context, structured output, or speculative decoding.
- Issue triage: reproduce a bug, reduce the repro, document environment and expected behavior.

### Avoid at First

- Kernel changes unless you can build and benchmark them.
- Large distributed inference changes without matching hardware.
- Roadmap tasks that require maintainer assignment.

### First PR Shape

- Fork the repo.
- Create a branch like `doc/minimal-openai-api-example`.
- Add docs, a small test, or a benchmark note.
- Run `pre-commit run --all-files` and the smallest relevant `pytest` target.

## 4. Portfolio Integration

Use these as "planned contribution targets" until there is real code or an accepted PR.

Promotion path:

1. Idea card on homepage.
2. Local prototype or fork branch.
3. Public GitHub repo / PR link.
4. Screenshot, metrics, and README.
5. Move from "Contribution Targets" to "Selected Work" after there is evidence.

