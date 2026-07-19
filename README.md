# Atharva College of Engineering — Innovation & Entrepreneurship Cell (I&E Cell)

Welcome to the official repository of the **ACE Innovation & Entrepreneurship Cell (I&E Cell)** web application. This is a high-performance, visually immersive, and highly interactive cinematic website designed to showcase the student-led innovation ecosystem at Atharva College of Engineering.

The web platform unifies the three pillars of innovation on campus: **ACE IIC** (Institution's Innovation Council), **ACE EMBER** (Entrepreneurship Cell), and **IEDC** (Innovation and Entrepreneurship Development Centre).

---

## 🌟 Visual & Interactive Features

- **Cinematic Entry Preloader:** An immersive intro experience that plays screen-optimized (mobile vs. desktop) background video and audio. It features smart fallbacks that ask for user interaction if browser autoplay settings block unmuted audio.
- **3D Hero Scene:** Built using **React Three Fiber (R3F)** and **Three.js**. It renders a dynamic particle field (1500+ coordinates), rotating wireframe icosahedrons, and orbiting rings that react to mouse pointer inputs.
- **Interactive Lightbox Gallery:** A category-filtered gallery showcasing key milestones with slide-out details and a smooth full-screen modal lightbox.
- **Team Registry & Archives:** Displays the leadership structure (CEOs, CFOs, Coordinators, and Leads) along with a dynamic year-wise archive filter enabling visitors to view past committees.
- **Custom Design Tokens & Glassmorphism:** Tailored border-glow effects, standard CSS masking (`mask-composite` & `mask`), glassmorphic layouts, and smooth spring animations.

---

## 🛠️ Technology Stack

The project utilizes a modern frontend stack chosen for performance, animation control, and spatial graphics:

*   **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/) (fast hot module reloading and build tool)
*   **Routing:** [React Router DOM v7](https://reactrouter.com/) (declarative routing for pages)
*   **3D Render Engine:** [Three.js](https://threejs.org/) & [@react-three/fiber](https://r3f.docs.pmnd.rs/) (React wrapper for WebGL)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) (scroll triggers, entrance effects, exit animations) & [Anime.js](https://animejs.com/) (sequencing)
*   **Styling:** [Tailwind CSS v3](https://tailwindcss.com/) & Vanilla CSS custom configurations (neon borders, gradients, sheens)
*   **Iconography:** [Lucide React](https://lucide.dev/) (sleek, lightweight SVG icons)

---

## 📁 Repository Structure

```text
├── .vscode/               # Workspace configuration files
├── public/                # Static assets (logos, images, preloader videos)
│   └── assets/
│       ├── Intro/         # Laptop & Mobile cinematic entry MP4s
│       ├── gallery/       # Event photos and milestones
│       └── team/          # Profile pictures & placeholders
├── src/
│   ├── components/        # Reusable interface components
│   │   ├── AnimatedIELogo.jsx   # Custom animated SVG logo container
│   │   ├── Countdown.jsx        # Countdowns for upcoming summits
│   │   ├── EventVisual.jsx      # Specialized event layout visuals
│   │   ├── Footer.jsx           # Site footer with platform links
│   │   ├── GeometricIcon.jsx    # Custom SVG decorative elements
│   │   ├── HeroScene.jsx        # R3F WebGL 3D canvas and mouse particle field
│   │   ├── IntroPreloader.jsx   # Video-based preloader with browser block logic
│   │   ├── Marquee.jsx          # Seamless horizontal text scrolling
│   │   ├── Navbar.jsx           # Global navigation with blur effects
│   │   ├── Reveal.jsx           # Framer-motion scroll entry helper
│   │   ├── SectionHeading.jsx   # Standardized typography hierarchy headers
│   │   ├── Testimonials.jsx     # Principal and Coordinator statements
│   │   └── Timeline.jsx         # Interactive roadmap component
│   ├── data/              # Structured Javascript state objects
│   │   └── siteContent.js       # Holds all copy, stats, timeline data, team logs
│   ├── pages/             # Route-level page components
│   │   ├── About.jsx            # Cell pillars, vision, and operational history
│   │   ├── Gallery.jsx          # Milestones, award-winners, and lightbox view
│   │   ├── Home.jsx             # Combined dashboard of stats, hero R3F, and intros
│   │   ├── Initiatives.jsx      # Event cards showing hackathons, ideathons, and forums
│   │   └── Team.jsx             # Active team display & history archives dropdown
│   ├── App.jsx            # Main app entry, routes definition, and scroll mechanics
│   ├── index.css          # Tailwind base, utilities, and custom animation definitions
│   └── main.jsx           # Virtual DOM render pipeline mount
├── index.html             # Entry HTML skeleton
├── package.json           # Scripts, dependencies, and configuration
├── tailwind.config.js     # Tailwind theme extensions and layout spacing rules
└── vite.config.js         # Plugins configurations (React, build parameters)
```

---

## 🚀 Getting Started

To run this project locally, make sure you have [Node.js](https://nodejs.org/) installed, and then follow these steps:

### 1. Clone the repository and navigate to the directory:
```bash
git clone <repository_url>
cd I&E-Cell
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Run the development server:
```bash
npm run dev
```
The application will launch on your local host (usually `http://localhost:5173` or `http://127.0.0.1:5173`).

### 4. Build for production:
To compile optimized static HTML, CSS, and JS bundles to the `/dist` folder, run:
```bash
npm run build
```

### 5. Preview production build:
To run the production build locally to verify optimization and path assets:
```bash
npm run preview
```

---

## 📘 Site Sections Explained

### 1. Preloader Screen
When a user visits, the browser triggers `IntroPreloader.jsx`. It locks body scrolling and plays a custom introductory sequence. If browser media settings restrict autoplay, a subtle play overlay appears to request click-to-activate. Once finished, the website animates into view and body scrolling is unlocked.

### 2. Homepage & WebGL Interactive
Features a background R3F Canvas showing floating point clouds and wireframes. Below the fold, users can see:
- Core metrics (IEDC establishment, IIC MHRD recognition year, registered startups count).
- A quick review of campus blocks (EMBER, IIC, IEDC).
- Testimonials from the principal, Vice Principal, and HODs.

### 3. About & Pillars
Breaks down the operational model. Highlights how **ACE IIC** provides the *Innovation Mindset*, **IEDC** supports *Incubation Discipline* (costs, business canvas, funding), and **EMBER** sustains the *Entrepreneurship Community* via fests and networking. Includes a timeline mapping actions since 2012.

### 4. Initiatives
A detailed grid card display of active projects like the **Biomimicry Sprints**, **CiiA-4 Innovations Showcase** (M-Park, Smart Traffic Systems), and **Innovate to Elevate** school outreach models.

### 5. Gallery
Consists of two main elements:
- A sliding carousel featuring major international and national honors won by cell members (e.g., Eureka GCC, Ideathons).
- A grid of moments where users can view details or zoom into photos via an interactive lightbox.

### 6. Team Archives
Includes profiles for the active student council and administration coordinators. Features a responsive dropdown enabling access to historic lists from previous years.
