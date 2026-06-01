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

  function renderCapabilities() {
    const list = qs("[data-capability-list]");
    if (!list || !content.capabilities) {
      return;
    }

    list.innerHTML = "";
    content.capabilities.forEach((capability) => {
      const card = document.createElement("article");
      card.className = "capability-card";
      card.innerHTML = `
        <p class="eyebrow">${capability.eyebrow}</p>
        <h3>${capability.label}</h3>
        <h4>${capability.headline}</h4>
        <p>${capability.summary}</p>
        <p class="track-proof">${capability.proof}</p>
      `;
      card.appendChild(createTagList(capability.strengths));
      list.appendChild(card);
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

  function renderHonors() {
    const list = qs("[data-honor-list]");
    if (!list || !content.honors) {
      return;
    }

    list.innerHTML = "";
    content.honors.forEach((honor) => {
      const card = document.createElement("article");
      card.className = "honor-card";
      card.innerHTML = `
        <h3>${honor.title}</h3>
        <p>${honor.detail}</p>
      `;
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
    renderCapabilities();
    renderProjects();
    renderEducation();
    renderHonors();
    renderCellSamDetail();
    bindMobileNav();
  });
})();
