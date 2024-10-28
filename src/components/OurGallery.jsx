

const OurGallery = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center py-[5vh] px-[10px] md:py-[10vh] md:px-[100px] gap-16 h-auto">
      <div className="flex flex-col gap-14 items-center">
      <h2 className="text-[40px] text-[#451A14] md:text-[50px] text-center">Our Gallery</h2>
      <h3 className="text-[20px] md:text-[25px] font-semibold">A FEW PHOTOS OF US!</h3>
      </div>
      <div className="w-full h-auto min-h-[30vh] flex flex-col gap-[30px] rounded-xl md:rounded-3xl">
        <div className="w-full flex gap-0 md:gap-[20px] flex-wrap md:flex-nowrap">
            <div className="w-full min-h-[50vh] md:w-[50%]">
                <div className="w-full h-[45vh] md:h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034156/Large_Main_Image_eay17f.png" alt="" className="w-full h-full " />
                </div>
            </div>
            <div className="w-full min-h-[35vh] md:w-[50%] flex flex-col gap-[20px] md:min-h-[50vh]">
                <div className="w-full h-1/2 flex gap-[20px]">
                    <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                        <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034306/Photo_sm_skftrd.png" alt="" className="w-full h-full " />
                    </div>
                    <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                        <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034376/Photo_sm_1_ysde1k.png" alt="" className="w-full h-full " />
                    </div>
                </div>

                <div className="w-full h-1/2 flex gap-[20px]">
                <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034588/Photo_sm_2_g4wivw.png" alt="" className="w-full h-full " />
                </div>
                <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034588/Photo_sm_3_ru7wlh.png" alt="" className="w-full h-full " />
                </div>
                </div>
            </div>
        </div>
        <div className="w-full min-h-[20vh] flex gap-[20px] flex-wrap md:flex-nowrap ">
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034571/Photo_sm_4_neaxtt.png" alt="" className="w-full h-full " />
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034583/Photo_sm_5_h4mlmn.png" alt="" className="w-full h-full " />
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034565/Photo_sm_6_exvglp.png" alt="" className="w-full h-full " />
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034559/Photo_sm_7_ysufsv.png" alt="" className="w-full h-full " />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default OurGallery