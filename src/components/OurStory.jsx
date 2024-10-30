import { motion } from 'framer-motion';

const OurStory = () => {

    
    
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center pt-[5vh] px-[10px] md:pt-[15vh] md:px-[100px] h-auto mb-[120vh] md:mb-0">
        <div className="flex flex-col gap-6 items-center">
            <h2 className="text-[40px] text-[#451A14] md:text-[50px]">Our Story</h2>
            <h3 className="text-[20px] md:text-[25px]">HOW IT HAPPENED</h3>
            <div className="w-full h-[100vh] flex justify-center md:flex-nowrap flex-wrap">
                <div className="w-full h-full flex flex-col items-center gap-0 md:gap-7 md:w-[35%]">
                    
                    <motion.img 
                      src="https://res.cloudinary.com/coldcolin/image/upload/v1730033806/Bride_photo_vonnxq.png"
                      loading="lazy" fetchPriority="high" decoding="async" 
                      alt="bride" 
                      className="w-[80%] h-[70%] object-contain min-w-[280px] md:w-full"
                      initial={{ opacity: 0, translateY: 20 }} 
                      whileInView={{ opacity: 1, translateY: 0 }} 
                      transition={{ duration: 1.0, ease: "easeOut" }}
                      viewport={{ once: false }} // This allows the animation to trigger every time it comes into view
                    />
                    <div className="w-[90%] flex flex-col gap-4 min-w-[280px] md:w-[80%]">
                        <h3 className="text-[20px] font-semibold">THE BRIDE</h3>
                        <p className="leading-[30px] text-[16px] text-[#555555] md:text-[20px] md:leading-[30px]">It all began with a casual friend request on Facebook. His face seemed familiar, but it took a moment to realize he was my best friend's brother from secondary school. What started as simple conversations quickly turned into a delightful routine, a daily ritual of checking in on each other that felt more like an addiction than a habit.
                        ...</p>
                        <p className="text-[#6A4843] font-semibold">VIEW MORE</p>
                    </div>
                </div>
                <div className="flex items-center justify-center min-w-[150px] w-[300px] md:w-[30%]">
                    <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730033934/Love_ic_bbdybd.png" alt="love" className="w-1/3 md:w-1/3 p-3 md:p-0" />
                </div>
                <div className="w-full h-full flex flex-col items-center gap-0 md:gap-7 md:w-[35%]">
                    <motion.img 
                      src="https://res.cloudinary.com/coldcolin/image/upload/v1730033842/Groom_photo_qgagqd.png" 
                      loading="lazy" fetchPriority="high" decoding="async"
                      alt="groom" 
                      className="w-[80%] h-[70%] object-contain min-w-[280px] md:w-full"
                      initial={{ opacity: 0, translateY: 20 }} 
                      whileInView={{ opacity: 1, translateY: 0 }} 
                      transition={{ duration: 1.0, ease: "easeOut" }}
                      viewport={{ once: false }} // This allows the animation to trigger every time it comes into view
                    />
                    <div className="w-[90%] flex flex-col gap-4 min-w-[280px] md:w-[80%]">
                        <h3 className="text-[20px] font-semibold">THE GROOM</h3>
                        <p className="leading-[30px] text-[16px] text-[#555555] md:text-[20px] md:leading-[30px]">On Sunday, February 16, 2020, is etched in my memory forever. That's the day I first laid eyes on her at the Catholic Youth Organisation of Nigeria's Love Feast. Her stunning red gown, captivating smile, and gentle gaze left me spellbound. I couldn't help but steal glances, hoping to catch her attention. Though we didn't exchange a word that day, her presence lingered in my heart.
                        ...</p>
                        <p className="text-[#6A4843] font-semibold">VIEW MORE</p>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default OurStory