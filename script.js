(() => {
  const content = window.SITE_CONTENT || SITE_CONTENT;

  const byId = (id) => document.getElementById(id);
  const setText = (id, value) => {
    const element = byId(id);
    if (element) element.textContent = value ?? "";
  };

  document.title = `${content.name} | Academic Homepage`;
  setText("nav-name", content.name);
  setText("hero-affiliation", content.affiliation);
  setText("hero-title", content.heroTitle);
  setText("hero-subtitle", content.heroSubtitle);
  setText("footer-name", content.name);
  setText("copyright-year", new Date().getFullYear());

  const photoWrap = byId("photo-wrap");
  const profilePhoto = byId("profile-photo");
  if (content.profilePhoto) {
    profilePhoto.src = content.profilePhoto;
    profilePhoto.alt = content.profilePhotoAlt || `Portrait of ${content.name}`;
  } else {
    photoWrap.hidden = true;
    document.querySelector(".hero").style.gridTemplateColumns = "1fr";
  }

  const socialLinks = byId("social-links");
  (content.links || [])
    .filter((item) => item.url)
    .forEach((item) => {
      const anchor = document.createElement("a");
      anchor.className = "link-pill";
      anchor.href = item.url;
      anchor.textContent = item.label;
      if (/^https?:\/\//.test(item.url)) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
      socialLinks.appendChild(anchor);
    });

  const aboutContent = byId("about-content");
  (content.about || []).forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph.replace(/\s+/g, " ").trim();
    aboutContent.appendChild(p);
  });

  const researchList = byId("research-list");
  (content.research || []).forEach((item) => {
    const article = document.createElement("article");
    article.className = "research-card";

    const title = document.createElement("h3");
    title.textContent = item.title;

    const description = document.createElement("p");
    description.textContent = item.description;

    article.append(title, description);
    researchList.appendChild(article);
  });

  const fullListLink = byId("all-publications-link");
  if (content.allPublicationsUrl) {
    fullListLink.href = content.allPublicationsUrl;
    fullListLink.hidden = false;
  }

  const publicationList = byId("publication-list");
  (content.publications || []).forEach((item) => {
    const article = document.createElement("article");
    article.className = "publication";

    const year = document.createElement("div");
    year.className = "publication-year";
    year.textContent = item.year;

    const body = document.createElement("div");

    const title = document.createElement("p");
    title.className = "publication-title";
    title.textContent = item.title;

    const authors = document.createElement("p");
    authors.className = "publication-authors";
    authors.innerHTML = item.authors;

    const venue = document.createElement("p");
    venue.className = "publication-venue";
    venue.textContent = item.venue;

    body.append(title, authors, venue);

    const links = (item.links || []).filter((link) => link.url);
    if (links.length > 0) {
      const linkRow = document.createElement("div");
      linkRow.className = "publication-links";

      links.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.label;
        if (/^https?:\/\//.test(link.url)) {
          anchor.target = "_blank";
          anchor.rel = "noopener noreferrer";
        }
        linkRow.appendChild(anchor);
      });

      body.appendChild(linkRow);
    }

    article.append(year, body);
    publicationList.appendChild(article);
  });

  const newsList = byId("news-list");
  (content.news || []).forEach((item) => {
    const row = document.createElement("div");
    row.className = "timeline-item";

    const date = document.createElement("div");
    date.className = "timeline-date";
    date.textContent = item.date;

    const text = document.createElement("p");
    text.className = "timeline-content";
    text.textContent = item.text;

    row.append(date, text);
    newsList.appendChild(row);
  });

  const email = byId("contact-email");
  email.textContent = content.contact.email;
  email.href = `mailto:${content.contact.email}`;
  setText("contact-office", content.contact.office);

  const button = byId("menu-button");
  const nav = byId("site-nav");

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
})();
