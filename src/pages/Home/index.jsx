import HomeLogo from '../../assets/images/home-logo-white.svg';
import DrinkWare from '../../assets/images/drinkWare.png';
import TableWare from '../../assets/images/tableWare.png';
import CookWare from '../../assets/images/cookWare.png';
import ProductCard from '../../components/ProductCard ';
import Bakeware from '../../assets/images/bakeWare.png';
import ForHome from '../../assets/images/forHome.png';
import KitchenWare from '../../assets/images/kitchenWare.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductSlider1 from '../../components/Products/ProductSlider1';
import ProductSlider2 from '../../components/Products/ProductSlider2';
import MostProduct from '../../components/Products/MostProduct';
import AllProductSlider3 from '../../components/Products/AllProductSlider3';
import Final from '../../assets/images/final.png';
import Final2 from '../../assets/images/final2.png';
import Header from '../../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      {/* HomePage */}
      <div className="bg-[#025043] py-10">
        <h1 className="text-center text-white font-[Qanduchia] text-4xl sm:text-2xl md:text-3xl lg:text-8xl">
          Welcome{' '}
        </h1>
        {/* divider */}
        <div className="w-24 h-0.5 bg-white mx-auto mt-4 mb-6"></div>

        <p className="font-[Expo-arabic] text-2xl p-4 text-white text-center">
          Almanzel-Alhadith where elegance meets functionality. We bring you a
          curated selection of premium kitchen tools, home essentials, and
          tasteful gift collections.
        </p>
        <div className="flex justify-center mt-20">
          <img
            src={HomeLogo}
            alt="Logo"
            className="w-full max-w-[880px] md:w-[570px] h-auto object-contain"
          />
        </div>

        {/* All Products */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-20 p-2 sm:p-2 md:p-4">
          {/* products */}
          <div className="text-center text-white transition-shadow duration-300">
            <span className="text-[100px] sm:text-[100px] md:text-[100px] lg:text-[140px]  font-[Qanduchia]">
              Our
            </span>
            <p className="transform -translate-y-12 translate-x-5 md:-translate-y-14 md:translate-x-9 font-[Asteroid]  text-[50px] md:text-[60px] lg:text-[100px]">
              Product
            </p>
          </div>
          <ProductCard
            title="Drinkware"
            image={DrinkWare}
            description="Discover the perfect balance of performance, durability, and design with our premium cookware collection. Each piece is crafted to deliver even heat distribution, reliable cooking results, and long-lasting quality. From everyday meals to gourmet creations, our cookware helps you cook with confidence and style. Designed for comfort, efficiency, and versatility, it’s the ideal companion for every modern kitchen."
          />

          <ProductCard
            title="TableWare"
            image={TableWare}
            description="Elevate every dining experience with our beautifully crafted
            tableware collection. Designed for both everyday meals and special
            occasions, each piece combines timeless style with lasting quality.
            Made from premium materials and refined finishes, our tableware
            enhances any table setting — adding elegance, balance, and charm to
            your dining moments."
          />

          <ProductCard
            title="CookWare"
            image={CookWare}
            description="Discover the art of cooking with our premium cookware collection.
            Thoughtfully crafted for durability, performance, and style, each
            piece ensures even heat distribution and precise results every time.
            Designed for modern kitchens, our cookware combines high-quality
            materials with ergonomic design — helping you create meals that look
            as good as they taste."
          />

          <ProductCard
            title="Bakeware"
            image={Bakeware}
            description=" Discover the art of cooking with our premium cookware collection.
            Thoughtfully crafted for durability, performance, and style, each
            piece ensures even heat distribution and precise results every time.
            Designed for modern kitchens, our cookware combines high-quality
            materials with ergonomic design — helping you create meals that look
            as good as they taste."
          />
          <ProductCard
            title="Bakeware"
            image={Bakeware}
            description=" Durable and versatile bakeware designed for even baking and easy
            release. Perfect for cakes, cookies, muffins, and more."
          />
          <ProductCard
            title="Kitchenware"
            image={KitchenWare}
            description="Essential kitchenware for cooking, prep, and serving—durable,
            practical, and designed for everyday use."
          />
          <ProductCard
            title="For Home"
            image={ForHome}
            description="  Discover the art of cooking with our premium cookware collection.
            Thoughtfully crafted for durability, performance, and style, each
            piece ensures even heat distribution and precise results every time.
            Designed for modern kitchens, our cookware combines high-quality
            materials with ergonomic design — helping you create meals that look
            as good as they taste."
          />
        </div>
        {/* About Us Section */}
        <section className="bg-[#EDEAE2] text-[#025043] mt-25 py-24  md:px-20">
          <span className="font-[Expo-book] text-black text-[40px] md:text-[64px] block mb-6 pl-4 md:pl-0">
            Intro to the company
          </span>

          <p className="text-black text-[14px] md:text-[24px] mb-4 pl-4 md:pl-0">
            Almanzel-Alhadith is a company specializes in providing high-quality
            kitchen tools and hospitality equipment for homes, restaurants, and
            hotels.
            <span className="text-black text-[14px] md:text-[24px] block mb-4">
              Our core product range includes:
            </span>
          </p>

          <ul className="list-none font-[Expo-light] text-black space-y-2 pl-10 md:pl-20">
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              Elegant glassware, cups, mugs, jars, and all tabletop essentials.
            </li>
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              Decorative homeware, gifts, crystal items, and ornaments. Premium
            </li>
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              White porcelain and embellished or gold-accented porcelain for
              fine dining.
            </li>
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              Durable stainless steel and high-grade metal kitchen tools.
            </li>
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              Specialized equipment for meat, dairy, and cold storage. Quality
            </li>
            <li className="relative before:content-[''] before:inline-block before:w-1 before:h-1 before:bg-black before:mr-3 before:align-middle">
              Plastic kitchenware, including chopping boards and fridge
              containers.
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <span className="font-[Asteroid] text-5xl md:text-7xl text-black relative -bottom-5 md:bottom-0 sm:-top-4 -left-2 md:-left-12">
              We
            </span>
            <p className="font-[Expo-book] text-sm md:text-lg text-black max-w-2xl relative md:-left-15 top-8">
              combine functionality with refined aesthetics to meet the needs of
              both domestic and professional kitchens.
            </p>
          </div>
        </section>
        {/* Essential to prep 2 */}
        <ProductSlider1 />

        {/* Essential to prep 2 */}
        <ProductSlider2 />

        {/* Most Popular */}
        <MostProduct />

        {/* All Product */}
        <AllProductSlider3 />

        <div className="flex flex-col md:flex-row items-center justify-around py-5 px-1 md:px-0">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Final2}
              alt="final"
              className="w-full  h-auto object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center-safe ">
            <img
              src={Final}
              alt="final"
              className="w-full max-w-[526px] max-w-4k"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
