import Button from "./Button.tsx";

export default function CallToAction() {
    return (
        <div className={"w-full bg-[#DDDDDD]"}>
            <div className={"flex justify-center items-center gap-8 py-20 mx-auto flex-col container"}>
                <h3 className={"text-5xl font-['vidaloka'] text-center mb-5"}>Subscribe For Best <br/> Beauty
                    Tips
                </h3>

                <form action={"#"} onSubmit={
                    (event) => {
                        event.preventDefault();
                        alert("You have subscribed successfully!");
                    }
                } className={"flex justify-center items-center flex-col w-full gap-5"}>
                    <div className={"w-8/12"}>
                        <div className={"rounded-full p-2 bg-white w-full flex justify-center items-center gap-5"}>
                            <input placeholder={"Enter your email address"} type={"email"} name={"email"}
                                   className={"text-2xl text-black ml-4 outline-0 grow"}/>
                            <Button type={"submit"} text={"Subscribe"} className={"ml-auto"}/>
                        </div>
                    </div>

                    <div className={"flex justify-center items-baseline gap-3"}>
                        <input required type="checkbox"
                               className="w-4 h-4 rounded focus:ring-slate-600 ring-offset-gray-800 focus:ring-2 border-8 bg-gray-700 border-gray-600"
                               name={"agreement"}/>
                        <label htmlFor={"email"} className={"text-xl font-['Vidaloka']"}>
                            I agree that my submitted data is being collected and stored.
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}