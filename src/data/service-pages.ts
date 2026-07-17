import type { GallerySlug } from '../lib/site';

export interface ServicePageMeta {
  pageTitle: string;
  pageDescription: string;
  bookingHeading: string;
  bookingDescription: string;
}

export const SERVICE_PAGES: Record<GallerySlug, ServicePageMeta> = {
  'decks-sheds': {
    pageTitle: 'Decks & Sheds Queens, Brooklyn & Long Island | Jose Does It',
    pageDescription:
      'Custom deck and shed builds in Queens 11375, Brooklyn & Long Island. View outdoor project gallery and book a consultation.',
    bookingHeading: 'Schedule Decks & Sheds',
    bookingDescription:
      'Custom decks, sheds, and outdoor builds for your backyard. Book a consultation and we\'ll scope the project together.',
  },
  'furniture-assembly': {
    pageTitle: 'Furniture Assembly Queens, Brooklyn & Long Island | Jose Does It',
    pageDescription:
      'Furniture assembly in Queens 11375, Brooklyn & Long Island. IKEA, Wayfair, flat-pack & custom pieces. View project gallery and book online.',
    bookingHeading: 'Schedule Furniture Assembly',
    bookingDescription:
      'Flat-pack, IKEA, Wayfair, or custom pieces — book a time that works for you. Need extra time? Add it upfront when scheduling.',
  },
  'mounting-installation': {
    pageTitle: 'TV & Mounting Installation Queens, Brooklyn & Long Island | Jose Does It',
    pageDescription:
      'TV mounting, shelves, mirrors & sconce installation in Queens 11375, Brooklyn & Long Island. Professional wire concealment. View gallery & book.',
    bookingHeading: 'Schedule Mounting & Installation',
    bookingDescription:
      'TVs, shelves, mirrors, sconces, barn doors, and more — professional mounting with clean wire management. Book a time that works for you.',
  },
  'paint-stain-wallpaper': {
    pageTitle: 'Painting, Stain & Wallpaper Queens, Brooklyn & Long Island | Jose Does It',
    pageDescription:
      'Interior painting, staining & wallpaper in Queens 11375, Brooklyn & Long Island. View project photos and see Price Guide estimates.',
    bookingHeading: 'Schedule Painting & Wallpaper',
    bookingDescription:
      'Interior painting, staining, wallpaper, and drywall work. Book a time and see real cost estimates on our Price Guide before we start.',
  },
  carpentry: {
    pageTitle: 'Carpentry Queens, Brooklyn & Long Island | Jose Does It',
    pageDescription:
      'Custom carpentry in Queens 11375, Brooklyn & Long Island. Shelves, desks, reclaimed wood projects. View gallery and book online.',
    bookingHeading: 'Schedule Carpentry',
    bookingDescription:
      'Custom shelves, desks, reclaimed wood projects, and fine carpentry. Book a time that works for you.',
  },
};
