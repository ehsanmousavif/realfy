# Frontend Implementation Review

## 1. Review Context

This document reviews the current implementation of the Figma-to-Next.js landing page task against:

- The original task specification in `docs/docs.md`
- The local Next.js 16.2.6 documentation in `node_modules/next/dist/docs/`
- Basic React, TypeScript, accessibility, SEO, and frontend maintainability rules
- Actual validation command output from the project

The task was explicitly limited to frontend implementation from a Figma UI. Therefore, the review does not require backend/API behavior. However, the delivered frontend still needs to pass the acceptance criteria listed in the task document: visual structure, responsiveness, accessibility, maintainability, metadata, asset handling, and clean validation commands.

Important limitation: direct Figma visual comparison could not be completed because the Figma connector failed with a transport error while requesting context for node `1:263`. For that reason, this document only lists issues that can be defended from the task spec, the source code, framework rules, or runtime/build evidence.

## 2. Validation Summary

### 2.1 `pnpm build` Fails

Severity: **Blocker**

Evidence:

```bash
pnpm build
```

Result:

```txt
Failed to type check.
./components/ui/landing/component/react-bits/orbit-images.tsx:217:40
Type error: No overload matches this call.
Argument of type 'number' is not assignable to parameter of type 'ObjectTarget<MotionValue<number>>'.
```

Source:

- `components/ui/landing/component/react-bits/orbit-images.tsx:217`

Task reference:

- `docs/docs.md`, section `2. Task Goal`: final result must be free from TypeScript and build errors.
- `docs/docs.md`, section `6.1 In Scope`: developer must run and pass required validation commands.

Why this is an issue:

A project that does not pass `next build` is not production-ready. This is not a visual polish issue; it blocks deployment and violates the explicit acceptance criteria.

Suggested fix:

- Fix the `motion/react` `animate` call so its target type matches the current API.
- Avoid loose `any` types around motion values.
- Re-run `pnpm build` after the fix.

Possible direction:

```tsx
// Use the current Motion API typing correctly, or animate the raw value
// through the API form supported by the installed motion version.
```

The exact implementation should be checked against the installed `motion` package documentation/version.

### 2.2 `pnpm lint` Fails

Severity: **Blocker**

Evidence:

```bash
pnpm lint
```

Result includes:

```txt
components/ui/landing/component/react-bits/orbit-images.tsx
79:13 error Unexpected any. Specify a different type

components/ui/landing/component/shadcn/carousel.tsx
97:9 error Calling setState synchronously within an effect can trigger cascading renders
```

Sources:

- `components/ui/landing/component/react-bits/orbit-images.tsx:79`
- `components/ui/landing/component/shadcn/carousel.tsx:97`
- `components/ui/landing/component/shadcn/input.tsx:3`

Task reference:

- `docs/docs.md`, section `2. Task Goal`: final result must be free from lint errors.
- `docs/docs.md`, section `6.1 In Scope`: validation commands must pass.

Why this is an issue:

Lint failures are part of the explicit acceptance criteria. They also reveal real quality issues: unsafe typing, avoidable render cascades, unused imports, and non-optimal image handling.

Suggested fix:

- Replace `any` with the proper MotionValue type.
- Refactor the carousel effect so initial state calculation does not synchronously call a state-setting callback in the effect body in a way that violates React lint rules.
- Remove unused imports such as `cn` in `input.tsx`, or actually use the helper to merge classes.
- Re-run `pnpm lint`.

## 3. Next.js, React, and TypeScript Issues

### 3.1 Excessive Client Component Boundaries

Severity: **High**

Sources:

- `components/ui/landing/about/about.tsx:1`
- `components/ui/landing/services/services-section.tsx:1`
- `components/ui/landing/categories-section/categories.tsx:1`
- `components/ui/landing/dotted-map/dotted-map.tsx:1`
- `components/ui/root/icon-upper-sections.tsx:1`
- `components/ui/landing/time-line/time-line-base.tsx:1`

Task/reference basis:

- Local Next.js docs: `01-app/01-getting-started/05-server-and-client-components.md`
- Next.js states that components are Server Components by default and Client Components should be used when state, event handlers, effects, browser APIs, or custom client hooks are needed.
- The same docs recommend reducing client bundle size by placing `"use client"` only around genuinely interactive components.

Why this is an issue:

