(function () {
  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const setText = (selector, value, root = document) => {
    const el = qs(selector, root);
    if (el && value) el.textContent = value;
  };

  const setLines = (selector, lines, root = document) => {
    const el = qs(selector, root);
    if (!el || !Array.isArray(lines) || !lines.length) return;
    el.replaceChildren();
    lines.forEach((line, index) => {
      if (index) el.appendChild(document.createElement("br"));
      el.appendChild(document.createTextNode(line));
    });
  };

  const languageStorageKey = "portfolio-language";
  const languageFromStorage = () => {
    try {
      return window.localStorage.getItem(languageStorageKey) === "en" ? "en" : "zh";
    } catch (error) {
      return document.documentElement.dataset.language === "en" ? "en" : "zh";
    }
  };
  let currentLanguage = languageFromStorage();
  let projectMotionCleanup = () => {};
  let orbitalCopyRefresh = () => {};

  const capitalize = (value) => value ? `${value.charAt(0).toUpperCase()}${value.slice(1)}` : value;
  const localized = (entry, key, fallback = "") => {
    if (!entry) return fallback;
    if (currentLanguage === "en") return entry[`en${capitalize(key)}`] ?? entry[key] ?? fallback;
    return entry[key] ?? fallback;
  };
  const localizedArray = (entry, key) => {
    const value = localized(entry, key, []);
    return Array.isArray(value) ? value : [];
  };
  const copy = (key) => (content.copy && content.copy[currentLanguage] && content.copy[currentLanguage][key]) || key;

  function applyStaticCopy() {
    qsa("[data-copy]").forEach((element) => {
      const value = copy(element.dataset.copy);
      if (value !== element.dataset.copy) element.textContent = value;
    });
    qsa("[data-copy-aria]").forEach((element) => {
      const value = copy(element.dataset.copyAria);
      if (value !== element.dataset.copyAria) element.setAttribute("aria-label", value);
    });
    const languageControl = qs("[data-language-control]");
    if (languageControl) languageControl.setAttribute("aria-label", copy("languageGroupLabel"));
    qsa("[data-language-option]").forEach((option) => {
      option.setAttribute("aria-pressed", String(option.dataset.languageOption === currentLanguage));
    });
    document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
    document.documentElement.dataset.language = currentLanguage;
    document.title = copy("pageTitle");
    const description = qs('meta[name="description"]');
    const ogTitle = qs('meta[property="og:title"]');
    const ogDescription = qs('meta[property="og:description"]');
    if (description) description.setAttribute("content", copy("pageDescription"));
    if (ogTitle) ogTitle.setAttribute("content", copy("pageTitle"));
    if (ogDescription) ogDescription.setAttribute("content", copy("ogDescription"));
    const ogLocale = qs('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", currentLanguage === "en" ? "en_US" : "zh_CN");
  }

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
      anchor.setAttribute("aria-label", `${link.label}（${copy("externalHint")}）`);
    }
    return anchor;
  }

  function appendExpandableDetails(parent, options) {
    const highlights = options.highlights || [];
    const tags = options.tags || [];
    const links = options.links || [];
    if (!highlights.length && !tags.length && !links.length) return;

    const panelId = `expandable-${options.id}`;
    const panel = document.createElement("div");
    panel.className = "expandable-details";
    panel.id = panelId;
    panel.hidden = true;

    if (links.length) {
      const linkGroup = document.createElement("div");
      linkGroup.className = "project-links expandable-links";
      links.forEach((link) => linkGroup.appendChild(createLink(link)));
      panel.appendChild(linkGroup);
    }

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
    const profile = content.profile;
    setText("[data-profile-name]", profile.cornerName || profile.name);
    setText("[data-profile-name-corner]", profile.cornerName || profile.name);
    setText("[data-profile-display-name]", profile.displayName || profile.name);
    setText("[data-profile-statement]", currentLanguage === "en" ? profile.englishStatement : profile.statement);
    setText("[data-profile-headline]", currentLanguage === "en" ? profile.englishHeadline : profile.headline);
    setText("[data-profile-english]", profile.englishLine);
    setText("[data-profile-location]", currentLanguage === "en" ? profile.englishLocation : profile.location);
    setText("[data-profile-focus]", currentLanguage === "en" ? profile.englishFocus : profile.focus);
    const avatar = qs("[data-profile-avatar]");
    if (avatar) {
      avatar.src = profile.avatar;
      avatar.alt = copy("heroAvatarAlt");
    }
  }

  function contactLabel(contact) {
    return currentLanguage === "en" ? contact.enLabel || contact.label : contact.label;
  }

  function renderContactItems() {
    const list = qs("[data-contact-items]");
    if (!list || !content.profile?.contacts) return;
    list.replaceChildren();
    content.profile.contacts.filter((contact) => contact.value).forEach((contact) => {
      const item = document.createElement("article");
      item.className = "contact-dialog-item";

      const details = document.createElement("div");
      details.className = "contact-dialog-details";
      const label = document.createElement("p");
      label.className = "contact-dialog-label";
      label.textContent = contactLabel(contact);
      const value = document.createElement("p");
      value.className = "contact-dialog-value";
      value.textContent = contact.value;
      details.append(label, value);

      const actions = document.createElement("div");
      actions.className = "contact-dialog-actions";
      if (contact.kind === "github" && contact.href) {
        const link = document.createElement("a");
        link.className = "contact-dialog-link";
        link.href = contact.href;
        link.textContent = copy("contactOpenGithub");
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.setAttribute("aria-label", `${contactLabel(contact)}（${copy("externalHint")}）`);
        actions.appendChild(link);
      }

      if (contact.copyValue) {
        const copyButton = document.createElement("button");
        copyButton.className = "contact-copy-button";
        copyButton.type = "button";
        copyButton.dataset.contactCopy = contact.id;
        copyButton.textContent = copy("contactCopy");
        copyButton.setAttribute("aria-label", `${copy("contactCopy")} ${contactLabel(contact)}`);
        actions.appendChild(copyButton);
      }

      item.append(details, actions);
      list.appendChild(item);
    });
  }

  function createProjectCard(project) {
    const title = localized(project, "title");
    const type = localized(project, "type");
    const role = localized(project, "role");
    const summary = localized(project, "summary");
    const imageAlt = localized(project, "imageAlt");
    const visualFlow = localizedArray(project, "visualFlow");
    const article = document.createElement("article");
    const layoutClass = project.layout ? ` project-card-${project.layout}` : "";
    article.className = `project-card${layoutClass}`;
    article.dataset.projectId = project.id;
    article.dataset.motionCard = project.id;

    const motionPreview = project.motionPreview || null;
    if (project.image || motionPreview?.poster) {
      const figure = document.createElement("figure");
      figure.className = "project-media";
      figure.dataset.motionMedia = project.id;
      const image = document.createElement("img");
      image.className = "project-poster";
      image.src = project.image || motionPreview?.poster;
      image.alt = project.image ? imageAlt || "" : motionPreview ? (currentLanguage === "en" ? motionPreview.enAlt || motionPreview.alt : motionPreview.alt) : "";
      image.loading = "lazy";
      image.decoding = "async";
      figure.appendChild(image);
      if (motionPreview?.source) {
        const motion = document.createElement("img");
        motion.className = "project-motion";
        motion.src = motionPreview.source;
        motion.dataset.motionSource = motionPreview.source;
        motion.alt = "";
        motion.loading = "lazy";
        motion.decoding = "async";
        motion.setAttribute("aria-hidden", "true");
        figure.appendChild(motion);
      }
      article.appendChild(figure);
    } else if (visualFlow.length) {
      const flow = document.createElement("div");
      flow.className = "project-flow";
      flow.setAttribute("role", "img");
      flow.setAttribute("aria-label", `${title}流程：${visualFlow.join("到")}`);
      visualFlow.forEach((step, index) => {
        const node = document.createElement("span");
        node.className = "project-flow-node";
        node.textContent = step;
        flow.appendChild(node);
        if (index < visualFlow.length - 1) {
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
    body.innerHTML = `<div class="project-card-head"><span>${type}</span><p>${role}</p></div><h3>${title}</h3><p>${summary}</p>`;
    const links = (currentLanguage === "en" ? project.enLinks : project.links) || project.links || (project.href ? [{ label: copy("projectOpen"), href: project.href }] : []);
    appendExpandableDetails(body, {
      id: `project-${project.id}`,
      openLabel: copy("projectOpen"),
      closeLabel: copy("projectClose"),
      highlights: localizedArray(project, "highlights"),
      tags: localizedArray(project, "tags"),
      links
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
      article.innerHTML = `<div class="experience-meta"><span>${experience.period}</span><span>${localized(experience, "location", experience.location)}</span></div><p class="experience-org">${experience.organization}</p><h3>${localized(experience, "title")}</h3><p class="experience-summary">${localized(experience, "summary")}</p>`;
      appendExpandableDetails(article, {
        id: `experience-${index}`,
        openLabel: copy("experienceOpen"),
        closeLabel: copy("experienceClose"),
        highlights: localizedArray(experience, "highlights"),
        tags: localizedArray(experience, "tags")
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

  function bindProjectMotion() {
    projectMotionCleanup();
    const cards = qsa("[data-motion-card]");
    if (!cards.length) return;
    const reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false, addEventListener: () => {}, removeEventListener: () => {} };
    const cleanup = [];
    const setActive = (card, active) => {
      if (reducedMotion.matches) {
        card.classList.remove("is-motion-active");
        return;
      }
      card.classList.toggle("is-motion-active", active);
      const motion = qs(".project-motion", card);
      if (!motion) return;
      const source = motion.dataset.motionSource;
      if (active && source) motion.src = `${source}?motionRun=${Date.now()}`;
      if (!active && source) motion.src = source;
    };

    cards.forEach((card) => {
      const onEnter = () => setActive(card, true);
      const onLeave = () => setActive(card, false);
      const onFocusIn = () => setActive(card, true);
      const onFocusOut = (event) => {
        if (!card.contains(event.relatedTarget)) onLeave();
      };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      card.addEventListener("focusin", onFocusIn);
      card.addEventListener("focusout", onFocusOut);
      cleanup.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        card.removeEventListener("focusin", onFocusIn);
        card.removeEventListener("focusout", onFocusOut);
      });
    });

    const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) setActive(entry.target, false);
      });
    }, { threshold: 0.05 }) : null;
    if (observer) {
      cards.forEach((card) => observer.observe(card));
      cleanup.push(() => observer.disconnect());
    }
    const onReducedMotionChange = () => cards.forEach((card) => setActive(card, false));
    reducedMotion.addEventListener?.("change", onReducedMotionChange);
    cleanup.push(() => reducedMotion.removeEventListener?.("change", onReducedMotionChange));
    projectMotionCleanup = () => {
      cleanup.forEach((dispose) => dispose());
      projectMotionCleanup = () => {};
    };
  }

  function renderSkills() {
    const list = qs("[data-skill-list]");
    if (!list || !content.skills) return;
    list.innerHTML = "";
    content.skills.forEach((skill) => {
      const card = document.createElement("article");
      card.className = "skill-card";
      const tags = localizedArray(skill, "tags").map((tag) => `<span>${tag}</span>`).join("");
      const media = skill.media || {};
      const mediaMarkup = media.poster ? `<div class="skill-media"><img src="${media.poster}" alt="${localized(skill, "mediaAlt")}" loading="lazy" decoding="async"></div>` : "";
      const linkMarkup = skill.github ? `<a class="skill-link text-link" href="${skill.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>` : "";
      card.innerHTML = `${mediaMarkup}<div class="skill-card-copy"><div class="skill-index">${skill.index}</div><h3>${localized(skill, "title")}</h3><p>${localized(skill, "summary")}</p><div class="skill-tags">${tags}</div><div class="skill-links">${linkMarkup}</div></div>`;
      list.appendChild(card);
    });
  }

  function renderLocalizedHome() {
    applyStaticCopy();
    renderProfile();
    renderContactItems();
    renderProjects();
    bindProjectMotion();
    renderSkills();
    renderExperiences();
    renderSimpleCards("[data-education-list]", content.education, "education-item", (entry) => `<h3>${entry.school}</h3><p class="education-program">${localized(entry, "program")}</p><p>${localized(entry, "details")}</p>`);
    orbitalCopyRefresh();
  }

  function setLanguage(language) {
    currentLanguage = language === "en" ? "en" : "zh";
    try {
      window.localStorage.setItem(languageStorageKey, currentLanguage);
    } catch (error) {
      // Storage can be unavailable in privacy mode; the current page still updates.
    }
    renderLocalizedHome();
  }

  function bindLanguageControl() {
    qsa("[data-language-option]").forEach((option) => {
      option.addEventListener("click", () => setLanguage(option.dataset.languageOption));
    });
  }

  function bindImageFallbacks() {
    qsa("img[data-character-image]").forEach((image) => {
      const applyFallback = () => {
        if (image.dataset.fallbackApplied) return;
        image.dataset.fallbackApplied = "true";
        image.src = "assets/hero/character-lulu-v4.png";
        image.alt = currentLanguage === "en" ? "Illustrated traveler fallback" : "原创航海人物插图";
      };
      image.addEventListener("error", applyFallback);
      if (image.complete && image.naturalWidth === 0) applyFallback();
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

  function bindContactDialog() {
    const dialog = qs("[data-contact-dialog]");
    const trigger = qs("[data-contact-open]");
    if (!dialog || !trigger || typeof dialog.showModal !== "function") return;
    let lastFocused = null;

    const setStatus = (message) => {
      qsa("[data-contact-dialog-status], [data-contact-status]").forEach((element) => {
        element.textContent = message;
      });
    };

    const restoreFocus = (target = lastFocused) => {
      if (target && target.isConnected) target.focus();
      if (lastFocused === target) lastFocused = null;
    };

    const closeDialog = () => {
      const focusTarget = lastFocused;
      setStatus("");
      if (dialog.open) dialog.close();
      restoreFocus(focusTarget);
      window.requestAnimationFrame(() => restoreFocus(focusTarget));
      window.setTimeout(() => restoreFocus(focusTarget), 0);
      window.setTimeout(() => {
        if (focusTarget && focusTarget.isConnected) focusTarget.focus();
      }, 50);
    };

    const openDialog = () => {
      lastFocused = trigger;
      renderContactItems();
      if (!dialog.open) dialog.showModal();
      window.requestAnimationFrame(() => qs("[data-contact-close]", dialog)?.focus());
    };

    const copyText = async (value) => {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(value);
        return true;
      }
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const copied = document.execCommand("copy");
      textarea.remove();
      if (!copied) throw new Error("Copy command failed");
      return true;
    };

    trigger.addEventListener("click", openDialog);
    qsa("[data-contact-close]", dialog).forEach((button) => button.addEventListener("click", closeDialog));
    dialog.addEventListener("cancel", (event) => {
      event.preventDefault();
      closeDialog();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dialog.open) {
        event.preventDefault();
        closeDialog();
      }
    });
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) closeDialog();
      const target = event.target;
      const copyButton = target && target.closest ? target.closest("[data-contact-copy]") : null;
      if (!copyButton) return;
      const contact = content.profile.contacts.find((entry) => entry.id === copyButton.dataset.contactCopy);
      if (!contact || !contact.copyValue) return;
      copyText(contact.copyValue)
        .then(() => setStatus(copy("contactCopied")))
        .catch(() => setStatus(copy("contactCopyFailed")));
    });
  }

  function bindHeroParallax() {
    const visual = qs(".hero-v4-visual") || qs(".hero-visual");
    const stage = qs(".character-v4") || qs(".hero-stage");
    const portrait = qs(".portrait-dock img");
    if (!visual || !stage || !window.matchMedia) return;
    const area = qs(".hero-v4") || visual;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // 轻量视差：只在 rAF 中写 transform 变量，避免 pointermove 直接触发布局与跳变。
    // 扁平人物素材不叠加假眼睛图层，先用自然的整体跟随保留真实画面。
    const followers = [
      { el: stage, varX: "--hero-pointer-x", varY: "--hero-pointer-y", ampX: 3.5, ampY: 2.5 }
    ];
    if (portrait) followers.push({ el: portrait, varX: "--portrait-pointer-x", varY: "--portrait-pointer-y", ampX: 2, ampY: 1.4 });
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    const render = () => {
      frame = 0;
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;
      followers.forEach((follower) => {
        follower.el.style.setProperty(follower.varX, (currentX * follower.ampX).toFixed(2));
        follower.el.style.setProperty(follower.varY, (currentY * follower.ampY).toFixed(2));
      });
      if (Math.abs(targetX - currentX) > 0.01 || Math.abs(targetY - currentY) > 0.01) schedule();
    };
    const schedule = () => {
      if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(render);
    };
    const update = (x, y) => {
      targetX = Math.max(-1, Math.min(1, Number(x) || 0));
      targetY = Math.max(-1, Math.min(1, Number(y) || 0));
      schedule();
    };
    const reset = () => update(0, 0);
    window.luluFollow = { update, reset };
    area.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      if (visual.dataset.orbitalMode === "journey") return;
      const rect = area.getBoundingClientRect();
      update(((event.clientX - rect.left) / rect.width) * 2 - 1, ((event.clientY - rect.top) / rect.height) * 2 - 1);
    }, { passive: true });
    area.addEventListener("pointerleave", reset, { passive: true });
    reducedMotion.addEventListener("change", () => {
      if (reducedMotion.matches) {
        if (frame) {
          cancelAnimationFrame(frame);
          frame = 0;
        }
        followers.forEach((follower) => {
          follower.el.style.removeProperty(follower.varX);
          follower.el.style.removeProperty(follower.varY);
        });
        targetX = 0;
        targetY = 0;
        currentX = 0;
        currentY = 0;
      } else {
        schedule();
      }
    });
  }

  function bindOrbitalJourney() {
    const root = qs("[data-orbital-root]");
    const journey = qs("[data-orbital-journey]");
    const scenesBox = qs("[data-orbital-scenes]");
    const compass = qs("[data-orbital-compass]");
    const anchorsBox = qs("[data-orbital-anchors]");
    const actions = qs("[data-orbital-actions]");
    const toggle = qs("[data-orbital-toggle]");
    const status = qs("[data-orbital-status]");
    const config = content.orbital;
    if (!root || !journey || !scenesBox || !compass || !anchorsBox || !actions || !toggle || !status) return;
    if (!config || !Array.isArray(config.anchors) || !config.anchors.length || !config.fallbackImage) return;

    const reducedMotion = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false, addEventListener: () => {} };
    const HOLD = 20;
    const WINDOW = 25;
    const FADE_EDGE = 45 + WINDOW; // 过渡窗口以相邻锚点中点(45°)为中心，半宽 25°
    const INERTIA_DECAY = 0.94;
    const INERTIA_STOP = 0.02;
    const ease = (t) => t * t * (3 - 2 * t);
    const ringDistance = (theta, anchorAngle) => Math.abs((((theta - anchorAngle) % 360) + 540) % 360 - 180);
    const sceneWeight = (theta, anchorAngle) => {
      const distance = ringDistance(theta, anchorAngle);
      if (distance <= HOLD) return 1;
      if (distance >= FADE_EDGE) return 0;
      return ease((FADE_EDGE - distance) / (2 * WINDOW));
    };
    const anchorName = (anchor) => (currentLanguage === "en" ? anchor.enName || anchor.name : anchor.name);

    let mode = "solo";
    let theta = 0;
    let velocity = 0;
    let rafId = 0;
    let lastFrameTime = 0;
    let lastAppliedTheta = null;
    let animTarget = null;
    let animFrom = 0;
    let animStart = 0;
    let animDuration = 0;
    let nearestIndex = -1;
    let dragging = false;
    let dragPointerId = null;
    let dragStartTheta = 0;
    let dragStartAngle = 0;
    let dragCenterX = 0;
    let dragCenterY = 0;
    let moveSamples = [];
    let collapseTimer = 0;

    const anchors = config.anchors.map((entry, index) => ({
      index,
      angle: entry.angle,
      name: entry.name,
      enName: entry.enName,
      src: entry.src,
      state: "pending",
      usedFallback: false,
      img: null,
      button: null
    }));

    // Compass ticks sit at -anchor.angle so tick i reaches the top marker exactly
    // when theta === anchor.angle (the scene's full-opacity point).
    anchors.forEach((anchor) => {
      const tick = document.createElement("span");
      tick.className = "orbital-tick";
      tick.style.setProperty("--tick-angle", `${-anchor.angle}deg`);
      compass.appendChild(tick);

      const wrap = document.createElement("div");
      wrap.className = "orbital-anchor";
      wrap.style.setProperty("--anchor-angle", `${-anchor.angle}deg`);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "orbital-anchor-button";
      button.style.setProperty("--anchor-counter", `${anchor.angle}deg`);
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("pointerdown", (event) => event.stopPropagation());
      button.addEventListener("click", () => {
        loadScene(anchor.index);
        goToAnchor(anchor);
      });
      wrap.appendChild(button);
      anchorsBox.appendChild(wrap);
      anchor.button = button;
    });

    const marker = document.createElement("div");
    marker.className = "orbital-marker";
    marker.setAttribute("aria-hidden", "true");
    journey.insertBefore(marker, anchorsBox);

    function updateSceneStyle(anchor) {
      if (!anchor.img) return;
      const weight = sceneWeight(theta, anchor.angle);
      const depth = Math.min(ringDistance(theta, anchor.angle) / (HOLD + WINDOW), 1);
      const farScale = anchor.angle === 180 ? 0.96 : 1;
      anchor.img.style.opacity = weight.toFixed(3);
      anchor.img.style.transform = `translateY(${(12 * depth).toFixed(2)}px) scale(${((1 - 0.05 * depth) * farScale).toFixed(4)})`;
    }

    function applyTheta() {
      if (theta === lastAppliedTheta) return;
      lastAppliedTheta = theta;
      journey.style.setProperty("--ring-angle", `${theta.toFixed(2)}deg`);
      let nearest = 0;
      let nearestDistance = Infinity;
      anchors.forEach((anchor) => {
        if (ringDistance(theta, anchor.angle) <= HOLD + WINDOW) loadScene(anchor.index);
        updateSceneStyle(anchor);
        const distance = ringDistance(theta, anchor.angle);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearest = anchor.index;
        }
      });
      if (nearest !== nearestIndex) {
        nearestIndex = nearest;
        anchors.forEach((anchor) => anchor.button.setAttribute("aria-pressed", String(anchor.index === nearest)));
        if (mode === "journey") status.textContent = `${copy("orbitalStatusCurrent")}${anchorName(anchors[nearest])}`;
      }
    }

    function wake() {
      if (!rafId) rafId = requestAnimationFrame(frame);
    }

    function frame(now) {
      rafId = 0;
      const dt = lastFrameTime ? Math.min(now - lastFrameTime, 64) : 16.7;
      lastFrameTime = now;
      let active = false;
      if (animTarget !== null) {
        const t = animDuration > 0 ? Math.min((now - animStart) / animDuration, 1) : 1;
        theta = animFrom + (animTarget - animFrom) * ease(t);
        if (t >= 1) animTarget = null;
        else active = true;
      } else if (!dragging && Math.abs(velocity) > INERTIA_STOP && !reducedMotion.matches) {
        theta += velocity * dt;
        velocity *= Math.pow(INERTIA_DECAY, dt / 16.7);
        active = true;
      } else {
        velocity = 0;
      }
      applyTheta();
      if (active) wake();
      else lastFrameTime = 0;
    }

    function animateTo(target, duration) {
      animFrom = theta;
      animTarget = target;
      animStart = performance.now();
      animDuration = reducedMotion.matches ? 0 : duration;
      velocity = 0;
      wake();
    }

    function goToAnchor(anchor) {
      const current = ((theta % 360) + 360) % 360;
      const delta = (((anchor.angle - current) % 360) + 540) % 360 - 180;
      animateTo(theta + delta, Math.min(160 + Math.abs(delta) * 3, 520));
    }

    function loadScene(index) {
      const anchor = anchors[index];
      if (!anchor || anchor.state !== "pending") return;
      anchor.state = "loading";
      const img = document.createElement("img");
      img.className = "orbital-scene";
      img.alt = "";
      img.width = 1023;
      img.height = 1537;
      img.decoding = "async";
      img.draggable = false;
      img.addEventListener("load", () => {
        anchor.state = "ready";
        scenesBox.classList.remove("is-loading");
      });
      img.addEventListener("error", () => {
        if (!anchor.usedFallback) {
          anchor.usedFallback = true;
          img.src = config.fallbackImage;
          return;
        }
        anchor.state = "dead";
        if (anchor.img) anchor.img.remove();
        anchor.img = null;
        if (anchors.every((entry) => entry.state === "dead")) {
          scenesBox.classList.remove("is-loading");
          actions.hidden = true;
          if (mode === "journey") setMode("solo");
        }
      });
      anchor.img = img;
      scenesBox.appendChild(img);
      updateSceneStyle(anchor);
      img.src = anchor.src;
    }

    function preloadPrimaryScenes() {
      anchors.forEach((anchor) => {
        if (anchor.angle !== 180) loadScene(anchor.index);
      });
    }

    function idleLoadRemaining() {
      const schedule = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 900));
      schedule(() => anchors.forEach((anchor) => loadScene(anchor.index)));
    }

    function setMode(next, options = {}) {
      if (mode === next) return;
      mode = next;
      root.dataset.orbitalMode = next;
      toggle.setAttribute("aria-expanded", String(next === "journey"));
      toggle.textContent = next === "journey" ? copy("orbitalExit") : copy("orbitalEnter");
      window.clearTimeout(collapseTimer);
      if (next === "journey") {
        journey.hidden = false;
        journey.tabIndex = 0;
        void journey.offsetWidth;
        journey.classList.add("is-open");
        lastAppliedTheta = null;
        applyTheta();
        idleLoadRemaining();
        status.textContent = copy("orbitalStatusEnter");
      } else {
        journey.classList.remove("is-open");
        journey.classList.remove("is-dragging");
        dragging = false;
        velocity = 0;
        animTarget = null;
        status.textContent = copy("orbitalStatusExit");
        const finish = () => {
          if (mode !== "solo") return;
          journey.hidden = true;
          journey.removeAttribute("tabindex");
        };
        if (reducedMotion.matches) finish();
        else collapseTimer = window.setTimeout(finish, 420);
        if (options.focusToggle && toggle.isConnected) toggle.focus();
      }
    }

    toggle.addEventListener("click", () => setMode(mode === "solo" ? "journey" : "solo"));
    toggle.addEventListener("pointerenter", preloadPrimaryScenes, { once: true });
    toggle.addEventListener("focus", preloadPrimaryScenes, { once: true });

    journey.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const step = (event.shiftKey ? 45 : 5) * (event.key === "ArrowRight" ? 1 : -1);
      animateTo(theta + step, Math.min(160 + Math.abs(step) * 4, 420));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || mode !== "journey") return;
      if (qs("dialog[open]")) return;
      setMode("solo", { focusToggle: true });
    });

    const polarAngle = (event) => (Math.atan2(event.clientY - dragCenterY, event.clientX - dragCenterX) * 180) / Math.PI;

    journey.addEventListener("pointerdown", (event) => {
      if (mode !== "journey" || dragging) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      const rect = journey.getBoundingClientRect();
      dragCenterX = rect.left + rect.width / 2;
      dragCenterY = rect.top + rect.height / 2;
      dragging = true;
      dragPointerId = event.pointerId;
      dragStartTheta = theta;
      dragStartAngle = polarAngle(event);
      moveSamples = [{ time: performance.now(), theta }];
      velocity = 0;
      animTarget = null;
      journey.classList.add("is-dragging");
      try {
        journey.setPointerCapture(event.pointerId);
      } catch (error) {
        // Pointer capture can fail for synthetic events; dragging still works without it.
      }
      if (event.pointerType === "mouse") event.preventDefault();
    });

    journey.addEventListener("pointermove", (event) => {
      if (!dragging || event.pointerId !== dragPointerId) return;
      const delta = (((polarAngle(event) - dragStartAngle) % 360) + 540) % 360 - 180;
      theta = dragStartTheta + delta;
      const now = performance.now();
      moveSamples.push({ time: now, theta });
      moveSamples = moveSamples.filter((sample) => now - sample.time <= 120);
      wake();
    });

    const endDrag = (event) => {
      if (!dragging || (event.pointerId !== undefined && event.pointerId !== dragPointerId)) return;
      dragging = false;
      dragPointerId = null;
      journey.classList.remove("is-dragging");
      const now = performance.now();
      const windowSamples = moveSamples.filter((sample) => now - sample.time <= 120);
      if (windowSamples.length >= 2) {
        const first = windowSamples[0];
        const last = windowSamples[windowSamples.length - 1];
        const span = last.time - first.time;
        velocity = span > 0 ? (last.theta - first.theta) / span : 0;
      } else {
        velocity = 0;
      }
      if (reducedMotion.matches) velocity = 0;
      moveSamples = [];
      wake();
    };
    journey.addEventListener("pointerup", endDrag);
    journey.addEventListener("pointercancel", endDrag);

    if ("IntersectionObserver" in window) {
      const hero = qs(".hero-v4");
      if (hero) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting && mode === "journey") setMode("solo");
          });
        }, { threshold: 0.1 });
        observer.observe(hero);
      }
    }

    reducedMotion.addEventListener?.("change", () => {
      velocity = 0;
      if (reducedMotion.matches && animTarget !== null) {
        theta = animTarget;
        animTarget = null;
        applyTheta();
      }
    });

    orbitalCopyRefresh = () => {
      toggle.textContent = mode === "journey" ? copy("orbitalExit") : copy("orbitalEnter");
      journey.setAttribute("aria-label", copy("orbitalAnchorsLabel"));
      anchorsBox.setAttribute("aria-label", copy("orbitalAnchorsLabel"));
      anchors.forEach((anchor) => {
        const name = anchorName(anchor);
        anchor.button.textContent = name;
        anchor.button.setAttribute("aria-label", `${copy("orbitalAnchorGo")} ${name}`);
      });
    };
    orbitalCopyRefresh();
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
    renderLocalizedHome();
    renderSimpleCards("[data-honor-list]", content.honors, "honor-card", (honor) => `<h3>${honor.title}</h3><p>${honor.detail}</p>`);
    renderCellSamDetail(); renderCellSamAgentSystem(); bindMobileNav(); bindLanguageControl(); bindImageFallbacks(); bindContactDialog(); bindHeroParallax(); bindOrbitalJourney(); loadAnalytics();
  });
})();
