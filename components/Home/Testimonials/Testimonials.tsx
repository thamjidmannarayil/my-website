import React, { useRef, useEffect, useState } from "react";
import ArrowIcon from "../../Icons/ArrowIcon";

type Testimonial = {
  avatar: string;
  name: string;
  message: string;
  role?: string;
  profileUrl?: string;
};

const testimonials: Testimonial[] = [
  {
    avatar: "/avatars/lakshminair.jpg",
    name: "Lakshmi Nair",
    role: "Project Manager, Neology, Inc.",
    message:
      "I worked with Thamjid at Flycatch Infotech. He consistently delivered high-quality work with efficiency and precision. He has strong technical skills, clear communication, and a collaborative mindset. A reliable and talented developer I would highly recommend.",
    profileUrl: "https://www.linkedin.com/in/lakshmi-soman-nair/",
  },
  {
    avatar: "/avatars/manuramachandran.jpg",
    name: "Dr. MAanu Mundapatt Ramachandran",
    role: "Academicians @ Ministry of Education - UAE",
    message:
      "Thamjid is exceptionally talented in programming, analytical reasoning, and problem-solving. He has demonstrated a natural ability to grasp complex concepts quickly and apply them effectively to both academic and practical projects.",
    profileUrl: "https://www.linkedin.com/in/dr-manu-mundappat-ramachandran-3686591a6/",
  },
  {
    avatar: "/avatars/arunnramesh.jpg",
    name: "Arunn Ramesh",
    role: "Project Manager, Flycatch Infotech",
    message:
      "I had the pleasure of working with Thamjid, an excellent Python developer with strong problem-solving skills and a keen eye for writing clean, efficient code. I highly recommend him for any challenging development role.",
    profileUrl: "https://www.linkedin.com/in/arunn-ramesh-cspo%C2%AE-637b12151/",
  },
  {
    avatar: "/avatars/rnandhukishor.jpg",
    name: "R Nandhu Kishor",
    role: "Senior Software Developer, Tensaw Technologies",
    message:
      "Thamjid is an awesome team player. Had worked with him in a project. He is great at understanding requirements and getting done whats required, good at handling international clients. I would highly recommend him for future lead roles.",
    profileUrl: "https://www.linkedin.com/in/nanthukishor/",
  },
  {
    avatar: "/avatars/rafeequent.jpg",
    name: "Rafeeque NT",
    role: "Senior Software Developer, Micro Objects",
    message:
      "I really enjoyed working with Thamjid. he’s a reliable and talented backend developer who made my work so much easier by building smooth and efficient APIs. He’s always supportive, easy to work with, and brings a problem-solving attitude.",
    profileUrl: "https://www.linkedin.com/in/rafeequent/",
  },
  {
    avatar: "/avatars/najeem.jpg",
    name: "Muhammed Najeem K",
    role: "Senior Graphic Designer, Aqary International Group",
    message:
      "I had the pleasure of working with Thamjid Mannarayil, and I can confidently say he is one of the most efficient and quick-thinking professionals I’ve collaborated with. Thamjid has a remarkable ability to identify problems early and find effective solutions quickly.",
    profileUrl: "https://www.linkedin.com/in/muhammed-najeem-k-367414298/",
  },
];

const testimonialLength = 220;
const LOOP_FACTOR = 2; // Duplicate testimonials for seamless looping

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Infinite auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let frame: number;
    let speed = 0.5; // px per frame

    function animate() {
      if (!isDragging) {
        container.scrollLeft += speed;
        // Loop back to start for infinite effect
        if (
          container.scrollLeft >=
          container.scrollWidth / LOOP_FACTOR
        ) {
          container.scrollLeft = 0;
        }
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isDragging]);

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
      // Loop manually if needed
      const maxScroll = containerRef.current.scrollWidth / LOOP_FACTOR;
      if (containerRef.current.scrollLeft < 0) {
        containerRef.current.scrollLeft = maxScroll + containerRef.current.scrollLeft;
      } else if (containerRef.current.scrollLeft > maxScroll) {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - maxScroll;
      }
    }
  };

  const onMouseUp = () => setIsDragging(false);
  const onMouseLeave = () => setIsDragging(false);

  // Touch events for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = x - startX;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
      const maxScroll = containerRef.current.scrollWidth / LOOP_FACTOR;
      if (containerRef.current.scrollLeft < 0) {
        containerRef.current.scrollLeft = maxScroll + containerRef.current.scrollLeft;
      } else if (containerRef.current.scrollLeft > maxScroll) {
        containerRef.current.scrollLeft = containerRef.current.scrollLeft - maxScroll;
      }
    }
  };
  const onTouchEnd = () => setIsDragging(false);

  // Duplicate testimonials for seamless looping
  const displayTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="TestimonialsSection"
      className="my-16 overflow-x-hidden py-12 bg-gradient-to-b from-AAprimary via-AASurface/30 to-AAprimary"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0 mb-16">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="font-bold tracking-wider text-AATextPrimary text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Testimonials
          </span>
        </div>
        <div className="bg-AATextMuted h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div
        ref={containerRef}
        className="flex gap-8 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing select-none py-8"
        style={{ scrollBehavior: "auto" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {displayTestimonials.map((t, i) => (
          <div
            key={i}
            className="flex-1 min-w-[300px] sm:min-w-[340px] max-w-md flex flex-col items-center relative pt-14"
            style={{ userSelect: "none" }}
          >
            {/* Avatar positioned on top center of card */}
            <a
              href={t.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-28 h-28 rounded-full border-[6px] border-AAprimary shadow-2xl hover:scale-110 transition-transform duration-300 object-cover"
                draggable={false}
              />
            </a>

            {/* Card with gradient background - reduced height */}
            <div className="bg-gradient-to-br from-AASurface to-AAtertiary rounded-3xl p-6 pt-16 pb-6 w-full flex flex-col items-center shadow-[0_8px_30px_rgba(0,0,0,0.08)] group hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 relative">

              {/* Message with quotes */}
              <div className="relative w-full px-4">
                {/* Opening Quote - top left of text (mirrored) */}
                <span className="absolute -top-8 left-4 text-5xl font-serif text-cyan-400 opacity-40 leading-none scale-x-[-1]">,,</span>

                <p className="text-sm text-center text-AATextMuted leading-relaxed px-6">
                  {t.message.length > testimonialLength ? t.message.substring(0, testimonialLength) + "..." : t.message}
                </p>

                {/* Closing Quote - bottom right of text */}
                <span className="absolute -bottom-1 right-4 text-5xl font-serif text-cyan-400 opacity-40 leading-none">,,</span>
              </div>

              {/* Name and Role */}
              <div className="text-center mt-6">
                <a
                  href={t.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold font-sans text-AATextPrimary text-base hover:text-AAsecondary transition-colors"
                >
                  {t.name}
                </a>
                {t.role && (
                  <span className="block text-xs text-AATextMuted mt-1">{t.role}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}