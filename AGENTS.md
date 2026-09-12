AGENTS.md --- Asia Travel Landing Page

1. Project Mission

Build a premium travel landing page that reproduces the supplied
reference screenshot as closely as possible.

The reference screenshot is the source of truth for the visual design.

The implementation must match the reference in:

Overall composition

Section order

Section heights

Container widths

Typography hierarchy

Image proportions and cropping

Card dimensions

Grid structure

Border radii

Spacing

Dark/light section transitions

Buttons

Navigation

Footer

Responsive behavior

Do not redesign the page. Do not "improve" the design by inventing a
different layout.

The target is a high-fidelity recreation of the supplied reference.

2. Reference Image Rule

The supplied travel website screenshot is the PRIMARY visual reference.

Before implementing or modifying a section:

Inspect the reference.

Identify the section's geometry.

Identify its typography hierarchy.

Identify image placement and crop.

Identify spacing and alignment.

Implement it.

Compare the implementation against the reference.

Fix visual differences before moving to the next section.

Never implement from a generic travel-template assumption when the
screenshot gives specific visual information.

If a detail cannot be determined from the screenshot, make the smallest
reasonable assumption and keep it easy to change.

3. Required Technology

Use:

Next.js

TypeScript

App Router

Tailwind CSS

React

Next.js Image

Semantic HTML

CSS Grid

Flexbox

Preferred package choices:

lucide-react for simple UI icons

clsx / tailwind-merge if useful for class composition

Do NOT introduce a large UI framework unless explicitly requested.

Do NOT use Bootstrap.

Do NOT use Material UI.

Do NOT use an unnecessary animation library.

4. Architecture Requirements

The project must remain modular and production-friendly.

Recommended structure:

src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   │
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedDestinations.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── DestinationShowcase.tsx
│   │   ├── Testimonials.tsx
│   │   ├── NewLifeSection.tsx
│   │   ├── TravelChoices.tsx
│   │   ├── QualityTourSection.tsx
│   │   ├── BlogSection.tsx
│   │   └── FinalCTA.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── DestinationCard.tsx
│       ├── BlogCard.tsx
│       ├── SectionHeading.tsx
│       └── Container.tsx
│
├── data/
│   ├── destinations.ts
│   ├── testimonials.ts
│   └── blog.ts
│
├── types/
│   └── index.ts
│
└── lib/
    └── utils.ts

public/
└── images/
    ├── hero/
    ├── destinations/
    ├── experiences/
    ├── showcase/
    ├── blog/
    └── cta/

page.tsx must only orchestrate sections.

It must NOT become a giant JSX file.

5. Homepage Structure

The page must be implemented in this exact order:

Header
Hero
Featured Destinations
Experience The New Adventure
Dark Destination Showcase Intro
Large Destination Panorama
Testimonials
Begin Your New Life / Explore New Destination
Find Out The Best Travel Choice In Asia
Quality Tour & Experience / FAQ
Latest Travel Blog & Tips
Final CTA
Footer

Do not change the order.

6. Overall Visual Direction

The reference has a premium editorial travel aesthetic.

Use:

Large landscape photography

Serif/editorial headings

Small uppercase or compact navigation text

Thin typography for supporting text

Warm off-white page background

Very dark brown/black feature sections

Rounded image corners

Subtle image overlays

Minimal buttons

Generous whitespace

Small circular action icons

Fine borders

Restrained animation

The page should feel:

Premium

Editorial

Cinematic

Calm

Luxury travel

Photography-first

Avoid:

Generic SaaS styling

Large colorful gradients

Excessive shadows

Huge rounded cards

Glassmorphism everywhere

Neon colors

Excessive animations

Oversized UI controls

Generic stock-template layouts

7. Page Width

Use a centered content container.

Target desktop content width:

approximately 1240px–1320px

The screenshot uses generous horizontal margins.

Do not make the content full width except for:

Hero

Full-width dark sections

Large panoramic showcase

Final CTA background

Use consistent horizontal padding.

Recommended starting point:

desktop: 32px–48px
tablet: 24px–32px
mobile: 20px

Adjust based on visual comparison with the reference.

8. Header

The header sits over the hero image.

Characteristics:

Transparent background

White/light logo

Small navigation

Thin rounded navigation container/pill where visible

Compact menu

Minimal controls

Mobile hamburger

No large solid navbar

Desktop layout:

Logo        Navigation/Pill                    Menu

The header must visually merge into the hero.

Do not create a separate large white navbar.

9. Hero Section

The hero is the most important section.

It should closely match the screenshot.

Requirements:

Full-width landscape image

Approximately viewport-height hero

Dark cinematic overlay

Header over image

Left-aligned editorial heading

Supporting text

Small CTA

Small metadata/action elements near lower area

Image should remain the dominant visual element

Desktop composition:

┌──────────────────────────────────────────────┐
│ Logo       Navigation                Menu    │
│                                              │
│                                              │
│ Explore The                                  │
│ Majestic Asia                                │
│ Landscape Now                                │
│                                              │
│ [ Explore ]                                  │
│                                              │
│ small metadata                               │
└──────────────────────────────────────────────┘

Heading should be relatively compact and editorial rather than a giant
modern SaaS heading.

Use a serif font for major headings.

Hero image must use:

<Image
  fill
  priority
  className="object-cover"
/>

Use an overlay for text readability.

Do not stretch the image.

10. Featured Destinations

The section immediately after the hero is white/off-white.

