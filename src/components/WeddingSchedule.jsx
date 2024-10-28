import { FiCalendar } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const WeddingDays=({title, address, date, time})=>{
  return(
    <div className="flex flex-col items-center gap-5 w-[33%] min-w-[200px]">
      <div className="w-[120px] h-[70px]">
        <img src="https://res.cloudinary.com/coldcolin/image/upload/v1730034023/2_wedding_compound_path_xpzpn7.png" alt="two loves" className="w-full h-full object-contain"/>
      </div>
      <p className="font-bold text-[20px]">{title}</p>
      <p className="text-[#222222] font-light text-center">{address}</p>
      <div className="w-[80%]">
      <p className="font-semibold text-[20px] text-center">{date}</p>
      <p className="font-semibold text-[20px] text-center">{time}</p>
      </div>
      <div className="bg-[#451A14] text-white flex w-[200px] h-[50px] rounded gap-4 items-center justify-center text-[18px] font-semibold px-2">
        <FiCalendar />
        Add to Calendar
      </div>
      <div className="flex w-[130px] items-center justify-between">
      <p className="underline">Map to venue </p>
      <FaExternalLinkAlt />
      </div>
    </div>
  )
}

const WeddingSchedule = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center py-[5vh] px-[10px] md:py-[10vh] md:px-[100px] gap-16 h-auto">
      <div className="flex flex-col gap-14 items-center">
      <h2 className="text-[40px] text-[#451A14] md:text-[50px] text-center">Wedding Schedule</h2>
      <h3 className="text-[20px] md:text-[25px] font-semibold">WHEN AND WHERE</h3>
      </div>
      <div className="flex gap-[60px] justify-center md:justify-around flex-wrap md:flex-nowrap">
        <WeddingDays title="COURT WEDDING" address="Alagbon Close, Ikoyi, opposite Nigeria Correctional Service" date="TUESDAY, NOV 12, 2004" time="10:00 AM"/>
        <WeddingDays title="CEREMONY" address="Our Lady of The Rosary Catholic Church
St. Charles Parish, Olodi, Lagos" date="SATURDAY, NOV 16, 2024" time="10:00AM"/>
        <WeddingDays title="RECEPTION" address="Abayomi Awodi Ora Hall By Mechanic Bus Stop,
Orege, Ajegunle Apapa, Lagos" date="SATURDAY, NOV 16, 2024" time="12:00 PM"/>
      </div>
    </div>
  )
}

export default WeddingSchedule