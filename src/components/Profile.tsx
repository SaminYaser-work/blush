import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
import {LuLinkedin} from "react-icons/lu";
import {FaThreads} from "react-icons/fa6";

const socialIcons = [
    <FiFacebook className="text-2xl"/>,
    <FiInstagram className="text-2xl"/>,
    <FaThreads className="text-2xl"/>,
    <FiTwitter className="text-2xl"/>,
    <LuLinkedin className="text-2xl"/>,
];

export default function Profile() {
    return (
        <div className={"w-full bg-[#DDDDDD]"}>
            <div className={"flex justify-center items-center gap-8 py-20 mx-auto container"}>
                <div>
                    <img crossOrigin={"anonymous"} src={'https://picsum.photos/560/560'} alt={"profile-pic"}
                         className={"object-cover rounded-full"}/>
                </div>
                <div className={"flex justify-center items-start flex-col gap-3 self-stretch"}>
                    <h3 className={"text-5xl font-['vidaloka']"}>Morbi Portitor</h3>
                    <p className={"text-lg"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet consequatur deleniti
                        deserunt dicta ea eius eos error exercitationem hic iure iusto maiores, minima molestiae
                        necessitatibus nesciunt nobis non nulla obcaecati perspiciatis porro quisquam reiciendis, sequi
                        sit sunt suscipit ut velit voluptatem voluptatibus voluptatum. Debitis ducimus eligendi ipsam
                        totam velit?</p>
                    <div className={"flex justify-between items-center w-full"}>
                        <div className={"flex justify-center items-center gap-8 flex-row"}>
                            {
                                socialIcons.map((icon, i) => (
                                    <a
                                        href="#"
                                        key={i}
                                    >
                                        {icon}
                                    </a>
                                ))
                            }

                        </div>
                        <p>
                            (85 posts)
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}