




import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutPreview } from '../components/home/AboutPreview';
import { FeaturedStories } from '../components/home/FeaturedStories';
import { WhyChoose } from '../components/home/WhyChoose';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FeaturedFilm } from '../components/home/FeaturedFilm';
import { Stats } from '../components/home/Stats';
import { Testimonials } from '../components/home/Testimonials';
import { InstagramGallery } from '../components/home/InstagramGallery';
import { FinalCTA } from '../components/home/FinalCTA';

export function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <FeaturedStories />
      <WhyChoose />
      <ServicesPreview />
      <FeaturedFilm />
      <Stats />
      <Testimonials />
      <InstagramGallery />
      <FinalCTA />
    </main>);

}