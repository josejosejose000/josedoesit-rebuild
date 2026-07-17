import home from '../data/home-content.json';

/** Curated homepage showcase — one standout per service area */
export const SHOWCASE_PHOTOS = [
  { folder: 'mounting-installation', file: 'mount-samsung-80-inch-tv-and-6ft-painting-mounting.png' },
  { folder: 'furniture-assembly', file: 'furniture-sectional-sofa-assembly-brooklyn.png' },
  { folder: 'paint-stain-wallpaper', file: 'paint-neutragen-painting-walls-queens.jpg' },
  { folder: 'carpentry', file: 'carp-custom-wood-shelf-carpentry-queens.jpg' },
  { folder: 'decks-sheds', file: 'deck-shed-deck-build-forest-hills.jpg' },
  { folder: 'mounting-installation', file: 'mount-tv-with-floating-stand-and-wire-concealment.jpg' },
  { folder: 'furniture-assembly', file: 'furniture-kids-bunk-bed-assembly-forest-hills.jpg' },
  { folder: 'mounting-installation', file: 'mount-barn-doors-install-queens.jpg' },
  { folder: 'paint-stain-wallpaper', file: 'paint-painting.jpg' },
  { folder: 'carpentry', file: 'carp-desk-made-reclaimed-wood-carpentry-queens.jpg' },
  { folder: 'furniture-assembly', file: 'furniture-assembly-flatpack-queens.png' },
  { folder: 'paint-stain-wallpaper', file: 'paint-painting-floors-and-moulding.jpg' },
] as const;

export const HOME_META = {
  title: home.title,
  description:
    'Handyman services in Brooklyn, Queens & Long Island. TV mounting, furniture assembly, painting, carpentry, decks & sheds. $80 first hour, $65 after.',
} as const;

export const HERO_VIDEO = {
  mp4: '/videos/welcome-video-portrait.mp4',
  poster: '/images/home/jdi-background.png',
  label: 'Jose Does It handyman services in Brooklyn, Queens, and Long Island',
} as const;
