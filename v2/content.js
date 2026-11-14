/* ============================================================
   EDIT YOUR WEBSITE HERE. This is the only file you need to change.
   - Keep the quotes "" and commas , exactly as they are.
   - Put *stars* around words you want highlighted.
   - To remove an item, delete its whole { ... }, line.
   ============================================================ */
const CONTENT = {
  siteTitle: "Deekshana R | Automation Engineer",
  name: "Deekshana R",
  initial: "D",

  photo: "assets/photo.png",     // your picture. photoShape: "cutout" (transparent PNG) or "circle" (normal photo)
  photoShape: "cutout",

  badge: "Open to work",
  hello: "Hi, I'm Deekshana",
  headline: "Automation that *just works.*",
  intro: "I build *Python automation* and *API integrations*, and I test everything I ship.",
  buttons: [
    { label: "See my work", href: "#work", style: "primary" },
    { label: "Say hi", href: "mailto:deekshanaravi45@gmail.com", style: "light" }
  ],

  stats: [
    { number: "3+", label: "years automating IT work" },
    { number: "15+", label: "Python scripts built" },
    { number: "2x", label: "Hi-Five Award" },
    { number: "2024-25", label: "Key player of the team" }
  ],

  summary: {
    title: "In short",
    points: [
      "3+ years building workflow automation for business operations",
      "Strong in Python scripting, API integrations and database validation",
      "Tested integrations across BMC, ESB and AIOps platforms",
      "End-to-end automation, from requirements to release",
      "Work closely with stakeholders to improve processes"
    ]
  },

  what: {
    title: "What I do",
    subtitle: "Three things I do well.",
    // label = small tag, headline = the catchy line, text = one sentence, tools = up to 3 short chips
    items: [
      { label: "Automate", headline: "Fewer manual steps.",
        text: "Python scripts and workflows that run end to end, from the first trigger to the final status update.",
        tools: ["Python", "Linux", "Workflows"] },
      { label: "Integrate", headline: "Systems that talk to each other.",
        text: "REST and ESB APIs that move data between tools and keep every system in sync.",
        tools: ["REST APIs", "ESB", "SQL"] },
      { label: "Test", headline: "Releases you can trust.",
        text: "Functional, integration and regression tests, plus UAT support, before anything goes live.",
        tools: ["Selenium", "Regression", "UAT"] }
    ]
  },

  work: {
    title: "My work",
    // image: "assets/my-project.png" is optional. Leave "" to show a colored block.
    items: [
      { tag: "AI", title: "TriageAI", label: "View on GitHub", href: "https://github.com/DeekshanaR/TriageAI", image: "",
        demo: "demo.html",   // optional: adds a "Try live demo" link. Delete this line to remove it.
        text: "A Python service that routes IT support tickets and knows when to ask a human.",
        // points = short bullets (optional). stack = technologies line (optional).
        points: [
          "ML classifies tickets and explains every decision",
          "Risk-based policy: automatic, approval or human-only",
          "Blocks prompt injection before it reaches the AI",
          "Groups ticket storms and learns from human corrections"
        ],
        stack: "Python, FastAPI, scikit-learn, SQLite, 46 tests" },
      { tag: "Automation", title: "Project name", text: "Short description goes here.", label: "View project", href: "#", image: "" }
    ]
  },

  contact: {
    title: "Let's talk.",
    text: "Open to automation, SDET and Python roles in Coimbatore or remote.",
    email: "deekshanaravi45@gmail.com",
    github: "https://github.com/DeekshanaR",
    resume: "assets/resume.pdf"
  },

  dock: [   // target must match a section id: home, what, work, contact
    { label: "Home", target: "home" }, { label: "What I do", target: "what" },
    { label: "Work", target: "work" }, { label: "Contact", target: "contact" }
  ],
  footer: "© 2026 Deekshana R"
};
