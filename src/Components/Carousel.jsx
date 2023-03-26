import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Skills from "./Skills";
import Autoplay from "embla-carousel-autoplay";
import '../styles/Carousel.scss'

const autoplayOptions = {
  delay: 2000,
  jump: true,
}

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, align: 0 }, [Autoplay(autoplayOptions, (emblaRoot) => emblaRoot.parentElement)])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <button className="embla-Prev" onClick={scrollPrev}>&#8249;</button>

      <div className="embla-wrapper" ref={emblaRef}>
        <Skills />
      </div>

      <button className="embla-Next" onClick={scrollNext}>&#8250;</button>
    </div>
  )
}

export default EmblaCarousel