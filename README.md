# Dylan Nicholls — Documentary Filmmaker

The website for **dylannichollsfilm.com**. A simple, fast, static site — no build
step, no framework. Just HTML, CSS and a little JavaScript.

## Pages

| File            | Page                                             |
|-----------------|--------------------------------------------------|
| `index.html`    | **Work** — the grid of films                     |
| `film.html`     | A single film's detail page (video, synopsis)    |
| `about.html`    | **About** — bio and full credits                 |
| `contact.html`  | **Contact** — email and location                 |

## Updating your films  ← the one file you'll edit most

Open **`js/films.js`**. Everything about your films lives there — the Work grid
and every film's detail page are built from that list automatically. To update a
film, fill in these fields:

- **`youtube`** — the video ID from your YouTube link. For
  `youtube.com/watch?v=ABC123`, use `youtube: "ABC123"`. Leave it `""` and the
  film shows a tasteful "Preview coming soon" card instead.
- **`synopsis`** — 2–4 sentences. (Leave line breaks between paragraphs if you
  want more than one.)
- **`thumb`** — a thumbnail image, e.g. `thumb: "images/yaluu.jpg"`. Use a
  16:9 image (1280×720 is ideal) and put the file in the `images/` folder.
  Leave it `""` and a styled placeholder with the film's title shows instead.

You don't need to touch anything else to add, remove or reorder films.

## Thumbnails

Drop your images into the `images/` folder and point each film's `thumb` at it.
Keeping them 16:9 and around 1280×720 keeps the grid crisp and the site fast.

## About page links

In `about.html`, two links currently point to `#` (placeholders):

- **Netflix First Nations Scholarship** press release
- **AIDC x ABC Indigenous placement** press release

Replace the `href="#"` on each with the real URL when you have them.

## Previewing locally

Because the site loads a couple of JavaScript files, open it through a small local
server rather than double-clicking the file:

```bash
cd dylan-nicholls-film
python3 -m http.server 8000
```

Then visit http://localhost:8000 in your browser.

## Putting it online (dylannichollsfilm.com)

This is a static site, so hosting is free and easy. Two good options:

- **Netlify** — drag the whole folder onto app.netlify.com/drop, then point your
  `dylannichollsfilm.com` domain at it in the site settings.
- **Cloudflare Pages / GitHub Pages** — upload the folder to a repository and
  connect the domain.

Any static host works; there's no server code to run.
