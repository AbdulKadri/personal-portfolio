import Skills from './Skills';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/Carousel.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';
import 'swiper/scss/mousewheel'
import 'swiper/scss/free-mode';
import SwiperCore, { Navigation, Autoplay, Mousewheel, A11y } from 'swiper';

SwiperCore.use([Navigation, Autoplay, Mousewheel, A11y]);

const Carousel = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay, Mousewheel, A11y]}
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
            navigation
            mousewheel={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            freeMode={true}
            loop={true}
            className='swiper-container'
        >
            {Skills.map((skill, index) => (
                <SwiperSlide key={index}>
                    <div className="skill">
                        <img src={skill.logo} alt={`${skill.name} logo`} />
                        <p>{skill.name}</p>
                        <p className="ordered-number">{index + 1}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default Carousel