# Technical Task Specification (Convert Figma Landing Page to Next.js)

## 0. Document Information

| Field                    | Value                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------- |
| Task Name                | Convert Figma Landing Page to Next.js                                                       |
| Design Source            | Figma                                                                                       |
| Figma Frame Name         | `✅ landing page`                                                                           |
| Figma URL                | `https://www.figma.com/design/ZVgnOlGbPmDpizmcOJtpu2/Mr-Abasi-Project--Copy-?node-id=1-263` |
| Figma File Key           | `ZVgnOlGbPmDpizmcOJtpu2`                                                                    |
| Figma Node ID            | `1:263`                                                                                     |
| Reference Frame Size     | `1601px × 11823px`                                                                          |
| Main Background Color    | `#040404`                                                                                   |
| Expected Developer Level | Mid-level frontend developer                                                                |
| Delivery Model           | Full project handoff; no Pull Request required                                              |
| Document Status          | Locked after approval                                                                       |
| Main Goal                | Define the expected technical, visual, structural, and delivery output                      |

This document is the main execution standard for the task.

If something is clearly visible in Figma but is not written in this document, it is still part of the task unless it is clearly listed in the **Out of Scope** section.

Related documentation:

- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`
- Figma export: `https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design`
- Figma export formats: `https://help.figma.com/hc/en-us/articles/13402894554519-Export-formats-and-settings`

---

## 1. Developer Expectation and Documentation Rule

The developer assigned to this task is expected to be a **mid-level frontend developer**. The developer may not have a fully academic or formal learning path, so the implementation must be based on official documentation rather than memory, tutorials, assumptions, or copied snippets.

Rules:

1. Before using any framework, package, component library, API, or UI resource mentioned in this document, the developer must read the related official documentation.
2. If the developer uses a technology, package, or external UI resource not listed in this document, they must first ask for approval.
3. If an official command or API has changed, the developer must follow the latest official documentation and report the difference in the final handoff note.
4. The developer must not use outdated package names, deprecated commands, or unofficial examples when official documentation exists.
5. If the developer is unsure about a concept, they must check the official documentation before implementing it.

Core documentation links:

- Next.js App Router: `https://nextjs.org/docs/app`
- Next.js installation: `https://nextjs.org/docs/app/getting-started/installation`
- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- Next.js Server and Client Components: `https://nextjs.org/docs/app/getting-started/server-and-client-components`
- Next.js Image Component: `https://nextjs.org/docs/app/api-reference/components/image`
- Next.js Metadata and Open Graph images: `https://nextjs.org/docs/app/getting-started/metadata-and-og-images`
- React documentation: `https://react.dev/learn`
- React TypeScript guide: `https://react.dev/learn/typescript`
- TypeScript documentation: `https://www.typescriptlang.org/docs/`
- Tailwind CSS documentation: `https://tailwindcss.com/docs`
- Tailwind responsive design: `https://tailwindcss.com/docs/responsive-design`
- Tailwind theme variables: `https://tailwindcss.com/docs/theme`
- Tailwind custom styles: `https://tailwindcss.com/docs/adding-custom-styles`
- pnpm documentation: `https://pnpm.io/motivation`
- pnpm CLI commands: `https://pnpm.io/cli/install`

---

## 2. Task Goal

The goal is to convert the Figma frame `✅ landing page` into a production-ready landing page using:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Solar Icons via `@solar-icons/react-perf`

The final result must be:

- Visually close to the Figma design
- Clean and modular
- Responsive on desktop, tablet, and mobile
- Free from TypeScript, lint, and build errors
- Accessible at a basic production level
- Easy to maintain and review
- Delivered as a complete project handoff

The result is not accepted only because it works in the browser.

It must also be correct in:

- Visual quality
- Code structure
- Responsiveness
- Accessibility
- Maintainability
- Asset handling
- Final delivery completeness

Related documentation:

- Next.js App Router: `https://nextjs.org/docs/app`
- React: `https://react.dev/learn`
- TypeScript: `https://www.typescriptlang.org/docs/`
- Tailwind CSS: `https://tailwindcss.com/docs`
- shadcn/ui: `https://ui.shadcn.com/docs`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`

---

## 3. Figma as the Source of Truth

Figma is the source of truth for the page.

Rules:

1. Section order must follow Figma.
2. Colors, spacing, border radius, typography, images, and layout must follow Figma.
3. The developer must not simplify the design based on personal taste.
4. Any clear visual detail in Figma must be implemented, even if this document does not describe it in detail.
5. If any part of the design is unclear, the developer must ask before implementing it.
6. Guess-based implementation is not acceptable if it creates a difference from Figma.
7. External UI resources may help recreate Figma visuals, but they must not replace Figma as the design source.

Related documentation:

- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`
- Figma developer handoff: `https://www.figma.com/best-practices/guide-to-developer-handoff/`
- Figma export: `https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design`

---

## 4. Figma Access and Asset Export Rules

The developer must confirm Figma access before starting implementation.

Required access:

- View access to the Figma file
- Ability to inspect sizes, colors, spacing, and styles
- Ability to export required assets
- Dev Mode access if available

Rules:

1. If Figma access is missing, the developer must report it before starting.
2. If an asset cannot be exported, the developer must report it before replacing it.
3. The developer must not use a full-page screenshot as the implementation.
4. The developer must export only the assets needed for implementation.
5. Asset names must be semantic and maintainable.
6. Icons must not be exported from Figma if they can be correctly matched from Solar Icons.
7. If a Figma icon does not exist in Solar Icons, the developer must report it before replacing it.
8. Images must keep their original visual ratio from Figma.
9. Decorative assets must be treated as decorative in markup.

Related documentation:

