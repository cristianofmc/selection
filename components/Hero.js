const Hero = ({ children }) => (
    <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-52">
      <h1
        className="text-5xl sm:text-7xl text-center tracking-tight text-hero-black dark:text-white  dark:text-opacity-[.87] font-ubuntu antialiased"
      >
        {children}
      </h1>
    </div>
  );
  
  export default Hero;
  