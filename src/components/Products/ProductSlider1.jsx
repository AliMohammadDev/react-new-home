import { useState } from 'react';
import Slider from 'react-slick';
import product1 from '../../assets/images/product1.png';
import product2 from '../../assets/images/product2.png';
import product3 from '../../assets/images/product3.png';
import product4 from '../../assets/images/product4.png';
import product5 from '../../assets/images/product5.png';
import ChevronRightIcon from '../../assets/icons/ChevronRightIcon.jsx';
import ChevronLeftIcon from '../../assets/icons/ChevronLeftIcon.jsx';
function ProductSlider1() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const CustomArrow = ({ onClick, direction }) => (
    <button
      onClick={onClick}
      className="absolute -top-10 md:-top-14 bg-[#D9D9D9] cursor-pointer text-black rounded-full w-8 h-8 md:w-12 md:h-12 transition flex items-center justify-center md:mt-1"
      style={{
        right: direction === 'next' ? 0 : 50,
        zIndex: 10,
      }}
    >
      {direction === 'next' ? (
        <ChevronRightIcon color="black" />
      ) : (
        <ChevronLeftIcon color="black" />
      )}
    </button>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const progress = ((currentSlide + 1) / 5) * 100;

  return (
    <>
      {/* Essential to prep */}
      <section className="bg-[#EDEAE2] text-[#025043] md:px-20 md:py-10">
        <span className="font-[Qanduchia] text-black text-[40px] md:text-[64px] block mb-6 pl-4 md:pl-0">
          Essential to prep
          <p className="text-black text-[14px] font-[Expo-book] md:text-[15px]">
            Quality homeware essentials designed to make everyday living easier,
            more organized, and more stylish.
          </p>
        </span>
        {/* Slider */}
        <div className="grid grid-cols-1 gap-10 relative">
          <Slider {...settings}>
            {[product1, product2, product3, product4, product5].map(
              (img, i) => (
                <div key={i} className="md:px-1">
                  <div
                    key={i}
                    className="bg-[#EDEAE2] rounded-xl overflow-hidden border border-[#D8D5CD]"
                  >
                    <img
                      src={img}
                      alt="stainless steel cookware"
                      className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-[#025043] text-[16px] font-medium mb-2">
                        stainless steel cookware
                      </h3>

                      <div className="border-b border-[#025043]/50 mb-3"></div>

                      <p className="text-[#025043] text-[18px] font-semibold mb-4">
                        30,000 s. p
                      </p>

                      <div className="flex items-center justify-between md:flex-col lg:flex-row text-[#025043]">
                        <div className="flex items-center gap-1 text-sm">
                          <span>☆ ☆ ☆ ☆ ☆</span>
                          <button className="text-sm hover:underline">
                            view more
                          </button>
                        </div>

                        <button className="bg-[#025043] text-white text-sm px-4 py-1.5 rounded-full hover:bg-[#01382f] transition">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </Slider>

          <div className="mt-6 px-2 md:px-0">
            <div className="w-full h-1 md:h-1.5 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-gray-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSlider1;
