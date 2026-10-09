import React from "react";
import Img from "../../smallComp/image/Img";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function Gallery() {
  const images = [
    {
      src: "/gallery/image1.jpeg",
      alt: "Gallery Image 1",
      rotation: 6,
    },
    {
      src: "/gallery/image2.jpg",
      alt: "Gallery Image 2",
      rotation: -3,
    },
    {
      src: "/gallery/image3.jpeg",
      alt: "Gallery Image 3",
      rotation: 2,
    },
    {
      src: "/gallery/image4.jpeg",
      alt: "Gallery Image 4",
      rotation: -6,
    },
  ];

  return (
    <div
      id="GallerySection"
      className="content-viewport relative flex flex-col overflow-x-clip py-10 sm:py-12 lg:py-14"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-Header font-bold tracking-wider text-AATextPrimary text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Gallery
          </span>
        </div>
        <div className="bg-gray-300 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Gallery Grid */}
      <div
        data-aos="fade-up"
        className="mt-8 grid w-full grid-cols-2 gap-5 px-5 sm:mt-10 sm:gap-7 sm:px-7 md:grid-cols-4 md:gap-8 md:px-10 lg:px-12"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="liquid-glass relative group cursor-pointer p-1.5 transition-all duration-500 hover:!rotate-0"
            style={{ transform: `rotate(${image.rotation}deg)` }}
          >
            {/* Image Container */}
            <div className="w-full h-full relative overflow-hidden rounded-lg aspect-square">
              <Img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />

              {/* Overlay - visible by default, hidden on hover */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>

              {/* Border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-AAsecondary transition-all duration-300 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
