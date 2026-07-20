
// Central image library for VT Weddings.
// These are the client-uploaded wedding photographs. Replace or extend freely.

export interface GalleryImage {
  src: string;
  alt: string;
  category: 'weddings' | 'engagements' | 'preshoots' | 'receptions' | 'films';
  orientation: 'portrait' | 'landscape';
}

export const IMAGES = {
  beachSilhouette: "/WhatsApp_Image_2026-07-20_at_11.17.43.jpg",

  beachLift: "/WhatsApp_Image_2026-07-20_at_11.17.42.jpg",

  sareeSmile: "/WhatsApp_Image_2026-07-20_at_11.17.41_(1).jpg",

  mirunAbi: "/WhatsApp_Image_2026-07-20_at_11.17.41.jpg",

  brideBW: "/WhatsApp_Image_2026-07-20_at_11.17.40.jpg",

  hennaHands: "/WhatsApp_Image_2026-07-20_at_11.17.39_(1).jpg",

  brideGown: "/WhatsApp_Image_2026-07-20_at_11.17.39.jpg",

  ceremonyGold: "/WhatsApp_Image_2026-07-20_at_11.17.38_(1).jpg",

  beachLiftDay: "/WhatsApp_Image_2026-07-20_at_11.17.38.jpg",

  beachLaugh: "/WhatsApp_Image_2026-07-20_at_11.17.37_(1).jpg",

  echoesSea: "/WhatsApp_Image_2026-07-20_at_11.17.37.jpg",

  beachWalkHands: "/WhatsApp_Image_2026-07-20_at_11.17.36_(1).jpg",

  beachKiss: "/WhatsApp_Image_2026-07-20_at_11.17.36.jpg",

  chaseTide: "/WhatsApp_Image_2026-07-20_at_11.17.35.jpg",

  gardenWalk: "/WhatsApp_Image_2026-07-20_at_11.17.34.jpg",

  garlandCouple: "/WhatsApp_Image_2026-07-20_at_11.17.33.jpg",

  thailandBoatLounge: "/1784529739933.publer.com.jpg",

  thailandBoatCollage1: "/1784529740927.publer.com.jpg",

  thailandBoatCollage2: "/1784529741928.publer.com.jpg",

  thailandBoatCanyon: "/1784529742928.publer.com.jpg"

} as const;

export const GALLERY_IMAGES: GalleryImage[] = [
{ src: IMAGES.mirunAbi, alt: 'Mirun & Abi close portrait', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.garlandCouple, alt: 'Couple with rose garlands', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.ceremonyGold, alt: 'Golden ceremony moment', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.sareeSmile, alt: 'Couple sharing a laugh in traditional attire', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.gardenWalk, alt: 'Couple walking through a garden', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.brideBW, alt: 'Black and white bridal portrait', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.brideGown, alt: 'Bride in golden gown by the window', category: 'weddings', orientation: 'portrait' },
{ src: IMAGES.hennaHands, alt: 'Bridal henna hands detail', category: 'weddings', orientation: 'portrait' },

{ src: IMAGES.beachKiss, alt: 'Couple sharing a kiss on the beach', category: 'engagements', orientation: 'portrait' },
{ src: IMAGES.beachLiftDay, alt: 'Groom lifting bride on a sunny beach', category: 'engagements', orientation: 'portrait' },
{ src: IMAGES.beachLaugh, alt: 'Couple laughing on the shore', category: 'engagements', orientation: 'portrait' },

{ src: IMAGES.echoesSea, alt: 'Echoes of the sea pre-shoot', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.chaseTide, alt: 'Chase the tide pre-shoot', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.beachWalkHands, alt: 'Couple walking along the water', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.thailandBoatLounge, alt: 'Romantic pre-shoot on a longtail boat', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.thailandBoatCollage1, alt: 'Couple on a boat in tropical waters', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.thailandBoatCollage2, alt: 'Intimate moments aboard a wooden boat', category: 'preshoots', orientation: 'portrait' },
{ src: IMAGES.thailandBoatCanyon, alt: 'Boat journey through limestone cliffs', category: 'preshoots', orientation: 'portrait' },

{ src: IMAGES.beachSilhouette, alt: 'Sunset beach silhouette', category: 'films', orientation: 'landscape' },
{ src: IMAGES.beachLift, alt: 'Backlit beach embrace', category: 'films', orientation: 'landscape' }];


// Flat list of sources for the InfiniteGallery WebGL component
export const GALLERY_SOURCES = GALLERY_IMAGES.map((i) => i.src);