It contains an asymmetric destination grid.

The reference shows:

One large card on the left

Smaller cards on the right/top

A wider card beneath

Rounded image corners

Text positioned near the bottom of images

Circular arrow/action icons

Approximate structure:

┌──────────────────┐ ┌──────────┐ ┌──────────┐
│                  │ │          │ │          │
│   LARGE IMAGE    │ │  CARD    │ │  CARD    │
│                  │ │          │ │          │
│                  │ └──────────┘ └──────────┘
│                  │
└──────────────────┘ ┌────────────────────────┐
                     │                        │
                     │       WIDE CARD        │
                     │                        │
                     └────────────────────────┘

Use CSS Grid.

Do not position the complete layout with absolute pixel coordinates.

11. Destination Cards

Create one reusable DestinationCard.

Card requirements:

Rounded corners

Image fills card

Gradient overlay near bottom

Destination name

Small location/category text

Optional price

Circular arrow/action icon

Hover image scale

No excessive shadow

All cards must receive data through props.

Do not duplicate card JSX.

12. Experience The New Adventure

This is a light section.

Desktop:

┌─────────────────────┐ ┌─────────────────────────┐
│ Heading             │ │                         │
│ Description         │ │      LARGE IMAGE        │
│                     │ │                         │
│ ● Safe Travelling   │ │                         │
│ ● Expert Guidance   │ │                         │
│ ● Comfortable...    │ │                         │
└─────────────────────┘ └─────────────────────────┘

The screenshot has:

Editorial heading

Small paragraph

Three feature points

Small circular icons

Large rounded image

Small media/video cards over the lower portion of the image

Keep this composition.

13. Dark Destination Showcase

Create a dark full-width section.

Background:

near-black warm brown

The section starts with:

White/cream heading

Supporting paragraph

Small CTA

Large panoramic destination image

The panoramic image should be very wide.

Use rounded corners where visible.

The screenshot has an editorial/cinematic feel.

Do not replace this with a standard hero/card component.

14. Testimonials

Immediately below the large panorama, keep the dark background.

Create approximately four compact testimonial cards.

Cards should:

Be dark charcoal/brown

Have subtle borders

Have small text

Include avatar

Include name/location

Have restrained rounded corners

Do not make testimonials oversized.

The reference uses compact editorial cards.

15. New Life / Explore New Destination

Return to the light background.

The section has:

Heading on left

Supporting content

Small CTA controls

Large landscape image

Smaller image cards

Small floating content card/video card

The layout is intentionally asymmetric.

Use CSS Grid.

Do not force every element into equal columns.

16. Find Out The Best Travel Choice In Asia

This section has:

Centered editorial heading

Supporting text

Small category/filter pills

Grid of destination cards

The screenshot shows approximately eight compact cards.

Desktop:

4 columns

Tablet:

2 columns

Mobile:

2 columns if readable
otherwise 1 column

Each card includes:

Destination image

Name

Country/location

Price

Small action icon

The cards should be compact rather than giant.

17. Quality Tour & Experience

Create another dark section.

The top contains:

Heading

Supporting paragraph

Small CTA

Below it is a FAQ/accordion-style layout.

Two columns are visible on desktop.

Each FAQ row contains:

Question

Small number/index where appropriate

Divider

Plus/minus or arrow icon

Below the FAQ is a large wide travel image.

Keep the section dark.

18. Blog Section

Return to light background.

Heading:

Read Our Latest Travel
Blog & Tips Here

Layout:

Large featured article on left

Smaller article list on right

Landscape thumbnails

Small category/date metadata

Editorial titles

Use reusable BlogCard.

Do not hardcode repeated article markup.

Blog content belongs in:

src/data/blog.ts

19. Final CTA

The final CTA is a full-width background image.

It should contain:

Get Closer With Us &
Get Special Promo

with:

Centered heading

Short supporting text if needed

Small white/light CTA button

Dark image overlay

The image must remain visible.

Do not make this a plain dark section.

20. Footer

The footer is dark.

It contains approximately:

Brand          Page          Important Link       Newsletter

Include:

Brand

Short description

Social icons

Navigation links

Important links

Newsletter/input

Copyright if visible

Keep typography small and elegant.

21. Typography

The screenshot uses an editorial serif style for major headings.

Use a premium serif font for:

Hero heading

Section headings

Major article titles

Use a clean sans-serif font for:

Navigation

Body

Metadata

Buttons

Prices

Prefer Next.js/local Google font integration through next/font.

Do not use more than two primary font families.

Heading hierarchy should feel refined and relatively small.

Avoid oversized headings that destroy the screenshot proportions.

22. Color Direction

Use approximately:

Page background:
warm off-white

Primary dark:
near-black warm brown

Text:
near-black on light backgrounds

Light text:
cream/white on dark backgrounds

Muted text:
warm gray

Borders:
subtle warm gray/white transparency

Accent:
very restrained neutral/gold-like tone only if visible in reference

Do not introduce bright brand colors unless the reference requires them.

23. Image Rules

Images are critical.

The page is photography-driven.

Always use next/image.

Use:

object-cover

for image cards.

Do not distort images.

Do not randomly crop faces or important landmarks.

Choose image aspect ratios based on the reference.

Suggested categories:

Hero:
16:9 / panoramic

Large destination:
4:5 or 3:4

Small destination:
4:3

Panorama:
21:9 / very wide

Blog:
16:9

Keep all image paths centralized in data/configuration.

