export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#benefits", label: "Benefits" },
  { href: "/pricing", label: "Pricing" },
  { href: "#proof", label: "Proof" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export const gumroadLink = "https://talverse.gumroad.com/l/bidpof";

export const heroStats = [
  { value: "One-time purchase", label: "No recurring fees" },
  { value: "Windows 10/11", label: "Designed for modern rigs" },
] as const;

export const featureCards = [
  {
    tag: "FPS",
    title: "Frame pacing optimization",
    description:
      "Reduce unnecessary system overhead and streamline background behavior so gameplay feels steadier and more consistent.",
  },
  {
    tag: "Latency",
    title: "Responsiveness tuning",
    description:
      "Target input handling, service load, and OS behavior so the system feels more responsive in competitive play.",
  },
  {
    tag: "Processes",
    title: "Background and startup cleanup",
    description:
      "Trim noisy processes, reduce startup drag, and keep more resources available for games and real-time workloads.",
  },
  {
    tag: "Power",
    title: "Performance power profiles",
    description:
      "Switch into performance-focused power profiles and tune desktop behavior for higher consistency under load.",
  },
  {
    tag: "Network",
    title: "Network tuning guidance",
    description:
      "Support low-latency play with tuning paths that reduce avoidable network overhead and keep online sessions consistent.",
  },
  {
    tag: "Protection",
    title: "Single-device license",
    description:
      "Keep licensing simple with one personal key, one protected device, and clear activation expectations.",
  },
] as const;

export const previewPanels = [
  {
    badge: "FPS Telemetry",
    title: "Frame stability dashboard",
    description:
      "A more competitive-facing overview of frame pacing, overhead, startup drag, and optimization readiness.",
    rows: [
      { label: "Frame pacing", value: "Stabilized" },
      { label: "Optimization status", value: "Tuned" },
      { label: "Startup impact", value: "Reduced" },
    ],
  },
  {
    badge: "Latency Layer",
    title: "Low-latency control center",
    description:
      "Surface the metrics performance users actually care about: response time, ping behavior, and overhead that affects feel.",
    rows: [
      { label: "System latency", value: "Tuned" },
      { label: "Network path", value: "Stable" },
      { label: "Input response mode", value: "Focus" },
    ],
  },
  {
    badge: "License Surface",
    title: "Activation and machine status",
    description:
      "Keep the commercial side polished too, with a license view that feels secure, deliberate, and part of a real desktop product.",
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
      "Purchase NovaCore once for $4.99 as a performance-focused gaming and Windows utility.",
  },
  {
    title: "Receive download and personal license key",
    description:
      "After Gumroad checkout, the buyer receives installer access and a personal activation key.",
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
    title: "Smoother frame pacing",
    description:
      "Free up CPU and memory overhead and tune startup behavior to keep frames steadier in play.",
  },
  {
    title: "Cleaner network behavior",
    description:
      "Improve network consistency with cleaner routing, background traffic reduction, and smarter system tweaks.",
  },
  {
    title: "Tighter input response",
    description:
      "Sharpen system response with performance tuning across timers, processes, and Windows behavior.",
  },
  {
    title: "Faster-feeling system",
    description:
      "Get a PC that feels more focused in menus, in matches, and under pressure with cleaner background load.",
  },
] as const;

export const trustedCreators = [
  { name: "Competitive Players", role: "Low-latency focus", accent: "ember" },
  { name: "Creators", role: "Performance tuning", accent: "sand" },
  { name: "Power Users", role: "System control", accent: "rose" },
  { name: "LAN Setups", role: "Stable builds", accent: "cyan" },
  { name: "Community", role: "Performance-minded", accent: "mono" },
] as const;

export const gameBenchmarks = [
  { game: "Fortnite", increase: "Focus", withTweaks: "Stable pacing", withoutTweaks: "Baseline settings" },
  { game: "Valorant", increase: "Focus", withTweaks: "Lower overhead", withoutTweaks: "Default setup" },
  { game: "Minecraft", increase: "Focus", withTweaks: "Lean background load", withoutTweaks: "Standard load" },
  { game: "Roblox", increase: "Focus", withTweaks: "Clean startup path", withoutTweaks: "Typical startup" },
  { game: "Call of Duty Warzone", increase: "Focus", withTweaks: "Latency focus", withoutTweaks: "Default network" },
  { game: "Call of Duty", increase: "Focus", withTweaks: "Input response tuned", withoutTweaks: "Baseline input" },
] as const;

export const testimonials = [
  {
    tag: "Responsiveness",
    title: "The system feels tighter",
    body:
      "NovaCore helped me reduce background noise and keep the system feeling more consistent during longer sessions.",
    author: "NovaCore user",
  },
  {
    tag: "Stability",
    title: "Cleaner startup and fewer distractions",
    body:
      "The setup feels more focused now, with fewer processes running and a clearer sense of control over performance settings.",
    author: "NovaCore user",
  },
  {
    tag: "Control",
    title: "Clearer performance tuning",
    body:
      "The interface makes it easier to understand what is changing and why, without guessing what settings were touched.",
    author: "NovaCore user",
  },
] as const;

export const faqItems = [
  {
    question: "Can this harm my computer?",
    answer:
      "NovaCore focuses on guided settings with clear descriptions. If you are unsure about a change, review the guidance first or contact support.",
  },
  {
    question: "Is this bannable?",
    answer:
      "NovaCore focuses on Windows and system optimization rather than game file modification or cheats. Always follow the rules of the game you play.",
  },
  {
    question: "Are these legit gains?",
    answer:
      "Results vary by hardware, Windows state, and the game being played. NovaCore focuses on stability and responsiveness rather than guaranteeing specific numbers.",
  },
  {
    question: "Is it worth it?",
    answer:
      "If you want a cleaner Windows setup and a centralized performance tuning tool, the one-time purchase can be a good fit. See the refund policy for eligibility details.",
  },
] as const;
