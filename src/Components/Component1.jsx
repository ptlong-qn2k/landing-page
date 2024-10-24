const Component1 = () => {
    return (
        <div className="relative w-[1440px] h-[646px] bg-[url('/images/component1/img2.png')]">
            <h3 className="text-[72px] leading-[84.46px] w-[556px] h-[168px] absolute left-[112px] top-[239px] ">
                Building things is our mission.
            </h3>
            <div className="w-[416px] h-[190px] bg-[#3559C7] z-10 absolute bottom-0 right-0 flex flex-col justify-between text-white ">
                <div className="flex flex-col items-center px-[52px] pt-5">
                    <p className="text-xl font-bold mb-5 ">Feature Projects</p>
                    <p className="text-2xl">The National University of Architecture</p>
                </div>
                <div className="flex flex-row justify-between items-center gap-[1px] gap-white bg-white h-10">
                    <div className="w-[50%] bg-black flex flex-row items-center justify-center ">
                        <img className="w-[26px] h-[17px]" src="./images/component1/left.png" alt="" />
                        <p>Back</p>
                    </div>
                    <div className="w-[50%] bg-black flex flex-row items-center justify-center ">
                        <img className="w-[26px] h-[17px]" src="./images/component1/right.png" alt="" />
                        <p>Next</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Component1;
