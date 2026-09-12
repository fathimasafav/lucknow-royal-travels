import { BlogPost } from "@/types";

export const featuredBlogPost: BlogPost = {
  id: "saudi-visa-guide",
  slug: "saudi-visa-stamping-guide-2026",
  title: "Complete Guide to Saudi Arabia Visa Stamping & Enjaz Verification 2026",
  category: "Visa Guidance",
  date: "Jan 15, 2026",
  author: {
    name: "Royal Travels Consular Desk",
    role: "Senior Visa Processing Officer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=80",
  },
  image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=85",
  snippet: "Everything applicants and employers need to know about Saudi employment visas, Wakkala power of attorney, GAMCA medical fit reports, and consulate submission.",
  content: [
    "Processing a work visa for the Kingdom of Saudi Arabia requires strict adherence to MOFA policies, Enjaz registration, medical clearance, and consular stamping.",
    "Royal Travels holds direct authorization IDs from The Royal Consulate of Saudi Arabia in Mumbai and The Royal Embassy of Saudi Arabia in New Delhi. This enables our team to expedite visa stamping efficiently.",
    "Key steps in the Saudi visa stamping workflow include verifying the electronic Wakkala (power of attorney) issued by the Saudi sponsor, completing GAMCA medical examination at an approved medical center, obtaining Police Clearance Certificates (PCC), and submitting the physical passport to the consulate.",
    "Candidates are advised to ensure all educational certificates are attested by State HRD and the Ministry of External Affairs (MEA) prior to final visa submission to avoid document rejection.",
  ],
  tags: ["Saudi Arabia", "Visa Stamping", "Wakkala", "GAMCA", "Enjaz"],
  featured: true,
};

export const blogPosts: BlogPost[] = [
  {
    id: "gcc-recruitment-process",
    slug: "gcc-manpower-recruitment-process-step-by-step",
    title: "GCC Overseas Manpower Recruitment: Procedure for Indian Employers & Candidates",
    category: "Recruitment",
    date: "Jan 10, 2026",
    author: {
      name: "Overseas Recruitment Cell",
      role: "Manpower Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    snippet: "Understand how Government of India Ministry of Labour licensed agencies (Reg: B-162) source, trade-test, and deploy qualified personnel to Gulf companies.",
    content: [
      "Overseas manpower deployment from India to Middle East countries is strictly regulated by the Protector General of Emigrants (PGE) under the Ministry of External Affairs.",
      "As a licensed agency (Registration No: B-162/MUM/PER/1000+/5515/2000), Royal Travels manages candidate sourcing, trade testing at certified technical workshops, contract signing, and e-Migrate registration.",
      "Employers benefit from pre-screened talent pools in Engineering, Construction, Healthcare, Hotel Management, and Skilled Trades.",
    ],
    tags: ["Recruitment", "Gulf Jobs", "Ministry of Labour", "Trade Test"],
  },
  {
    id: "attestation-guide",
    slug: "degree-certificate-attestation-for-uae-and-saudi",
    title: "Certificate Attestation Demystified: HRD, MEA, and Embassy Stamping",
    category: "Attestation",
    date: "Dec 28, 2025",
    author: {
      name: "Document Clearance Division",
      role: "Attestation Executive",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    snippet: "A comprehensive walkthrough on getting Educational and Commercial documents legalised for employment in Saudi Arabia, UAE, Qatar, and Kuwait.",
    content: [
      "Document attestation is mandatory for candidates seeking managerial, engineering, medical, or administrative visas in GCC nations.",
      "The process involves three key tiers: (1) State HRD or Home Department authentication, (2) MEA (Ministry of External Affairs, India) Apostille/Stamping, and (3) Embassy/Consulate attestation.",
    ],
    tags: ["Attestation", "MEA", "HRD", "Saudi Embassy", "UAE Visa"],
  },
  {
    id: "umrah-travel-checklist",
    slug: "umrah-visa-and-pilgrimage-travel-tips",
    title: "Essential Umrah Pilgrimage Travel Checklist & E-Visa Information",
    category: "Pilgrimage",
    date: "Dec 15, 2025",
    author: {
      name: "Hajj & Umrah Desk",
      role: "Pilgrimage Coordinator",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
    snippet: "Important guidance on obtaining electronic Umrah visas, flight bookings to Jeddah/Madinah, hotel accommodation near Haram, and local Ziyarat tours.",
    content: [
      "Royal Travels provides Umrah E-Visa clearance for pilgrims traveling individually or in family groups.",
      "Our customized packages include flight tickets on Saudia or IndiGo, air-conditioned ground transfers, and hotel reservations close to Al-Masjid an-Nabawi and Masjid al-Haram.",
    ],
    tags: ["Umrah", "Saudi E-Visa", "Pilgrimage", "Makkah", "Madinah"],
  },
];

export const allBlogPosts: BlogPost[] = [featuredBlogPost, ...blogPosts];