Several components marked with `"use client"` are mostly static render components. Marking a parent/static section as client-side pulls its imports and child component tree into the client bundle. That increases JavaScript shipped to the browser and weakens one of the main benefits of the App Router.

Suggested fix:

- Remove `"use client"` from static sections.
- Keep `"use client"` only in components that need state/effects/events, such as carousel controls, Radix interactive components, or theme hotkeys.
- Split static section wrappers from interactive inner widgets.

Example direction:

```tsx
// Server component section
export function Services() {
  return (
    <section>
      <StaticHeading />
      <ServicesCarousel /> {/* client component only if needed */}
    </section>
  )
}
```

### 3.2 Custom/Third-Party Snippet Not Integrated Safely

Severity: **High**

Source:

- `components/ui/landing/component/react-bits/orbit-images.tsx`

Task reference:

- `docs/docs.md`, section `1. Developer Expectation and Documentation Rule`: implementation must be based on official documentation, not copied snippets or assumptions.
- `docs/docs.md`, section `2. Task Goal`: code must be clean, modular, maintainable, and free of TypeScript/lint errors.

Why this is an issue:

The `OrbitImages` component appears to be a generic copied/adapted component with many unused shape generators and options not needed by the landing page. It currently causes both lint and build failures. This indicates the snippet was not fully adapted to the project and package versions.

Suggested fix:

- Reduce the component to the shapes/options actually used by the design.
- Type the Motion value correctly.
- Replace raw `<img>` with `next/image` if images remain content-bearing.
- Remove unused props such as `w` and `h`.
- Add a small internal API that matches the actual hero requirement instead of keeping a large generic component.

## 4. SEO and Document Metadata

### 4.1 Missing Basic Metadata

Severity: **High**

Source:

- `app/layout.tsx`

Runtime evidence:

The rendered page only contains default charset/viewport/favicon metadata. No task-specific `title`, `description`, Open Graph, or Twitter metadata was found.

Task reference:

- `docs/docs.md`, section `6.1 In Scope`: add basic SEO metadata.
- Local Next.js docs: `01-app/01-getting-started/14-metadata-and-og-images.md`

Why this is an issue:

The landing page is a public portfolio/business page. Without proper metadata, browser title, search snippets, and social sharing previews are incomplete. The task explicitly requested basic SEO metadata.

Suggested fix:

Add a `Metadata` export in `app/layout.tsx` or `app/page.tsx`.

Example:

```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Alireza Abbasi | Creative Video Editor & Content Producer",
  description:
    "Portfolio landing page for Alireza Abbasi, a creative video editor and content producer for global brands.",
  openGraph: {
    title: "Alireza Abbasi",
    description:
      "Creative video editing and content production for brands and creators.",
    type: "website",
  },
}
```

The final copy should match the approved Figma/design content.

## 5. Accessibility and Semantics

### 5.1 Missing `<main>` Landmark

Severity: **High**

Sources:

- `app/layout.tsx`
- `app/page.tsx`

Reference basis:

- Local Next.js accessibility docs: `03-architecture/accessibility.md`
- Basic HTML accessibility: pages should expose meaningful landmarks such as `main`, `nav`, and footer.

Why this is an issue:

The root layout renders `Menu`, a plain `div` wrapper for children, and `Footer`, but the page content is not wrapped in `<main>`. Screen reader and keyboard users benefit from landmarks to skip repeated navigation and understand page structure.

Suggested fix:

Wrap the page content in `<main>`.

Example:

```tsx
<Menu />
<main>{children}</main>
<Footer />
```

### 5.2 Hero Title Is Not an `<h1>`

Severity: **High**

Source:

- `components/ui/landing/herosection/hero-section.tsx:62`

Reference basis:

- Local Next.js accessibility docs say route announcements inspect `document.title`, then `<h1>`, then URL pathname.
- Basic semantic HTML requires a clear main heading for the page.

Why this is an issue:

The page's primary identity, `Alireza Abbasi`, is rendered as a `span`, not an `h1`. This weakens accessibility, document outline, and SEO.

Suggested fix:

Use `h1` for the hero title and use proper heading levels for section titles.

Example:

```tsx
<h1 className="text-2xl md:text-4xl font-bold text-center">
  Alireza Abbasi
</h1>
```

### 5.3 Section Titles Are Mostly `span`

Severity: **Medium**

Sources:

