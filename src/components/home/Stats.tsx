



import React from 'react';
import { Counter } from '../ui/Counter';

const STATS = [
{ value: 250, suffix: '+', label: 'Weddings Captured' },
{ value: 500, suffix: '+', label: 'Happy Clients' },
{ value: 8, suffix: '+', label: 'Years of Experience' },
{ value: 100, suffix: '%', label: 'Client Satisfaction' }];


export function Stats() {
  return (
    <section className="bg-charcoal py-20 md:py-28 border-y border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
        {STATS.map((s) =>
        <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        )}
      </div>
    </section>);

}