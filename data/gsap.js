import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
gsap.defaults({ ease: 'power3.inOut' });
export default gsap;
