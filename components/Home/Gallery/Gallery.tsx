import React from "react";
import Img from "../../smallComp/image/Img";
import ArrowIcon from "../../Icons/ArrowIcon";

export default function Gallery() {
  const images = [
    {
      src: "/gallery/image1.jpg",
      alt: "Gallery Image 1",
      rotation: 6,
    },
    {
      src: "/gallery/image2.jpg",
      alt: "Gallery Image 2",
      rotation: -3,
    },
    {
      src: "/gallery/image3.jpg",
      alt: "Gallery Image 3",
      rotation: 2,
    },
    {
      src: "/gallery/image4.jpg",
      alt: "Gallery Image 4",
      rotation: -6,
    },
  ];

  return (
    <div
      id="GallerySection"
      className="flex flex-col bg-AAprimary dotted-bg w-full overflow-x-hidden 2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-16 sm:py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-bold tracking-wider text-gray-900 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Gallery
          </span>
        </div>
        <div className="bg-gray-300 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      {/* Gallery Grid */}
      <div
        data-aos="fade-up"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 w-full max-w-7xl mt-10 mx-auto"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer transition-all duration-500 hover:!rotate-0"
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
