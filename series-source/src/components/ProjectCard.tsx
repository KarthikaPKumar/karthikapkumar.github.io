import type { Project } from '../data/portfolio';
import evidence from '../data/projectEvidence.json';
export default function ProjectCard({project,onOpen}:{project:Project;index:number;onOpen:()=>void}) {
 const e=evidence[project.id as keyof typeof evidence];
 return <article className={`flex min-w-0 flex-col overflow-hidden rounded-xl border border-white/15 bg-ink-2 ${project.id==='vkinder' ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''}`}>
 {e.image && <figure className={`flex flex-col justify-center border-b border-white/10 ${project.id==='voltwise' ? 'bg-[#101e2e]' : 'bg-[#f5f1e9]'}`}><img src={e.image} alt={e.alt} className="aspect-[16/9] w-full object-contain" loading="lazy"/><figcaption className={`px-5 py-3 text-xs leading-5 ${project.id==='voltwise' ? 'text-[#c8d9e9]' : 'text-[#473b3f]'}`}>{e.caption}</figcaption></figure>}
 <div className="flex flex-1 flex-col p-6 sm:p-8"><p className="text-sm text-crimson-2">{e.status}</p><h3 className="mt-3 text-2xl font-semibold text-bone">{project.title}</h3><p className="mt-4 text-sm leading-7 text-mist">{e.summary}</p><p className="mt-5 border-l-2 border-crimson-2 pl-4 text-base font-medium leading-7 text-bone">{e.result}</p><p className="mt-5 text-sm leading-6 text-mist">{e.tools.join(' · ')}</p><div className="mt-auto flex flex-wrap gap-3 pt-7"><button onClick={onOpen} className="btn-primary">View case study</button><a className="btn-secondary" href={`/kathy/case-studies/${project.id}.html`}>Read write-up ↗</a></div></div>
 </article>;
}
