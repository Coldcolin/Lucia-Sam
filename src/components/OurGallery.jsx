import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
// import { Resize } from "@cloudinary/url-gen/actions";

const cld = new Cloudinary({
    cloud: {
        cloudName: "coldcolin"
    }
})

const OurGallery = () => {
  return (
    <div className="w-full h-[150vh] md:h-auto flex flex-col items-center py-[5vh] px-[10px] md:py-[10vh] md:px-[100px] gap-16">
      <div className="flex flex-col gap-14 items-center">
      <h2 className="text-[40px] text-[#451A14] md:text-[50px] text-center">Our Gallery</h2>
      <h3 className="text-[20px] md:text-[25px] font-semibold">A FEW PHOTOS OF US!</h3>
      </div>
      <div className="w-full h-[200vh] md:h-[130vh] min-h-[30vh] flex flex-col gap-[30px] rounded-xl md:rounded-3xl">
        <div className="w-full h-[35vh] md:h-[100vh] flex gap-0 md:gap-[20px] flex-wrap md:flex-nowrap mb-[270px] md:mb-[0px]">
            <div className="w-full h-[50%] md:w-[50%] md:h-full mb-[120px] md:mb-[0px]">
                <div className="w-full md:h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <AdvancedImage cldImg={cld.image("Large_Main_Image_eay17f").format("auto").quality("auto")} className="w-full h-[30vh] md:h-full"/>
                </div>
            </div>
            <div className="w-full h-full md:w-[50%] flex flex-col gap-[20px] md:min-h-[50vh]">
                <div className="w-full h-[50%] flex gap-[20px]">
                    <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                        <AdvancedImage cldImg={cld.image("2J4A9576_copy2_zr97bg").format("auto").quality("auto")} className="w-full h-[94%] rounded-xl md:rounded-3xl "/>
                    </div>
                    <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                        <AdvancedImage cldImg={cld.image("2J4A9513_copy_gatgw9").format("auto").quality("auto")} className="w-full h-[94%] rounded-xl md:rounded-3xl "/>
                    </div>
                </div>
                <div className="w-full h-[50%] flex gap-[20px]">
                <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <AdvancedImage cldImg={cld.image("2J4A9625_copy_bsn0jq").format("auto").quality("auto")} className="w-full h-[94%] rounded-xl md:rounded-3xl "/>
                </div>
                <div className="w-1/2 h-full rounded-xl md:rounded-3xl overflow-hidden">
                    <AdvancedImage cldImg={cld.image("2J4A9534_copy_oj8kgi").format("auto").quality("auto")} className="w-full h-[94%] rounded-xl md:rounded-3xl "/>
                </div>
                </div>
            </div>
        </div>
        <div className="w-full h-[15vh] md:h-[45vh] flex gap-[20px] flex-wrap md:flex-nowrap justify-center">
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <AdvancedImage cldImg={cld.image("DSC_8903_x2tzwx").format("auto").quality("auto")} className="w-full h-full"/>
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <AdvancedImage cldImg={cld.image("2J4A9497_copy_hllfma").format("auto").quality("auto")} className="w-full h-full"/>
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <AdvancedImage cldImg={cld.image("DSC_8898_o7j3cg").format("auto").quality("auto")} className="w-full h-full"/>
            </div>
            <div className="w-[46%] md:w-1/4 h-full rounded-xl md:rounded-3xl overflow-hidden">
                <AdvancedImage cldImg={cld.image("2J4A9601_copy_ud35oi").format("auto").quality("auto")} className="w-full h-full"/>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default OurGallery