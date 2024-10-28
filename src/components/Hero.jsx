import {useState, useEffect} from "react"

const Hero = () => {
    const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "November 16, 2024 09:59:59"; // Set your target date here

  useEffect(() => {
    const getTime = () => {
      const time = Date.parse(deadline) - Date.now();

      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };

    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-60px)] bg-[url('https://res.cloudinary.com/coldcolin/image/upload/v1730033656/background_r2rhdz.png')] bg-cover bg-center bg-no-repeat flex flex-col md:flex-row items-center justify-center px-4 ">

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-4 pt-10 md:pt-0 transition-opacity duration-500 opacity-0 animate-fade-in">
                <div className="w-full h-auto  flex justify-center">
                <img 
                src="https://res.cloudinary.com/coldcolin/image/upload/v1730033687/Love_k7oho3.png" 
                alt="Wedding tag" 
                className="w-full max-w-[800px] h-auto md:h-full object-contain px-4 md:px-0" 
            />
                </div>
                
                <div className="w-full flex justify-center">
                <div className="w-full flex flex-row justify-center gap-4">
                        
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center border-[1px] border-[#451A14]">
                                <span className="text-2xl font-bold text-gray-800">{days}</span>
                            </div>
                            <span className="text-sm mt-2 text-[#451A14]">DAYS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center border-[1px] border-[#451A14]">
                                <span className="text-2xl font-bold text-gray-800">{hours}</span>
                            </div>
                            <span className="text-sm mt-2 text-[#451A14]">HOURS</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center border-[1px] border-[#451A14]">
                                <span className="text-2xl font-bold text-gray-800">{minutes}</span>
                            </div>
                            <span className="text-sm mt-2 text-[#451A14]">MINUTES</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/80 flex items-center justify-center border-[1px] border-[#451A14]">
                                <span className="text-2xl font-bold text-gray-800">{seconds}</span>
                            </div>
                            <span className="text-sm mt-2 text-[#451A14]">SECONDS</span>
                        </div>
                    </div>
                </div>
        </div>
    
    <div className="w-full md:w-1/2 h-[50vh] md:h-[calc(100vh-60px)] flex items-center justify-center py-6 md:py-0 transition-opacity duration-500 opacity-0 animate-fade-in">
        <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730033533/our_photo_ux8bqa.png" alt="couple's image" className="w-full h-full object-contain" />
    </div>
    </div>
  )


}

export default Hero