- Figma export: `https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design`
- Figma export formats: `https://help.figma.com/hc/en-us/articles/13402894554519-Export-formats-and-settings`
- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`

---

## 5. Known Figma Frame Summary

Known Figma frame information:

```txt
Frame name: ✅ landing page
Node ID: 1:263
Width: 1601px
Height: 11823px
Background: #040404
Main content wrapper: 1:264
Main layout: Long vertical landing page
Approximate main sections: 14
```

Expected main page structure:

1. Hero Section
2. Collaboration / Brand Strip
3. Intro Quote Section
4. Services / Capabilities Section
5. Works / Portfolio Preview Section
6. Process / Explanation Section
7. Category / Filter Showcase Section
8. Featured Media / Showcase Section
9. Pricing / Package Section
10. Testimonials / Social Proof Section
11. FAQ Section
12. CTA Section
13. Footer Section
14. Floating / Menu Element if visible in the design

The internal component names can be adjusted, but the visual order and content must not change.

Related documentation:

- Next.js pages and layouts: `https://nextjs.org/docs/app/getting-started/layouts-and-pages`
- React components: `https://react.dev/learn/your-first-component`

---

## 6. Scope

### 6.1 In Scope

The developer must complete the following:

- Set up the project using the approved stack or continue from the existing project setup.
- Implement the full landing page.
- Create a separate component for each main section.
- Export all needed assets from Figma.
- Use `next/image` for content images.
- Implement responsive layouts for desktop, tablet, and mobile.
- Add basic SEO metadata.
- Add basic accessibility support.
- Use Solar Icons Line Duotone / Linear Duotone visual style through `@solar-icons/react-perf`.
- Run and pass required validation commands.
- Deliver the complete project files and final handoff note.

### 6.2 Out of Scope

The developer must not do these unless directly approved:

- CMS integration
- API integration
- Admin panel
- Redesigning the page
- Changing copy/text
- Adding new sections
- Removing sections from Figma
- Merging sections without approval
- Adding animations not shown or requested
- Installing unnecessary packages
- Using a UI kit other than the approved resources
- Replacing the Figma design with a ready-made template
- Adding a form backend
- Adding analytics scripts
- Adding tracking pixels
- Adding deployment configuration unless requested

Related documentation:

- Next.js App Router: `https://nextjs.org/docs/app`
- Next.js Metadata: `https://nextjs.org/docs/app/getting-started/metadata-and-og-images`
- Next.js Image: `https://nextjs.org/docs/app/api-reference/components/image`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`

---

## 7. Assumptions

These assumptions apply unless the project owner says otherwise:

1. The landing page is static unless a visible interaction exists in Figma.
2. No CMS, API, or backend integration is required.
3. All copy comes from Figma.
4. All unknown links can temporarily use `#` unless final URLs are provided.
5. If a form is visible in Figma, it is UI-only unless backend behavior is explicitly approved.
6. shadcn/ui is the base UI system, but the page must not be forced into shadcn's default visual style.
7. Aceternity UI, React Bits, and Magic UI are approved helper resources only when they help match the Figma design.
8. Solar Icons must be used for icons unless a visible Figma icon has no suitable Solar equivalent.
9. The developer must ask before changing structure, content, interactions, assets, or package decisions.

Related documentation:

- shadcn/ui: `https://ui.shadcn.com/docs`
- Solar Icons: `https://solar-icons.vercel.app/`
- Aceternity UI: `https://ui.aceternity.com/`
- React Bits: `https://reactbits.dev/`
- Magic UI: `https://magicui.design/`

---

## 8. Technical Stack

The implementation must use this stack:

```txt
Framework: Next.js App Router
Language: TypeScript
UI Base: shadcn/ui
Styling: Tailwind CSS + CSS Variables
Icons: Solar Icons via @solar-icons/react-perf
Image Handling: next/image
Package Manager: pnpm
Rendering Strategy: Server Component by default
```

Important rules:

1. The exact package versions must come from the project `package.json` or the latest official documentation at the time of implementation.
2. Deprecated commands must not be used.
3. The developer must use the current `shadcn` CLI, not the old `shadcn-ui` CLI.
4. If a command from this document fails because official documentation has changed, the developer must follow the latest official documentation and mention the change in the final handoff note.

Related documentation:

- Next.js App Router: `https://nextjs.org/docs/app`
- TypeScript: `https://www.typescriptlang.org/docs/`
- Tailwind CSS: `https://tailwindcss.com/docs`
- shadcn CLI: `https://ui.shadcn.com/docs/cli`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`
- pnpm: `https://pnpm.io/cli/install`

---

## 9. Project Setup

### 9.1 If the Project Already Exists

Run:

```bash
pnpm install
pnpm dev
```

Then check:

```bash
pnpm lint
pnpm check-types
pnpm build
```

If `check-types` does not exist, the developer must use the project's equivalent TypeScript validation command and mention the used command in the final handoff note.

If the project has existing build, lint, or type errors before starting the task, the developer must report them first.

The developer must not hide existing errors by disabling TypeScript, ESLint, or build rules.

### 9.2 If the Project Must Be Created From Scratch

Create a Next.js project:

```bash
pnpm create next-app@latest
```

