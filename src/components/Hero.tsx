import BasicCard from "./BasicCard";

export default function Hero() {
    return (
        <section className="h-[80vh] bg-[url('https://picsum.photos/1440/560')] bg-no-repeat bg-cover bg-center flex justify-end items-center relative">
            <button className="absolute left-0 ml-10 text-4xl text-white -translate-x-1/2 top-1/2">
                &lt;
            </button>
            <div className="mr-52">
                <BasicCard isDark showLink />
            </div>
            <button className="absolute right-0 mr-10 text-4xl text-white -translate-x-1/2 top-1/2">
                &gt;
            </button>
        </section>
    );
}
