export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "/pricing", label: "Pricing" },
  { href: "#proof", label: "Proof" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export const heroStats = [
  { value: "10,000+", label: "Gamers Optimized" },
  { value: "50,000+", label: "Systems Tuned" },
] as const;

export const featureCards = [
  {
    tag: "FPS",
    title: "FPS-focused optimization",
    description:
      "Reduce unnecessary system overhead, streamline heavy background behavior, and push Windows toward smoother frame delivery during gameplay.",
  },
  {
    tag: "Latency",
    title: "Low-latency system tuning",
    description:
      "Target responsiveness across input handling, service load, and OS behavior so the system feels tighter in competitive play.",
  },
  {
    tag: "Processes",
    title: "Background and startup reduction",
    description:
      "Cut startup drag, trim noisy processes, and reduce wasted resources that steal headroom from games and real-time workloads.",
  },
  {
    tag: "Power",
    title: "Power and device behavior tuning",
    description:
      "Switch into stronger power profiles and tune desktop behavior for a more aggressive performance posture when it matters.",
  },
  {
    tag: "Network",
    title: "Network and ping-aware optimization",
    description:
      "Support low-latency players with tuning paths that help reduce avoidable network overhead and keep online play feeling cleaner.",
  },
  {
    tag: "Protection",
    title: "One-device license protection",
    description:
      "Keep the commercial model simple: one personal license key, one protected device, and direct activation expectations.",
  },
] as const;

export const previewPanels = [
  {
    badge: "FPS Telemetry",
    title: "Frame stability dashboard",
    description:
      "A more competitive-facing overview of frame pacing, overhead, startup drag, and optimization readiness.",
    rows: [
      { label: "Average frame stability", value: "96%" },
      { label: "Optimization score", value: "92 / 100" },
      { label: "Startup impact", value: "Low" },
    ],
  },
  {
    badge: "Latency Layer",
    title: "Low-latency control center",
    description:
      "Surface the metrics performance users actually care about: response time, ping behavior, and overhead that affects feel.",
    rows: [
      { label: "System latency", value: "4.8 ms" },
      { label: "Ping path", value: "18 ms stable" },
      { label: "Input response mode", value: "Aggressive" },
    ],
  },
  {
    badge: "License Surface",
    title: "Activation and machine status",
    description:
      "Keep the commercial side premium too, with a license view that feels secure, deliberate, and part of a real desktop product.",
    rows: [
      { label: "License key", value: "Personal" },
      { label: "Activation state", value: "Verified" },
      { label: "Protected rig", value: "One device" },
    ],
  },
] as const;

export const howItWorksSteps = [
  {
    title: "Buy NovaCore",
    description:
      "Purchase NovaCore once as a premium gaming and Windows performance utility.",
  },
  {
    title: "Receive download and personal license key",
    description:
      "After checkout, the buyer receives installer access and a personal activation key.",
  },
  {
    title: "Install the desktop app",
    description:
      "Install NovaCore on the target PC and prepare the machine for gaming-focused tuning.",
  },
  {
    title: "Sign in",
    description:
      "Sign in when needed for account-aware activation, purchase recovery, and support verification.",
  },
  {
    title: "Activate with the key",
    description:
      "The personal key validates access and ties the license to the intended single-device policy.",
  },
  {
    title: "Use the app",
    description:
      "Apply gaming, power, startup, background, and latency-focused optimizations from the desktop dashboard.",
  },
] as const;

export const benefitCards = [
  {
    title: "Increase FPS",
    description:
      "Free up CPU and memory overhead, tune startup behavior, and push smoother frame delivery where it matters most.",
  },
  {
    title: "Decrease Ping",
    description:
      "Improve network consistency with cleaner routing, background traffic reduction, and latency-aware system tweaks.",
  },
  {
    title: "Reduce Latency",
    description:
      "Cut input delay and sharpen system response with gaming-focused tuning across timers, processes, and Windows behavior.",
  },
  {
    title: "Boost Responsiveness",
    description:
      "Get a PC that feels tighter in menus, in fights, and under pressure with cleaner background load and aggressive tuning.",
  },
] as const;

export const trustedCreators = [
  { name: "Bandzrt", role: "Content Creator", accent: "ember" },
  { name: "Skayter", role: "Fortnite Pro", accent: "sand" },
  { name: "Chica", role: "Streamer", accent: "rose" },
  { name: "Kirilian", role: "Fortnite Pro", accent: "cyan" },
  { name: "NinjSZN", role: "Content Creator", accent: "mono" },
] as const;

export const gameBenchmarks = [
  { game: "Fortnite", increase: "+39%", withTweaks: "542 FPS", withoutTweaks: "389 FPS" },
  { game: "Valorant", increase: "+39%", withTweaks: "612 FPS", withoutTweaks: "440 FPS" },
  { game: "Minecraft", increase: "+107%", withTweaks: "1151 FPS", withoutTweaks: "556 FPS" },
  { game: "Roblox", increase: "+158%", withTweaks: "310 FPS", withoutTweaks: "120 FPS" },
  { game: "Call of Duty Warzone", increase: "+53%", withTweaks: "260 FPS", withoutTweaks: "170 FPS" },
  { game: "Call of Duty", increase: "+40%", withTweaks: "365 FPS", withoutTweaks: "260 FPS" },
] as const;

export const testimonials = [
  {
    tag: "Performance",
    title: "Massive performance improvement",
    body:
      "NovaCore helped clean up startup drag, sharpen overall system feel, and gave me noticeably better in-game consistency.",
    author: "young bt",
  },
  {
    tag: "Aim",
    title: "The game feels tighter",
    body:
      "The biggest difference was responsiveness. Menus, edits, and fights all felt cleaner after tuning the machine with NovaCore.",
    author: "wave",
  },
  {
    tag: "Extreme",
    title: "Lower ping and stronger FPS",
    body:
      "I saw a real drop in latency and a smoother experience overall. It finally felt like the PC was tuned for competitive play.",
    author: "Prismatic",
  },
] as const;

export const faqItems = [
  {
    question: "Can this harm my computer?",
    answer:
      "NovaCore is presented as a guided optimization utility, with a cleaner commercial product flow and restore-aware approach rather than risky blind tweaking.",
  },
  {
    question: "Is this bannable?",
    answer:
      "NovaCore is positioned around Windows and system optimization, not cheats or in-game exploits. The goal is performance tuning, lower overhead, and cleaner responsiveness.",
  },
  {
    question: "Are these legit gains?",
    answer:
      "The site presents NovaCore around measurable performance categories like FPS, latency, and startup overhead, with test-style benchmark cards to support the value proposition.",
  },
  {
    question: "Is it worth it?",
    answer:
      "For players who care about smoother frames, lower delay, and cleaner competitive responsiveness, NovaCore is framed as a one-time purchase desktop optimization tool rather than a recurring service.",
  },
] as const;
