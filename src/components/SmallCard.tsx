const data = ["Skin", "Hair", "Body", "Makeup", "Fragrance"];

export default function SmallCard() {
    return (
        <div className="flex flex-row items-center justify-between flex-wrap gap-5">
            {data.map((item, i) => (
                <div
                    key={i}
                    className=""
                >
                    <div className={"relative"}>
                        <img src="https://picsum.photos/300/250" alt={"card-pic"} className={"object-cover"}/>
                        <button
                            type="button"
                            className="px-5 py-3 text-white text-lg border rounded-full border-slate-400 backdrop-blur-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        >
                            {item}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
