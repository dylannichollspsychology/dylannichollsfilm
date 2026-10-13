/* =============================================================================
   Renders the Work grid (index.html) and the film detail page (film.html)
   from the data in films.js. You should not need to edit this file.
   =========================================================================== */

(function () {
  "use strict";

  function el(tag, attrs, html) {
    const node = document.createElement(tag);
    if (attrs) for (const k in attrs) node.setAttribute(k, attrs[k]);
    if (html != null) node.innerHTML = html;
    return node;
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function thumbMarkup(film) {
    // Badge shown over the thumbnail (e.g. "Trailer", or nothing).
    const badge = film.videoNote
      ? '<span class="badge">' + esc(film.videoNote) + "</span>"
      : "";

    // 1. An image you've supplied wins.
    if (film.thumb) {
      return '<div class="thumb"><img src="' + esc(film.thumb) +
             '" alt="' + esc(film.title) + '" loading="lazy">' + badge + "</div>";
    }

    // 2. Otherwise, if it's a YouTube film, use its YouTube thumbnail.
    //    Prefer the HD (maxres) frame, but some videos don't have one — in
    //    that case YouTube returns a tiny 120x90 grey placeholder *as a valid
    //    image* (so onerror never fires). We detect that by its width and
    //    fall back to the standard-res frame, which always exists.
    if (film.youtube) {
      const max = "https://img.youtube.com/vi/" + esc(film.youtube) + "/maxresdefault.jpg";
      const hq  = "https://img.youtube.com/vi/" + esc(film.youtube) + "/hqdefault.jpg";
      const fb  = "if(!this.dataset.fb&&(this.naturalWidth<=120||!this.naturalWidth))" +
                  "{this.dataset.fb=1;this.src='" + hq + "';}";
      return '<div class="thumb"><img src="' + max + '" alt="' + esc(film.title) +
             '" loading="lazy" onload="' + fb + '" onerror="' + fb + '">' +
             badge + "</div>";
    }

    // 3. No image and no YouTube — styled title placeholder.
    const soon = film.watch
      ? '<span class="badge">' + esc(film.watchLabel || "Watch") + "</span>"
      : '<span class="badge">Preview soon</span>';
    return '<div class="thumb placeholder"><span>' + esc(film.title) +
           "</span>" + (badge || soon) + "</div>";
  }

  /* ---- Work grid -------------------------------------------------------- */
  function renderGrid() {
    const mount = document.getElementById("work-grid");
    if (!mount) return;
    FILMS.forEach(function (film) {
      const sub = [film.role, film.year].filter(Boolean).join("  ·  ");
      const card = el("a", {
        class: "card",
        href: "film.html?film=" + encodeURIComponent(film.slug),
        "aria-label": film.title + " (" + film.year + ")"
      });
      card.innerHTML =
        thumbMarkup(film) +
        '<div class="meta"><h2>' + esc(film.title) + " <span style='color:var(--muted)'>(" +
        esc(film.year) + ")</span></h2>" +
        '<div class="sub">' + esc(film.role) + "</div></div>";
      mount.appendChild(card);
    });
  }

  /* ---- Film detail ------------------------------------------------------ */
  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function renderFilm() {
    const mount = document.getElementById("film-detail");
    if (!mount) return;

    const slug = getParam("film");
    const film = FILMS.filter(function (f) { return f.slug === slug; })[0];

    if (!film) {
      mount.innerHTML =
        '<a class="back" href="index.html"><span class="arrow">&larr;</span> All work</a>' +
        '<div class="page-head"><h1>Film not found</h1>' +
        "<p>That film isn't listed. Head back to the work page.</p></div>";
      return;
    }

    document.title = film.title + " (" + film.year + ") — Dylan Nicholls";

    let player;
    if (film.youtube) {
      player =
        '<div class="player"><iframe src="https://www.youtube-nocookie.com/embed/' +
        esc(film.youtube) +
        '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ' +
        'allowfullscreen title="' + esc(film.title) + '"></iframe></div>';
      if (film.videoNote) {
        player += '<p class="player-note">' + esc(film.videoNote) + "</p>";
      }
    } else if (film.watch) {
      player =
        '<div class="player placeholder"><a class="watch-btn" href="' + esc(film.watch) +
        '" target="_blank" rel="noopener">' + esc(film.watchLabel || "Watch the film") +
        ' <span aria-hidden="true">&#8599;</span></a></div>';
    } else {
      player = '<div class="player placeholder">Preview coming soon</div>';
    }

    const facts = [];
    facts.push('<div><dt>Role</dt><dd>' + esc(film.role) + "</dd></div>");
    if (film.production) facts.push('<div><dt>Production</dt><dd>' + esc(film.production) + "</dd></div>");
    if (film.duration)  facts.push('<div><dt>Runtime</dt><dd>' + esc(film.duration) + "</dd></div>");
    facts.push('<div><dt>Year</dt><dd>' + esc(film.year) + "</dd></div>");
    if (film.note)      facts.push('<div><dt>Release</dt><dd>' + esc(film.note) + "</dd></div>");
    if (film.website) {
      const wlabel = film.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
      facts.push('<div><dt>Website</dt><dd><a class="fact-link" href="' + esc(film.website) +
                 '" target="_blank" rel="noopener">' + esc(wlabel) + "</a></dd></div>");
    }

    const paras = String(film.synopsis || "")
      .split(/\n{2,}/)
      .map(function (p) { return "<p>" + esc(p.trim()) + "</p>"; })
      .join("");

    let achBlock = "";
    if (Array.isArray(film.achievements) && film.achievements.length) {
      const isSel = function (a) { return /^official selection$/i.test(a.status || ""); };
      const awards = film.achievements.filter(function (a) { return !isSel(a); });
      const sels   = film.achievements.filter(isSel);

      let inner = "";
      if (awards.length) {
        inner += '<ul class="ach-list">' + awards.map(function (a) {
          const label = "<strong>" + esc(a.status) + "</strong>" +
                        (a.detail ? " — " + esc(a.detail) : "");
          const meta = esc(a.festival) + (a.year ? " · " + esc(a.year) : "");
          return '<li><span class="ach-label">' + label + "</span>" +
                 '<span class="ach-meta">' + meta + "</span></li>";
        }).join("") + "</ul>";
      }
      if (sels.length) {
        inner += '<h3 class="ach-sub">Official Selections</h3><ul class="ach-list">' +
          sels.map(function (a) {
            return '<li><span class="ach-label">' + esc(a.festival) + "</span>" +
                   '<span class="ach-meta">' + (a.year ? esc(a.year) : "") + "</span></li>";
          }).join("") + "</ul>";
      }
      achBlock = '<section class="achievements"><h2>Awards &amp; Selections</h2>' + inner + "</section>";
    }

    let creditsBlock = "";
    if (Array.isArray(film.credits) && film.credits.length) {
      const rows = film.credits.map(function (c) {
        if (c.heading) {
          return '<h3 class="fc-heading">' + esc(c.heading) + "</h3>";
        }
        const note = c.note ? ' <span class="fc-note">(' + esc(c.note) + ")</span>" : "";
        const names = (c.names || []).map(esc).join("<br>");
        return '<div class="fc-row"><dt>' + esc(c.role) + note +
               "</dt><dd>" + names + "</dd></div>";
      }).join("");
      creditsBlock =
        '<section class="film-credits"><h2>Credits</h2><dl>' + rows + "</dl></section>";
    }

    mount.innerHTML =
      '<a class="back" href="index.html"><span class="arrow">&larr;</span> All work</a>' +
      player +
      '<div class="film-body">' +
        "<div>" +
          "<h1>" + esc(film.title) + "</h1>" +
          '<div class="year">' + esc(film.year) + "</div>" +
          '<div class="synopsis">' + paras + "</div>" +
        "</div>" +
        '<aside class="filmfacts"><dl>' + facts.join("") + "</dl></aside>" +
      "</div>" +
      achBlock +
      creditsBlock;
  }

  /* ---- Credits list (About page) --------------------------------------- */
  function creditRowHTML(item, linked) {
    const bits = [item.production, item.duration].filter(Boolean).join("  ·  ");
    const prod = [bits, item.note].filter(Boolean).join("  —  ");
    const title = linked
      ? '<a class="title" href="film.html?film=' + encodeURIComponent(item.slug) + '">' +
          esc(item.title) + "</a>"
      : '<span class="title">' + esc(item.title) + "</span>";
    return '<div class="yr">' + esc(item.year) + "</div>" +
      '<div class="ct">' + title +
        '<div class="roles">' + esc(item.role) + "</div>" +
        (prod ? '<div class="prod">' + esc(prod) + "</div>" : "") +
      "</div>";
  }

  function fillCredits(mountId, items, linked) {
    const mount = document.getElementById(mountId);
    if (!mount || !Array.isArray(items)) return;
    items.forEach(function (item) {
      const row = el("div", { class: "credit" });
      row.innerHTML = creditRowHTML(item, linked);
      mount.appendChild(row);
    });
  }

  function renderCredits() {
    fillCredits("credits-list", typeof FILMS !== "undefined" ? FILMS : [], true);
    fillCredits("extra-credits-list", typeof EXTRA_CREDITS !== "undefined" ? EXTRA_CREDITS : [], false);
  }

  /* ---- Awards & Recognition (About page) ------------------------------- */
  function renderAwards() {
    const mount = document.getElementById("awards-list");
    if (!mount || typeof AWARDS === "undefined") return;
    AWARDS.forEach(function (a) {
      let ct = '<span class="title">' + esc(a.title) + "</span>";
      if (a.note) ct += '<div class="roles">' + esc(a.note) + "</div>";
      if (Array.isArray(a.items) && a.items.length) {
        ct += '<div class="award-lines">' + a.items.map(function (it) {
          const detail = it.detail ? " — " + esc(it.detail) : "";
          const org = it.org ? ' <span class="org">(' + esc(it.org) + ")</span>" : "";
          return '<p class="award-line"><strong>' + esc(it.result) + "</strong>" + detail + org + "</p>";
        }).join("") + "</div>";
      }
      const row = el("div", { class: "credit" });
      row.innerHTML = '<div class="yr">' + esc(a.year) + '</div><div class="ct">' + ct + "</div>";
      mount.appendChild(row);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderGrid();
    renderFilm();
    renderCredits();
    renderAwards();
  });
})();
