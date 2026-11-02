import { useEffect } from 'react';
import { useScrollLock } from '../hooks/smoothScroll';
import { profile } from '../data/portfolio';
export default function ResumeModal({onClose}:{onClose:()=>void}) {
 useScrollLock(true);
 useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if(e.key==='Escape')onClose();};window.addEventListener('keydown',onKey);return()=>window.removeEventListener('keydown',onKey);},[onClose]);
 return <div role="dialog" aria-modal="true" aria-label="Résumé" className="resume-overlay fixed inset-0 z-[140] overflow-y-auto bg-black/95 p-5 sm:p-10" data-lenis-prevent><div className="mx-auto max-w-6xl"><div className="resume-controls mb-5 flex items-center justify-between gap-4"><div><h2 className="font-display text-3xl">RÉSUMÉ</h2><p className="text-sm text-mist">My complete résumé.</p></div><div className="flex flex-wrap gap-3"><a href={profile.resumePdf} download className="rounded bg-bone px-4 py-2 text-ink">Download résumé PDF</a><button autoFocus aria-label="Close resume" onClick={onClose} className="rounded-full bg-white/10 px-4 py-2">✕</button></div></div><object data={profile.resumePdf} type="application/pdf" className="h-[78vh] w-full rounded-lg bg-white" aria-label="Kathy’s complete résumé"><p className="p-6 text-ink">PDF preview is unavailable in this browser. <a href={profile.resumePdf} className="underline">Open the résumé PDF</a>.</p></object><a href={profile.resumePdf} target="_blank" rel="noreferrer" className="mt-4 inline-block text-crimson-2 underline">Open PDF in a new tab ↗</a></div></div>;
}
