import useEmblaCarousel from "embla-carousel-react";
import "../styles/styles.css";
import image1 from "../images/slider-images/image1.png";
import image2 from "../images/slider-images/image2.jpeg";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <Image
            src={image1}
            width={500}
            height={500}
            // fill={true}
            // style={{ objectFit: "contain" }}
            // sizes="(max-width: 200px), (max-width: 100px)"
            alt="Picture of the author"
          />
        </div>
        <div className="embla__slide">
          <Image
            src={image2}
            width={900}
            height={500}
            // fill={true}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