24. Responsive Requirements

The desktop screenshot is the primary reference, but the site must be
fully responsive.

Required breakpoints:

1440+
1280
1024
768
640
480
375

Mobile rules:

Header becomes compact.

Navigation collapses.

Hero heading scales down.

Hero remains cinematic.

Asymmetric grids become simpler.

Two-column sections stack.

Destination grids reduce columns.

Testimonials stack or become horizontal scroll where appropriate.

FAQ becomes one column.

Blog becomes stacked.

Footer becomes stacked.

No horizontal page overflow.

Do not simply shrink the desktop layout.

Recompose the layout when necessary.

25. Spacing

The screenshot has generous whitespace.

Use consistent section spacing.

Approximate starting values:

Desktop section padding:
96px–140px

Tablet:
72px–96px

Mobile:
56px–80px

Adjust based on visual comparison.

Do not create huge gaps that make the page longer than the reference.

26. Border Radius

Use restrained rounded corners.

Large image cards:

approximately 10px–16px

Small cards:

approximately 8px–12px

Buttons:

small rounded/pill shape

Do not use 30px--50px radius everywhere.

27. Buttons

Buttons are small and understated.

Use:

Compact height

Small font

Tight horizontal padding

Rounded pill/soft corners

High contrast

Minimal hover effect

Avoid giant CTA buttons.

28. Icons

Use lucide-react where possible.

Common icons:

ArrowUpRight

ArrowRight

Plus

Menu

Play

MapPin

ChevronDown

Icons should be small.

Do not use oversized icons.

Do not create complicated SVGs unless the reference requires them.

29. Animation

Animations must be subtle.

Allowed:

Image scale on hover

Button opacity/translation

Fade/translate section entrance

Navigation underline/opacity

Small card hover movement

Do not use:

Excessive parallax

Bouncing elements

Large rotations

Constant animations

Heavy page loaders

Respect:

prefers-reduced-motion

Do not allow animation to change layout dimensions.

30. Accessibility

Use:

Semantic headings

Proper heading order

nav

main

section

footer

Accessible buttons

Alt text

Keyboard focus states

Sufficient text contrast

Proper links

Do not use clickable divs where a button/link is appropriate.

31. Performance

Use:

next/image

priority only for above-the-fold hero imagery

Lazy loading for below-the-fold images

Proper image dimensions

Minimal client components

Server components by default

Do not add "use client" unless interaction requires it.

Keep static sections server-rendered.

32. Data Architecture

Repeated content belongs in data files.

Example:

export const destinations = [
  {
    id: "phuket",
    name: "Phuket",
    country: "Thailand",
    price: "$10",
    image: "/images/destinations/phuket.jpg",
  },
];

Components render the data.

Never repeat the same card JSX eight times.

33. page.tsx Rule

src/app/page.tsx should remain small.

Target:

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <FeaturedDestinations />
        <ExperienceSection />
        <DestinationShowcase />
        <Testimonials />
        <NewLifeSection />
        <TravelChoices />
        <QualityTourSection />
        <BlogSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}

No large markup blocks should live here.

34. Implementation Workflow

Do NOT build the entire website in one pass.

Build in this order:

1. Project setup
2. Global fonts
3. Global colors/spacing
4. Header
5. Hero
6. Featured destination grid
7. Experience section
8. Dark showcase
9. Testimonials
10. New Life section
11. Destination choices grid
12. Quality Tour / FAQ
13. Blog
14. Final CTA
15. Footer
16. Responsive pass
17. Animation pass
18. Accessibility pass
19. Performance pass
20. Visual QA

After each major section:

Run the project.

Inspect the browser.

Compare with the reference.

Fix that section.

Only then continue.

35. Visual QA Protocol

When a section is implemented, compare it directly with the reference.

Check:

Geometry

Section height

Container width

Image dimensions

Grid columns

Alignment

Vertical spacing

Typography

Font family

Font size

Font weight

Line height

Letter spacing

Heading width

Images

Correct crop

Correct aspect ratio

Correct position

Overlay darkness

Components

Card size

Radius

Button size

Icon size

Borders

Overall

Does the page have the same visual rhythm?

Are dark/light transitions at the same approximate positions?

Is the page density similar?

Is whitespace similar?

Fix the largest visual differences first.

36. Important Anti-Patterns

NEVER:

Put the whole page in one component.

Copy/paste destination cards.

Use inline styles everywhere.

Use arbitrary pixel positioning for the complete layout.

Use a different layout from the screenshot.

Add unnecessary UI.

Add random colors.

Replace the editorial design with a generic travel template.

Use huge headings.

Use giant buttons.

Use excessive shadows.

Make every section a rounded card.

Introduce unnecessary dependencies.

Rewrite unrelated files when fixing one section.

37. Change Management Rule

When asked to modify one section:

Identify the relevant component.

Modify only that component and required shared styles/data.

Do not rewrite the whole page.

Do not alter unrelated sections.

Preserve the current visual structure.

Before changing architecture, explain why the architectural change is
necessary.

38. Completion Criteria

The website is NOT considered complete simply because it runs.

It is complete when:

All reference sections exist.

The section order matches.

Desktop composition closely matches the screenshot.

Typography is visually close.

Image crops are visually close.

Cards have the correct proportions.

Dark/light sections match.

Spacing is consistent.

Header matches.

Footer matches.

Mobile layout is intentionally designed.

No horizontal overflow exists.

No console errors exist.

