import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { skillCategories, skillEvidence, type Skill } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

const HUES = ['#e5c69b'];

export default function Skills() {
  const [cat, setCat] = useState(0);
  const category = skillCategories[cat];
  const hue = HUES[cat % HUES.length];

  return (
    <>
      <SectionHeading kicker="Capabilities" title="Skills" aside={<p className="max-w-xs text-sm text-mist">Source links show what is implemented. Explore the categories below for additional experience.</p>} />

      <div className="gutter mb-10 grid gap-4 md:grid-cols-3"><article className="rounded-lg border border-white/10 bg-ink-2 p-5"><h3 className="text-base font-semibold text-bone">Python · scikit-learn</h3><p className="mt-3 text-sm leading-6 text-mist">Predictive modelling and held-out evaluation on four NASA laboratory cells.</p><a className="mt-4 inline-block text-sm text-[#ead8b8] underline underline-offset-4" href="https://github.com/KarthikaPKumar/voltwise" target="_blank" rel="noreferrer">Model, evaluation & limitations ↗</a></article><article className="rounded-lg border border-white/10 bg-ink-2 p-5"><h3 className="text-base font-semibold text-bone">SQL · dbt · DuckDB</h3><p className="mt-3 text-sm leading-6 text-mist">SQL transformations, shared metric definitions and data-quality checks in Voltwise.</p><a className="mt-4 inline-block text-sm text-[#ead8b8] underline underline-offset-4" href="https://github.com/KarthikaPKumar/voltwise/tree/main/analytics" target="_blank" rel="noreferrer">SQL models & dbt tests ↗</a></article><article className="rounded-lg border border-white/10 bg-ink-2 p-5"><h3 className="text-base font-semibold text-bone">FastAPI · Ollama</h3><p className="mt-3 text-sm leading-6 text-mist">Local API and tool-using AI agent with bounded, read-only access to metrics. Requires local setup.</p><a className="mt-4 inline-block text-sm text-[#ead8b8] underline underline-offset-4" href="https://github.com/KarthikaPKumar/voltwise/tree/main/service" target="_blank" rel="noreferrer">API & local agent source ↗</a></article></div><div className="gutter grid gap-8 ">
        {/* genre list */}
        <div className="rail -mx-[var(--gutter)] flex gap-2 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:gap-2 lg:px-0" role="tablist" aria-label="Skill categories">
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={i === cat}
              onClick={() => setCat(i)}
              className={`group relative shrink-0 rounded-lg px-4 py-3 text-left transition lg:px-5 ${i === cat ? 'text-bone' : 'text-smoke hover:text-bone'}`}
            >
              {i === cat && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-white/[0.07] ring-1 ring-white/10" transition={{ duration: 0.45, ease: EASE }} />}
              {i === cat && <motion.span layoutId="skill-bar" className="absolute bottom-2 left-0 top-2 hidden w-[3px] rounded lg:block" style={{ background: hue }} />}
              <span className="relative block font-display text-2xl tracking-wide lg:text-3xl">{c.title}</span>
              <span className="relative hidden text-xs text-smoke lg:block">
                {c.skills.length} skills · {c.subtitle}
              </span>
            </button>
          ))}
        </div>

        {/* skill cards */}
        <div className="min-h-0">
          <AnimatePresence mode="wait">
            <motion.div key={category.id} initial="hidden" animate="show" exit="exit" transition={{ staggerChildren: 0.05 }}>
              <motion.p
                className="mb-5 text-sm text-mist"
                variants={{ hidden: { opacity: 0 }, show: { opacity: 1 }, exit: { opacity: 0 } }}
              >
                <span className="font-semibold text-bone">{category.title}</span> · {category.subtitle}
              </motion.p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
                {category.skills.map((s) => (
                  <SkillCard key={s.name} skill={s} hue={hue} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function SkillCard({ skill, hue }: { skill: Skill; hue: string }) {
 const evidence=skillEvidence[skill.name];
 return <article className="rounded-xl border border-white/10 bg-ink-2 p-5"><span aria-hidden className="font-display text-2xl" style={{color:hue}}>{skill.mono}</span><h3 className="mt-3 text-base font-semibold text-bone">{skill.name}</h3><p className="mt-2 text-sm leading-6 text-mist">{evidence?.join(' · ') ?? 'Project implementation'}</p></article>;
}
