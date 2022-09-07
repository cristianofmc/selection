const Hero = (props) => {
    return(
        <div>
            <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-52">
                <h1 className="lg:text-7xl sm:text-7xl text-4xl text-center tracking-tight text-hero-black font-ubuntu  antialiased">{props.children}</h1>
            </div>
        </div>
    );
};

export default Hero;