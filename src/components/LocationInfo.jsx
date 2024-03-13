const LocationInfo = ({ location }) => {
    
    return (<article className=" max-w-[50vw]  min-w-[300px] flex flex-col justify-center items-center shadow  shadow-black  rounded-xl  mb-5 mt-5 mx-auto p-3 bg-[#072226]">
        <h2 className=" text-[#79B624] text-lg font-bold">{location?.name}</h2>
        <ul className=" flex justify-between w-full [&>li]:flex [&>li]:flex-col [&>li]:justify-center [&>li]:items-center ">
            <li><span className=" font-semibold">Type:</span><span className=" text-gray-400 text-xs md:text-base">{location?.type}</span></li>
            <li><span className=" font-semibold">Dimension:</span><span className=" text-gray-400 text-xs  md:text-base">{location?.dimension}</span></li>
            <li><span className=" font-semibold">Population:</span><span className=" text-gray-400 text-xs  md:text-base">{location?.residents.length}</span></li>
        </ul>
    </article>);
}

export default LocationInfo;