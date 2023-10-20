import logo from "../../public/logo.png";
import Button from "./Button.tsx";
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi";
import {LuLinkedin} from "react-icons/lu";
import {FaThreads} from "react-icons/fa6";
import {BsSearch} from "react-icons/bs";

const navBarItems = [
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

export default function NavBar() {
    return (
        <nav className="py-7">
            <div className="flex items-center justify-between">
                <p className="text-slate-700">Welcome there!</p>
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center justify-center gap-5">
                        {socialIcons.map((icon, i) => (
                            <a
                                className="p-2 border rounded-full border-slate-900 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
                                href="#"
                                key={i}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                    <div className="w-[2px] self-stretch bg-slate-300"></div>
                    <Button text={"Subscribe"}/>
                </div>
            </div>
            <div className="h-[2px] bg-slate-300 my-7"></div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-5">
                    <img crossOrigin={"anonymous"} src={logo} alt="logo" className="mr-10"/>
                    {navBarItems.map((item, i) => (
                        <span className="font-medium" key={i}>
                            {item}
                        </span>
                    ))}
                </div>
                <a href="#" className="flex items-center justify-center gap-2">
                    <span className="font-medium">Search</span>
                    <BsSearch className="inline-block"/>
                </a>
            </div>
        </nav>
    );
}
