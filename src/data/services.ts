import { Service } from "@/types";

export const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "visa", label: "Visa Services" },
  { id: "recruitment", label: "Recruitment & Employment" },
  { id: "attestation", label: "Attestation & Emigration" },
  { id: "ticketing", label: "Flight Ticketing" },
  { id: "tour", label: "Tour Packages" },
] as const;

export const services: Service[] = [
  // VISA SERVICES
  {
    id: "saudi-visa-stamping",
    slug: "saudi-visa-stamping",
    title: "Saudi Visa Stamping",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Complete processing and consular stamping for Employment, Family, Residence, and Visit visas to the Kingdom of Saudi Arabia.",
    fullDescription: "Royal Travels holds direct ID cards with The Royal Consulate of Saudi Arabia (Mumbai) and The Royal Embassy of Saudi Arabia (New Delhi). We provide complete end-to-end visa stamping services including Enjaz registration, document scrutiny, medical submission, and consular submission.",
    image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80",
    iconName: "FileCheck",
    popular: true,
    featured: true,
    features: [
      "Direct Saudi Consulate & Embassy Authorization",
      "Fast-track Enjaz processing & medical verification",
      "Covers Employment, Family Visit & Business Visas",
      "Tracking support for all applicants"
    ],
    requirements: [
      "Original Passport valid for minimum 6 months",
      "Original Visa Slip / Wakkala endorsement",
      "GAMCA Medical Fit Report (for Employment Visas)",
      "White background passport-size photographs"
    ]
  },
  {
    id: "saudi-multiple-business-visit",
    slug: "saudi-multiple-business-visit",
    title: "Saudi Multiple Business Visit Visa",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Seamless business visit visa processing for corporate professionals, investors, and business representatives traveling to KSA.",
    fullDescription: "Expedited Saudi business visit visa authorization for corporate personnel. We manage the invitation verification, chamber endorsement validation, and consular stamping.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    iconName: "Briefcase",
    popular: true,
    features: [
      "6-Month & 1-Year Multiple Entry Options",
      "Chamber of Commerce Invitation Scrutiny",
      "Priority Consular Submission"
    ]
  },
  {
    id: "visa-wakkala-service",
    slug: "visa-wakkala-service",
    title: "Visa Wakkala Service",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Official power of attorney (Wakkala) generation and authorization verification for Saudi employment visas.",
    fullDescription: "Assisting Saudi sponsors and HR agencies in issuing official electronic power of attorney (Wakkala) to Royal Travels for candidate visa processing.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    iconName: "Award",
    features: [
      "Official MOFA electronic wakkala verification",
      "Instant agency assignment",
      "Transparent tracking"
    ]
  },
  {
    id: "kuwait-visa-stamping",
    slug: "kuwait-visa-stamping",
    title: "Kuwait Visa Stamping",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Hassle-free visa stamping, PCC attestation, and medical clearance for work and visit visas to Kuwait.",
    fullDescription: "Professional visa processing for Kuwait employment, commercial, and residence visas. Includes assistance with PCC attestation from Ministry of External Affairs (MEA) and medical clearance.",
    image: "https://images.unsplash.com/photo-1578898835028-267b099084ab?auto=format&fit=crop&w=800&q=80",
    iconName: "FileCheck",
    popular: true,
    features: [
      "Kuwait Embassy Submission",
      "Police Clearance Certificate (PCC) Attestation",
      "GAMCA / Approved Medical Guidance"
    ]
  },
  {
    id: "dubai-visit-visa",
    slug: "dubai-visit-visa",
    title: "Dubai & UAE Visit Visa",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Quick tourist and business visit visas (30 days & 60 days) for Dubai and across all UAE emirates.",
    fullDescription: "Fast online visa issuance for Dubai and the UAE with minimal documentation and swift 24–48 hour processing turnaround.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    iconName: "Globe",
    popular: true,
    features: [
      "30-Day & 60-Day Single / Multiple Entry",
      "Express 24-Hour Express Option",
      "Includes Mandatory Travel Insurance"
    ]
  },
  {
    id: "umrah-visa",
    slug: "umrah-visa",
    title: "Umrah Visa & Pilgrimage Processing",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Dedicated E-visa issuance for Umrah pilgrims with flight, hotel, and transport arrangement options.",
    fullDescription: "Seamless electronic Umrah visa clearance for individuals and families traveling to Makkah and Madinah for holy pilgrimage.",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
    iconName: "Heart",
    popular: true,
    featured: true,
    features: [
      "Direct Ministry of Hajj & Umrah E-Visa System",
      "Family & Group Visa Authorizations",
      "Optional Ground Transport & Hotel Packages"
    ]
  },
  {
    id: "malaysia-visa-stamping",
    slug: "malaysia-visa-stamping",
    title: "Malaysia Visa Stamping",
    category: "visa",
    categoryLabel: "Visa Services",
    shortDescription: "Complete visa processing and single/multiple entry stamping for tourist, business, and employment travel to Malaysia.",
    fullDescription: "Authorized processing for Malaysia eVisa, Single Entry Visa (SEV), and Multiple Entry Visa (MEV) with document verification and embassy submission.",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
    iconName: "Globe",
    features: [
      "Malaysia eVisa & Embassy Stamping",
      "Fast 3-5 Working Day Turnaround",
      "Tourist, Business & Employment Visa Options"
    ]
  },

  // RECRUITMENT & EMPLOYMENT
  {
    id: "manpower-recruitment",
    slug: "manpower-recruitment",
    title: "Overseas Manpower Recruitment",
    category: "recruitment",
    categoryLabel: "Recruitment & Employment",
    shortDescription: "Government recognized overseas recruitment agency supplying skilled, semi-skilled, and professional manpower to GCC employers.",
    fullDescription: "Royal Travels is recognized by the Ministry of Labour, Government of India (Reg. No: B-162/MUM/PER/1000+/5515/2000). With 25+ years of recruitment expertise, we connect top Middle East corporations with qualified Indian professionals in Engineering, Healthcare, Construction, Hospitality, and Skilled Trades.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
    iconName: "Users",
    popular: true,
    featured: true,
    features: [
      "Govt. of India Ministry of Labour License (B-162)",
      "Comprehensive Database of Pre-screened Candidates",
      "Trade Testing & Skill Assessment Workshops",
      "End-to-End Deployment & Emigration Management"
    ]
  },
  {
    id: "svp-trade-test",
    slug: "svp-trade-test",
    title: "SVP Test (Saudi Verification Skill Test)",
    category: "recruitment",
    categoryLabel: "Recruitment & Employment",
    shortDescription: "Official assistance and scheduling for Saudi Professional Verification Program (SVP) trade and skill testing.",
    fullDescription: "Complete guidance for technical workers requiring mandatory Saudi Skill Verification Program (SVP) testing at authorized trade test centers prior to visa issuance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=800&q=80",
    iconName: "ShieldCheck",
    features: [
      "Authorized Test Center Booking",
      "Trade Preparation & Practical Guidance",
      "Instant Result Linking with MOFA Visa Portal"
    ]
  },
  {
    id: "gamca-medical-appointment",
    slug: "gamca-medical-appointment",
    title: "GAMCA Medical Appointment",
    category: "recruitment",
    categoryLabel: "Recruitment & Employment",
    shortDescription: "Instant online appointment booking for GAMCA (WAFID) medical centers for GCC employment seekers.",
    fullDescription: "Prompt registration and appointment slot booking at GCC approved GAMCA medical centers across all major Indian cities.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    iconName: "Calendar",
    features: [
      "Instant GAMCA / WAFID Slip Generation",
      "Preferred Medical Center Selection",
      "Pre-Medical Guidance & Status Checking"
    ]
  },
  {
    id: "pre-medical",
    slug: "pre-medical",
    title: "Pre-Medical Examination",
    category: "recruitment",
    categoryLabel: "Recruitment & Employment",
    shortDescription: "Preliminary health screening and pre-medical checkups prior to official GAMCA/WAFID medical testing.",
    fullDescription: "Comprehensive pre-medical health evaluation to ensure candidates meet GCC physical fitness standards before formal GAMCA submission.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    iconName: "FileCheck",
    features: [
      "Pre-GAMCA Health Evaluation",
      "Confidential Fitness Report",
      "Guidance on Remedial Healthcare"
    ]
  },
  {
    id: "emigration-clearance",
    slug: "emigration-clearance",
    title: "Emigration Clearance (ECR/POEI)",
    category: "recruitment",
    categoryLabel: "Recruitment & Employment",
    shortDescription: "Official Emigration Clearance (POE) processing for ECR passport holders seeking employment abroad.",
    fullDescription: "Assistance with Protector of Emigrants (POE) clearance, e-Migrate registration, and contract verification for overseas workers.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    iconName: "CheckCircle",
    features: [
      "Official POE Clearance Processing",
      "e-Migrate System Registration",
      "Contract Verification & Insurance Scrutiny"
    ]
  },

  // ATTESTATION & EMIGRATION
  {
    id: "certificate-attestation",
    slug: "certificate-attestation",
    title: "Certificate Attestation Services",
    category: "attestation",
    categoryLabel: "Attestation & Emigration",
    shortDescription: "Comprehensive Educational, Non-Educational, and Commercial certificate attestation for GCC countries.",
    fullDescription: "End-to-end attestation from State HRD, Ministry of External Affairs (MEA India), and Embassy/Consulate attestation for Saudi Arabia, UAE, Qatar, Kuwait, Oman, and Bahrain.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    iconName: "Award",
    popular: true,
    featured: true,
    features: [
      "State HRD / Home Department Authentication",
      "MEA (Ministry of External Affairs) Apostille & Stamping",
      "Saudi, UAE, Kuwait & Qatar Embassy Attestation",
      "Secure handling with document tracking"
    ]
  },
  {
    id: "vfs-appointment",
    slug: "vfs-appointment",
    title: "VFS Appointment Booking",
    category: "attestation",
    categoryLabel: "Attestation & Emigration",
    shortDescription: "Priority VFS appointment scheduling for Saudi, Schengen, UK, and Asian countries.",
    fullDescription: "Hassle-free appointment slot booking at VFS / Tasheer centers for biometric collection and document submission.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    iconName: "Calendar",
    features: [
      "Fast appointment slot allocation",
      "Tasheer / VFS biometric schedule management",
      "Document pre-verification"
    ]
  },
  {
    id: "pcc-passport-services",
    slug: "pcc-passport-services",
    title: "PCC & Passport Services",
    category: "attestation",
    categoryLabel: "Attestation & Emigration",
    shortDescription: "Complete guidance for Passport renewal, fresh applications, and Police Clearance Certificate (PCC) clearance.",
    fullDescription: "Professional assistance for Passport Seva Kendra (PSK) appointment booking, fresh/renewal application filing, and Police Clearance Certificate (PCC) processing for overseas travel.",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    iconName: "FileText",
    features: [
      "Fresh & Renewal Passport Applications",
      "PCC Appointment & Police Verification Guidance",
      "Tatkal & Normal Mode Processing"
    ]
  },

  // FLIGHT TICKETING
  {
    id: "air-ticketing",
    slug: "air-ticketing",
    title: "International & Domestic Flight Ticketing",
    category: "ticketing",
    categoryLabel: "Flight Ticketing",
    shortDescription: "Instant booking for international and domestic flights with special group rates and baggage allowances for Gulf travelers.",
    fullDescription: "Royal Travels provides seamless, fast ticketing services for all major airlines (Saudia, Air India, Emirates, Qatar Airways, Flynas, Gulf Air, IndiGo). Special fares for overseas workers, group bookings, and flexible date changes.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    iconName: "Plane",
    popular: true,
    features: [
      "Direct GDS Booking System for Lowest Fares",
      "Special Worker & Extra Baggage Fares",
      "24/7 Rebooking & Ticket Modification Support"
    ]
  },

  // TOUR PACKAGES
  {
    id: "tour-packages",
    slug: "tour-packages",
    title: "Customized Tour & Umrah Packages",
    category: "tour",
    categoryLabel: "Tour Packages",
    shortDescription: "Tailored luxury Umrah pilgrimage packages and international holiday tours for families and corporate groups.",
    fullDescription: "Comfortable and authentic travel packages including luxury hotel stays near Haram, guided ground transportation, ziyarat tours, and full holiday management.",
    image: "https://images.unsplash.com/photo-1565552070098-0073a8ad65a0?auto=format&fit=crop&w=800&q=80",
    iconName: "Compass",
    features: [
      "Customized 5-Star & Budget Umrah Packages",
      "Near-Haram Accommodation in Makkah & Madinah",
      "Guided Ziyarat & Sightseeing Expeditions"
    ]
  }
];
