export default function Heading({ heading }: { heading: string }) {
    return (
        <div className="flex items-center justify-center gap-5 mb-8">
            <div className="h-[3px] bg-black w-full"></div>
            <h2 className="text-4xl whitespace-nowrap font-['Vidaloka']">
                {heading}
            </h2>
            <div className="h-[3px] bg-black w-full"></div>
        </div>
    );
}
