import logo from "../../public/logo_white.png";
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
import {LuLinkedin} from "react-icons/lu";
import {FaThreads} from "react-icons/fa6";
import {BsSearch} from "react-icons/bs";

const footerLinks = [
    "Home",
    "Categories",
    "Makeup",
    "Blog",
    "About",
    "Contact Us",
];


const socialIcons = [
    <FiFacebook className=""/>,
    <FiInstagram className=""/>,
    <FaThreads className=""/>,
    <FiTwitter className=""/>,
    <LuLinkedin className=""/>,
];

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className={"container mx-auto"}>
                <div
                    className={"grid grid-cols-3 auto-rows-max justify-items-stretch py-10 gap-10 text-2xl font-['Vidaloka'] "}>
                    <div className={"flex flex-col justify-between items-center"}>
                        <h5 className={"w-full mb-10"}>Categories</h5>
                        <div className={"w-full grow flex justify-between items-center flex-col"}>
                            {
                                Array(5).fill(0).map((_, i) => (
                                    <div key={i} className={"w-full flex flex-col justify-between items-center"}>
                                        <div
                                            className={"flex justify-between items-center border-b-2 pb-3 border-white w-full"}>
                                            <a href={"#"} className={"font-medium"}>
                                                {footerLinks[i]}
                                            </a>
                                            <p className={"text-xs"}>({Math.floor(Math.random() * 10) + 1})</p>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className={"w-full p-2 bg-slate-500 flex justify-between items-center"}>
                                <input type="text" placeholder={"Search"} className={"bg-transparent outline-0"} aria-label={"search"} />
                                <BsSearch className="inline-block ml-auto" />
                            </div>
                        </div>
                    </div>
                    <div className={"flex flex-col justify-between items-center"}>
                        <h5 className={"w-full mb-10"}>Popular Posts</h5>
                        <ul className={"w-full grow flex justify-between items-center flex-col"}>
                            {
                                Array(3).fill(0).map((_, i) => (
                                    <li key={i} className={"w-full flex justify-start items-start gap-3"}>
                                        <img src={"https://picsum.photos/100/100"} className={"object-cover"}
                                             alt={"post-pic"}/>
                                        <div className={"self-stretch"}>
                                            <h3 className={"text-xl mb-5"}>Lorem ipsum dolor sit amet.</h3>
                                            <p className={"font-serif text-slate-300 text-sm"}>{Math.floor(Math.random() * 14) + 2} days
                                                ago</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={"flex flex-col justify-between items-center"}>
                        <h5 className={"w-full mb-10"}>Gallery</h5>
                        <div className={"w-full grow flex justify-between items-center flex-col"}>
                            <div className={"grid grid-rows-2 grid-cols-3 justify-items-stretch gap-5 w-full mb-5"}>
                                {
                                    Array(6).fill(0).map((_, i) => (
                                        <img key={i} src={"https://picsum.photos/100/100"} className={"object-cover"}
                                             alt={"post-pic"}/>
                                    ))
                                }
                            </div>
                            <h6 className={"w-full mb-3"}>Tags</h6>
                            <div className={"grid grid-rows-2 grid-cols-4 gap-5 w-full"}>
                                {
                                    Array(8).fill(0).map((_, i) => (
                                        <a key={i} href={"#"}
                                           className={"px-3 py-2 text-center bg-slate-500 rounded-full font-['Montserrat'] text-sm"}>Skin</a>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <hr className={"border-t-4 border-slate-700"}/>
                <div className="flex items-center justify-between gap-5 py-10">
                    <img src={logo} alt="logo" className="mr-10"/>
                    <div className={"flex items-center justify-between gap-5"}>
                        {footerLinks.map((item, i) => (
                            <a href={"#"} className="font-medium" key={i}>
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
                <hr className={"border-t-2 border-slate-700"}/>
                <div className="flex items-center justify-between gap-5 py-10">
                    <div className={"flex items-center justify-between gap-5"}>
                        {socialIcons.map((icon, i) => (
                            <a
                                className="p-2 border rounded-full border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
                                href="#"
                                key={i}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <p>&copy; 2023 Samin Yaser</p>
                </div>
            </div>
        </footer>
    )
}