Images load correctly.

Accessibility basics are implemented.

Repeated content is data-driven.

page.tsx remains clean.

39. Final Instruction to the Agent

Treat the supplied screenshot as a design specification, not merely
inspiration.

The goal is:

REFERENCE SCREENSHOT
        ↓
HIGH-FIDELITY UI
        ↓
CLEAN COMPONENT ARCHITECTURE
        ↓
RESPONSIVE IMPLEMENTATION
        ↓
VISUAL QA

Prioritize visual accuracy AND code quality.

When there is a conflict between a generic design convention and
something clearly visible in the reference screenshot, follow the
reference screenshot.

Do not redesign the website.

Do not simplify visible sections unless required for responsive
behavior.

Do not stop after creating a functional page.

Continue refining spacing, typography, image crops, proportions, and
responsive behavior until the implementation is visually close to the
supplied reference.

40. # LIVE REFERENCE ANALYSIS

When a live reference URL is provided, do not analyze it only as a static screenshot.

Inspect the actual website behavior.

Pay attention to:

- Entrance animations
- Scroll-triggered animations
- Parallax
- Image reveals
- Text reveals
- Staggered animations
- Hover states
- Sticky elements
- Header transitions
- Dropdown animations
- Carousel behavior
- Accordion behavior
- Mobile interactions

The live reference URL is the source of truth for interactive behavior.

Recreate the behavior in our own implementation rather than copying the reference site's source code.

IMPORTANT CONTENT CUSTOMIZATION:

The Matour design is being used ONLY as the visual design reference.

This is NOT an Asia tourism website.

The actual business is ROYAL TRAVELS.

Use the uploaded Royal Travels Business Profile PDF and the official Royal Travels website as the source of truth for business content.

Official website:
https://www.royaltravels.com/

Matour visual reference:
https://templatekit.jegtheme.com/matour/

Do NOT copy the Matour placeholder content.

Replace all Asia tourism/destination content with Royal Travels' actual services and business information.

==================================================
ROYAL TRAVELS BUSINESS POSITIONING
==================================================

Royal Travels is primarily positioned around:

1. Visa Services
2. Overseas / Manpower Recruitment
3. Attestation & Emigration Services
4. Flight Ticketing
5. Travel Services
6. Related documentation and appointment services

The uploaded business profile describes Royal Travels as an experienced travel and recruitment agency with expertise in recruitment, travelling and visa processing.

Use only verified information from the provided Royal Travels materials.

Do not invent company claims, statistics, certifications, awards, branches, prices, or services.

==================================================
SERVICE CATEGORIES
==================================================

VISA SERVICES:

- Saudi Multiple Business Visit Visa
- Visa Wakkala Service
- Saudi Visa Stamping
- Kuwait Visa Stamping
- Dubai Visit Visa
- Malaysia Visa Stamping
- Umrah Visa

RECRUITMENT & EMPLOYMENT:

- Manpower Recruitment
- SVP Test (Trade Test)
- Medical Appointment (GAMCA)
- Pre-Medical
- Emigration Clearance

DOCUMENTATION:

- Certificate Attestation
- VFS Appointment
- PCC & Passport Service

TRAVEL:

- Flight Ticket
- Tour Package

==================================================
HOMEPAGE CONTENT MAPPING
==================================================

Keep the existing Matour visual composition.

Change the CONTENT meaning as follows:

MATOUR HERO
→ ROYAL TRAVELS HERO

Heading:

"Your Journey Abroad Starts With The Right Support"

Supporting text:

"Visa processing, overseas recruitment, documentation and travel services — handled with experience and care."

CTA:

"Explore Services"

--------------------------------------------------

MATOUR FEATURED DESTINATIONS
→ OUR CORE SERVICES

Use the existing asymmetric image/card layout.

Cards:

- Visa Services
- Overseas Recruitment
- Attestation & Emigration
- Air Ticketing

Do NOT display destinations such as Bali, Thailand, Japan, Phuket, etc.

--------------------------------------------------

MATOUR "EXPERIENCE THE NEW ADVENTURE"
→ "MAKING YOUR JOURNEY SIMPLER"

Use three feature points:

- Experienced Guidance
- Complete Documentation Support
- Reliable Travel Assistance

Keep the same visual layout and image composition.

--------------------------------------------------

MATOUR "DISCOVER A MESMERIZING NATURE LANDSCAPE & STUNNING CULTURE"
→ "BUILDING OPPORTUNITIES. CONNECTING TALENT."

Use this as the major overseas recruitment section.

Explain the recruitment journey:

Candidate Search
→ Shortlisting
→ Skill Test
→ Interview
→ Medical
→ Visa Processing
→ Travel
→ Deployment

Use appropriate recruitment/travel imagery.

--------------------------------------------------

MATOUR TESTIMONIAL SECTION
→ WHY CHOOSE ROYAL TRAVELS

Use verified company strengths and statistics only.

Possible verified content:

- More than 10 years of recruitment experience
- Government / Ministry of Labour recognition as stated in the company profile
- Saudi consular relationships/credentials as stated in the company profile
- Extensive recruitment network

Do not invent numbers.

--------------------------------------------------

MATOUR "BEGIN YOUR NEW LIFE EXPERIENCE..."
→ "BEGIN YOUR NEW CAREER"

Focus on overseas employment and recruitment.

Heading:

"Begin Your New Career With The Right Opportunity"

CTA:

"View Opportunities"

Secondary CTA:

