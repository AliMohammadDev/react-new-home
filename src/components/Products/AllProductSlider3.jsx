import Slider from 'react-slick';



function AllProductSlider3() {
  const products = [
    "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765362578/allProduct1_s7pwoi.png",
    "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765362586/allProduct2_py4sz0.png",
    "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765362584/allProduct3_mk43su.png",
    "https://res.cloudinary.com/dzvrf9xe3/image/upload/v1765362590/allProduct4_qfbh6r.png",
  ];
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="font-[Qanduchia] cursor-pointer text-[40px] sm:text-[50px] md:text-[60px] 
                 absolute top-1/2 left-[75%] transform -translate-x-1/2 -translate-y-1/2 
                 bg-black text-white text-sm font-bold w-24 sm:w-32 md:w-42 
                 h-24 sm:h-32 md:h-42 flex items-center justify-center rounded-full shadow-lg"
      >
        Drag
      </div>
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 2.5,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* Essential to prep */}
      <section className="bg-[#EDEAE2] text-[#025043] py-10">
        <div className="grid grid-cols-1 gap-10 relative">
          <Slider {...settings}>
            {products.map((img, i) => (
              <div key={i} className="px-1">
                <div
                  key={i}
                  className="bg-[#EDEAE2] overflow-hidden border border-[#D8D5CD]"
                >
                  <img
                    src={img}
                    alt="stainless steel cookware"
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-150 object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
          {/* <div className="font-[Qanduchia] cursor-pointer text-[40px] sm:text-[50px] md:text-[60px] absolute top-1/2 left-[75%] transform -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm font-bold w-24 sm:w-32 md:w-42 h-24 sm:h-32 md:h-42 flex items-center justify-center rounded-full shadow-lg">
            Drag
          </div> */}
        </div>
      </section>
    </>
  );
}

export default AllProductSlider3;
