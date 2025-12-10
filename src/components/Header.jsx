import FacebookIcon from '../assets/icons/FacebookIcon';
import InstagramIcon from '../assets/icons/InstagramIcon';
import WhatsappIcon from '../assets/icons/WhatsappIcon';
import TelegramIcon from '../assets/icons/TelegramIcon';
import HomeImage from '../assets/images/Home.png';

const Header = () => {
  return (
    <div
      className="w-full min-h-screen xl:min-h-[1500px] bg-red bg-cover bg-no-repeat relative bg-center md:bg-right"
      style={{ backgroundImage: `url(${HomeImage})` }}
    >
      {/* Header Text */}
      <div
        className="
        z-10
        absolute
        top-15 sm:top-50 md:top-30 lg:top-20 xl:top-90
        sm:left-12 md:-left-5 lg:-left-6 xl:left-10
        p-4 md:p-12 text-white font-[Expo-arabic]"
      >
        <div
          className="flex items-center gap-2 
        md:gap-3
        mb-6 sm:mb-10 md:mb-2"
        >
          {/* Divider */}
          <div className="w-6 md:w-6 h-px bg-[#E2995E]"></div>
          <span className="text-[#E2995E] text-sm md:text-2xl lg:text-3xl">
            Cook, serve, impress
          </span>
        </div>

        <div
          className="
          ml-10 sm:ml-9 md:ml-14
         -translate-y-6 md:translate-y-6"
        >
          <p
            className="text-sm sm:text-2xl md:text-2xl lg:text-4xl font-[Qanduchia]
           mb-1 sm:mb-1 md:mb-4"
          >
            Smart kitchen essentials,
          </p>
          <p
            className="font-[Qanduchia] text-sm sm:text-2xl md:text-2xl lg:text-4xl
           ml-12 sm:ml-1 md:ml-1"
          >
            For everyday chefs
          </p>
        </div>

        {/* Social media */}
        <div className="md:mt-10">
          <div className="flex flex-col items-start gap-6">
            <FacebookIcon />
            <InstagramIcon />
            <WhatsappIcon />
            <TelegramIcon />
          </div>
        </div>

        <div
          className="
          mt-10 sm:mt-20 md:-mt-25 lg:-mt-20 xl:mt-30
          ml-6 sm:ml-50 md:ml-40 lg:ml-60 xl:ml-70"
        >
          <p>
            <span className="font-[Asteroid] text-5xl md:text-7xl">
              Upgrade
            </span>
            <span className="font-[Expo-light]"> your Kitchen,</span>
          </p>
          <p className="font-[Expo-light] ml-12 md:ml-24">
            elevate your cooking
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
