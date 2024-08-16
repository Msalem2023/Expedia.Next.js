import { useApp } from "../reducer";
import Cars from "./cars";
import Flights from "./Flights";
import Packages from "./Packages";
import Stays from "./Stays";
import ThingsToDo from "./ThingsToDo";

const Trip=()=>{
    const trip=["Stays","Flights","Cars","Packages","ThingsToDo"]
    const { state, dispatch } = useApp();
    console.log(state)
    return(
        <div>
            <div className="flex justify-center gap-3 mt-10">
                
                {trip.map((e)=>(
                    <ul key={e} className="border-b-[2px]">
                        <li onClick={()=>dispatch({type:e as "Stays" | "Flights" | "Cars" | "Packages" | "ThingsToDo"})} className={`${state[e] &&"border-b-[3px] border-sky-800"} text-lg font-semibold focus:text-sky-800 cursor-pointer`}>{e}</li>
                    </ul>
                ))}

            </div>
            {state.Stays&&<Stays />}
            {state.Flights&&<Flights/>}
            {state.Cars&&<Cars/>}
            {state.Packages&&<Packages/>}
            {state.ThingsToDo&&<ThingsToDo/>}
        </div>
    )
}

export default Trip