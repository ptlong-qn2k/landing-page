const Component5 = () => {
    return (
        <div className="w-full h-[800px] flex flex-row justify-between items-center relative py-[100px] pr-[140px]">
            <div className="flex">
                <img src="./images/component5/img1.png" className="absolute left-[179px] top-[172px] z-[1] " />
                <img src="./images/component5/img2.png" className="absolute left-[723px] top-[103px] z-[2]" />
                <img src="./images/component5/img3.png" className="absolute left-[662px] top-[349px] z-[2]" />
                <img src="./images/component5/img4.png" className="absolute left-[549px] top-[582px] z-[1]" />
                <div className="bg-white px-[30px] pb-[30px] absolute top-[221px] left-[212px] shadow-xl">
                    <h4 className="text-7xl leading-[84.46px] w-10 font-bold">123</h4>
                    <div className="flex flex-row pl-4">
                        <div className="w-[7px] h-[28px] bg-[#F9995D] mr-3"></div>
                        <p className="text-2xl text-[#667299]">Projects Completed</p>
                    </div>
                </div>
                <div className="bg-white px-[30px] pb-[30px] absolute top-[122px] left-[512px] shadow-xl z-[1]">
                    <h4 className="text-7xl leading-[84.46px] w-10 font-bold">84</h4>
                    <div className="flex flex-row pl-4">
                        <div className="w-[7px] h-[28px] bg-[#F9995D] mr-3"></div>
                        <p className="text-2xl text-[#667299]">Happy Clients</p>
                    </div>
                </div>
                <div className="bg-white px-[30px] pb-[30px] absolute top-[364px] left-[458px] shadow-xl z-[1]">
                    <h4 className="text-7xl leading-[84.46px] w-10 font-bold">37</h4>
                    <div className="flex flex-row pl-4">
                        <div className="w-[7px] h-[28px] bg-[#F9995D] mr-3"></div>
                        <p className="text-2xl text-[#667299]">Awards Win</p>
                    </div>
                </div>
                <div className="bg-white px-[30px] pb-[30px] absolute top-[469px] left-[261px] shadow-xl">
                    <h4 className="text-7xl leading-[84.46px] w-10 font-bold">30</h4>
                    <div className="flex flex-row pl-4">
                        <div className="w-[7px] h-[28px] bg-[#F9995D] mr-3"></div>
                        <p className="text-2xl text-[#667299]">Years in Business</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-10 w-[350px]">
                <h3 className="text-6xl leading-[70.38px] font-bold text-[#2947A9]">30 Years Experience</h3>
                <p className="text-xl leading-[23.46px] text-[#525B7A]">
                    Our company has been the leading provided construction services to clients throughout the USA since
                    1988.
                </p>
                <button className="w-[176px] h-[53px bg-[#2947A9] text-lg">Contact Us</button>
            </div>
        </div>
    );
};

export default Component5;
