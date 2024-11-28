"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
interface testimonial {
  text: string;
  img: string;
  name: string;
}
const SliderUtil = ({ data }: { data: Array<testimonial> }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data?.map((testimonial, index) => (
        <div key={index} className="lg:pr-3 px-2 pt-4 pb-16">
          <div className="relative px-1 lg:px-4 py-5 rounded-lg my-4 border-2 border-primcolor">
            <ImQuotesLeft
              className="absolute text-primcolor left-2 lg:left-4 top-1 lg:top-3"
              size={20}
            />

            <p className="text-center text-sm pb-7 pt-1 lg:pt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae ad alias vero blanditiis aut minima, magni quisquam
              provident excepturi sequi!
            </p>
            <ImQuotesRight
              className="absolute right-5 text-primcolor bottom-8 lg:bottom-12"
              size={20}
            />

            <div className="absolute font-semibold left-32 top-32 mb-10 flex flex-col items-center ">
              <Image
                className="inline-block h-16 object-cover w-16 rounded-full ring-2 ring-slate-100"
                width={100}
                height={100}
                src={testimonial.img}
                alt="customer image"
              />
              <p>{testimonial.name}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderUtil;
