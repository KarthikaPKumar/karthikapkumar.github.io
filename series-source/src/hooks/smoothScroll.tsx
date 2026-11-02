import { createContext, useCallback, useContext, useEffect, useRef, type ReactNode } from 'react';
type ScrollApi={scrollTo:(target:string|HTMLElement|number,opts?:{offset?:number;immediate?:boolean})=>void;lock:()=>void;unlock:()=>void};
const ScrollCtx=createContext<ScrollApi|null>(null);
export function SmoothScrollProvider({children}:{children:ReactNode}){
 const locks=useRef(0);
 const scrollTo=useCallback<ScrollApi['scrollTo']>((target,opts={})=>{const el=typeof target==='string'?document.querySelector<HTMLElement>(target):target;if(el!==null)window.scrollTo({top:typeof el==='number'?el:el.getBoundingClientRect().top+window.scrollY+(opts.offset??-24),behavior:'auto'});},[]);
 const lock=useCallback(()=>{locks.current++;document.documentElement.style.overflow='hidden';},[]);
 const unlock=useCallback(()=>{locks.current=Math.max(0,locks.current-1);if(!locks.current)document.documentElement.style.overflow='';},[]);
 return <ScrollCtx.Provider value={{scrollTo,lock,unlock}}>{children}</ScrollCtx.Provider>;
}
export function useSmoothScroll(){const ctx=useContext(ScrollCtx);if(!ctx)throw new Error('Missing scroll provider');return ctx;}
export function useScrollLock(active:boolean){const {lock,unlock}=useSmoothScroll();useEffect(()=>{if(active){lock();return unlock;}},[active,lock,unlock]);}
