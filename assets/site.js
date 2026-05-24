(function () {
  const content = window.PORTFOLIO_CONTENT;

  if (!content) {
    return;
  }

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  function setText(selector, value, root = document) {
    const el = qs(selector, root);
    if (el) {
      el.textContent = value;
    }
  }

  function createTagList(tags) {
    const list = document.createElement("ul");
    list.className = "tag-list";
    tags.forEach((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      list.appendChild(item);
    });
    return list;
  }

  function renderProfile() {
    setText("[data-profile-name]", content.profile.name);
    setText("[data-profile-headline]", content.profile.headline);
    setText("[data-profile-summary]", content.profile.summary);
    setText("[data-profile-location]", content.profile.location);

    const avatar = qs("[data-profile-avatar]");
    if (avatar) {
      avatar.src = content.profile.avatar;
      avatar.alt = `${content.profile.name} profile image`;
    }

    const resumeLink = qs("[data-resume-link]");
    if (resumeLink && content.resumeLinks.aiPm) {
      resumeLink.href = content.resumeLinks.aiPm.href;
      resumeLink.textContent = content.resumeLinks.aiPm.label;
    }

    const contacts = qs("[data-contact-list]");
    if (contacts) {
      contacts.innerHTML = "";
      content.profile.contacts.forEach((contact) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = contact.href;
        link.textContent = `${contact.label}: ${contact.value}`;
        if (contact.href === "#") {
          link.setAttribute("aria-disabled", "true");
        }
        item.appendChild(link);
        contacts.appendChild(item);
      });
    }
  }

  function renderTracks() {
    const tabs = qs("[data-track-tabs]");
    const panels = qs("[data-track-panels]");
    if (!tabs || !panels) {
      return;
    }

    tabs.innerHTML = "";
    panels.innerHTML = "";

    content.tracks.forEach((track, index) => {
      const tab = document.createElement("button");
      tab.type = "button";
      tab.className = "track-tab";
      tab.textContent = track.label;
      tab.dataset.trackTarget = track.id;
      tab.setAttribute("aria-selected", index === 0 ? "true" : "false");
      tabs.appendChild(tab);

      const panel = document.createElement("article");
      panel.className = "track-panel";
      panel.dataset.trackPanel = track.id;
      panel.hidden = index !== 0;
      panel.innerHTML = `
        <p class="eyebrow">${track.eyebrow}</p>
        <h3>${track.headline}</h3>
        <p>${track.summary}</p>
        <p class="track-proof">${track.proof}</p>
      `;
      panel.appendChild(createTagList(track.strengths));
      panels.appendChild(panel);
    });

    qsa("[data-track-target]", tabs).forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.dataset.trackTarget;
        qsa("[data-track-target]", tabs).forEach((item) => {
          item.setAttribute("aria-selected", item === tab ? "true" : "false");
        });
        qsa("[data-track-panel]", panels).forEach((panel) => {
          panel.hidden = panel.dataset.trackPanel !== target;
        });
      });
    });
  }

  function renderProjects() {
    const list = qs("[data-project-list]");
    if (!list) {
      return;
    }

    list.innerHTML = "";
    content.projects.forEach((project) => {
      const article = document.createElement("article");
      article.className = project.id === "cellsam" ? "project-card project-card-featured" : "project-card";

      const linkMarkup = project.href
        ? `<a class="text-link" href="${project.href}">查看详情</a>`
        : "";

      article.innerHTML = `
        <div class="project-card-head">
          <span>${project.type}</span>
          <p>${project.role}</p>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        ${linkMarkup}
      `;

      if (project.highlights) {
        const highlights = document.createElement("ul");
        highlights.className = "check-list";
        project.highlights.forEach((highlight) => {
          const item = document.createElement("li");
          item.textContent = highlight;
          highlights.appendChild(item);
        });
        article.appendChild(highlights);
      }

      article.appendChild(createTagList(project.tags));
      list.appendChild(article);
    });
  }

  function renderEducation() {
    const list = qs("[data-education-list]");
    if (!list) {
      return;
    }

    list.innerHTML = "";
    content.education.forEach((entry) => {
      const item = document.createElement("article");
      item.className = "education-item";
      item.innerHTML = `
        <h3>${entry.school}</h3>
        <p class="education-program">${entry.program}</p>
        <p>${entry.details}</p>
      `;
      list.appendChild(item);
    });
  }

  function renderChecklist() {
    const list = qs("[data-update-checklist]");
    if (!list || !content.updateChecklist) {
      return;
    }

    list.innerHTML = "";
    content.updateChecklist.forEach((group) => {
      const card = document.createElement("article");
      card.className = "info-card";

      const items = document.createElement("ul");
      items.className = "check-list";
      group.items.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        items.appendChild(item);
      });

      card.innerHTML = `<h3>${group.title}</h3>`;
      card.appendChild(items);
      list.appendChild(card);
    });
  }

  function renderDeployment() {
    const deployment = content.deployment;
    if (!deployment) {
      return;
    }

    setText("[data-deploy-summary]", deployment.summary);

    const steps = qs("[data-deploy-steps]");
    if (steps) {
      steps.innerHTML = "";
      deployment.steps.forEach((step) => {
        const item = document.createElement("li");
        item.textContent = step;
        steps.appendChild(item);
      });
    }
  }

  function renderAgentRoadmap() {
    const list = qs("[data-agent-roadmap]");
    if (!list || !content.agentRoadmap) {
      return;
    }

    list.innerHTML = "";
    content.agentRoadmap.forEach((project, index) => {
      const card = document.createElement("article");
      card.className = "roadmap-card";

      const deliverables = document.createElement("ul");
      deliverables.className = "check-list";
      project.deliverables.forEach((text) => {
        const item = document.createElement("li");
        item.textContent = text;
        deliverables.appendChild(item);
      });

      card.innerHTML = `
        <span class="roadmap-index">${String(index + 1).padStart(2, "0")}</span>
        <h3>${project.title}</h3>
        <p class="roadmap-value">${project.value}</p>
        <p>${project.summary}</p>
      `;
      card.appendChild(createTagList(project.stack));
      card.appendChild(deliverables);
      list.appendChild(card);
    });
  }

  function renderCellSamDetail() {
    const detail = content.cellsamDetail;
    if (!detail) {
      return;
    }

    setText("[data-cellsam-title]", detail.title);
    setText("[data-cellsam-intro]", detail.intro);

    const sections = qs("[data-cellsam-sections]");
    if (sections) {
      sections.innerHTML = "";
      detail.sections.forEach((section) => {
        const article = document.createElement("article");
        article.className = "detail-section";
        article.innerHTML = `
          <h2>${section.title}</h2>
          <p>${section.body}</p>
        `;
        sections.appendChild(article);
      });
    }

    const stack = qs("[data-cellsam-stack]");
    if (stack) {
      stack.innerHTML = "";
      stack.appendChild(createTagList(detail.stack));
    }
  }

  function bindMobileNav() {
    const button = qs("[data-nav-toggle]");
    const nav = qs("[data-nav-menu]");
    if (!button || !nav) {
      return;
    }

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", expanded ? "false" : "true");
      nav.dataset.open = expanded ? "false" : "true";
    });

    qsa("a", nav).forEach((link) => {
      link.addEventListener("click", () => {
        button.setAttribute("aria-expanded", "false");
        nav.dataset.open = "false";
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderProfile();
    renderTracks();
    renderProjects();
    renderEducation();
    renderChecklist();
    renderDeployment();
    renderAgentRoadmap();
    renderCellSamDetail();
    bindMobileNav();
  });
})();
