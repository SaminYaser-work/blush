import BasicCard from "./BasicCard";

interface PostProps {
    width?: string;
    height?: string;
    title?: string;
    showContent?: boolean;
    cardWidth?: string;
    cardHeight?: string;
    picUrl?: string;
    horizontal?: boolean;
    reverse?: boolean;
}

export default function Post({
                                 width = "w-[25rem]",
                                 height = "h-full",
                                 showContent = false,
                                 title = "Lorem ipsum, dolor sit amet consectetur",
                                 cardWidth = "w-[20rem]",
                                 cardHeight = "h-[12rem]",
                                 picUrl = "https://picsum.photos/1024/720",
                                 horizontal = false,
                                 reverse = false,
                             }: PostProps) {
    return (
        <div
            className={`flex justify-center items-center ${horizontal ? (reverse ? 'flex-row-reverse' : 'flex-row') : 'flex-col'}`}>
            <div className={`-z-10 relative ${width} ${height}`}>
                <img
                    crossOrigin={"anonymous"}
                    src={picUrl}
                    className="object-contain w-full"
                    alt="post-img"
                />
            </div>
            <div className={`${horizontal ? (reverse ? '-mr-20' : '-ml-20') : '-mt-20'}`}>
                <BasicCard
                    title={title}
                    isCenter
                    showContent={showContent}
                    width={cardWidth}
                    height={cardHeight}
                />
            </div>
        </div>
    );
}
