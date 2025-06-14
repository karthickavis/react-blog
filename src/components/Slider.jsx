// src/pages/Slider.jsx


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: 'Master React Quickly',
      image: 'https://media.istockphoto.com/id/1442917033/photo/code-editor-photography.webp?a=1&b=1&s=612x612&w=0&k=20&c=SpPIdJMnlO7j2K5QgdjI8w3vbm7NOoZ97j5NOoiD7Ak=',
    },
    {
      id: 2,
      title: 'Learn JavaScript Smartly',
      image: 'https://media.istockphoto.com/id/2169149999/photo/software-source-code-programming-code-programming-code-on-computer-screen-developer-working.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZAWsyyISmvpvY30D8JJsrzgvXcvXIcKyot0y-fuskxQ=',
    },
    {
      id: 3,
      title: 'Write Clean Code',
      image: 'https://images.unsplash.com/photo-1564931768730-7e4d8e240044?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="w-full px-4 md:px-12 lg:px-20 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-56 sm:h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
                <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-semibold font-serif px-2">
                  {slide.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

