const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
    const next = () => {
        if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    }

    const prev = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    }


    return (<div className=" w-full flex justify-center items-center py-5 space-x-4 [&>button]:bg-[#79B624] [&>button]:text-lg [&>button]:font-semibold [&>button]:px-3 [&>button]:py-1 [&>button]:rounded-xl [&>button]:shadow [&>button]:shadow-black ">
        <button className=" hover:bg-[#9be336] hover:text-[#05292E]" onClick={prev}>Prev</button>
        <h2><span>{currentPage}</span> - <span>{nPages|| 0}</span></h2>
        <button className=" hover:bg-[#9be336] hover:text-[#05292E]" onClick={next}>Next</button>
    </div>);
}

export default Pagination;