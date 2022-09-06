
const Photo = ({pict}) => {
    return (
        <div className={`rounded-2xl relative group cursor-pointer ${pict.size === 'big' && 'row-span-2' }`}>
                <button className="opacity-0 group-hover:opacity-100 absolute top-3 right-4 border border-[#EB5757] px-2 py-1 rounded-2xl text-[#EB5757] text-[10px] z-10">delete</button>
                <img className=" w-full h-full block rounded-2xl" src={pict.url} alt="big pict" />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.57)] rounded-2xl flex group-hover:opacity-100 items-end p-4 opacity-0 transition-all">
                    <h4 className="font-serrat text-white font-bold text-lg">Logan Lerman</h4>
                </div>
        </div>
    )
}

export default Photo;