import  { useEffect, useRef } from 'react'; 
import Navbar from '../navbar/Navbar';
import './salute.css';

const Salute = () => {
  const imageRef = useRef(null); 

  useEffect(() => {
    
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        imageRef.current.style.transform = `translateY(-${scrollY * 0.5}px)`; 
      }
    };

    window.addEventListener('scroll', handleScroll); 

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <section id="start">
      <div className='container'>
        <Navbar />
            <h1 className='salutetext'>U N I V E R S E</h1>
      </div>
    </section>
  );
};

export default Salute;
