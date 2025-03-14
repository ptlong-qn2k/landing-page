const Footer = () => {
    return (
        <div>
            <div className="px-[112px] py-[85px] flex flex-row justify-between items-center">
                <div>
                    <div className="grid grid-cols-[110px_400px] gap-y-8 mb-8 items-center">
                        <p className="text-xl text-[#2947A9] font-medium uppercase">
                            Address:
                        </p>
                        <p className="justify-center">
                            6391 Elgin St. Celina, Delaware 10299
                        </p>
                        <p className="text-xl text-[#2947A9] font-medium uppercase">
                            Phone:
                        </p>
                        <p className="">+84 1102 2703</p>
                        <p className="text-xl text-[#2947A9] font-medium uppercase">
                            Email:
                        </p>
                        <p className="">hello@thebox.com</p>
                    </div>
                    <div className="flex flex-row items-center">
                        <img
                            className="w-[38px] h-[47.5px] mr-[6px]"
                            src="./images/header/img1.png"
                            alt=""
                        />
                        <h3 className="font-bold text-[30px] leading-[35.19px] text-[#2947A9] italic">
                            TheBox
                        </h3>
                    </div>
                </div>
                <div>
                    <h3 className="uppercase text-xl text-[#2947A9] font-medium mb-5">
                        Newsletter:
                    </h3>
                    <div className="flex flex-row items-center gap-2 mb-[42px]">
                        <input
                            type="text"
                            placeholder="Your email here"
                            className="w-[280px] h-[41px] rounded-[4px] pl-2 border border-[#E0E3EB]"
                        />
                        <button className="w-[136px] h-[41px] bg-[#F9995D]">
                            Subscribe
                        </button>
                    </div>
                    <h3 className="uppercase text-xl text-[#2947A9] font-medium mb-5">
                        Social:
                    </h3>
                    <div className="flex flex-row w-full h-10 gap-5">
                        <img src="./images/footer/icon1.png" alt="" />
                        <img src="./images/footer/icon2.png" alt="" />
                        <img src="./images/footer/icon3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="h-[70px] bg-[#2947A9] flex items-center pl-[112px] text-white text-base">
                <p>TheBox Company © 2022. All Rights Reserved</p>
            </div>
        </div>
    );
};
export default Footer;
