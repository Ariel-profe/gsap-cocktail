import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";

export const Hero = () => {

    useGSAP(() => {

        const heroSplit = new SplitText('.title', {
            type: 'lines, words, chars',
            linesClass: 'line',
            wordsClass: 'word',
            charsClass: 'char'
        });

        const paragraphSplit = new SplitText('.subtitle', {
            type: 'lines',
        });

        heroSplit.chars.forEach( (char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
            opacity: 0,
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1
        });

        

    }, []);// This effect is used to animate the title text in the hero section

  return (
    <>
        <section
            id="hero"
            className="noisy"
        >
            <h1 className="title">MOJITO</h1>

            <img src="/images/hero-left-leaf.png" alt="left-leaf" className="left-leaf" />
            <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Cool. Crisp. Classic.</p>
                        <p className="subtitle">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="subtitle">
                            Every cocktail on our menu is crafted with care, using only the finest ingredients, techniques and recipes to delight your senses. <br />
                        </p>
                        <a href="#cocktails">View coctails</a>
                    </div>

                </div>

            </div>

        </section>
    </>
  )
}
