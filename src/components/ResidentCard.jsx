import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ResidentCard = ({ url}) => {
    const [character, getCharacter] = useFetch(url)
    const [status, setStatus] = useState()
    useEffect(() => {
        getCharacter()
    }, [])





    console.log(character)
    return (<article className=" flex w-[200px] flex-col justify-center items-center mx-auto shadow shadow-black rounded-xl overflow-hidden bg-[#072226] relative hover:shadow-md hover:shadow-[#79B624] ">
        <header>
            <img src={character?.
                image
            } alt={character?.name
            } />

            <div className="bg-[#072226] absolute top-10 px-2 rounded-r-xl flex justify-center items-center space-x-2">
                <div className={`rounded-full ${character?.status==="Dead"?" bg-red-600":""} ${character?.status==="Alive"?" bg-green-600":""} ${character?.status==="unknown"?" bg-gray-500":""} w-4 h-4`}></div>
                <span>{character?.status}</span>

            </div>

        </header>
        <h2 className=" text-center mt-2 font-bold text-[13px]">{character?.name}</h2>

        <ul className=" px-4 [&>li]:flex [&>li]:flex-col mt-1 mb-3">
            <hr className=" border-[0.5px] w-full border-gray-500" />
            <li><span className=" text-gray-400 text-[12px] mx-4">Species</span><span className="text-[12px]">{character?.species}</span></li>
            <li><span className=" text-gray-400 text-[12px] mx-4">Origin
            </span><span className="text-[12px]">{character?.origin.name
            }</span></li>
            <li>
                <span className=" text-gray-400 text-[12px] mx-4">Episodes where appear</span><span className="text-[12px]">{character?.episode.length
                }</span>
            </li>
        </ul>
    </article >);
}

export default ResidentCard;