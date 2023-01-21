export function StatisticsCard({title, value}) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className=" text-[43px] text-[#280559] font-medium">{value}</p>
        <p className=" text-[16px] text-[#92929D] font-medium">{title}</p>
      </div>
      
    </div>
  );
}

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
