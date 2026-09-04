/* Shared Tailwind (Play CDN) configuration — Skate Flow design tokens */
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "on-tertiary-fixed-variant": "#00497b",
                "error": "#ba1a1a",
                "primary-fixed": "#ffdbcc",
                "primary-fixed-dim": "#ffb693",
                "surface-container-low": "#f6f3f2",
                "inverse-primary": "#ffb693",
                "surface-container-lowest": "#ffffff",
                "primary": "#a04100",
                "on-primary-fixed-variant": "#7a3000",
                "outline": "#8e7164",
                "on-primary-fixed": "#351000",
                "surface-bright": "#fcf9f8",
                "outline-variant": "#e2bfb0",
                "on-tertiary-container": "#003357",
                "secondary-fixed": "#e5e2e1",
                "on-secondary-container": "#656464",
                "on-surface": "#1b1c1c",
                "on-error-container": "#93000a",
                "on-primary-container": "#572000",
                "on-secondary": "#ffffff",
                "on-primary": "#ffffff",
                "tertiary": "#0062a1",
                "secondary": "#5f5e5e",
                "on-tertiary": "#ffffff",
                "primary-container": "#ff6b00",
                "inverse-on-surface": "#f3f0f0",
                "surface-tint": "#a04100",
                "error-container": "#ffdad6",
                "on-error": "#ffffff",
                "secondary-fixed-dim": "#c8c6c5",
                "on-surface-variant": "#5a4136",
                "tertiary-fixed-dim": "#9ccaff",
                "surface-variant": "#e4e2e1",
                "secondary-container": "#e5e2e1",
                "on-tertiary-fixed": "#001d35",
                "tertiary-container": "#059eff",
                "surface": "#fcf9f8",
                "surface-container-highest": "#e4e2e1",
                "on-secondary-fixed-variant": "#474646",
                "on-background": "#1b1c1c",
                "inverse-surface": "#303030",
                "surface-container-high": "#eae7e7",
                "surface-container": "#f0eded",
                "surface-dim": "#dcd9d9",
                "background": "#fcf9f8",
                "on-secondary-fixed": "#1c1b1b",
                "tertiary-fixed": "#d0e4ff"
            },
            borderRadius: {
                DEFAULT: "0.125rem",
                lg: "0.25rem",
                xl: "0.5rem",
                full: "0.75rem"
            },
            spacing: {
                "margin-mobile": "16px",
                "container-max": "1280px",
                "unit": "8px",
                "margin-desktop": "40px",
                "gutter": "24px"
            },
            fontFamily: {
                "headline-lg-mobile": ["Bebas Neue"],
                "display-lg": ["Bebas Neue"],
                "label-sm": ["Montserrat"],
                "headline-md": ["Bebas Neue"],
                "body-lg": ["Montserrat"],
                "label-bold": ["Montserrat"],
                "body-md": ["Montserrat"],
                "headline-lg": ["Bebas Neue"]
            },
            fontSize: {
                "headline-lg-mobile": ["32px", { lineHeight: "1.1", fontWeight: "400" }],
                "display-lg": ["64px", { lineHeight: "1.0", letterSpacing: "0.02em", fontWeight: "400" }],
                "label-sm": ["12px", { lineHeight: "1.2", fontWeight: "600" }],
                "headline-md": ["24px", { lineHeight: "1.2", fontWeight: "400" }],
                "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "500" }],
                "label-bold": ["14px", { lineHeight: "1.2", fontWeight: "700" }],
                "body-md": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
                "headline-lg": ["40px", { lineHeight: "1.1", fontWeight: "400" }]
            }
        }
    }
};