"Our Recruitment Services"

--------------------------------------------------

MATOUR "FIND OUT THE BEST TRAVEL CHOICE IN ASIA"
→ "EXPLORE OUR MOST REQUESTED SERVICES"

Replace destination cards with service cards.

Use:

- Saudi Visa Stamping
- Dubai Visit Visa
- Kuwait Visa Stamping
- Malaysia Visa Stamping
- Manpower Recruitment
- Certificate Attestation
- Flight Ticket
- Umrah Visa
- GAMCA Medical
- VFS Appointment
- PCC & Passport
- SVP Trade Test

Use the same compact Matour card design.

--------------------------------------------------

MATOUR FILTERS
→ SERVICE CATEGORIES

Replace:

Destination
Accommodation
Activity

with:

All Services
Visa
Recruitment
Documentation
Travel

Filtering should be data-driven.

--------------------------------------------------

MATOUR "ENJOY OUR BEST QUALITY TOUR & EXPERIENCE"
→ SERVICE FAQ

Use questions related to:

- Visa processing
- Visa stamping
- Wakala
- Recruitment
- Medical
- Attestation
- Emigration
- Passport services

Use an accessible accordion.

--------------------------------------------------

MATOUR BLOG
→ ROYAL TRAVELS UPDATES

Heading:

"Latest Updates & Travel Information"

Content categories:

- Saudi Visa Updates
- Recruitment Updates
- Travel Documentation
- Visa Information
- GCC Employment Updates
- Travel Tips

Use the existing Matour blog visual layout.

--------------------------------------------------

MATOUR FINAL CTA
→ ROYAL TRAVELS CTA

Heading:

"Ready To Start Your Journey?"

Supporting text:

"Let our team help you with visa processing, recruitment, documentation and travel services."

CTA:

"Contact Us"

==================================================
IMPORTANT
==================================================

Do not change the existing Matour visual language unnecessarily.

Keep:

- Editorial serif typography
- Warm off-white backgrounds
- Dark brown/black feature sections
- Cinematic photography
- Asymmetric grids
- Rounded image corners
- Small refined buttons
- Small circular icons
- Generous whitespace
- Subtle animations
- Premium travel/editorial aesthetic

But change the INFORMATION ARCHITECTURE and CONTENT to Royal Travels.

The result should look like:

ROYAL TRAVELS
with a premium Matour-inspired visual identity,

NOT:

Matour with Royal Travels text pasted into it.

Use the official Royal Travels website and uploaded business profile as the content source of truth.

Reference:
https://www.royaltravels.com/

Design reference:
https://templatekit.jegtheme.com/matour/

==================================================
41. ROYAL TRAVELS COLOR THEME SYSTEM
==================================================

TASK:

The existing Royal Travels landing page is already implemented.

The current landing page is LOCKED.

The purpose of this section is to establish the official color system
for the existing implementation.

The agent must NOT rebuild, redesign, restructure, replace, or rewrite
the existing landing page.

ONLY the COLOR THEME may be changed when this color system is explicitly
requested.

==================================================
41.1 OFFICIAL ROYAL TRAVELS WEBSITE — BRAND VERIFICATION
==================================================

Official Royal Travels website:

https://www.royaltravels.com/

Before modifying the color system, inspect the official Royal Travels
website.

Use the official website ONLY for:

- Brand identity verification
- Existing brand color verification
- Color relationships
- Logo/brand color context
- General brand tone
- Understanding how Royal Travels presents its visual identity

Do NOT copy:

- Website layout
- Page structure
- Section structure
- Navigation structure
- Components
- Typography
- Spacing
- Animations
- Images
- Content structure

The official Royal Travels website is the BUSINESS AND BRAND reference.

The existing project design remains the primary implementation.

==================================================
41.2 DESIGN REFERENCES
==================================================

Local visual reference:

reference/travel-design.png

Matour visual reference:

https://templatekit.jegtheme.com/matour/

Use the local reference and Matour reference for:

- Visual composition
- Editorial design language
- Image treatment
- Section contrast
- Premium travel aesthetic
- Interaction style
- Visual rhythm

Do NOT use Matour's original color palette as the final brand palette.

The final implementation must combine:

ROYAL TRAVELS BRANDING
+
PREMIUM MATOUR-INSPIRED VISUAL LANGUAGE

The result must NOT look like:

- A Matour clone
- A generic travel template
- A brown/gold travel website
- Matour with Royal Travels text pasted into it

The result should look like:

A custom premium Royal Travels website using a
Matour-inspired editorial visual language.

==================================================
41.3 ROYAL TRAVELS MASTER COLOR PALETTE
==================================================

Use the following color system as the primary project palette.

PRIMARY ROYAL BLUE

HEX:
#23446F

Purpose:

- Primary brand color
- Navigation accents
- Links
- Secondary buttons
- Important UI accents
- Active states
- Borders where appropriate
- Selected navigation states
- Brand-related elements

Do not overuse this color.

It should establish Royal Travels branding without making the entire
website visually heavy.

--------------------------------------------------

SECONDARY TRAVEL GREEN

HEX:
#0F9E5E

Purpose:

- Primary CTA buttons
- Main action elements
- Important highlights
- Service actions
- Booking/contact actions
- Success/action indicators
- Hover states
- Important interactive elements

This is the primary ACTION color.

Use it consistently for important calls to action.

--------------------------------------------------

ACCENT SOFT SKY BLUE

HEX:
#73A6C0

