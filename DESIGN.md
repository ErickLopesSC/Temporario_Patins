---
name: Urban Kinetic
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#5a4136'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#8e7164'
  outline-variant: '#e2bfb0'
  surface-tint: '#a04100'
  primary: '#a04100'
  on-primary: '#ffffff'
  primary-container: '#ff6b00'
  on-primary-container: '#572000'
  inverse-primary: '#ffb693'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#0062a1'
  on-tertiary: '#ffffff'
  tertiary-container: '#059eff'
  on-tertiary-container: '#003357'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#d0e4ff'
  tertiary-fixed-dim: '#9ccaff'
  on-tertiary-fixed: '#001d35'
  on-tertiary-fixed-variant: '#00497b'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  display-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: 0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.1'
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 24px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '500'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  label-sm:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The design system embodies an "Elevated Street" aesthetic—merging the raw energy of skate culture with the precision of high-end SaaS. It targets a dynamic, urban audience but remains optimized for operational efficiency (staff/attendants).

The style is a hybrid of **Minimalism** and **Soft-Brutalism**. It utilizes heavy contrast and bold typography to echo street posters and asphalt, while maintaining clean white space and a structured grid to ensure the interface remains professional and functional. Visual interest is driven by scale and color rather than excessive decoration.

## Colors
The palette is dominated by **Signal Orange**, a color synonymous with urban hazards and street wear, used exclusively for primary actions and status-critical information.

- **Primary:** #FF6B00 (Vibrant Orange). Use for "Rent Now", "Confirm", and active states.
- **Surface:** #121212 (Deep Black) for headers and primary containers to create a "pavement" feel.
- **Accents:** #2D2D2D and #F5F5F5 provide the necessary hierarchy for administrative tasks.
- **Semantic:** Success is represented by a "Neon Mint" (#00E676) and Errors by "Riot Red" (#FF3D00), ensuring they pop against the dark neutral backgrounds without feeling generic.

## Typography
The typography strategy creates a high-contrast hierarchy. **Bebas Neue** is the "voice" of the brand—tall, impactful, and reminiscent of street signage. It should be used for titles, numbers (rental durations), and big callouts.

**Montserrat** handles all functional data. It provides the geometric stability needed for a professional rental system. 
- Use **All-Caps** for labels and buttons to maintain the "street" energy.
- Tighten letter-spacing on headlines to enhance the "post-industrial" look.

## Layout & Spacing
The layout follows a **Rigid Grid** philosophy. Elements are locked into an 8px base unit system to ensure the UI feels structural and solid.

- **Desktop:** 12-column grid with wide gutters (24px) to allow the "minimalist" aspect of the brief to breathe.
- **Mobile:** 4-column grid with tight margins (16px) to maximize space for skate inventory lists.
- **Padding:** Use generous internal padding in cards (min 24px) to prevent the "Soft-Brutalism" style from feeling cluttered.

## Elevation & Depth
This design system rejects traditional shadows in favor of **Tonal Layering** and **Hard Strokes**.

- **Depth:** Surfaces are distinguished by color shifts (e.g., a #2D2D2D card on a #121212 background).
- **Strokes:** Use 2px solid borders (#121212) on light elements to create a "sticker" or "stencil" effect.
- **Texture:** Apply a very low-opacity (2-3%) noise or grain overlay to the main background (#F5F5F5) to simulate a concrete texture without interfering with readability.
- **Active State:** Elements shouldn't "glow"; they should shift color or "pop" with a 4px offset solid black shadow (Neo-brutalism).

## Shapes
Shapes are disciplined. The "Soft" (0.25rem) setting ensures that while the aesthetic is "street," it doesn't feel aggressive or dangerous for an attendant using the software all day. 

- **Containers:** Small radius (4px) to keep the look sharp.
- **Interactive Elements:** Buttons follow the same radius; do not use pills, as they conflict with the architectural, geometric nature of the design.

## Components
- **Primary Buttons:** Solid #FF6B00 background, #121212 text, All-Caps Montserrat Bold. 2px solid border of #121212 for the Neo-brutalism "pop."
- **Rental Cards:** Background #FFFFFF, 2px border #121212. Use Bebas Neue for the "Skate Size" or "Price" to make the most important data point stand out.
- **Status Chips:** Rectangular with sharp corners. Backgrounds are high-saturation (Orange/Mint) with black text for maximum visibility.
- **Inputs:** Thick 2px bottom border only, or full 2px border. Use a light grey (#E0E0E0) placeholder that shifts to Black (#121212) on focus.
- **Inventory List:** High-density rows with alternating backgrounds (#F5F5F5 and #FFFFFF) to help attendants scan large fleets of skates quickly.
- **Visual Flourish:** Use a single "Stenciled" icon or a minimalist line-art skate graphic in the corner of empty states to reinforce the brand.