Required choices:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
App Router: Yes
src directory: Follow project decision
Import alias: @/*
```

If the project must use `src/`, choose `Yes` when prompted or use the equivalent CLI option.

Related documentation:

- Next.js installation: `https://nextjs.org/docs/app/getting-started/installation`
- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- Next.js TypeScript: `https://nextjs.org/docs/app/api-reference/config/typescript`
- pnpm install command: `https://pnpm.io/cli/install`

---

## 10. shadcn/ui Setup and Usage

### 10.1 Official Documentation

Read before setup:

- shadcn/ui Installation: `https://ui.shadcn.com/docs/installation`
- shadcn/ui Next.js Installation: `https://ui.shadcn.com/docs/installation/next`
- shadcn/ui CLI: `https://ui.shadcn.com/docs/cli`
- shadcn/ui Registry: `https://ui.shadcn.com/docs/registry`
- shadcn/ui Components: `https://ui.shadcn.com/docs/components`

### 10.2 Setup for New Project

Use the current official CLI:

```bash
pnpm dlx shadcn@latest init -t next
```

For monorepo setup, use the official monorepo option only if the project structure requires it:

```bash
pnpm dlx shadcn@latest init -t next --monorepo
```

### 10.3 Setup for Existing Project

If the project already exists, first confirm:

- Tailwind CSS is installed.
- App Router is used.
- TypeScript is enabled.
- `@/*` import alias exists.
- `components.json` exists after shadcn initialization.

Then run:

```bash
pnpm dlx shadcn@latest init
```

Add components only when needed:

```bash
pnpm dlx shadcn@latest add button
```

Example import:

```tsx
import { Button } from "@/components/ui/button";
```

### 10.4 shadcn/ui Project Rules

Rules:

1. shadcn/ui is the base UI system for useful primitives and common interface elements.
2. The landing page must not be visually forced into shadcn's default style.
3. Use `components/ui` only for shadcn-generated UI components.
4. Do not put landing-specific components inside `components/ui`.
5. Do not modify shadcn components unless there is a clear reason.
6. Prefer composition, wrapper components, and `className` over editing generated UI files.
7. If a generated shadcn component is edited, the reason must be written in the final handoff note.
8. Only install shadcn components that are actually used.

Likely needed components:

```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add accordion
pnpm dlx shadcn@latest add separator
```

Conditional components:

```bash
pnpm dlx shadcn@latest add tabs
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add dialog
```

Rule:

`tabs`, `sheet`, and `dialog` must only be installed if real interaction requires them.

---

## 11. Solar Icons Policy

Icons must use the Solar Icons visual language.

Required package:

```bash
pnpm add @solar-icons/react-perf
```

Required style:

```txt
Solar Line Duotone / Linear Duotone visual style
```

Implementation rules:

1. Use `@solar-icons/react-perf` for icons.
2. Use the Solar Line Duotone / Linear Duotone style requested for this project.
3. Before implementation, verify the exact icon names and import paths from the official Solar Icons documentation or icon explorer.
4. Do not use `lucide-react` for this task unless explicitly approved.
5. Do not export icons from Figma if a visually matching Solar icon exists.
6. Do not mix different icon styles unless Figma clearly requires it and the change is approved.
7. Icons must be sized and colored through props or class names, not duplicated SVG files.
8. Decorative icons should not create unnecessary accessibility noise.
9. Meaningful icons must have accessible labels when they communicate information not available in text.

Possible import patterns must be confirmed from the official docs before final use:

```tsx
import { HomeLineDuotone } from "@solar-icons/react-perf";
```

or, if supported for the selected style:

```tsx
import { Home } from "@solar-icons/react-perf/line-duotone";
```

The developer must validate the exact import pattern before coding.

Related documentation:

- Solar Icons documentation: `https://solar-icons.vercel.app/`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`
- Solar Icons package on npm: `https://www.npmjs.com/package/@solar-icons/react-perf`
- Solar Icons GitHub repository: `https://github.com/saoudi-h/solar-icons`
- Original Solar Icon Set: `https://github.com/480-Design/Solar-Icon-Set`
- MDN SVG accessibility: `https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title`

---

## 12. External UI Resources Policy

This project may use the following external UI resources as references or component sources:

- Aceternity UI
- React Bits
- Magic UI

These resources are allowed as controlled helpers only.

Main rule:

```txt
Figma first. Custom implementation first. External UI only when it helps match Figma cleanly.
```

Rules:

1. Figma remains the source of truth.
2. shadcn/ui remains the UI base.
3. External components must be adapted to match Figma.
4. Do not paste large code blocks without understanding them.
5. Do not install all dependencies from a copied component blindly.
6. Do not copy a full ready-made template as the final page.
7. Do not add a component only because it looks attractive.
8. Do not add effects that are not visible in Figma.
9. Every external component used must be listed in the final handoff note.
10. Every extra dependency must be justified in the final handoff note.
11. If copied code is complex, the developer must simplify it where possible without breaking the required visual behavior.

Related documentation:

- Aceternity UI: `https://ui.aceternity.com/`
- Aceternity UI Installation: `https://ui.aceternity.com/installation`
- React Bits: `https://reactbits.dev/`
- React Bits Pro Installation: `https://pro.reactbits.dev/docs/installation`
- Magic UI: `https://magicui.design/`
- Magic UI Installation: `https://magicui.design/docs/installation`
- Magic UI Manual Installation: `https://magicui.design/docs/installation/manual`
- shadcn Registry: `https://ui.shadcn.com/docs/registry`

---

## 13. Aceternity UI Policy

Aceternity UI may be used for:

- Background visual effects
- Hero visual effects
- Bento grids
- Card hover effects
- Logo clouds
- CTA sections
- Testimonials
- Pricing sections
- FAQ sections
- Footer inspiration

Aceternity UI must not be used to replace the entire Figma design.

Before copying any Aceternity code:

1. Open the related component documentation.
2. Check required dependencies.
3. Copy only the needed component.
4. Place the copied component inside the landing feature area unless it is truly generic.
5. Adapt styling to match Figma.
6. Remove unused props, demo data, and unused styles.
7. Do not use Aceternity templates as a shortcut for the full page.

Allowed placement:

```txt
components/
  landing/
    components/
      aceternity/
```

or, if the component is used in only one section:

```txt
components/
  landing/
    sections/
      hero-section.tsx
```

Related documentation:

- Aceternity UI: `https://ui.aceternity.com/`
- Aceternity UI Installation: `https://ui.aceternity.com/installation`

---

## 14. React Bits Policy

React Bits may be used for:

- Text animation
- Gallery effects
- Hover previews
- Cursor effects only if approved
- Background effects
- Card effects
- Showcase interactions

React Bits must not be used to add unnecessary animation or visual noise.

If using React Bits Pro registry:

1. Confirm that the project has shadcn/ui initialized.
2. Confirm the required runtime version from official docs.
3. Confirm `components.json` exists.
4. Add the required license key to `.env.local` if needed.
5. Configure the registry in `components.json` if needed.
6. Install only the exact component or block needed.
7. Use the Tailwind variant when this project uses Tailwind.

Important registry note:

```txt
Use @reactbits-starter for components when available.
Use @reactbits-pro only for Pro/Ultimate blocks if the license allows it.
```

If using manual copy-paste:

1. Copy only the required component.
2. Check all dependencies.
3. Remove demo content.
4. Adapt the component to match Figma.
5. Keep TypeScript strict and clean.
6. Do not introduce unnecessary Client Components.

Allowed placement:

```txt
components/
  landing/
    components/
      react-bits/
```

or inside the exact section if it is section-specific.

Related documentation:

- React Bits: `https://reactbits.dev/`
- React Bits Pro Installation: `https://pro.reactbits.dev/docs/installation`
- shadcn Registry: `https://ui.shadcn.com/docs/registry`

---

## 15. Magic UI Policy

Magic UI may be used for:

- Marquee
- Bento Grid
- Animated List
- Progressive Blur
- Border Beam
- Shine Border
- Magic Card
- Particles
- Text animation
- Gradient text
- Number ticker
- Grid or dot backgrounds
- Button effects

Magic UI must only be used when the selected component helps match the Figma design.

The project must have shadcn/ui initialized first:

```bash
pnpm dlx shadcn@latest init
```

Then add only the exact Magic UI component needed.

Example:

```bash
pnpm dlx shadcn@latest add @magicui/globe
```

Rules:

1. Do not install random Magic UI components.
2. Do not keep demo content.
3. Do not use Magic UI Pro blocks without license approval.
4. Move section-specific wrapper logic into `components/landing`.
5. Keep generated UI files clean.
6. Remove unused dependencies if the component does not need them after adaptation.

Related documentation:

- Magic UI: `https://magicui.design/`
- Magic UI Installation: `https://magicui.design/docs/installation`
- Magic UI Manual Installation: `https://magicui.design/docs/installation/manual`
- shadcn CLI: `https://ui.shadcn.com/docs/cli`

---

## 16. Package Policy

### 16.1 Allowed Base Packages

These packages are allowed:

```txt
next
react
react-dom
typescript
tailwindcss
class-variance-authority
clsx
tailwind-merge
@solar-icons/react-perf
```

### 16.2 Conditional Packages

These packages are only allowed when there is a real need:

| Need                | Allowed Package        | Usage Condition                                        | Documentation                                                    |
| ------------------- | ---------------------- | ------------------------------------------------------ | ---------------------------------------------------------------- |
| Animation           | `motion`               | Only if real animation is needed and CSS is not enough | `https://motion.dev/docs/react`                                  |
| Carousel            | `embla-carousel-react` | Only if the section is a real carousel                 | `https://www.embla-carousel.com/docs/get-started/react`          |
| Form handling       | `react-hook-form`      | Only if there is a real form                           | `https://react-hook-form.com/get-started`                        |
| Validation          | `zod`                  | Only for real validation                               | `https://zod.dev/`                                               |
| Headless primitives | Radix UI               | Only through shadcn or when required                   | `https://www.radix-ui.com/primitives/docs/overview/introduction` |

### 16.3 Forbidden Packages Without Approval

The developer must not install these without approval:

- Another UI kit beside the approved resources
- Bootstrap
- MUI
- Ant Design
- Chakra UI
- Heavy animation libraries
- Heavy carousel libraries
- A second icon library
- Small utility packages that can be replaced by simple code
- Another CSS framework
- Full landing page templates

Rule:

Every new package must be explained in the final handoff note:

- Why it was installed
- Where it is used
- Why the approved stack was not enough
- Link to its official documentation

Related documentation:

- pnpm add command: `https://pnpm.io/cli/add`
- Motion for React: `https://motion.dev/docs/react`
- Embla React: `https://www.embla-carousel.com/docs/get-started/react`
- React Hook Form: `https://react-hook-form.com/get-started`
- Zod: `https://zod.dev/`
- Radix Primitives: `https://www.radix-ui.com/primitives/docs/overview/introduction`

---

## 17. Package and Resource Matrix by Section

| Section             | Main Need                | Allowed Tools                           | External Resource Rule                                          |
| ------------------- | ------------------------ | --------------------------------------- | --------------------------------------------------------------- |
| Hero                | Layout, media, CTA       | `next/image`, `Button`, Solar Icons     | Aceternity/Magic UI only for matching background or hero effect |
| Collaboration Strip | Static or marquee strip  | CSS first, Magic UI if needed           | Magic UI Marquee only if behavior matches Figma                 |
| Intro Quote         | Typography, inline media | CSS + `next/image`                      | React Bits text effect only if Figma has text animation         |
| Services            | Cards/grid/icons         | `Card` if useful, Solar Icons           | Aceternity/Magic UI card effects only if visually required      |
| Portfolio           | Grid/media cards         | `next/image`, custom card               | React Bits gallery only if Figma needs it                       |
| Process             | Steps/cards/icons        | CSS + reusable components + Solar Icons | No extra library by default                                     |
| Category Showcase   | Tabs/filter visual       | `Tabs` only if real interaction exists  | No external package unless needed                               |
| Featured Works      | Media grid               | `next/image`                            | External galleries only if they match Figma                     |
| Pricing             | Package cards            | `Card`, `Button`, `Badge`               | Aceternity pricing block can be used only as reference          |
| Testimonials        | Quote cards              | Custom card                             | Aceternity/Magic UI testimonial style only if adapted to Figma  |
| FAQ                 | Accordion                | `shadcn Accordion`                      | Aceternity FAQ block only as reference                          |
| CTA                 | Button/contact action    | `Button`, Solar Icons                   | Aceternity/Magic UI CTA only as reference                       |
| Footer              | Links/social items       | Semantic HTML + Solar Icons             | No template copy                                                |

Related documentation:

- shadcn Components: `https://ui.shadcn.com/docs/components`
- Solar Icons: `https://solar-icons.vercel.app/`
- Next.js Image: `https://nextjs.org/docs/app/api-reference/components/image`
- Motion for React: `https://motion.dev/docs/react`
- Embla Carousel React: `https://www.embla-carousel.com/docs/get-started/react`

---

## 18. Required File Structure

The implementation must follow this structure.

If the project does not use `src/`:

```txt
app/
  layout.tsx
  page.tsx
  globals.css

components/
  ui/
  landing/
    landing-page.tsx
    sections/
      hero-section.tsx
      collaboration-strip.tsx
      intro-quote-section.tsx
      services-section.tsx
      portfolio-section.tsx
      process-section.tsx
      categories-section.tsx
      featured-works-section.tsx
      pricing-section.tsx
      testimonials-section.tsx
      faq-section.tsx
      cta-section.tsx
      footer-section.tsx
    components/
      landing-container.tsx
      section-heading.tsx
      media-card.tsx
      glass-card.tsx
      section-badge.tsx
      icon-wrapper.tsx
    data/
      landing-content.ts
    types/
      landing.types.ts

lib/
  utils.ts

public/
  images/
    landing/
      hero/
      portfolio/
      testimonials/
      backgrounds/
      icons/
```

If the project uses `src/`, the same structure must be placed under `src/`:

```txt
src/
  app/
  components/
  lib/

public/
  images/
    landing/
```

Rules:

1. `page.tsx` must only compose the page.
2. No large section must be implemented directly inside `page.tsx`.
3. Each main section must have its own file.
4. Repeated content must be stored in `landing-content.ts`.
5. Types must be stored in `landing.types.ts`.
6. Generic shadcn components must stay inside `components/ui`.
7. Custom landing components must not be placed inside `components/ui`.
8. Section-specific helper components may live beside the section if they are not reused.
9. Shared landing utilities must live inside `components/landing/components`.

Acceptable `page.tsx` example:

```tsx
import { LandingPage } from "@/components/landing/landing-page";

export default function Page() {
  return <LandingPage />;
}
```

Related documentation:

- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- Next.js layouts and pages: `https://nextjs.org/docs/app/getting-started/layouts-and-pages`
- TypeScript modules: `https://www.typescriptlang.org/docs/handbook/modules.html`

---

## 19. Component Rules

Each component must:

- Have one clear responsibility.
- Have a clear name.
- Use typed props when props are needed.
- Keep JSX readable.
- Avoid hard-coded repeated content inside the component.
- Avoid becoming a Client Component without a real reason.
- Avoid unnecessary abstraction.
- Avoid becoming too large.

Server/Client rule:

```txt
Default: Server Component
Allowed Client Component: Only for real interaction
```

Client Components are allowed for:

- Open/close menu
- Interactive carousel
- Accordion if needed
- Tabs if needed
- State-based animation
- Form interaction

Client Components are not allowed only for:

- Showing text
- Showing images
- Simple grids
- Simple cards
- Static sections
- Fixed layouts

Related documentation:

- Next.js Server and Client Components: `https://nextjs.org/docs/app/getting-started/server-and-client-components`
- React components: `https://react.dev/learn/your-first-component`
- React conditional rendering: `https://react.dev/learn/conditional-rendering`
- TypeScript React guide: `https://react.dev/learn/typescript`

---

## 20. Visual Fidelity Rules

The final page must stay visually aligned with Figma.

Main requirements:

- Main background must be `#040404`.
- Overall style must stay dark, minimal, and cinematic.
- Main desktop content width should be close to `1296px`.
- Full-width sections must remain full-width.
- Border radius for cards and images must follow Figma.
- Section spacing must follow Figma.
- Images must keep the correct aspect ratio.
- Large text must keep a similar visual hierarchy.
- Glow, gradient, border, and opacity effects must be close to Figma.
- Icons must follow the Solar Line Duotone / Linear Duotone visual style unless Figma clearly requires another approved treatment.

Forbidden visual changes:

- Personal color changes
- Large spacing changes
- Replacing a card layout with a simpler layout
- Removing decorative visuals
- Changing image aspect ratios
- Turning visual sections into plain text sections
- Replacing the Figma design with a copied external template
- Replacing Solar Icons with another icon library

Visual acceptance levels:

| Level    | Meaning                                                                                             | Result          |
| -------- | --------------------------------------------------------------------------------------------------- | --------------- |
| Critical | A section, layout, image, text, or major visual structure is missing or wrong                       | Must be fixed   |
| Major    | The section exists but spacing, hierarchy, card layout, or responsive behavior is visibly different | Must be fixed   |
| Minor    | Small browser rendering difference that does not change the visual composition                      | Can be accepted |

Related documentation:

- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`
- Figma developer handoff: `https://www.figma.com/best-practices/guide-to-developer-handoff/`
- Tailwind custom styles: `https://tailwindcss.com/docs/adding-custom-styles`
- CSS values and units: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units`

---

## 21. Responsive Rules

Breakpoints:

```txt
Mobile: 360px – 767px
Tablet: 768px – 1023px
Desktop: 1024px+
Large Desktop: 1440px+
```

Rules:

1. There must be no horizontal scroll.
2. Multi-column grids must become single-column or mobile-friendly on small screens.
3. Images must not overflow their container.
4. Hero section must stay readable and usable on mobile.
5. Section spacing must be smaller on mobile than desktop.
6. Large text must use responsive sizing.
7. Touch targets must be at least `44px` where the element is interactive.
8. Floating or menu elements must remain usable on mobile.
9. Desktop visual quality must not be sacrificed to make mobile easier.
10. Mobile implementation must not be a simplified version unless Figma itself supports simplification.

Minimum responsive test sizes:

```txt
360px
390px
430px
768px
1024px
1280px
1440px
```

Related documentation:

- Tailwind responsive design: `https://tailwindcss.com/docs/responsive-design`
- MDN responsive design: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design`
- MDN viewport meta tag: `https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag`

---

## 22. Asset Management

Asset path:

```txt
public/images/landing/
```

Recommended structure:

```txt
public/images/landing/
  hero/
  portfolio/
  testimonials/
  backgrounds/
  icons/
```

Export format rules:

| Asset Type             | Format                                          |
| ---------------------- | ----------------------------------------------- |
| Photos                 | `.webp` or original suitable web format         |
| Solar icons            | React components from `@solar-icons/react-perf` |
| Non-Solar custom icons | `.svg` only if approved                         |
| Transparent images     | `.png`                                          |
| Complex backgrounds    | `.webp` or `.png` based on visual quality       |

Rules:

1. Do not use a full-page screenshot as the implementation.
2. Export needed images from Figma.
3. Use semantic file names.
4. Use `next/image` for content images.
5. Use `alt=""` for decorative images.
6. Use meaningful `alt` text for important images.
7. Set image width and height when using `next/image`.
8. Do not store unused exported assets in the final project.

Example file names:

```txt
hero-story-card-01.webp
portfolio-preview-01.webp
testimonial-avatar-01.webp
background-glow-01.webp
```

Related documentation:

- Figma export: `https://help.figma.com/hc/en-us/articles/360040028114-Export-from-Figma-Design`
- Figma export formats: `https://help.figma.com/hc/en-us/articles/13402894554519-Export-formats-and-settings`
- Next.js Image Component: `https://nextjs.org/docs/app/api-reference/components/image`
- MDN image alt text: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML#text_alternatives`

---

## 23. Animation and Interaction

Rules:

1. Add animation only if it exists in Figma or is needed for clear UX.
2. Buttons and cards should have hover states when visually appropriate.
3. Focus states must not be removed.
4. `prefers-reduced-motion` must be respected for motion-heavy effects.
5. CSS transitions are preferred for simple hover, fade, transform, or opacity effects.
6. Animation packages are not allowed for basic hover or simple transitions.
7. Motion for React may be used only when a real animation requirement cannot be handled cleanly with CSS.
8. Carousel behavior must use Embla only if the section is a real carousel.
9. Decorative animation must not change the content order or accessibility structure.

Related documentation:

- Motion for React: `https://motion.dev/docs/react`
- Motion animation guide: `https://motion.dev/docs/react-animation`
- Embla Carousel React: `https://www.embla-carousel.com/docs/get-started/react`
- MDN prefers-reduced-motion: `https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion`
- MDN focus visible: `https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible`

---

## 24. SEO Rules

Requirements:

1. Define page metadata.
2. Use only one `h1`.
3. Use correct heading order.
4. Add good alt text for important images.
5. Links must have clear text.
6. Use a `main` element.
7. Each main section should use a `section` element.
8. Add Open Graph metadata if the page title, description, and preview content are available.
9. Do not add sitemap, robots rules, or advanced SEO configuration unless requested.

Example:

```tsx
<main>
  <HeroSection />
  <ServicesSection />
  <PortfolioSection />
  <FaqSection />
</main>
```

Related documentation:

- Next.js Metadata and OG images: `https://nextjs.org/docs/app/getting-started/metadata-and-og-images`
- Next.js Metadata API: `https://nextjs.org/docs/app/api-reference/functions/generate-metadata`
- MDN heading elements: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements`
- MDN main element: `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main`

---

## 25. Accessibility Rules

Requirements:

1. Use semantic HTML.
2. Use `button` and `a` correctly.
3. Do not remove focus states.
4. Text/background contrast must be readable.
5. Interactive elements must be keyboard-accessible.
6. Use ARIA only when needed.
7. Decorative images must have `alt=""`.
8. Meaningful images must have useful `alt` text.
9. Mobile touch targets must not be too small.
10. Heavy motion must respect `prefers-reduced-motion`.
11. Icon-only buttons must have accessible labels.
12. Do not use clickable `div` elements when `button` or `a` is correct.

Related documentation:

- MDN accessibility overview: `https://developer.mozilla.org/en-US/docs/Web/Accessibility`
- MDN HTML and accessibility: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML`
- MDN keyboard accessibility: `https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard`
- MDN ARIA basics: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics`
- Radix Primitives accessibility-oriented components: `https://www.radix-ui.com/primitives/docs/overview/introduction`
- Solar Icon props: `https://solar-icons.vercel.app/docs/packages/react-perf`

---

## 26. Code Quality Rules

The code must be:

- Readable
- Modular
- Type-safe
- Maintainable
- Not over-engineered
- Free from unnecessary abstraction
- Free from repeated logic
- Free from scattered magic numbers
- Free from dead code
- Free from `console.log`
- Free from commented unused code
- Free from large inline styles
- Clear in naming

Comment rule:

Comments should only be used when the logic is not clear without explanation.

Comments must be short, useful, and written in simple English.

Related documentation:

- React thinking in components: `https://react.dev/learn/thinking-in-react`
- TypeScript handbook: `https://www.typescriptlang.org/docs/handbook/intro.html`
- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- ESLint documentation: `https://eslint.org/docs/latest/`

---

## 27. Content Rules

Rules:

1. Do not change Figma text.
2. Do not change text order.
3. Do not rewrite CTA text.
4. Do not fix or edit copy without approval.
5. Repeated content must be stored in `landing-content.ts`.
6. Card content, FAQ items, package data, and menu items must not be scattered inside JSX.
7. UI text must preserve the language, direction, and wording shown in Figma.
8. If Figma contains Persian text, it must be implemented as Persian text with correct RTL behavior.
9. If Figma contains English text, it must not be translated unless approved.

Related documentation:

- React rendering lists: `https://react.dev/learn/rendering-lists`
- React passing props: `https://react.dev/learn/passing-props-to-a-component`
- MDN dir global attribute: `https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir`
- Tailwind RTL support through logical utilities and CSS: `https://tailwindcss.com/docs/hover-focus-and-other-states#rtl-support`

---

## 28. Communication Rules

The developer must report blockers immediately if:

- Figma access is missing.
- Required asset export is blocked.
- A required icon cannot be matched in Solar Icons.
- A visual detail is ambiguous.
- A package seems necessary but is not listed.
- Existing project errors block the task.
- A required interaction is visible but not technically clear.
- A responsive behavior is unclear from Figma.

The developer must ask before implementation only for decisions that affect:

- Section structure
- Copy/text
- Package installation
- New animation or interaction
- Missing assets
- Icon replacement
- Visual interpretation that changes the Figma design

Small implementation details that do not change the design may be decided by the developer and documented in the final handoff note.

The developer must not silently replace unclear parts with personal design decisions.

Related documentation:

- Figma developer handoff: `https://www.figma.com/best-practices/guide-to-developer-handoff/`
- Figma comments: `https://help.figma.com/hc/en-us/articles/360040322873-Add-comments-to-files`

---

## 29. Milestones

The task should be completed through these execution milestones.

### Milestone 1: Project Setup and Figma Review

Output:

- Project runs locally.
- Required stack is confirmed.
- shadcn/ui is initialized if needed.
- Solar Icons package is installed if icons are needed.
- Figma access and export access are confirmed.
- Main sections are reviewed and mapped.
- Any initial blocker is reported.

Validation:

```bash
pnpm install
pnpm dev
```

Related documentation:

- Next.js installation: `https://nextjs.org/docs/app/getting-started/installation`
- shadcn Next.js setup: `https://ui.shadcn.com/docs/installation/next`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`
- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`

### Milestone 2: Desktop Implementation

Output:

- All visible desktop sections are implemented.
- Section order matches Figma.
- Desktop layout is close to Figma.
- Assets are placed in the correct folders.
- Icons use Solar Icons.

Validation:

- Manual comparison with Figma at `1440px` and `1280px`.

Related documentation:

- Tailwind responsive design: `https://tailwindcss.com/docs/responsive-design`
- Next.js Image Component: `https://nextjs.org/docs/app/api-reference/components/image`
- Solar Icons: `https://solar-icons.vercel.app/`

### Milestone 3: Tablet and Mobile Implementation

Output:

- Tablet layout is implemented.
- Mobile layout is implemented.
- No horizontal scroll exists.
- Floating/menu elements remain usable.
- Touch targets are usable.

Validation sizes:

```txt
360px
390px
430px
768px
1024px
```

Related documentation:

- Tailwind responsive design: `https://tailwindcss.com/docs/responsive-design`
- MDN responsive design: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design`
- MDN keyboard accessibility: `https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard`

### Milestone 4: Cleanup and Validation

Output:

- Repeated content moved to `landing-content.ts`.
- Types moved to `landing.types.ts`.
- Dead code removed.
- Unused assets removed.
- `console.log` removed.
- TypeScript, lint, and build checks pass.

Required commands:

```bash
pnpm lint
pnpm check-types
pnpm build
```

Related documentation:

- TypeScript documentation: `https://www.typescriptlang.org/docs/`
- ESLint documentation: `https://eslint.org/docs/latest/`
- Next.js build CLI: `https://nextjs.org/docs/app/api-reference/cli/next`

### Milestone 5: Final Handoff

Output:

- Complete source code is delivered.
- Desktop screenshot is delivered.
- Mobile screenshot is delivered.
- Final handoff note is delivered.
- Known differences from Figma are documented.
- Used packages and external resources are documented.

Related documentation:

- Git documentation: `https://git-scm.com/docs`
- pnpm CLI: `https://pnpm.io/pnpm-cli`

---

## 30. Review Process

Review will happen in two layers.

### 30.1 Visual Review

Visual review checks:

- Section order
- Layout
- Spacing
- Typography hierarchy
- Image ratio
- Color and opacity
- Border radius
- Glow and gradient effects
- Icon style
- Responsive behavior
- Floating/menu behavior if visible

Review sizes:

```txt
360px
390px
430px
768px
1024px
1280px
1440px
```

### 30.2 Technical Review

Technical review checks:

- Component structure
- TypeScript quality
- Package usage
- Asset organization
- Server/Client component usage
- SEO metadata
- Accessibility basics
- Build/lint/typecheck result
- No unauthorized package
- No dead code

Related documentation:

- Figma Dev Mode: `https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode`
- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- Next.js Server and Client Components: `https://nextjs.org/docs/app/getting-started/server-and-client-components`
- MDN accessibility: `https://developer.mozilla.org/en-US/docs/Web/Accessibility`

---

## 31. QA Checklist

Before final delivery, the developer must check:

```txt
[ ] The full page was compared with Figma.
[ ] All sections were implemented.
[ ] Section order matches Figma.
[ ] Desktop layout is correct.
[ ] Tablet layout is correct.
[ ] Mobile layout is correct.
[ ] There is no horizontal scroll.
[ ] Images are organized under the required asset path.
[ ] next/image is used for content images.
[ ] Solar Icons are used for icons.
[ ] No unauthorized icon library is installed.
[ ] Only allowed packages are installed.
[ ] Every new package has an official documentation link.
[ ] Every external UI component used is listed in the final handoff note.
[ ] Build passes.
[ ] Lint passes.
[ ] TypeScript check passes.
[ ] Only one h1 exists.
[ ] Image alt text was reviewed.
[ ] Icon accessibility was reviewed.
[ ] Focus states are not removed.
[ ] There is no dead code.
[ ] There is no commented unused code.
[ ] There is no console.log.
[ ] Final desktop screenshot is prepared.
[ ] Final mobile screenshot is prepared.
[ ] Known differences from Figma are documented.
```

Required commands:

```bash
pnpm lint
pnpm check-types
pnpm build
```

If a command does not exist, the developer must use the equivalent project command and mention it in the final handoff note.

Related documentation:

- pnpm run command: `https://pnpm.io/cli/run`
- TypeScript documentation: `https://www.typescriptlang.org/docs/`
- ESLint documentation: `https://eslint.org/docs/latest/`
- Next.js CLI: `https://nextjs.org/docs/app/api-reference/cli/next`

---

## 32. Final Handoff Requirements

Delivery is done through complete project handoff, not Pull Request.

The final handoff must include:

1. Complete source code
2. Short explanation of the implementation structure
3. List of implemented sections
4. List of installed packages
5. Reason for every new package
6. Official documentation link for every new package or external UI source
7. List of exported assets
8. Desktop screenshot
9. Mobile screenshot
10. Result of `pnpm lint`
11. Result of `pnpm check-types`
12. Result of `pnpm build`
13. Explanation of any known difference from Figma
14. List of any Aceternity, React Bits, or Magic UI components used
15. List of any modified shadcn/ui generated components and reason for modification
16. List of any icons that could not be matched with Solar Icons

### 32.1 Final Handoff Note Template

```md
# Final Handoff Note

## Summary

-

## Implemented Sections

-

## Project Structure

-

## Installed Packages

| Package | Reason | Where Used | Official Docs |
| ------- | ------ | ---------- | ------------- |
|         |        |            |               |

## External UI Resources Used

| Resource | Component/Block | Where Used | Reason | Official Docs |
| -------- | --------------- | ---------- | ------ | ------------- |
|          |                 |            |        |               |

## Solar Icons Used

| Icon | Import Path | Where Used | Notes |
| ---- | ----------- | ---------- | ----- |
|      |             |            |       |

## Exported Assets

-

## Screenshots

- Desktop:
- Mobile:

## Validation Commands

- `pnpm lint`: passed/failed
- `pnpm check-types`: passed/failed
- `pnpm build`: passed/failed

## Known Differences from Figma

-

## Blockers or Notes

-
```

Related documentation:

- Git documentation: `https://git-scm.com/docs`
- pnpm CLI: `https://pnpm.io/pnpm-cli`

---

## 33. Definition of Done

The task is done only when:

- The full landing page is implemented.
- The page is reviewed against Figma section by section.
- Desktop and mobile screenshots are delivered.
- Assets are exported and organized.
- Solar Icons are used correctly.
- No unauthorized package is installed.
- `pnpm lint`, `pnpm check-types`, and `pnpm build` pass or approved equivalent commands pass.
- Known differences from Figma are documented.
- The final handoff note is complete.
- The project is ready for owner review.

Related documentation:

- Next.js App Router: `https://nextjs.org/docs/app`
- shadcn/ui: `https://ui.shadcn.com/docs`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`
- MDN accessibility: `https://developer.mozilla.org/en-US/docs/Web/Accessibility`

---

## 34. Final Acceptance Criteria

The output is accepted only if:

1. All Figma sections are implemented.
2. Visual fidelity is acceptable.
3. File structure follows this document.
4. Code is modular and readable.
5. Page is fully responsive.
6. There is no horizontal scroll.
7. Build passes.
8. Lint passes.
9. TypeScript check passes.
10. Images and assets are organized correctly.
11. shadcn/ui is used correctly.
12. Solar Icons are used correctly.
13. No unauthorized package is installed.
14. Basic accessibility is respected.
15. Basic SEO metadata is implemented.
16. External UI resources are only used where they help match Figma.
17. Every used technology has a documentation link in the final handoff note.
18. Final handoff requirements are complete.

Related documentation:

- Next.js Metadata and OG images: `https://nextjs.org/docs/app/getting-started/metadata-and-og-images`
- Next.js Image Component: `https://nextjs.org/docs/app/api-reference/components/image`
- shadcn Components: `https://ui.shadcn.com/docs/components`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`
- MDN HTML accessibility: `https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/HTML`

---

## 35. Rejection Criteria

The output must be rejected if any of these exist:

- A Figma section is missing.
- Section order is changed.
- Design is changed by personal taste.
- The whole page is implemented in one file.
- A screenshot is used instead of real HTML/CSS.
- Responsive layout is broken.
- Horizontal scroll exists.
- Build error exists.
- TypeScript error exists.
- Lint error exists.
- A package is installed without reason.
- An unauthorized UI kit is used.
- A non-approved icon library is used.
- Solar Icons are not used for icons without approval.
- A full external template is used instead of the Figma design.
- Code is messy or hard to maintain.
- Assets are disorganized or missing.
- Text is changed without approval.
- Unnecessary Client Components are used.
- `console.log` or dead code remains.
- Official documentation links are missing for used technologies.
- Final handoff note is missing or incomplete.

Related documentation:

- Next.js project structure: `https://nextjs.org/docs/app/getting-started/project-structure`
- TypeScript documentation: `https://www.typescriptlang.org/docs/`
- ESLint documentation: `https://eslint.org/docs/latest/`
- Solar Icons React Perf: `https://solar-icons.vercel.app/docs/packages/react-perf`

---

## 36. Locked Technical Decisions

| Topic                 | Decision                                             |
| --------------------- | ---------------------------------------------------- |
| Framework             | Next.js App Router                                   |
| Language              | TypeScript                                           |
| UI Base               | shadcn/ui                                            |
| Styling               | Tailwind CSS + CSS Variables                         |
| Icons                 | Solar Icons via `@solar-icons/react-perf`            |
| Required Icon Style   | Solar Line Duotone / Linear Duotone visual style     |
| Image Handling        | `next/image`                                         |
| Component Strategy    | Section-based                                        |
| Data Strategy         | Constants-first                                      |
| Rendering             | Server Component by default                          |
| Animation             | CSS-first, package only if justified                 |
| External UI Resources | Aceternity UI, React Bits, Magic UI only when useful |
| Asset Path            | `public/images/landing`                              |
| Main Container        | Close to `1296px` on desktop                         |
| Background            | `#040404`                                            |
| Delivery              | Complete project handoff; no PR required             |
| Final Validation      | `pnpm lint`, `pnpm check-types`, `pnpm build`        |

Related documentation:

- Next.js App Router: `https://nextjs.org/docs/app`
- Tailwind CSS: `https://tailwindcss.com/docs`
- shadcn/ui: `https://ui.shadcn.com/docs`
- Solar Icons: `https://solar-icons.vercel.app/`

---

## 37. Final Execution Rule

A result is not accepted only because it works in the browser.

The result must be acceptable in:

- Visual quality
- Code structure
- Responsive behavior
- Accessibility
- Maintainability
- Asset organization
- Final handoff completeness

If the developer has any unclear point that affects scope, structure, package usage, assets, icons, copy, or visual interpretation, they must ask before implementation.

Guess-based implementation that conflicts with Figma or this document is not acceptable.

Related documentation:

- Figma developer handoff: `https://www.figma.com/best-practices/guide-to-developer-handoff/`
- Next.js App Router: `https://nextjs.org/docs/app`
- MDN accessibility: `https://developer.mozilla.org/en-US/docs/Web/Accessibility`

---

## 38. Short Task Text for Linear, Trello, or Jira

```md
Convert the Figma frame `✅ landing page` into a production-ready Next.js landing page using TypeScript, App Router, Tailwind CSS, shadcn/ui, and Solar Icons via `@solar-icons/react-perf`. The implementation must follow the attached technical document, preserve the Figma visual structure, use section-based components, organize assets properly, support responsive layouts, and pass lint/typecheck/build checks. Aceternity UI, React Bits, and Magic UI may be used only when they help match the Figma design. No design changes, package additions, external templates, icon library changes, or structural shortcuts are allowed without approval. Final delivery is a complete project handoff with screenshots, validation results, and a final handoff note.
```
