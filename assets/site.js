(function () {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const setText = (selector, value, root = document) => {
    const el = qs(selector, root);
    if (el && value) el.textContent = value;
  };

  function createTagList(tags = []) {
    const list = document.createElement("ul");
    list.className = "tag-list";
    tags.forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      list.appendChild(item);
    });
    return list;
  }

  function isExternal(href) {
    return /^https?:\/\//i.test(href || "");
  }

  function createLink(link) {
    const anchor = document.createElement("a");
    anchor.className = `text-link${link.primary ? " text-link-primary" : ""}`;
    anchor.href = link.href;
    anchor.textContent = link.label;
    if (link.external || isExternal(link.href)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.classList.add("external-link");
      const hint = document.createElement("span");
      hint.className = "external-hint";
      hint.setAttribute("aria-hidden", "true");
      hint.textContent = "↗";
      anchor.append(" ", hint);
      anchor.setAttribute("aria-label", `${link.label}（在新标签页打开）`);
    }
    return anchor;
  }

  function appendExpandableDetails(parent, options) {
    const highlights = options.highlights || [];
    const tags = options.tags || [];
    if (!highlights.length && !tags.length) return;

    const panelId = `expandable-${options.id}`;
    const panel = document.createElement("div");
    panel.className = "expandable-details";
    panel.id = panelId;
    panel.hidden = true;

    if (highlights.length) {
      const list = document.createElement("ul");
      list.className = "check-list";
      highlights.forEach((highlight) => {
        const item = document.createElement("li");
        item.textContent = highlight;
        list.appendChild(item);
      });
      panel.appendChild(list);
    }
    if (tags.length) panel.appendChild(createTagList(tags));

    const button = document.createElement("button");
    button.className = "expand-toggle";
    button.type = "button";
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", panelId);
    button.innerHTML = `<span>${options.openLabel}</span><span class="expand-toggle-icon" aria-hidden="true">+</span>`;
    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      button.querySelector("span:first-child").textContent = willOpen ? options.closeLabel : options.openLabel;
      button.querySelector(".expand-toggle-icon").textContent = willOpen ? "−" : "+";
      panel.hidden = !willOpen;
      parent.closest("article")?.classList.toggle("is-expanded", willOpen);
    });

    parent.append(button, panel);
  }

  function renderProfile() {
    setText("[data-profile-name]", content.profile.name);
    setText("[data-profile-headline]", content.profile.headline);
    setText("[data-profile-summary]", content.profile.summary);
    setText("[data-profile-location]", content.profile.location);
    setText("[data-profile-focus]", content.profile.focus);
    const avatar = qs("[data-profile-avatar]");
    if (avatar) {
      avatar.src = content.profile.avatar;
      avatar.alt = `${content.profile.name}个人照片`;
    }
    const contacts = qs("[data-contact-list]");
    if (!contacts) return;
    contacts.innerHTML = "";
    content.profile.contacts.forEach((contact) => {
      const item = document.createElement("li");
      const child = document.createElement(contact.href ? "a" : "span");
      child.textContent = `${contact.label}：${contact.value}`;
      if (contact.href) {
        child.href = contact.href;
        if (isExternal(contact.href)) {
          child.target = "_blank";
          child.rel = "noopener noreferrer";
          child.setAttribute("aria-label", `${contact.label}（在新标签页打开）`);
          child.append(" ↗");
        }
      } else {
        child.className = "contact-note";
      }
      item.appendChild(child);
      contacts.appendChild(item);
    });
  }

  function createProjectCard(project) {
    const article = document.createElement("article");
    const layoutClass = project.layout ? ` project-card-${project.layout}` : "";
    article.className = `project-card${layoutClass}`;
    article.dataset.projectId = project.id;

    if (project.image) {
      const figure = document.createElement("figure");
      figure.className = "project-media";
      const image = document.createElement("img");
      image.src = project.image;
      image.alt = project.imageAlt || "";
      image.loading = "lazy";
      image.decoding = "async";
      figure.appendChild(image);
      article.appendChild(figure);
    } else if (project.visualFlow) {
      const flow = document.createElement("div");
      flow.className = "project-flow";
      flow.setAttribute("role", "img");
      flow.setAttribute("aria-label", `${project.title}流程：${project.visualFlow.join("到")}`);
      project.visualFlow.forEach((step, index) => {
        const node = document.createElement("span");
        node.className = "project-flow-node";
        node.textContent = step;
        flow.appendChild(node);
        if (index < project.visualFlow.length - 1) {
          const arrow = document.createElement("span");
          arrow.className = "project-flow-arrow";
          arrow.setAttribute("aria-hidden", "true");
          arrow.textContent = "→";
          flow.appendChild(arrow);
        }
      });
      article.appendChild(flow);
    }

    const body = document.createElement("div");
    body.className = "project-card-body";
    body.innerHTML = `<div class="project-card-head"><span>${project.type}</span><p>${project.role}</p></div><h3>${project.title}</h3><p>${project.summary}</p>`;
    const links = project.links || (project.href ? [{ label: "查看详情", href: project.href }] : []);
    if (links.length) {
      const linkGroup = document.createElement("div");
      linkGroup.className = "project-links";
      links.forEach((link) => linkGroup.appendChild(createLink(link)));
      body.appendChild(linkGroup);
    }
    appendExpandableDetails(body, {
      id: `project-${project.id}`,
      openLabel: "展开项目",
      closeLabel: "收起项目",
      highlights: project.highlights,
      tags: project.tags
    });
    article.appendChild(body);
    return article;
  }

  function renderProjects() {
    qsa("[data-project-list]").forEach((list) => {
      const category = list.dataset.category;
      list.innerHTML = "";
      content.projects.filter((project) => !category || project.category === category).forEach((project) => list.appendChild(createProjectCard(project)));
    });
  }

  function renderExperiences() {
    const list = qs("[data-experience-list]");
    if (!list || !content.experiences) return;
    list.innerHTML = "";
    content.experiences.forEach((experience, index) => {
      const article = document.createElement("article");
      article.className = "experience-card";
      article.innerHTML = `<div class="experience-meta"><span>${experience.period}</span><span>${experience.location}</span></div><p class="experience-org">${experience.organization}</p><h3>${experience.title}</h3><p class="experience-summary">${experience.summary}</p>`;
      appendExpandableDetails(article, {
        id: `experience-${index}`,
        openLabel: "展开经历",
        closeLabel: "收起经历",
        highlights: experience.highlights,
        tags: experience.tags
      });
      list.appendChild(article);
    });
  }

  function renderSimpleCards(selector, items, className, markup) {
    const list = qs(selector);
    if (!list || !items) return;
    list.innerHTML = "";
    items.forEach((entry) => {
      const item = document.createElement("article");
      item.className = className;
      item.innerHTML = markup(entry);
      list.appendChild(item);
    });
  }

  function renderCellSamDetail() {
    const detail = content.cellsamDetail;
    if (!detail) return;
    setText("[data-cellsam-title]", detail.title);
    setText("[data-cellsam-intro]", detail.intro);
    renderSimpleCards("[data-cellsam-sections]", detail.sections, "detail-section", (section) => `<h2>${section.title}</h2><p>${section.body}</p>`);
    const stack = qs("[data-cellsam-stack]");
    if (stack) { stack.innerHTML = ""; stack.appendChild(createTagList(detail.stack)); }
  }

  function renderCellSamAgentSystem() {
    const system = content.cellsamDetail && content.cellsamDetail.agentResearchSystem;
    if (!system) return;
    setText("[data-cellsam-agent-eyebrow]", system.eyebrow);
    setText("[data-cellsam-agent-title]", system.title);
    setText("[data-cellsam-agent-summary]", system.summary);
    setText("[data-cellsam-agent-resume]", system.resumeLine);
    const renderCollection = (selector, items, className, markup) => renderSimpleCards(selector, items, className, markup);
    renderCollection("[data-cellsam-workflow]", system.flow, "workflow-step", (step) => `<span class="workflow-index">${String(system.flow.indexOf(step) + 1).padStart(2, "0")}</span><h3>${step.title}</h3><p>${step.body}</p>`);
    renderCollection("[data-cellsam-agent-roles]", system.roles, "agent-role-card", (role) => `<h4>${role.title}</h4><p>${role.body}</p>`);
    renderCollection("[data-cellsam-artifacts]", system.artifacts, "artifact-card", (artifact) => `<h4>${artifact.title}</h4><p>${artifact.body}</p>`);
    const why = qs("[data-cellsam-why]");
    if (why) {
      why.innerHTML = "";
      system.why.forEach((text) => { const item = document.createElement("li"); item.textContent = text; why.appendChild(item); });
    }
  }

  function bindMobileNav() {
    const button = qs("[data-nav-toggle]");
    const nav = qs("[data-nav-menu]");
    if (!button || !nav) return;
    const close = () => { button.setAttribute("aria-expanded", "false"); button.setAttribute("aria-label", "打开导航"); nav.dataset.open = "false"; };
    button.addEventListener("click", () => {
      const willOpen = button.getAttribute("aria-expanded") !== "true";
      button.setAttribute("aria-expanded", String(willOpen));
      button.setAttribute("aria-label", willOpen ? "关闭导航" : "打开导航");
      nav.dataset.open = String(willOpen);
    });
    qsa("a", nav).forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") { close(); button.focus(); } });
  }

  function loadAnalytics() {
    const token = window.PORTFOLIO_CONFIG && window.PORTFOLIO_CONFIG.cloudflareAnalyticsToken;
    if (!token) return;
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.dataset.cfBeacon = JSON.stringify({ token });
    document.head.appendChild(script);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProfile(); renderProjects(); renderExperiences();
    renderSimpleCards("[data-education-list]", content.education, "education-item", (entry) => `<h3>${entry.school}</h3><p class="education-program">${entry.program}</p><p>${entry.details}</p>`);
    renderSimpleCards("[data-honor-list]", content.honors, "honor-card", (honor) => `<h3>${honor.title}</h3><p>${honor.detail}</p>`);
    renderCellSamDetail(); renderCellSamAgentSystem(); bindMobileNav(); loadAnalytics();
  });
})();
