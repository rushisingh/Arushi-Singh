# Arushi Singh — Portfolio Website

A minimalist personal portfolio built with pure HTML, CSS, and JavaScript.
**Color palette:** Black · Off-white · Green accents

---

## 📁 File Structure

```
portfolio/
├── index.html      ← Main HTML (all sections)
├── style.css       ← All styles & animations
├── script.js       ← Navigation & interactions
├── resume.pdf      ← Your CV (add this file!)
└── README.md       ← This file
```

---

## ✏️ How to Customize

### Personal Info
Open `index.html` and search for the following placeholders to replace:

| Placeholder | Replace with |
|---|---|
| `[your field]` | Your research field |
| `[domain A]` / `[domain B]` | Your specific domains |
| `arushi@example.com` | Your real email |
| `arushisingh` (GitHub/LinkedIn) | Your actual handles |
| Paper/blog titles & links | Your real publications |
| Organization and university names | Your actual background |

### Resume/CV
Drop your PDF as `resume.pdf` in the portfolio folder. All CV links already point to it.

### Colors
In `style.css`, edit the `:root` block at the top:
```css
--green: #4ade80;      /* main accent — change to any color */
--black: #0a0a0a;      /* background */
--off-white: #f5f5f0;  /* text */
```

---

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free — Recommended)
1. Create a GitHub account at github.com
2. Create a new repository named `yourusername.github.io`
3. Upload all portfolio files to the repo (drag & drop or git push)
4. Go to **Settings → Pages → Source: main branch**
5. Your site is live at `https://yourusername.github.io` in ~1 min

### Option 2: Custom Domain + GitHub Pages
1. Follow Option 1 above first
2. Buy a domain (recommended: **Namecheap** or **Google Domains** or **Porkbun**)
   - Good options: `arushisingh.com`, `arushisingh.io`, `arushi.dev`
3. In your domain registrar, add these DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  yourusername.github.io
   ```
4. In GitHub Pages settings, enter your custom domain
5. Check "Enforce HTTPS" — done! 🎉

### Option 3: Netlify (Drag & Drop, Free)
1. Go to netlify.com and sign up
2. Drag your entire portfolio folder onto the Netlify dashboard
3. Your site deploys instantly with a free `.netlify.app` URL
4. Add a custom domain in Settings if desired

### Option 4: Vercel (Also free)
1. Push files to GitHub first
2. Go to vercel.com, import your GitHub repo
3. One-click deploy with automatic HTTPS

---

## 📧 Contact Form
The form currently shows a success message on submit. To make it actually send emails, integrate one of:
- **Formspree** (free tier): Replace the `<form>` action with your Formspree endpoint
- **EmailJS**: Add their SDK and call their API in `handleSubmit()`
- **Netlify Forms**: Add `netlify` attribute to the form if hosting on Netlify

---

## 🔗 Recommended Tools
- **Google Analytics** — track visitors
- **Google Search Console** — SEO indexing
- **Favicon** — generate at favicon.io
- **OG Image** — add meta tags for social sharing previews

---

Built with ♥ — pure HTML/CSS/JS, no frameworks, no build step.
