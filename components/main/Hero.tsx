import React from "react";
import Herocontent from "../sub/Herocontent";

const Hero = () => {
    return(
        <div className="relative flex flex-col h-full w-full">
            <video
            autoPlay
            muted  
            loop
            className="rotate-180 absolute top-[-420px] w-full h-full left-0 z-[1] ] bg-center"
            >
                <source src="\blackhole.mp4" type="video/mp4" />
            </video>
            <Herocontent />
        </div>



    )
}

export default Hero;