- `components/ui/landing/about/about.tsx:12`
- `components/ui/landing/services/services-section.tsx:15`
- `components/ui/landing/process-section/process.tsx:9`
- `components/ui/landing/pricing/pricing.tsx:88`
- `components/ui/landing/faq/faq.tsx:40`
- `components/ui/landing/cta/cta.tsx:84`

Why this is an issue:

Most major section titles are visually styled but semantically plain spans. This makes the document outline weak and harder to navigate with assistive technologies.

Suggested fix:

- Use one `h1` for the page.
- Use `h2` for major landing page sections.
- Use `h3` for card titles or sub-section titles.

### 5.4 Navigation Is Built from Buttons Instead of Links

Severity: **High**

Source:

- `components/ui/root/menu.tsx:18`

Task reference:

- `docs/docs.md`, section `5. Known Figma Frame Summary`: floating/menu element if visible in design is part of expected structure.
- Local Next.js production checklist recommends using the `<Link>` component for navigation.

Why this is an issue:

`menuItems` contains paths, but the UI renders buttons with no navigation behavior. This is not a functional menu. It is also semantically wrong: navigation destinations should be anchors/links, not inert buttons.

Suggested fix:

- Wrap the menu in `<nav aria-label="Primary">`.
- Use `next/link`.
- If these are same-page section links, use anchor IDs such as `#work`, `#services`, `#contact`.

Example:

```tsx
<nav aria-label="Primary">
  {menuItems.map((item) => (
    <Button asChild variant="ghost" key={item.label}>
      <Link href={item.path}>{item.label}</Link>
    </Button>
  ))}
</nav>
```

### 5.5 Footer Links and Social Items Are Not Links

Severity: **Medium**

Source:

- `components/ui/root/footer.tsx:31`
- `components/ui/root/footer.tsx:51`

Why this is an issue:

Footer menu items and social items are rendered as `span`. They look like links but cannot be opened, focused as links, copied, or interpreted by assistive technology as destinations.

Suggested fix:

- Render useful links as `<Link>` or `<a>`.
- Render social items as `<a href="...">`.
- Add accessible labels for icon-only social items on mobile.

### 5.6 Interactive Icon Buttons Have No Accessible Labels

Severity: **Medium**

Source:

- `components/ui/landing/process-section/_carousel.tsx:48`
- `components/ui/landing/process-section/_carousel.tsx:52`

Why this is an issue:

The bookmark/share buttons contain only icons. Screen readers do not get a useful action name.

Suggested fix:

```tsx
<button aria-label="Save project">
  <Bookmark />
</button>

<button aria-label="Share project">
  <Share />
</button>
```

If the buttons are decorative only and not functional, they should not be rendered as interactive buttons.

### 5.7 CTA Inputs Are Not Inside a Real Form

Severity: **High**

Source:

- `components/ui/landing/cta/cta.tsx`

Task reference:

- `docs/docs.md`, section `6.2 Out of Scope`: form backend is out of scope.
- This does not remove the need for frontend form semantics.

Why this is an issue:

The CTA contains required inputs, selects, a textarea, and a button, but no `<form>`, no field `name` values, no submit behavior, and the button is not explicitly `type="submit"`. Without backend, a static frontend form can still be semantic and accessible.

Suggested fix:

- Wrap controls in `<form>`.
- Add `name` attributes.
- Use `type="submit"` for the submit button.
- Add `htmlFor`/`id` connections for all labels, including selects and textarea.
- If submission is not implemented, prevent default and show a clear frontend-only message, or make the CTA open a mail/contact link if approved by the design.

### 5.8 Select Labels Are Not Programmatically Connected

Severity: **Medium**

Source:

- `components/ui/landing/cta/cta.tsx:147`

Why this is an issue:

The visible `FieldLabel` around each select does not use `htmlFor`, and the select trigger does not have a matching id. Users of assistive tech may not get the expected label association.

Suggested fix:

- Generate stable IDs for each select.
- Connect labels to triggers according to the Radix/shadcn component pattern.
- Add `name` fields if used in a form.

## 6. Image and Asset Handling

### 6.1 Raw `<img>` Used Instead of `next/image`

Severity: **High**

Source:

- `components/ui/landing/component/react-bits/orbit-images.tsx:238`

Task reference:

- `docs/docs.md`, section `6.1 In Scope`: use `next/image` for content images.
- Local Next.js image docs: `01-app/01-getting-started/12-images.md`

Why this is an issue:

The hero orbit images are visible landing page assets. Using raw `<img>` skips Next.js image optimization and triggered a lint warning.

Suggested fix:

- Use `next/image` where practical.
- If the images are purely decorative, ensure they are hidden from assistive tech and optimized appropriately.
- If the animation technique requires raw images, document the reason and suppress the rule only with justification.

### 6.2 Many `Image fill` Usages Miss `sizes`

Severity: **Medium**

Runtime evidence:

The dev server logged warnings for multiple images:

```txt
Image with src "... " has "fill" but is missing "sizes" prop.
```

Sources include:

- `components/ui/landing/collaboration/collaboration-strip.tsx:65`
- `components/ui/landing/services/carousel.tsx:85`
- `components/ui/landing/process-section/_carousel.tsx:40`
- `components/ui/landing/categories-section/categories-base.tsx:14`
- `components/ui/landing/dotted-map/dotted-map.tsx:45`

Reference basis:

- Next.js Image docs recommend supplying sizing information to serve correct responsive image sizes and avoid performance waste.

Why this is an issue:

Without `sizes`, the browser may download larger images than necessary. On a long landing page with many images and marquees, this can hurt performance significantly.

Suggested fix:

Add accurate `sizes` values for each layout.

Examples:

```tsx
<Image fill sizes="64px" ... />
<Image fill sizes="(min-width: 768px) 60vw, 70vw" ... />
<Image fill sizes="(min-width: 768px) 320px, 240px" ... />
```

### 6.3 Some `Image fill` Parents Have Invalid Positioning

Severity: **High**

Runtime evidence:

The dev server logged warnings:

```txt
Image with src "... " has "fill" and parent element with invalid "position".
Provided "static" should be one of absolute,fixed,relative.
```

Affected areas include intro quote and services carousel.

Sources:

- `components/ui/landing/intro-quote/intro-quote.tsx:20`
- `components/ui/landing/services/carousel.tsx:84`

Why this is an issue:

`next/image` with `fill` requires a positioned parent. If the parent is not `relative`, `absolute`, or `fixed`, image layout can be incorrect and unstable.

Suggested fix:

Ensure every direct parent of a `fill` image has `relative` and a stable size/aspect ratio.

Example:

```tsx
<div className="relative aspect-video w-full">
  <Image fill sizes="..." className="object-cover" ... />
</div>
```

### 6.4 `width={0}` and `height={0}` Used for Images

Severity: **Medium**

Source:

- `components/ui/landing/testimonials/testimonials-base/testimonials-base.tsx:25`
- `components/ui/landing/testimonials/testimonials-base/testimonials-base.tsx:44`
- `components/ui/landing/testimonials/testimonials-base/testimonials-base.tsx:63`

Why this is an issue:

Passing zero width/height to `next/image` is a workaround that weakens intrinsic sizing and layout stability. The component should either use real dimensions or `fill` with a correctly sized parent.

Suggested fix:

- Use actual image dimensions.
- Or wrap each screenshot in a `relative` container with fixed/responsive dimensions and use `fill` plus `sizes`.

### 6.5 Decorative vs Content Image Alt Text Is Inconsistent

Severity: **Medium**

Sources:

- Decorative images correctly use `alt=""` in some places.
- Content-like images use generic alt values such as `Slide 1`, `image-0`, or empty strings.
- Examples:
  - `components/ui/landing/services/carousel.tsx:87`
  - `components/ui/landing/process-section/_carousel.tsx:42`
  - `components/ui/landing/categories-section/categories-base.tsx:14`

Task reference:

- `docs/docs.md`, section `4. Figma Access and Asset Export Rules`: decorative assets must be treated as decorative in markup.
- `docs/docs.md`, section `2. Task Goal`: basic production-level accessibility.

Why this is an issue:

If an image communicates portfolio content, generic alt text does not help. If it is purely decorative, it should be empty and hidden from the accessibility tree. The current implementation does not clearly distinguish these cases.

Suggested fix:

- For decorative visual flourishes: `alt=""`.
- For portfolio/content images: use meaningful descriptions from the Figma/content source.
- Avoid `Slide 1` and `image-0` as final alt text.

## 7. Runtime React/SVG Issues

