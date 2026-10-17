export const NAV_LINKS = [
  { href: '#discover', label: 'Discover' },
  { href: '#context', label: 'SkyAware' },
  { href: '#edge', label: 'Edge' },
  { href: '#roadmap', label: 'Roadmap' },
] as const;

export type NavLink = { readonly href: string; readonly label: string };

/** Section anchors resolve against the home page when rendered on another route. */
export const withBase = (href: string, home: boolean) => (home ? href : `/${href}`);
