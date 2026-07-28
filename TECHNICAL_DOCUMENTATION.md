# ACE I&E Cell — Technical Documentation & Developer Guide

Welcome to the technical documentation for the **ACE Innovation & Entrepreneurship Cell (I&E Cell)** website. This document is designed to help you navigate, understand, and modify the codebase.

---

## 📂 Project Directory Structure

Here is a map of the repository showing where everything is located:

```text
I&E Cell/
├── .env                       # Environment variables (Google Sheet CSV URL)
├── database.md                # Detailed guide for setting up the Google Sheet CMS
├── index.html                 # Main HTML skeleton & SEO Meta tags
├── netlify.toml               # Netlify hosting build/redirect rules
├── package.json               # Node scripts and project dependencies
├── tailwind.config.js         # Custom Tailwind utility configuration
├── vite.config.js             # Vite development & build parameters
├── public/                    # Static assets (copied directly to output build folder)
│   └── assets/
│       ├── Intro/             # Desktop & Mobile preloader intro MP4 videos and audio
│       ├── announcements/     # Announcement local images
│       ├── events/            # Images for Initiatives / Events
│       ├── gallery/           # Images for milestones / gallery sections
│       ├── logos/             # Branding and icons
│       └── team/              # Team profile pictures (JPEGs, PNGs, and default.png)
└── src/                       # Source code directory
    ├── App.jsx                # Main App entry point, routing, and scroll behaviors
    ├── index.css              # Custom global styles, sheens, glow tokens, and Tailwind base
    ├── main.jsx               # React 19 DOM mounting configuration
    ├── components/            # Reusable interactive UI components
    │   ├── AnimatedIELogo.jsx  # Customized animated SVG logo container
    │   ├── Countdown.jsx       # Generic count-down timer logic (not currently rendered)
    │   ├── EventVisual.jsx     # Event decorative grid cards
    │   ├── Footer.jsx          # Official footer with campus address & social links
    │   ├── GeometricIcon.jsx   # Custom SVG decorative grid icons
    │   ├── HeroScene.jsx       # React Three Fiber (R3F) WebGL 3D rotating wireframe/particle field
    │   ├── IntroPreloader.jsx  # Handles cinematic video intro & browser autoplay permissions
    │   ├── Marquee.jsx         # Endless horizontally scrolling text
    │   ├── Navbar.jsx          # Blur-backdrop navigation bar
    │   ├── Reveal.jsx          # Framer Motion scroll entry container
    │   ├── SectionHeading.jsx  # Standardized component section header spacing
    │   ├── Testimonials.jsx    # Slider for Statements & Quotes
    │   └── Timeline.jsx        # Roadmaps/Historical highlights component
    ├── data/
    │   └── siteContent.js     # 🌟 CENTRAL DATABASE (Holds website copy, team list, archives, etc.)
    └── pages/                 # Full route pages
        ├── About.jsx           # Mission, Vision, and Historical timeline
        ├── Gallery.jsx         # Filterable event gallery, winners, and lightboxes
        ├── Home.jsx            # Main dashboard, stats count-up, R3F hero page, and announcements
        ├── Initiatives.jsx     # Lists events (hackathons, MUN, Model Senate, etc.)
        └── Team.jsx            # Active team listings, history archive year-dropdown, and OC list
```

---

## 🔄 Data Architecture & Connections

The website is designed so that you do **not** need to touch React page logic to update most text and lists. Content is centralized:

