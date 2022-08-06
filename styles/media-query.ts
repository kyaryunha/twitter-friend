export const BREAKPOINTS = [768, 1200];

export const MediaQuery = BREAKPOINTS.map(
    (bp) => `@media (min-width: ${bp}px)`,
);