### 7.1 Invalid React SVG Attribute Names

Severity: **Medium**

Runtime evidence:

The dev server logged:

```txt
Invalid DOM property `font-family`. Did you mean `fontFamily`?
Invalid DOM property `font-size`. Did you mean `fontSize`?
Invalid DOM property `font-weight`. Did you mean `fontWeight`?
Invalid DOM property `clip-path`. Did you mean `clipPath`?
```

Sources:

- `components/ui/landing/faq/_icon.tsx:22`
- `components/ui/landing/faq/_icon.tsx:23`
- `components/ui/landing/faq/_icon.tsx:24`
- `components/ui/root/_icons.tsx:21`

Why this is an issue:

React JSX requires camelCase SVG attributes. Invalid props create console noise, can fail hydration checks in stricter environments, and indicate SVGs were pasted without JSX conversion.

Suggested fix:

Change:

```tsx
font-family="Arial"
font-size="40"
font-weight="700"
clip-path="url(#id)"
```

To:

```tsx
fontFamily="Arial"
fontSize="40"
fontWeight="700"
clipPath="url(#id)"
```

## 8. Content Quality and Copy Accuracy

### 8.1 FAQ Content Contains Irrelevant SaaS Placeholder Copy

Severity: **High**

Source:

- `components/ui/landing/faq/faq.tsx:13`
- `components/ui/landing/faq/faq.tsx:25`
- `components/ui/landing/faq/faq.tsx:32`

Task reference:

- `docs/docs.md`, section `3. Figma as the Source of Truth`: copy/text must follow Figma and must not be changed by guesswork.
- `docs/docs.md`, section `6.2 Out of Scope`: changing copy/text is out of scope unless approved.

Why this is an issue:

The landing page is for a video editor/content producer, but some FAQ answers talk about subscriptions, automatic backups, team members, Slack, Zapier, Salesforce, REST APIs, and webhooks. That looks like copied placeholder SaaS content and is not consistent with the task domain.

Suggested fix:

- Replace FAQ answers with exact Figma copy.
- If Figma copy is missing or unclear, ask for approval before inventing content.
- Remove typos such as `opular`.

### 8.2 Pricing Heading Has a Typo

Severity: **Medium**

Source:

- `components/ui/landing/pricing/pricing.tsx:88`

Current text:

```txt
Choose your plane
```

Why this is an issue:

This appears to mean `plan`, not `plane`. It is visible production copy.

Suggested fix:

Use the exact Figma copy. If the intended copy is not known, likely correction is:

```txt
Choose your plan
```

### 8.3 Footer Email Address Is Invalid

Severity: **Medium**

Source:

- `components/ui/root/footer.tsx:43`

Current text:

```txt
hello@alirezaabbasi@gmail.com
```

Why this is an issue:

This is not a valid normal email address format. It also is not clickable.

Suggested fix:

- Confirm exact email from Figma/client.
- Render as a `mailto:` link.

Example:

```tsx
<a href="mailto:hello@example.com">hello@example.com</a>
```

### 8.4 Timeline Contains Repeated Placeholder Steps

Severity: **Medium**

Source:

- `components/ui/landing/time-line/time-line.tsx:24`
- `components/ui/landing/time-line/time-line.tsx:30`
- `components/ui/landing/time-line/time-line.tsx:36`

Why this is an issue:

Steps 4, 5, and 6 are all titled `Production` with the same description. For a process section, repeated copy strongly suggests incomplete implementation.

Suggested fix:

- Use exact process steps from Figma.
- If Figma has only four steps, do not add extra duplicated steps.
- If it has six steps, each should have unique title and description.

### 8.5 Collaboration Strip Uses Repeated Placeholder Brand Data

Severity: **Medium**

Source:

- `components/ui/landing/collaboration/collaboration-strip.tsx:3`

Why this is an issue:

Most entries are repeated `Nike / Video project` using the same image. If Figma shows distinct collaborators/brands, this is incomplete. If the design intentionally repeats logos, data should still be represented clearly and semantically.

Suggested fix:

- Match Figma data exactly.
- Use real exported brand/client assets if available.
- Avoid fake repeated content unless the Figma design explicitly does this.

## 9. Functional UX Issues

### 9.1 Hero and Pricing CTA Buttons Do Nothing

Severity: **High**

Sources:

