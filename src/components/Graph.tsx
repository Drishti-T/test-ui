
import { YAxisLabels } from "./YAxisLabels";
import { Bar as CustomBar } from "./Bar";



const barHeights = [120, 180, 80, 100, 140, 170, 140];

export const Graph = () => {
    return (
        <div className="flex items-center"
            style={{
                width: "100%",
                borderRadius: 16,
                padding: 0,
                // backgroundColor:"pink",
            }}
        >
            <YAxisLabels />
            <div className="mx-6  ">
            <div className="flex items-end gap-20 w-full justify-center mt-6 ">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                    <div key={day} className="flex flex-col items-center">
                        <CustomBar
                            height={barHeights[idx]}
                            colors={["#aa50ee", "#762bb0", "#9240d1"]}
                        />
                        <span className="text-xs text-[#aaa] mt-4 ">{day}</span>
                    </div>
                ))}
            </div>
            </div>
           
        </div>
    );
};

