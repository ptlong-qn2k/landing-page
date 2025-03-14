const Header = () => {
    return (
        <div className="flex flex-row w-full px-[112px] justify-between items-center">
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
            <div className="flex flex-row w-[577px] justify-between items-center">
                <h3>Home</h3>
                <h3>About Us</h3>
                <h3>Projects</h3>
                <h3>Services</h3>
                <h3 className="text-[#F9995D]">Contact Us</h3>
            </div>
        </div>
    );
};
export default Header;
