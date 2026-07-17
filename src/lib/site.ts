/** Shared site constants */
export const SITE_URL = 'https://www.josedoesit.com';
export const PHONE = '347-856-3025';
export const PHONE_TEL = 'tel:3478563025';
export const EMAIL = 'Iamjoseguzman@gmail.com';

export const GALLERY_ORDER = [
  'decks-sheds',
  'furniture-assembly',
  'mounting-installation',
  'paint-stain-wallpaper',
  'carpentry',
] as const;

export type GallerySlug = (typeof GALLERY_ORDER)[number];

export const NAV_LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/faq', label: 'FAQ' },
  { href: '/price-guide', label: 'Price Guide' },
] as const;
