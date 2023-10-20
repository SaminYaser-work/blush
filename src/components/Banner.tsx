export default function Banner({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-[radial-gradient(transparent, black)] bg-[url('https://picsum.photos/1024/300')] bg-cover bg-no-repeat h-44 shadow-inner px-32 flex justify-between items-center">
            <div>{children}</div>
            <a
                href="#"
                className="px-8 py-3 bg-slate-50 text-slate-900 rounded-full text-3xl"
            >
                Download Now
            </a>
        </div>
    );
}
