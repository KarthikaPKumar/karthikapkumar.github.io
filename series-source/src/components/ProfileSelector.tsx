import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { viewerProfiles, type ProfileId } from '../data/portfolio';
import { EASE } from './fx';

export function ProfileAvatar({ id, size = 'lg' }: { id: ProfileId; size?: 'sm' | 'lg' }) {
  const p = viewerProfiles.find((v) => v.id === id)!;
  const box = size === 'lg' ? 'h-24 w-52 sm:h-36 sm:w-44 md:h-40 md:w-52 rounded-xl' : 'h-8 w-8 rounded-md';
  const iconPaths = {
    kathy: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
    recruiter: 'M8 7V5h8v2M4 8h16v12H4zM4 12c5 3 11 3 16 0M10 13h4',
    developer: 'M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14',
    creative: 'M4 4h16v12H9l-5 4V4zM8 8h8M8 12h5',
  }[id];
  return (
    <span
      className={`relative flex items-center justify-center overflow-hidden font-display text-bone ${box}`}
      style={{ background: `radial-gradient(circle at 30% 15%, ${p.color}, #211b18 95%)`, border: '1px solid #c8ae7860', color: '#f0dcb5' }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={size === 'lg' ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-5 w-5'}><path d={iconPaths}/></svg>
    </span>
  );
}

export default function ProfileSelector({ onPick }: { onPick: (id: ProfileId) => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPick('kathy');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onPick]);

  return (
    <motion.div
      className="fixed inset-0 z-[110] flex flex-col items-center justify-center overflow-y-auto bg-ink px-4 py-10 sm:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      role="dialog"
      aria-label="What brings you here?"
    >
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(127,41,68,0.14),transparent_70%)]" />
      <motion.h2
        className="relative mb-7 sm:mb-10 text-center font-sans text-3xl font-medium tracking-tight text-bone sm:text-5xl"
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        What brings you here?
      </motion.h2>
      <motion.ul
        className="relative grid grid-cols-1 gap-7 sm:grid-cols-3 sm:gap-10"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {viewerProfiles.map((p) => (
          <motion.li key={p.id} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
            <button type="button" onClick={() => onPick(p.id)} data-cursor="play" className="group flex flex-col items-center gap-3 text-center">
              <span className="relative rounded-xl ring-2 ring-transparent transition duration-300 group-hover:scale-105 group-hover:ring-bone group-focus-visible:ring-bone">
                <ProfileAvatar id={p.id} />

              </span>
              <span className="font-sans text-sm font-medium text-bone transition group-hover:text-[#f0dcb5] sm:text-base">{p.name}</span>
              <span className="max-w-[13rem] text-[11px] leading-snug text-smoke">{p.blurb}</span>
            </button>
          </motion.li>
        ))}
      </motion.ul>
      <p className="relative mt-7 sm:mt-12 max-w-md text-center text-xs leading-relaxed text-smoke">
        Experience, technical work, or a conversation. Choose where to begin.
      </p>
    </motion.div>
  );
}