Purpose:

- Secondary accents
- Supporting highlights
- Small decorative elements
- Subtle information states
- Secondary visual details

Use sparingly.

Do not allow this color to become a dominant page color.

--------------------------------------------------

WARM IVORY

HEX:
#F7F4EE

Purpose:

- Main light page background
- Editorial sections
- Light content sections
- Light service areas
- Background surfaces
- Premium whitespace areas

This color should help preserve the warm editorial feeling of the
existing Matour-inspired design while removing the original
brown/gold identity.

--------------------------------------------------

DEEP NAVY

HEX:
#101A2B

Purpose:

- Dark sections
- Footer
- Dark service sections
- Dark CTA sections
- Strong contrast areas
- Dark backgrounds
- Navigation states where appropriate

This should replace heavy brown/black Matour-style backgrounds where
the existing implementation allows a color-only change.

--------------------------------------------------

PRIMARY TEXT

HEX:
#1C1C1C

Purpose:

- Main body text
- Primary text on light backgrounds
- Dark headings
- Navigation text where appropriate

--------------------------------------------------

MUTED TEXT

HEX:
#6B7280

Purpose:

- Supporting text
- Descriptions
- Metadata
- Secondary information
- Captions
- Less important labels

--------------------------------------------------

WHITE

HEX:
#FFFFFF

Purpose:

- Text on dark backgrounds
- Primary button text
- Light icons
- Dark-section headings
- Clean surfaces
- High-contrast UI elements

==================================================
41.4 COLOR HIERARCHY
==================================================

Maintain a clear visual hierarchy.

Use the colors approximately according to this hierarchy:

1. Deep Navy
2. Royal Blue
3. Travel Green
4. Warm Ivory
5. Primary Text
6. Muted Text
7. Soft Sky Blue
8. White where contrast requires it

Do not use every color in every section.

Each section should use only the colors required for its visual role.

Avoid making the page overly colorful.

The design should remain:

- Premium
- Editorial
- Professional
- Calm
- Trustworthy
- International
- Travel-focused

==================================================
41.5 LIGHT SECTION RULES
==================================================

For light sections, prefer:

Background:
#F7F4EE

Primary text:
#1C1C1C

Secondary text:
#6B7280

Primary accent:
#0F9E5E

Secondary accent:
#23446F

Borders:
Use subtle variations based on the existing border system.

Do not introduce unrelated gray, beige, yellow, orange, or brown
colors.

==================================================
41.6 DARK SECTION RULES
==================================================

For dark sections, prefer:

Background:
#101A2B

Primary text:
#FFFFFF

Secondary text:
#6B7280 or a suitable readable light variation already present in
the project

Primary CTA:
#0F9E5E

Secondary CTA:
Transparent with white border and white text

Accent:
#73A6C0 where appropriate

Do not use brown or gold as the dominant dark-section accent.

==================================================
41.7 HEADER COLOR RULES
==================================================

The existing header layout is LOCKED.

Do NOT modify:

- Header height
- Header position
- Navigation structure
- Logo position
- Menu spacing
- Typography
- Font size
- Font family
- Responsive behavior
- Existing interactions
- Existing animations
- Header component architecture

ONLY update colors.

If the header overlays the hero:

- Use white/light text where necessary
- Maintain readable navigation
- Use Royal Blue/Green only for appropriate active states
- Do not introduce a large solid navbar

If the existing header changes color on scroll:

Preserve that behavior.

Only update the colors used by the existing states.

==================================================
41.8 NAVIGATION COLORS
==================================================

Navigation must remain visually minimal.

Use:

Default navigation:
Appropriate light/dark text based on the existing background.

Active navigation:
#23446F or #0F9E5E

Hover:
#0F9E5E

Dark-background navigation:
#FFFFFF

Do not change navigation spacing or structure.

Do not add new navigation elements.

==================================================
41.9 PRIMARY BUTTON SYSTEM
==================================================

Primary CTA:

Background:
#0F9E5E

Text:
#FFFFFF

Border:
None unless the existing component requires one.

Hover:
Use a darker variation of the same green family.

Do NOT introduce:

- Orange
- Yellow
- Brown
- Gold
- Neon green
- Unrelated blue

The hover state must remain part of the same Royal Travels color
system.

==================================================
41.10 SECONDARY BUTTON SYSTEM
==================================================

Secondary button on light background:

Background:
transparent

Border:
#23446F

Text:
#23446F

Hover:

Background:
#23446F

Text:
#FFFFFF

Preserve the existing button dimensions, typography, padding,
border-radius, and animation.

ONLY update color values.

==================================================
41.11 DARK SECTION BUTTON SYSTEM
==================================================

Primary button:

Background:
#0F9E5E

Text:
#FFFFFF

Secondary button:

Background:
transparent

Border:
#FFFFFF

Text:
#FFFFFF

Hover states must remain subtle.

Do not change the existing button geometry.

==================================================
41.12 FOOTER COLOR SYSTEM
==================================================

The existing footer structure is LOCKED.

Do NOT change:

- Footer layout
- Column structure
- Content
- Typography
- Spacing
- Links
- Newsletter structure
- Social icon placement
- Responsive behavior

ONLY update colors.

Preferred footer colors:

Background:
#101A2B

Primary text:
#FFFFFF

Secondary/muted text:
#6B7280

Links:
#FFFFFF

Link hover:
#0F9E5E

Accent:
#0F9E5E

