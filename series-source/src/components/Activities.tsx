import { experience } from '../data/portfolio';
import { SectionHeading } from './fx';

export default function Activities() {
  const instructor = experience.find((role) => role.company === 'Junior Engineers')!;
  return <>
    <SectionHeading kicker="Beyond the technical work" title="Activities" />
    <div className="gutter grid gap-6 md:grid-cols-2">
      <article className="rounded-xl border border-[#c8ae78]/25 bg-[#241e18] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c69b]">Teaching & mentoring</p>
        <h3 className="mt-4 text-2xl font-semibold text-bone">{instructor.role}</h3>
        <p className="mt-2 text-base text-bone">Junior Engineers · Melbourne</p>
        <p className="mt-2 text-sm text-mist">{instructor.period}</p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-mist">
          {instructor.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </article>
      <article className="rounded-xl border border-white/10 bg-[#25151e] p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c69b]">Student engagement</p>
        <h3 className="mt-4 text-2xl font-semibold text-bone">Student Ambassador</h3>
        <p className="mt-2 text-base text-bone">Monash University, Faculty of IT</p><p className="mt-2 text-sm text-mist">March 2026 – Present</p>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-mist">
          <li>Represent Monash at on-campus and external events, including Her Tech Path and STEM workshops, graduate expos, exhibitions and school outreach programmes.</li>
          <li>Participate in workshops and volunteer at university events.</li>
          <li>Coordinate student volunteers and support volunteer allocations for Orientation Day.</li>
          <li>Assist with office administration and event coordination.</li>
        </ul>
      </article>
      <article className="rounded-xl border border-white/10 bg-[#25151e] p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-bone">University involvement</h3>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-mist">
          <li>Data and Insight Officer, Monash Data and AI Society · 2025</li>
          <li>Programming Tutor, Faculty of IT, Monash University · 2025</li>
          <li>Events Officer, Monash Coding Assistive Tech Team · 2025</li>
        </ul>
      </article>
      <article className="rounded-xl border border-white/10 bg-[#25151e] p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-bone">Competitions &amp; achievements</h3>
        <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-mist">
          <li>Finalist, Monash DS&amp;AI Showcase · VKinder · 2026</li>
          <li>Winner, Make-a-thon Hackathon, Cochin University · 2019</li>
          <li>Winner, IEDC Idea Pitching Contest, Kerala Startup Mission · 2021</li>
          <li>Participant, UNIHACK · 2025</li>
        </ul>
      </article>
    </div>
  </>;
}
