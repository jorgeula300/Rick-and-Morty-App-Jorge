import { useRef } from "react";


const FormSearch = ({ setLocationSelect }) => {
    const inputRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLocationSelect(inputRef.current.value.trim());

    }
    return (<form className=" w-full flex justify-center items-center" onSubmit={handleSubmit}>
        <input className=" rounded-l-xl py-1 text-black pl-3" type="text" ref={inputRef} />
        <button className=" rounded-r-xl bg-[#71A721] hover:bg-[#79B624] font-bold px-3 py-1">Search</button>
    </form>);
}

export default FormSearch;