Borders:
Use subtle low-contrast borders.

==================================================
41.13 CARD COLORS
==================================================

For cards on light backgrounds:

Background:
#FFFFFF or existing light surface

Primary text:
#1C1C1C

Secondary text:
#6B7280

Accent:
#0F9E5E or #23446F

For cards on dark backgrounds:

Background:
Use the existing dark card structure.

Do not introduce new brown/gold surfaces.

Maintain subtle borders.

Do not change:

- Card size
- Card dimensions
- Grid structure
- Image dimensions
- Border radius
- Padding
- Typography

ONLY update color values.

==================================================
41.14 IMAGE OVERLAYS
==================================================

Existing image overlays must remain structurally unchanged.

Only adjust overlay color if necessary to align with the new color
system.

Prefer:

Deep Navy:
#101A2B

with appropriate transparency.

Do NOT add:

- Brown overlays
- Gold overlays
- Bright colored overlays
- Heavy green overlays

The image itself must NOT be changed.

Only the overlay color may be changed if it is part of the existing
color theme.

==================================================
41.15 BORDER COLORS
==================================================

Use subtle borders.

Light backgrounds:

Use a subtle neutral/blue-gray border based on the existing design
system.

Dark backgrounds:

Use subtle white transparency or an existing dark-border token.

Brand-accent borders may use:

#23446F

Do not make every border blue or green.

Borders must remain understated.

==================================================
41.16 ICON COLORS
==================================================

Keep all existing icons.

Do NOT replace icon designs.

Only update icon colors.

Preferred:

Primary icon:
#23446F

Action icon:
#0F9E5E

Light/dark-section icon:
#FFFFFF

Muted icon:
#6B7280

Use the existing icon size and positioning.

==================================================
41.17 HOVER STATES
==================================================

All existing hover interactions must remain unchanged.

Only update the colors used during hover.

Preferred hover behavior:

Primary action:
Green → darker green variation

Secondary action:
Royal Blue → darker Royal Blue or white depending on background

Links:
Muted/neutral → #0F9E5E

Cards:
Maintain existing image/overlay behavior.

Do NOT add new animations.

Do NOT modify hover movement.

Do NOT change transition durations.

==================================================
41.18 ACTIVE STATES
==================================================

Active states should use:

Primary:
#23446F

or

Action:
#0F9E5E

depending on the component.

Do not use:

- Gold
- Brown
- Orange
- Random blue
- Neon colors

==================================================
41.19 MATOUR COLOR REPLACEMENT
==================================================

If the current implementation contains Matour-style colors such as:

- Brown
- Dark brown
- Gold
- Tan
- Warm orange
- Beige-heavy accents

Replace them with the appropriate Royal Travels colors.

Suggested mapping:

Matour brown/dark brown
→ #101A2B

Matour gold/accent
→ #0F9E5E

Warm beige background
→ #F7F4EE

Dark neutral text
→ #1C1C1C

Muted neutral text
→ #6B7280

Secondary brand accent
→ #23446F

Do not blindly replace every color with a single color.

Map colors according to their semantic role.

==================================================
41.20 COLOR TOKEN IMPLEMENTATION
==================================================

Before editing components:

Inspect the existing project and determine whether colors are defined
through:

- CSS variables
- Tailwind configuration
- Theme tokens
- Global CSS
- Component constants
- Utility classes
- Design-system variables

Prefer changing the centralized color system.

For example, if the project uses CSS variables, prefer:

--color-primary
--color-secondary
--color-accent
--color-background
--color-dark
--color-text
--color-muted

rather than changing colors individually in dozens of components.

If Tailwind tokens already exist, update those tokens.

Do NOT introduce a new architecture if an existing centralized color
system already exists.

==================================================
41.21 NO UNNECESSARY CODE CHANGES
==================================================

Do NOT modify:

- page structure
- JSX structure
- component hierarchy
- data files
- image files
- routes
- page content
- fonts
- typography
- animations
- layout classes
- responsive classes
- dependencies

unless a specific color implementation requires a minimal change.

If a component must be touched to consume an existing color token,
make the smallest possible modification.

==================================================
41.22 LANDING PAGE LOCK
==================================================

The current landing page is LOCKED.

The following are strictly protected:

- Section order
- Section dimensions
- Section heights
- Container widths
- Grid structures
- Flex structures
- Image placement
- Image cropping
- Image dimensions
- Typography
- Font families
- Font sizes
- Font weights
- Line heights
- Letter spacing
- Spacing
- Padding
- Margins
- Border radius
- Buttons dimensions
- Icon dimensions
- Animations
- Transitions
- Responsive breakpoints
- Responsive layout
- Navigation
- Header structure
- Footer structure
- Content
- Images

ONLY COLOR VALUES MAY CHANGE.

If a requested change would affect any protected item,
DO NOT make that change.

==================================================
41.23 NO DESIGN IMPROVEMENTS
==================================================

Do NOT use this task as an opportunity to improve the design.

Do NOT:

- Redesign sections
- Modernize components
- Change spacing
- Change typography
- Replace images
- Change card layouts
- Add animations
- Remove animations
- Change responsive behavior
- Add sections
- Remove sections
- Change content
- Create new components
- Refactor unrelated code

This task is strictly a color-theme update.

==================================================
41.24 ACCESSIBILITY VERIFICATION
==================================================

After applying the new colors, verify:

