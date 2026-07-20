


import { IMAGES } from './images';

export interface Service {
  title: string;
  short: string;
  description: string;
  image: string;
}

export const SERVICES: Service[] = [
{
  title: 'Wedding Photography',
  short: 'Timeless, artistic photography of your day.',
  description:
  'Capture every unforgettable moment with timeless, artistic photography that tells your unique love story.',
  image: IMAGES.garlandCouple
},
{
  title: 'Wedding Cinematography',
  short: 'Cinematic films to relive every emotion.',
  description:
  'Beautiful cinematic films crafted to relive every emotion for years to come.',
  image: IMAGES.beachSilhouette
},
{
  title: 'Engagement Sessions',
  short: 'Romantic sessions celebrating your journey.',
  description:
  'Romantic engagement photography designed to celebrate your journey together.',
  image: IMAGES.beachKiss
},
{
  title: 'Pre Wedding Shoots',
  short: 'Creative outdoor & destination pre-shoots.',
  description:
  'Creative outdoor and destination pre-shoot experiences with stunning visuals.',
  image: IMAGES.echoesSea
},
{
  title: 'Reception Coverage',
  short: 'Complete coverage of every celebration.',
  description:
  'Complete event coverage capturing every celebration and special moment.',
  image: IMAGES.ceremonyGold
},
{
  title: 'Drone Photography & Videography',
  short: 'Spectacular cinematic aerial perspectives.',
  description:
  'Spectacular aerial perspectives that add cinematic beauty to your wedding memories.',
  image: IMAGES.chaseTide
},
{
  title: 'Premium Wedding Albums',
  short: 'Luxury handcrafted heirloom albums.',
  description:
  'Luxury handcrafted albums designed to preserve your memories forever.',
  image: IMAGES.brideGown
}];