import {motion} from "framer-motion"

const FloatingButton = () => {
  return (
    <motion.div 
      className="fixed left-[21%] md:left-[40%] lg:left-[42%] transform -translate-x-1/2 bottom-4 w-[200px] h-[70px] rounded-xl md:rounded-3xl bg-white shadow-lg flex justify-around items-center p-3 md:w-[300px] md:h-[100px]"
      initial={{ y: 100, opacity: 0 }} // Start position and opacity
      animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }} // Animate to final position
    >
      
      <span className="w-[40%] h-[80%] flex flex-col gap-1 md:gap-3 items-center">
      <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730143486/Wishlist_Icon_jkbw3q.png" alt="wishlist" className="w-full h-[60%] object-contain"/>
      Wishlist
      </span> 
      <span className="w-[40%] h-[80%] flex flex-col gap-1 md:gap-3  items-center">
        <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730143486/Cash_Gift_Icon_nm5ngm.png" alt="" className="w-full h-[60%] object-contain"/>
        Cash Gift
      </span> 
    </motion.div>
  )
}

export default FloatingButton