- `components/ui/landing/herosection/hero-section.tsx:68`
- `components/ui/landing/pricing/pricing-plan.tsx:67`

Why this is an issue:

The page has prominent `start a project` / `Start a Project` buttons, but they have no link, click handler, or anchor behavior. A landing page CTA should lead somewhere, typically the contact form section.

Suggested fix:

- Link CTAs to the contact/CTA section.
- Give the CTA section an id, for example `id="contact"`.
- Use `Button asChild` with an anchor or Next `Link`.

Example:

```tsx
<Button asChild>
  <a href="#contact">Start a Project</a>
</Button>
```

### 9.2 Video Play Button Does Not Play Anything

Severity: **Medium**

Source:

- `components/ui/landing/about/Introduction-video.tsx:24`

Why this is an issue:

The component visually presents a video play button, but it is only a button over a static image. The iframe is commented out. If Figma shows a playable video or preview interaction, this is incomplete. If it is just a visual thumbnail, it should not imply playback.

Suggested fix:

- If video is in scope visually only, make the control non-interactive or link to the video.
- If playback is expected, implement modal/video/embed behavior.
- If using an iframe, provide a title and proper loading/fullscreen attributes.

### 9.3 Carousel Controls Are Divs With `onClick`

Severity: **Medium**

Source:

- `components/ui/landing/services/carousel.tsx:51`
- `components/ui/landing/services/carousel.tsx:58`

Why this is an issue:

Clickable `div`s are not keyboard accessible by default and do not expose button semantics.

Suggested fix:

Use real `<button>` elements with accessible labels.

Example:

```tsx
<button type="button" aria-label="Previous slide" onClick={() => scroll("prev")}>
  <ArrowLeft />
</button>
```

## 10. Figma/Task Structure Completeness

### 10.1 Portfolio Section Appears Missing or Incomplete

Severity: **High, pending Figma confirmation**

Sources:

- `components/ui/landing/portfolio/portfolio-section.tsx`
- `app/page.tsx`

Task reference:

- `docs/docs.md`, section `5. Known Figma Frame Summary` lists `Works / Portfolio Preview Section`.
- `docs/docs.md`, section `6.1 In Scope`: implement full landing page and create a separate component for each main section.

Why this is an issue:

There is a `portfolio-section.tsx` file, but its implementation is commented out and it is not imported/rendered in `app/page.tsx`. The current page has sections such as Services, Process, About, Category, GlobalMap, Timeline, Pricing, Testimonials, FAQ, CTA, but no explicit active portfolio section.

Suggested fix:

- Compare against the Figma frame `✅ landing page`.
- If the portfolio section exists in Figma, implement and render it in the correct order.
- If another section is intentionally serving as the portfolio preview, rename the component and data to make that clear.

### 10.2 Section Naming and Content Do Not Match the Task Structure Clearly

Severity: **Medium**

Sources:

- `app/page.tsx`
- `components/ui/landing/services/services-section.tsx`
- `components/ui/landing/process-section/process.tsx`
- `components/ui/landing/categories-section/categories.tsx`

Why this is an issue:

The task expects a maintainable structure with clear main sections. Some component names and headings are mismatched:

- `Services` renders `Featured Work` / `My Best Video Projects`
- `Process` renders `Short Videos` / `My Best Video Projects`
- `Category` renders `Client Results`

This makes review and maintenance harder, especially for a handoff.

Suggested fix:

- Align component names, section headings, and data with the Figma section names.
- If design labels differ from code names, add clear naming conventions.
- Avoid using generic names like `Category` for business-specific sections.

## 11. Styling and Maintainability

### 11.1 Global CSS Contains Duplicate Theme/Keyframe Declarations

Severity: **Low to Medium**

Source:

- `app/globals.css`

Why this is an issue:

`@theme inline` and marquee keyframes appear more than once. Duplication increases maintenance cost and makes future changes error-prone.

Suggested fix:

- Keep one `@theme inline` block.
- Define keyframes once.
- Group design tokens, shadcn tokens, and custom animations clearly.

### 11.2 Typo in Body Class

Severity: **Low**

Source:

- `app/layout.tsx:31`

Current class:

```txt
mx-autos
```

Why this is an issue:

`mx-autos` is not a valid Tailwind utility. It is harmless visually if ignored, but it indicates lack of cleanup.

Suggested fix:

Change to `mx-auto` if needed, or remove it.

