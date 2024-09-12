import React from 'react';
import '../css/homepage.css';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import slide1 from '../image/slide1.png';
import slide2 from '../image/slide2.png';
import slide3 from '../image/slide3.png';
import slide4 from '../image/slide4.png';

const Hompage = () => {
    const [emblaRef] = useEmblaCarousel({ loop:false }, [Autoplay()])

  return (
    <>
        <section className='herosection'>
            <aside className='category'>    
                <p>Electronics</p>
                <p>Fashion</p>
                <p>Home Appliances</p>
                <p>Accesories</p>
                <p>Fitness</p>
                <p>Personal care</p>
                <p>Office supplies</p>
                <p>Furniture</p>
                <p>Tools</p>
                <p>Sports & Outdoors</p>
                <p>Music</p>
                <p>Travel</p>
                <p>Kitchen Appliances</p>
                <p>Outdoors</p>
                <p>Toys</p>
                <p>Home security</p>
            </aside>

            <div className='carousel'>
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <img src={slide1}/>
                        </div>
                        <div className="embla__slide">
                            <img src={slide2}/>
                        </div>
                        <div className="embla__slide">
                            <img src={slide3}/>
                        </div>
                        <div className="embla__slide">
                            <img src={slide4}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Hompage