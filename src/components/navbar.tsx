import { useGSAP } from '@gsap/react';
import { navLinks } from '../../constants/index';
import gsap from 'gsap';

export const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        });

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', {y: 200}, 0)
        .to('.left-leaf', {y: -200}, 0);
    },[])

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2">
                    <img src="/images/logo.png" alt="velvet-pour-logo" />
                    <p>Velvet Pour</p>
                </a>

                <ul>
                    {
                        navLinks.map((item) => (
                            <li key={item.id}>
                                <a href={`#${item.id}`} className="hover:text-gray-500">
                                    {item.title}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}
