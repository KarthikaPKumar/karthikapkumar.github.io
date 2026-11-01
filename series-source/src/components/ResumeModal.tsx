import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollLock } from '../hooks/smoothScroll';
import { profile } from '../data/portfolio';
import { ResumeSheet } from './ResumeViewer';
export default function ResumeModal({onClose}:{onClose:()=>void}) {
 useScrollLock(true);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[onClose]);
 return <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} role="dialog" aria-modal="true" aria-label="Career summary" className="resume-overlay fixed inset-0 z-[140] overflow-y-auto bg-black/95 p-5 sm:p-10" data-lenis-prevent><div className="mx-auto max-w-6xl"><div className="resume-controls mb-5 flex items-center justify-between gap-4"><div><h2 className="font-display text-3xl">CAREER SUMMARY</h2><p className="text-sm text-mist">Experience, education and selected projects.</p></div><div className="flex flex-wrap gap-3"><a href={profile.resumePdf} download className="rounded bg-bone px-4 py-2 text-ink">Download résumé PDF</a><button className="rounded bg-bone px-4 py-2 text-ink" onClick={()=>window.print()}>Print / Save PDF</button><button autoFocus aria-label="Close resume" onClick={onClose} className="rounded-full bg-white/10 px-4 py-2">✕</button></div></div><ResumeSheet/></div></motion.div>;
}
