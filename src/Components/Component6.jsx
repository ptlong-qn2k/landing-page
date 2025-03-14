import { API3 } from '../API/API3';
const Component6 = () => {
    return (
        <div>
            <div className="h-[300px] bg-[url('/images/component6/background.png')] flex flex-row justify-between items-center text-white pl-[112px] pr-40">
                <div>
                    <h3 className="text-4xl font-bold mb-[30px]">Free consultation with exceptional quality</h3>
                    <p className="text-2xl">Just one call away: +84 1102 2703</p>
                </div>
                <button className="text-lg border border-white p-4 font-semibold">Get your consultation</button>
            </div>
            <div className="pt-[88px] px-[112px] pb-[138px]">
                <h3 className="text-4xl leading-[42.23px] mb-10 font-bold ">Projects</h3>
                <div className="flex flex-row justify-between">
                    <div className="">
                        <div className="w-[52px] flex flex-row justify-between">
                            <div className="w-1 h-7 bg-[#2947A9] mr-4 "></div>
                            <h3 className="text-2xl font-bold leading-[28.15px] mb-5">all</h3>
                        </div>
                        <div className="pl-5 text-[#C2C7D6] text-2xl leading-[28.15px] font-medium flex flex-col gap-y-5">
                            <p>Commercial</p>
                            <p>Residential</p>
                            <p>Other</p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                        <div className="grid grid-cols-2 gap-8 mb-8">
                            {API3.map((data) => (
                                <div key={data.id} className="w-[384px]">
                                    <img src={data.url} alt="" className="w-full" />
                                    <div className="bg-[#2947A9] text-white p-3 pb-4">
                                        <h3 className="text-xl font-bold mb-3 leading-[23.46px]">{data.title}</h3>
                                        <p className="text-lg">{data.address}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between gap-[210px]">
                            <button className="w-full flex flex-row justify-center items-center bg-black gap-[10px] text-white rounded-none">
                                <img className="w-[26px] h-[17px]" src="./images/component1/left.png" alt="" />
                                <p className=""> Back</p>
                            </button>
                            <button className="w-full flex flex-row justify-center items-center bg-black gap-[10px] text-white rounded-none">
                                <p className=""> Next</p>
                                <img className="w-[26px] h-[17px]" src="./images/component1/right.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Component6;
