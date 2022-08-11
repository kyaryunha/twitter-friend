export const BREAKPOINTS = [768, 1200, 1600];

export const MediaQuery = BREAKPOINTS.map(
    (bp) => `@media (min-width: ${bp}px)`,
);