### 11.3 Magic String Data Is Spread Across Components

Severity: **Medium**

Sources:

- `components/ui/landing/pricing/pricing.tsx`
- `components/ui/landing/time-line/time-line.tsx`
- `components/ui/landing/faq/faq.tsx`
- `components/ui/landing/collaboration/collaboration-strip.tsx`

Why this is an issue:

Large visible content arrays live inside individual components. This is acceptable for small demos, but for a production handoff it makes content review harder and increases the chance of inconsistent copy.

Suggested fix:

- Move landing page content into typed data files such as `components/ui/landing/data.ts` or `lib/landing-content.ts`.
- Keep components focused on rendering.
- Use explicit types for repeated content models.

### 11.4 Some Imported/Installed Packages Appear Unnecessary

Severity: **Low to Medium**

Sources:

- `package.json`
- `components/ui/landing/component/shadcn/dropdown-menu.tsx`
- `public/images/landing`

Examples:

- `svg-dotted-map` is installed but not used in the implementation.
- `tailwindcss-animate` is installed while `tw-animate-css` is imported and used.
- Some shadcn components such as dropdown menu exist but are not used by the page.

Task reference:

- `docs/docs.md`, section `6.2 Out of Scope`: installing unnecessary packages is out of scope unless approved.

Why this is an issue:

Unused dependencies increase install size, audit surface, and maintenance cost. The task asked developers not to add unnecessary packages.

Suggested fix:

- Remove unused packages after confirming they are not needed.
- Remove unused generated components or keep them only if the project policy is to scaffold a complete shadcn set.
- Document why extra packages are present if they are intentionally kept.

## 12. Delivery/Handoff Issues

### 12.1 README Is Still the Default Create Next App Text

Severity: **High**

Source:

- `README.md`

Task reference:

- `docs/docs.md`, section `2. Task Goal`: final delivery must be easy to maintain and review.
- `docs/docs.md`, section `6.1 In Scope`: deliver complete project files and final handoff note.

Why this is an issue:

The README still describes a generic create-next-app project. It does not explain the task, implemented sections, validation status, Figma source, asset handling, known limitations, or how to review the project.

Suggested fix:

Update README with:

- Project/task name
- Figma URL/node reference
- Stack and package manager
- Setup commands
- Validation commands and current pass/fail status
- Implemented sections
- Known limitations or deviations from Figma
- Asset export notes

### 12.2 No Final Handoff Note or Validation Report

Severity: **High**

Source:

- Repository docs/readme state

Task reference:

- `docs/docs.md`, section `6.1 In Scope`: final handoff note is required.
- `docs/docs.md`, section `1. Developer Expectation and Documentation Rule`: if official commands/APIs changed, report differences in final handoff note.

Why this is an issue:

The reviewer cannot tell what was validated, what was intentionally skipped, what was approximated, or what assets were exported from Figma.

Suggested fix:

Create a handoff section in README or a separate `docs/handoff.md` with:

- Commands run
- Results
- Browser/device checks
- Known deviations
- Asset export list
- Any approvals/assumptions

## 13. Recommended Fix Order

1. Fix `pnpm build` TypeScript failure.
2. Fix `pnpm lint` errors.
3. Add metadata, `main`, `h1`, and semantic section headings.
4. Convert menu/footer/CTA buttons into real links or form controls.
5. Fix all `next/image` runtime warnings: parent positioning, `sizes`, dimensions.
6. Remove unnecessary `"use client"` boundaries.
7. Replace placeholder/incorrect copy with exact Figma copy.
8. Confirm the portfolio section and section order against Figma.
9. Clean up SVG JSX attributes and runtime console warnings.
10. Update README or add a final handoff note.
11. Run final validation:

```bash
pnpm lint
pnpm build
pnpm dev
```

Then perform browser checks on desktop, tablet, and mobile widths.

## 14. Final Assessment

The current implementation should not be accepted as a completed frontend handoff. The strongest reasons are:

- The production build fails.
- Lint fails.
- Basic SEO metadata is missing.
- Navigation and CTAs are not functional.
- Form semantics are incomplete.
- Image handling produces runtime warnings.
- Several visible texts are placeholder, incorrect, or typo-prone.
- README/handoff documentation is incomplete.

These are not subjective visual preferences. They are supported by the task document, framework documentation, validation output, and source code evidence.