- Text contrast
- Button contrast
- Navigation readability
- Footer readability
- Dark section readability
- Light section readability
- Image-overlay readability
- Hover-state visibility
- Active-state visibility
- Mobile readability

Do not solve contrast issues by changing:

- Typography
- Font size
- Layout
- Spacing

unless absolutely necessary.

First solve the problem using color values.

==================================================
41.25 RESPONSIVE VERIFICATION
==================================================

Verify the existing implementation at:

- Large desktop
- Desktop
- Tablet
- Mobile
- Small mobile

At minimum verify:

1440px+
1280px
1024px
768px
640px
480px
375px

The layout must remain unchanged.

The only expected visual difference should be the color system.

==================================================
41.26 VISUAL VERIFICATION
==================================================

After applying the colors, compare the implementation against:

Official Royal Travels:
https://www.royaltravels.com/

Local visual reference:
reference/travel-design.png

Matour reference:
https://templatekit.jegtheme.com/matour/

Verify:

- Brand color consistency
- Section contrast
- Button colors
- Header colors
- Footer colors
- Text readability
- Card colors
- Link colors
- Hover states
- Active states
- Dark sections
- Light sections

Do NOT compare layouts against the official Royal Travels website.

The official website is used for BRAND verification only.

The existing project/reference is used for DESIGN verification.

==================================================
41.27 EXPECTED VISUAL RESULT
==================================================

The resulting website should feel:

Premium

Professional

International

Travel-focused

Trustworthy

Modern

Editorial

Royal Travels branded

The design should retain the existing Matour-inspired visual language:

- Editorial typography
- Cinematic photography
- Warm light sections
- Dark feature sections
- Asymmetric layouts
- Rounded image treatment
- Refined buttons
- Circular icons
- Generous whitespace
- Subtle interaction

But the COLOR IDENTITY must clearly belong to Royal Travels.

==================================================
41.28 COLORS THAT MUST NOT BE INTRODUCED
==================================================

Do NOT introduce unrelated:

- Bright orange
- Yellow
- Gold
- Brown
- Burgundy
- Neon green
- Neon blue
- Purple
- Pink
- Random gradients

Do not use gradients unless an existing gradient is already part of
the current implementation and only its colors need to be updated.

==================================================
41.29 FINAL COLOR CHECKLIST
==================================================

Before finishing, verify:

[ ] Primary Royal Blue #23446F is used consistently.

[ ] Travel Green #0F9E5E is used for primary actions.

[ ] Soft Sky Blue #73A6C0 is used sparingly.

[ ] Warm Ivory #F7F4EE is used for light backgrounds.

[ ] Deep Navy #101A2B is used for dark sections.

[ ] Primary Text #1C1C1C is used for main text.

[ ] Muted Text #6B7280 is used for supporting text.

[ ] White #FFFFFF is used for appropriate contrast.

[ ] Matour brown/gold colors are removed or replaced.

[ ] No unrelated colors were introduced.

[ ] Header structure remains unchanged.

[ ] Footer structure remains unchanged.

[ ] Buttons retain their existing dimensions.

[ ] Images remain unchanged.

[ ] Typography remains unchanged.

[ ] Spacing remains unchanged.

[ ] Layout remains unchanged.

[ ] Responsive behavior remains unchanged.

[ ] Animations remain unchanged.

==================================================
41.30 STRICT CHANGE SCOPE
==================================================

ONLY modify:

- Color variables
- Color tokens
- Theme colors
- Background colors
- Text colors
- Border colors
- Button colors
- Link colors
- Icon colors
- Hover colors
- Active colors
- Existing overlay colors

Do NOT modify anything else.

==================================================
41.31 FINAL REPORT
==================================================

After completing the color update, provide a concise technical report
containing EXACTLY:

1. FILES MODIFIED

List every modified file.

2. COLOR TOKENS / VARIABLES CHANGED

List each changed variable/token.

3. OLD COLORS REPLACED

List the major old colors that were replaced.

4. NEW ROYAL TRAVELS COLORS APPLIED

Confirm the final palette:

#23446F
#0F9E5E
#73A6C0
#F7F4EE
#101A2B
#1C1C1C
#6B7280
#FFFFFF

5. STRUCTURE CONFIRMATION

Explicitly confirm:

- No layout changed
- No section order changed
- No content changed
- No typography changed
- No images changed
- No component structure changed
- No animations changed
- No responsive behavior changed
- No new pages created
- No unnecessary dependencies added

==================================================
41.32 FAILURE / STOP CONDITION
==================================================

If the requested color update cannot be completed without modifying
something outside the color system:

STOP.

Do not redesign or improvise.

Report:

- What is blocking the color-only change
- Which file/component is responsible
- Why a color-only change is currently not possible
- What minimal change would be required

Do NOT automatically make additional changes.

==================================================
41.33 FINAL PRINCIPLE
==================================================

This task is a THEME UPDATE.

It is NOT:

- A redesign
- A rebuild
- A refactor
- A content update
- An image replacement
- A typography update
- A responsive redesign
- A component rewrite

The existing landing page must remain visually identical in:

STRUCTURE
+
LAYOUT
+
CONTENT
+
TYPOGRAPHY
+
IMAGES
+
SPACING
+
INTERACTION

Only the COLOR IDENTITY changes.

Final goal:

EXISTING ROYAL TRAVELS LANDING PAGE
+
ROYAL TRAVELS COLOR SYSTEM
+
EXISTING MATOUR-INSPIRED DESIGN LANGUAGE

Do not change anything outside that scope.