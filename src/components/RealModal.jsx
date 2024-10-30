const RealModal = ({ onClose, what }) => {
    const weddingWishList = [
        { item: "55 inch LG Smart TV", price: "670,000" },
        { item: "OX 20 inches Industrial Fan", price: "98,000" },
        { item: "Hisense 10kg Twin Tube Washing Machine", price: "240,000" },
        { item: "5 Set Non Stick Pan", price: "86,000" },
        { item: "16 Cup Buchymix Blender and Food Processor", price: "50,000" },
    ];
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full h-[60vh]">
          <h2 className="text-xl font-semibold">{what == 1? "Wish List":"Cash Gift"}</h2>
          {
            what == 1?
            <div className="mt-4 px-5 flex flex-col gap-3 max-h-[80%] overflow-y-auto">
                {
                    weddingWishList.map((e, i)=>(
                        <div key={i} className="w-full h-[80px] bg-[#FEF6F7] flex justify-between p-2 items-center rounded-md">
                            <div className="flex flex-col gap-2 max-w-[50%]">
                                <p className="truncate overflow-hidden whitespace-nowrap" title={e.item}>{e.item}</p>
                                <p className="font-bold">N {e.price}</p>
                            </div>
                            <div className="w-[120px] h-[40px] text-white bg-[#451A14] flex justify-center items-center rounded-md">
                                Send Money
                            </div>
                        </div>
                    ))
                }
            </div>:
            <div className="mt-4 flex flex-col items-center">
                <form className="w-[90%] flex flex-col gap-2 items-center">
                    <div className="w-full flex flex-col gap-2">
                        <label>Full Name</label>
                        <input className="border-[1px] border-gray-300 h-[35px]"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Email</label>
                        <input className="border-[1px] border-gray-300 h-[35px]"/>
                    </div>
                    <div className="w-full flex flex-col gap-2">
                        <label>Amount</label>
                        <input className="border-[1px] border-gray-300 h-[35px]"/>
                    </div>
                    <div className="w-[100%] flex gap-2 justify-center mt-[10px]">
                        <div className="border-[1px] border-grey-300 p-1 rounded-[4px]">N 5,000</div>
                        <div className="border-[1px] border-grey-300 p-1 rounded-[4px]">N 10,000</div>
                        <div className="border-[1px] border-grey-300 p-1 rounded-[4px]">N 20,000</div>
                        <div className="border-[1px] border-grey-300 p-1 rounded-[4px]">N 50,000</div>
                    </div>
                    <button className="w-[60%] h-[40px] text-white bg-[#451A14] flex justify-center items-center rounded-md mt-5">
                        Pay with Paystack
                    </button>
                </form>
            </div>
          }
          <button 
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded" 
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default RealModal;