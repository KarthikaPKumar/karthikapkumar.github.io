import { lazy, Suspense, useState } from 'react';
import { profile, type Project } from './data/portfolio';
import { SmoothScrollProvider } from './hooks/smoothScroll';
import Originals from './components/Originals';
import Skills from './components/Skills';
import ResumeSection from './components/ResumeViewer';
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));
export default function App() {
 const [project,setProject]=useState<Project|null>(null);
 const [resume,setResume]=useState(false);
 return <SmoothScrollProvider><div className="personal-portfolio">
 <a href="#portfolio-main" className="skip-link">Skip to content</a>
 <header className="gutter border-b border-white/15 py-6"><div className="flex flex-wrap items-center justify-between gap-5"><a href="#top" className="text-xl font-semibold">Kathy</a><nav aria-label="Sections" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist"><a href="#story">Experience</a><a href="#originals">Projects</a><a href="#skills">Skills</a><a href="/kathy/notes/">Notes</a><a href="#contact">Contact</a></nav></div></header>
 <main id="portfolio-main"><section id="top" className="gutter grid items-center gap-10 py-16 lg:grid-cols-[1.5fr_1fr] lg:py-24">
 <div><p className="text-sm text-crimson-2">Melbourne · Data Scientist &amp; Engineer</p><h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-7xl">Hi, I'm Kathy.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-mist">At IBM, I worked on Presto in watsonx.data: audit logging, caching improvements and Python tools for quality assurance. I've since completed my Master of Data Science at Monash, and I'm looking for my next data role in Melbourne.</p><p className="mt-5 max-w-2xl text-lg leading-8 text-mist">My projects cover neighbourhood data in Melbourne, battery forecasts and walking routes. Below, I've included what works, what doesn't, and what still needs testing.</p><p className="mt-6 text-sm leading-7 text-mist">{profile.workRights}<br/>{profile.availability}</p><div className="mt-7 flex flex-wrap gap-3"><a href={profile.resumePdf} download className="btn-primary">Download résumé</a><button onClick={()=>setResume(true)} className="btn-secondary">View résumé</button><a href="#originals" className="btn-secondary">See my projects</a></div></div>
 <figure className="mx-auto w-full max-w-sm"><img src="/kathy/assets/headshot.jpg" alt="Kathy outdoors, smiling in a garden" className="aspect-[4/5] w-full rounded-lg object-cover"/><figcaption className="mt-4 text-sm text-mist">Based in Melbourne. Open to graduate and junior data roles.</figcaption></figure></section>
 <section id="story" className="border-t border-white/10 py-16"><ResumeSection onView={()=>setResume(true)}/></section>
 <section id="originals" className="border-t border-white/10 py-16"><Originals onOpen={setProject}/></section>
 <section id="skills" className="border-t border-white/10 py-16"><Skills/></section>
 <section id="about" className="gutter grid gap-8 border-t border-white/10 py-16 md:grid-cols-2"><div><h2 className="text-3xl font-semibold">Away from the project demos</h2><p className="mt-5 max-w-xl leading-8 text-mist">A difficult interview once knocked my confidence enough that I stopped applying and settled on an offer I already had. IBM got me trying again. Working with architects and directors early in my career changed how I saw myself and what I could contribute.</p><p className="mt-5 max-w-xl leading-8 text-mist">Now I also teach Python, introductory data science and AI at Junior Engineers. I help new instructors get started and explain technical ideas through practical lessons.</p></div><div><h2 className="text-3xl font-semibold">Working notes</h2><p className="mt-5 max-w-xl leading-8 text-mist">A few decisions behind the work: how to split battery data, what missing observations mean for a route, and why a better forecast can still be wrong.</p><a href="/kathy/notes/" className="mt-5 inline-block text-crimson-2 underline underline-offset-4">Read the notes ↗</a></div></section>
 <section id="contact" className="gutter border-t border-white/15 py-20"><h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">If you're hiring graduates in Melbourne, I'd like to talk.</h2><p className="mt-6 text-mist">Questions about a project are welcome too.</p><a href={`mailto:${profile.email}`} className="btn-primary mt-7">Email Kathy ↗</a><div className="mt-6 flex gap-6 text-sm"><a href={profile.links.linkedin}>LinkedIn ↗</a><a href={profile.links.github}>GitHub ↗</a></div><footer className="mt-14 text-sm text-mist">© {new Date().getFullYear()} Kathy · Data Scientist &amp; Engineer</footer></section></main>
 <Suspense fallback={null}>{project&&<ProjectModal project={project} onClose={()=>setProject(null)} onSwitch={setProject}/ >}{resume&&<ResumeModal onClose={()=>setResume(false)}/>}</Suspense>
 </div></SmoothScrollProvider>;
}
