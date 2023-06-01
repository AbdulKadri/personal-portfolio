import tools from './tools';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Carousel.scss'
import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/mousewheel'
import 'swiper/scss/free-mode';
import SwiperCore, { Autoplay, Mousewheel, A11y } from 'swiper';

SwiperCore.use([Autoplay, Mousewheel, A11y]);

const Carousel = () => {
    return (
        <Swiper
            modules={[Autoplay, Mousewheel, A11y]}
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
                640: {
                    slidesPerView: 5,
                },
                768: {
                    slidesPerView: 6,
                },
            }}
            speed={2000}
            grabCursor={true}
            mousewheel={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
            freeMode={true}
            loop={true}
            className='swiper-container'
        >
            {tools.map((tool, index) => (
                <SwiperSlide key={index}>
                    <div className="tool">
                        <img src={tool.logo} alt={`${tool.name} logo`} />
                        <p>{tool.name}</p>
                        <p className="ordered-number">{index + 1}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel