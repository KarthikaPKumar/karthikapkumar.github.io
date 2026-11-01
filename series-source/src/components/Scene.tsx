import { useRef, type ReactNode } from 'react';
import { useTrackProgress } from '../hooks/sectionProgress';
export default function Scene({id, children, className=''}:{id:string;children:ReactNode;className?:string}) {
 const ref=useRef<HTMLElement>(null); useTrackProgress(id,ref);
 return <section id={id} ref={ref} className={`relative scroll-mt-20 py-14 sm:py-20 ${className}`}>{children}</section>;
}