### 1. The Central Database (`src/data/siteContent.js`)
Almost all static website data lives inside [siteContent.js](file:///c:/Users/Aryan/Desktop/I&E%20Cell/src/data/siteContent.js). It exports arrays and objects that are imported directly by the components:
*   `showcaseProjects` -> Displayed on the Homepage.
*   `testimonials` -> Statements on the Homepage.
*   `initiatives` -> Individual event cards on the Initiatives page.
*   `currentTeam` -> The active committee grid on the Team page.
*   `yearlyArchives` -> Grouped past committees loaded when filtering by year.
*   `ocMembers` -> Organizing Committee list grid.

### 2. Live Announcements CMS (`src/utils/fetchAnnouncements.js`)
On the Homepage, the **Latest Announcements Spotlight** dynamically loads its contents from a published Google Sheet:
*   The fetch logic is inside `fetchAnnouncements.js`.
*   It reads the environment variable `VITE_ANNOUNCEMENTS_SHEET_URL` defined inside the `.env` file (locally) or in the hosting dashboard (production).
*   If the fetch fails, it automatically falls back to `DEFAULT_ANNOUNCEMENTS` defined at the top of `fetchAnnouncements.js`.

---

## 🛠️ Common Workflows (How to Edit the Site)

Here are step-by-step instructions for editing the site yourself:

### 💡 1. How to Add, Edit, or Remove a Team Member

You only need to make changes in **one place**: [siteContent.js](file:///c:/Users/Aryan/Desktop/I&E%20Cell/src/data/siteContent.js).

#### To Edit the Current Team:
1. Open `src/data/siteContent.js`.
2. Locate `export const currentTeam = [...]`.
3. To **add** a member, insert a new object in the list:
   ```javascript
   {
     name: 'Full Name',
     role: 'Their Title',
     image: '/assets/team/FileName.jpg', // Place the photo in public/assets/team/
     linkedin: 'https://linkedin.com/in/username',
   }
   ```
4. To **edit** a member, modify their existing values.
5. To **remove** a member, simply delete their `{ ... }` block from the array.

#### To Edit Yearly Archive Lists:
1. Locate `export const yearlyArchives = { ... }`.
2. Locate the specific academic year key, e.g. `'2025-26': [...]`.
3. Add, edit, or delete items inside that year's array exactly like the current team.

#### To Edit Organizing Committee (OC) Members:
1. Locate `export const ocMembers = [...]` at the bottom of the file.
2. Edit their names or LinkedIn URLs. To remove one, delete their line.

---

### 📷 2. How to Add and Update Images

1. **Format Requirements**: Always use standard formats like **JPEG**, **PNG**, or **WebP** for team photos.
   > [!WARNING]
   > Web browsers **cannot** natively render `.heic` or `.heif` photos (iPhone's raw format). Always export them as standard `.jpg` or `.png` before adding them to the project.
2. **Directory**: Copy all new team photos into the `public/assets/team/` directory.
3. **Reference**: In [siteContent.js](file:///c:/Users/Aryan/Desktop/I&E%20Cell/src/data/siteContent.js), point the `image` field to their file:
   `image: '/assets/team/FileName.jpg'` (note that `/public` is excluded from the path, as Vite automatically maps the contents of `public` to the root `/`).

---

### 📢 3. How to Update Announcements on the Homepage

Announcements are updated live through a Google Sheet:
1. Open your connected Google Sheet.
2. Add a new row at the bottom with details (`title`, `tag`, `subtext`, `image`, `date`, `time`, `venue`, `btnText`, `btnUrl`).
3. The website will automatically fetch the sheet, sort it, and display the **latest 3 rows** (bottom of the sheet) at the top of the spotlight slider.
4. For setup details, see [database.md](file:///c:/Users/Aryan/Desktop/I&E%20Cell/database.md).

---

## ⚙️ Development, Build, and Deploy Commands

Run these commands using the Command Prompt (`cmd.exe`) in the project directory:

*   **Run Local Dev Server**:
    `npm run dev` (starts the site locally at `http://localhost:5173`)
*   **Compile for Production**:
    `npm run build` (generates the highly optimized production build inside the `/dist` directory)
*   **Preview Production Build**:
    `npm run preview` (runs the built production bundle locally to test final animations and assets)

---

## 🔒 Autoplay & Audio Preloader Details

The homepage preloader ([IntroPreloader.jsx](file:///c:/Users/Aryan/Desktop/I&E%20Cell/src/components/IntroPreloader.jsx)) loads video and ambient audio assets from `public/assets/Intro/`.
*   Most modern browsers block audio from playing automatically without user interaction.
*   If the browser blocks autoplay with sound, the website will display an interactive overlay asking the user to click **"Enter Experience"** to start the cinematic soundscape.
