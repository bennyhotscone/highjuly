export const AGE_GATE_NOTICE =
  "This website is intended for visitors who are 18 years of age or older. By continuing, you confirm that you meet this requirement.";

/** Campaign photography — run `node scripts/process-backgrounds.mjs` to rebuild from assets */
export const siteImages = {
  hero: "/backgrounds/bg-rooftop-hero.jpg",
  mission: "/backgrounds/bg-kitchen.jpg",
  bandRolling: "/backgrounds/bg-extra-rolling.jpg",
  bandLounge: "/backgrounds/bg-extra-lounge.jpg",
  support: "/backgrounds/bg-kitchen.jpg",
  aboutBanner: "/backgrounds/bg-extra-kitchen.jpg",
  about: "/backgrounds/bg-triptych-3.jpg",
} as const;

export const storeImages = {
  hero: "/backgrounds/store-hero.jpg",
} as const;

export const brandLogos = {
  primary: "/backgrounds/logo-primary.png",
  bong: "/backgrounds/logo-bong.png",
  pipe: "/backgrounds/logo-pipe.png",
  joint: "/backgrounds/logo-joint.png",
  blunt: "/backgrounds/logo-blunt.png",
  mushroom: "/backgrounds/logo-mushroom.png",
  munchies: "/backgrounds/logo-munchies.png",
  pineapple: "/backgrounds/logo-pineapple.png",
  pizza: "/backgrounds/logo-pizza.png",
  sleep: "/backgrounds/logo-sleep.png",
  pill: "/backgrounds/logo-pill.png",
  icon: "/backgrounds/logo-icon.png",
} as const;

/** Raster exports for downloads */
export const brandLogoDownloads = brandLogos;

export type LogoVariant = keyof typeof brandLogos;

export const campaignSteps = [
  {
    step: 1,
    title: "Sign up",
    description: "Join the campaign list for July updates, drops, and supporter links.",
  },
  {
    step: 2,
    title: "Support or shop",
    description: "Contribute directly to the project or buy official merch from the store.",
  },
  {
    step: 3,
    title: "Follow through July",
    description: "Campaign content, new releases, and community activity run all month.",
  },
  {
    step: 4,
    title: "Fund the work",
    description: "Your support and store purchases keep the campaign running.",
  },
] as const;

export const supporterBenefits = [
  "Campaign updates through July",
  "Early merch drop notifications",
  "Direct supporter contribution option",
  "Access to official campaign materials",
] as const;

export const storeBenefits = [
  "Official High July apparel",
  "Limited campaign goods",
  "New drops through the season",
  "Ships from the campaign store",
] as const;

export const merchProducts = [
  {
    id: "official-tee",
    name: "High July Official Tee",
    description:
      "Heavyweight cotton tee with High July wordmark. Unisex fit. Available in core campaign colours.",
    status: "coming-soon" as const,
    image: "/backgrounds/product-official-tee.jpg",
    logo: "joint" as const,
  },
  {
    id: "hoodie",
    name: "High July Hoodie",
    description:
      "Mid-weight fleece hoodie with front logo. Relaxed fit for everyday wear.",
    status: "coming-soon" as const,
    image: "/backgrounds/product-hoodie.jpg",
    logo: "bong" as const,
  },
  {
    id: "cap",
    name: "High July Cap",
    description:
      "Structured six-panel cap with embroidered logo and adjustable strap.",
    status: "store" as const,
    image: "/backgrounds/product-cap.jpg",
    logo: "pill" as const,
  },
  {
    id: "crop-top",
    name: "High July Long Sleeve Crop Top",
    description:
      "Tight long-sleeve crop top with bold HIGH JULY racing-style arm print. Black, unisex fit.",
    status: "coming-soon" as const,
    image: "/backgrounds/product-crop-top.jpg",
    logo: "mushroom" as const,
  },
  {
    id: "mug",
    name: "High July Mug",
    description:
      "Ceramic mug with High July branding. Dishwasher safe.",
    status: "coming-soon" as const,
    image: "/backgrounds/product-mug.jpg",
    logo: "bong" as const,
  },
  {
    id: "poster",
    name: "High July Poster",
    description:
      "Limited-run campaign poster. A2 size, suitable for framing.",
    status: "store" as const,
    image: "/backgrounds/product-poster.jpg",
    logo: "pill" as const,
  },
] as const;

export const faqItems = [
  {
    question: "What is High July?",
    answer:
      "High July is a creator-led culture campaign built around the month of July. We release content, sell official merch, and accept direct supporter contributions. High July is not a registered charity, nonprofit, or government body.",
  },
  {
    question: "Are contributions tax deductible?",
    answer:
      "No. Payments are supporter contributions to the creator and the project. They are not charitable donations and are not tax deductible.",
  },
  {
    question: "Where does my contribution go?",
    answer:
      "Contributions fund content production, merch and fulfillment, platform costs, and ongoing work on the campaign.",
  },
  {
    question: "Why July?",
    answer:
      "July is the annual focus of the brand. Each year the campaign runs through the full month with new content, products, and supporter activity.",
  },
  {
    question: "Why is there an age check?",
    answer:
      "This site is intended for adults 18 and over. If you are under 18, please do not enter.",
  },
] as const;

export const mediaPack = {
  shortBio:
    "High July is a creator-led culture campaign and brand focused on the month of July. The project includes original content, official merchandise, and direct supporter funding.",
  longBio:
    "High July is a founder-led campaign and lifestyle brand built for the month of July. Each year the project delivers content across social and press channels, releases official apparel and goods, and runs a direct supporter program. High July operates independently and is funded by merch sales and voluntary contributions.",
  pressBlurb:
    "High July returns this July as an annual culture campaign with new merch, content, and a direct supporter program. Press and partners can use this media pack for logos, bios, and brand assets.",
  instagramBio:
    "Official High July campaign. Merch, updates, and links below. 18+.",
  launchPost: `High July is live for the season.

New merch, new content, and supporter funding are open now.

Shop official goods and follow for updates through the month.`,
  brandColors: [
    { name: "Dark Green", hex: "#163528", class: "bg-[#163528]" },
    { name: "Off White", hex: "#F5F2EB", class: "bg-[#F5F2EB] border border-hj-border" },
    { name: "Muted Grey", hex: "#8A8A82", class: "bg-[#8A8A82]" },
    { name: "Acid Yellow", hex: "#E4FF3D", class: "bg-[#E4FF3D]" },
  ],
} as const;
