import { achievements, education, experience, profile, projects, skillCategories } from '../data/portfolio';


/** CAREER SUMMARY · a designed resume preview plus view / download actions. */
export default function ResumeSection({ onView }: { onView: () => void }) {
 return <><h2 className="gutter mb-8 text-3xl font-semibold">Experience</h2>
 <div className="gutter grid items-start gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,1fr)] lg:gap-12">
 <div className="space-y-5">{experience.map((x)=><article key={x.company} className="rounded-xl border border-white/10 p-6 sm:p-8" ><p className="text-xs tracking-wide text-[#e5c69b]">{x.period}</p><h3 className="mt-3 text-xl font-semibold text-bone">{x.role}</h3><p className="mt-1 text-sm text-mist">{x.company} · {x.place}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-bone/80">{x.points[0]}</p><details className="mt-4 text-sm"><summary className="cursor-pointer text-[#e5c69b]">Responsibilities</summary><ul className="mt-3 space-y-3 text-mist">{x.points.slice(1).map(t=><li key={t}>{t}</li>)}</ul></details></article>)}</div>
 <aside className="rounded-xl border border-[#c8ae78]/25 bg-ink-2 p-6 sm:p-8"><h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5c69b]">Education</h3><div className="mt-6 space-y-7">{education.map(e=><div key={e.school}><h4 className="font-semibold leading-6 text-bone">{e.degree}</h4><p className="mt-2 text-sm text-mist">{e.school}</p>{e.period&&<p className="mt-1 text-xs text-smoke">{e.period}</p>}</div>)}</div><button onClick={onView} className="mt-8 w-full rounded-md bg-[#ead8b8] px-4 py-3 text-sm font-semibold text-[#211b18]">View résumé ↗</button></aside>
 </div></>;
}

function H({ children }: { children: string }) {
  return <h4 className="mb-3 mt-7 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-2 first:mt-0">{children}</h4>;
}

export function ResumeSheet() {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#22151b,#180e13)] p-6 ring-1 ring-white/10 sm:p-10">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-2/70 to-transparent" />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <p className="text-[10px] font-bold tracking-[0.34em] text-smoke">PROFILE</p>
          <h3 className="mt-1 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[0.9] tracking-wide text-bone">{profile.fullName}</h3><p className="mt-3 text-sm leading-6 text-mist">{profile.workRights}<br/>{profile.availability}</p>
        </div>
        <div className="text-xs leading-relaxed text-mist sm:text-right">
          <a href={`mailto:${profile.email}`} className="block hover:text-bone">
            {profile.email}
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-bone">
            LinkedIn ↗
          </a>
          {' · '}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-bone">
            GitHub ↗
          </a>
        </div>
      </header>

      <div className="grid gap-x-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <H>Education</H>
          {education.map((e) => (
            <div key={e.school} className="mb-4">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {e.school}, {e.place}
                </p>
                <p className="text-xs text-smoke">{e.period}</p>
              </div>
              <p className="text-xs text-mist">
                {e.degree}{e.score && <> · <span className="text-bone/80">{e.score}</span></>}
              </p>
            </div>
          ))}

          <H>Work Experience</H>
          {experience.map((x) => (
            <div key={x.company} className="mb-7">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">
                  {x.company} · {x.role}
                </p>
                <p className="text-xs text-smoke">{x.period}</p>
              </div>
              <ul className="mt-2 space-y-1.5">
                {x.points.map((p) => (
                  <li key={p} className="flex gap-2 text-xs leading-relaxed text-mist">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-crimson-2" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <H>Projects</H>
          {projects.map((p) => (
            <div key={p.id} className="mb-3">
              <div className="flex flex-wrap justify-between gap-x-3">
                <p className="text-sm font-semibold text-bone">{p.title}</p>
                <p className="text-xs text-smoke">{p.year}</p>
              </div>
              <p className="text-xs text-mist">{p.stack.join(', ')}</p>
            </div>
          ))}
        </div>

        <div>
          <H>Skills</H>
          <div className="space-y-2">
            {skillCategories.map((c) => (
              <p key={c.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">{c.title}: </span>
                {c.skills.map((s) => s.name).join(', ')}
              </p>
            ))}
          </div>

          <H>Highlights</H>
          <ul className="space-y-2">
            {achievements.map((a) => (
              <li key={a.id} className="text-xs leading-relaxed text-mist">
                <span className="font-semibold text-bone">
                  {a.title} · {a.org}.
                </span>{' '}
                {a.detail}
              </li>
            ))}
          </ul>


        </div>
      </div>
    </article>
  );
}
