interface BasicCardProps {
    tag?: string;
    title?: string;
    showContent?: boolean;
    showLink?: boolean;
    isDark?: boolean;
    isCenter?: boolean;
    width?: string;
    height?: string;
}

const BasicCard: React.FC<BasicCardProps> = ({
    tag = "Skin",
    title = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, odit?",
    showContent = false,
    showLink = false,
    isDark = false,
    isCenter = false,
    width = "w-[25rem]",
    height = "h-[20rem]",
}) => {
    return (
        <div
            className={`px-5 py-3 border flex justify-center flex-col gap-3 ${
                isCenter ? "items-center" : "items-start"
            } ${width} ${height} ${
                isDark
                    ? "border-white text-slate-200 bg-slate-900"
                    : "border-slate-900 text-slate-800 bg-white"
            }`}
        >
            <p className="text-xs underline uppercase underline-offset-4">
                {tag}
            </p>
            <div className={"max-w-md"}>
                <h2
                    className={`text-3xl font-['Vidaloka'] ${
                        isCenter && "text-center"
                    } ${showContent ? "mb-3" : ""}`}
                >
                    {title}
                </h2>
                {showContent && (
                    <p className={`${isCenter && "text-center"}`}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Mollitia culpa voluptas dicta dolorum accusantium omnis amet
                    </p>
                )}
            </div>
            <div>
                <p className={`text-xs ${showLink && 'mb-8'}`}>By Sarfraz Jasim - 29 July, 2023</p>

                {showLink && (
                    <a
                        href="#"
                        className="text-xs underline underline-offset-8"
                    >
                        Continue Reading &rarr;
                    </a>
                )}
            </div>
        </div>
    );
};

export default BasicCard;
