import  { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import './bye.css'

export const Bye = () => {

  const componentRef = useRef();
  
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });
  
  useEffect(() => {
    if (inView) {
      componentRef.current.classList.add('crawl');
    }
  }, [inView]);
  

  return (
    <section id="star-wars" ref={ref}>
    <div className='container'>
        <div className='star-wars'>
            <div className='fade'></div>
            <div className="beforecrawl" ref={componentRef}>
                    <div className="title">
                    <p className='emcey'>EMCEY</p>
                    <h1>THE LAST SAPACEBNDER</h1>
                    </div>
            <p>I am the last space bender and I am coming for ignorant people</p>     
            <p>l am coming for stupids</p>
            <br></br>
            <p>
            Kara kıs avılımga kelgende
            Kürtildegen kar yerge tüskende
            Dombramdı alarman
            Yürek sazım çalarman
            Kaygırgandı eş aytbam
            Dombramdı alarman
            Yürek sazım çalarman
            Kaygırgandı eş aytbam
            Dombıra sazım estgen ataylar
            Manesine es bergen anaylar
            Estkenine oy berip
            Yüreklerge ses berip
            Köz yastı kızganmaslar
            Estkenine oy berip
            Yüreklerge ses berip
            Köz yastı kızganmaslar
            Hey dombıra
            Hey dombıra
            Nogaydın kaygı sansız küninde
            Batirler uyklamagan tüninde
            Yüreklerin kötergen
            Sogıslarga küş bergen
            Köptü körgen dombıra
            Yüreklerin kötergen
            Sogıslarga küş bergen
            Köptü körgen dombıra
            Hey dombıra
            Hey dombıra
            </p>
        </div>
                </div>
       
    </div>
    </section>
  )
}

export default Bye
