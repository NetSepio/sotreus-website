export const NAV_LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#context', label: 'Sky context' },
  { href: '#edge', label: 'Sotreus Edge' },
  { href: '#trust', label: 'Privacy' },
  { href: '#roadmap', label: 'Roadmap' },
] as const;

export type NavLink = { readonly href: string; readonly label: string };

/** Section anchors resolve against the home page when rendered on another route. */
export const withBase = (href: string, home: boolean) => (home ? href : `/${href}`);
