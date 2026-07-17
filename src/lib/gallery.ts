import manifest from '../data/image-manifest.json';
import { GALLERY_ORDER, type GallerySlug } from './site';

type GalleryImage = {
  file: string;
  title: string;
  alt: string;
  description: string;
  projectId?: string;
};

export type GallerySlide = {
  src: string;
  title?: string;
  alt: string;
  description?: string;
};

export type GalleryDisplayItem = {
  thumbnail: GallerySlide;
  slides: GallerySlide[];
  projectId?: string;
};

function toSlide(slug: string, image: GalleryImage): GallerySlide {
  return {
    src: `/images/${slug}/${image.file}`,
    title: image.title,
    alt: image.alt,
    description: image.description,
  };
}

/** Collapse multi-photo projects into one grid thumbnail; lightbox shows all slides. */
export function getGroupedGalleryItems(slug: string): GalleryDisplayItem[] {
  const gallery = manifest.galleries[slug as keyof typeof manifest.galleries];
  const images = (gallery?.images ?? []) as GalleryImage[];
  const items: GalleryDisplayItem[] = [];
  const projectIndex = new Map<string, number>();

  for (const image of images) {
    const slide = toSlide(slug, image);

    if (image.projectId) {
      const existing = projectIndex.get(image.projectId);
      if (existing !== undefined) {
        items[existing].slides.push(slide);
        continue;
      }
      projectIndex.set(image.projectId, items.length);
      items.push({
        projectId: image.projectId,
        thumbnail: slide,
        slides: [slide],
      });
      continue;
    }

    items.push({ thumbnail: slide, slides: [slide] });
  }

  return items;
}

export function getGalleryImages(slug: string) {
  const gallery = manifest.galleries[slug as keyof typeof manifest.galleries];
  if (!gallery?.images) return [];

  return gallery.images.map((image: GalleryImage) => ({
    file: image.file,
    src: `/images/${slug}/${image.file}`,
    title: image.title,
    alt: image.alt,
    description: image.description,
  }));
}

export function getGalleryImage(slug: string, filename: string, index = 0) {
  const gallery = manifest.galleries[slug as keyof typeof manifest.galleries];
  const images = gallery?.images ?? [];
  const match = images.find((img: GalleryImage) => img.file === filename);
  const fallbackAlt = `${slug} project ${index + 1} — Jose Does It handyman Queens 11375, Brooklyn, Long Island`;

  return {
    title: match?.title ?? '',
    alt: match?.alt ?? fallbackAlt,
    description: match?.description ?? '',
  };
}

export function getImageAlt(slug: string, filename: string, index = 0): string {
  return getGalleryImage(slug, filename, index).alt;
}

export function getPrevNextGallery(slug: GallerySlug) {
  const idx = GALLERY_ORDER.indexOf(slug);
  return {
    prev: idx > 0 ? GALLERY_ORDER[idx - 1] : null,
    next: idx < GALLERY_ORDER.length - 1 ? GALLERY_ORDER[idx + 1] : null,
  };
}
