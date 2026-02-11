# Hi there, I'm Avinash Singh

### Full Stack Developer | GenAI Enthusiast | Competitive Programmer

I am a final-year student at **HBTU**, deeply passionate about building AI-driven applications and scalable web solutions. I love turning complex problems into clean, efficient code.

## Project Folder Structure

```
my-portfolio/
├── public/                  # Static assets that don't need compilation
│   ├── images/              # Project screenshots, etc. (kritiq.jpg, cabzy.png)
│   ├── fonts/               # Custom fonts (e.g., Neue Montreal, Founders Grotesk)
│   ├── avi-icon-light.webp
│   └── avi-icon-dark.webp
│
├── src/
│   ├── assets/              # Assets imported within components
│   │   └── icons/           # SVGs (if not using Lucide/React-Icons)
│   │
│   ├── components/          # React Components
│   │   ├── common/          # Global components used on multiple pages
│   │   │   ├── Navbar.jsx       # Top navigation
│   │   │   ├── Footer.jsx       # "Let's Work Together" + Live Clock
│   │   │   ├── Button.jsx       # Reusable "Let's Talk" button
│   │   │   └── Preloader.jsx    # Initial load animation
│   │   │
│   │   ├── home/            # Components specific ONLY to the Home Page
│   │   │   ├── Hero.jsx         # "Full Stack Developer" text
│   │   │   ├── About.jsx        # Profile Bio
│   │   │   ├── ProjectList.jsx  # The list of Cabzy, Crypnew, etc.
│   │   │   ├── Skills.jsx       # Vertical Accordion (Frontend/Backend)
│   │   │   └── Timeline.jsx     # Experience Scroll (Google Intern)
│   │   │
│   │   ├── ui/              # Small, atomic UI elements & effects
│   │   │   ├── CustomCursor.jsx # The GSAP follower cursor
│   │   │   ├── Marquee.jsx      # Infinite scrolling text component
│   │   │   └── Magnetic.jsx     # Wrapper for magnetic button effects
│   │   │
│   │   └── layout/          # Page structure wrappers
│   │       ├── Layout.jsx       # Main wrapper (Navbar + Outlet + Footer)
│   │       └── Curve.jsx        # Page transition curve (optional)
│
│   ├── context/             # React Context (Global State)
│   │   └── TransitionContext.jsx # To manage page transitions
│   │
│   ├── data/                # The "Database" (JSON/JS files)
│   │   ├── projects.js      # Array of your projects (Kritiq, Cabzy)
│   │   ├── skills.js        # Array for Skills Accordion
│   │   └── experience.js    # Array for Timeline
│   │
│   ├── hooks/               # Custom Logic
│   │   ├── useLocomotiveScroll.js # Initialize smooth scroll
│   │   ├── useTime.js       # Logic for the Footer clock
│   │   └── useMouse.js      # Logic for cursor interactions
│   │
│   ├── pages/               # The Views (Routes)
│   │   ├── Home.jsx         # Assembles the Home components
│   │   ├── ProjectDetails.jsx # Dynamic page (/project/:id)
│   │   └── NotFound.jsx     # 404 Error page
│   │
│   ├── styles/              # Global Styling
│   │   ├── index.css        # Tailwind imports & Base styles
│   │   └── locomotive.css   # Essential styles for smooth scroll
│   │
│   ├── utils/               # Helper Functions
│   │   ├── animations.js    # GSAP Animation configurations
│   │   └── cn.js            # ClassName merger (using clsx + tailwind-merge)
│   │
│   ├── App.jsx              # Routing Setup
│   └── main.jsx             # Entry Point
│
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js       # Theme configuration (Colors, Fonts)
└── vite.config.js

```