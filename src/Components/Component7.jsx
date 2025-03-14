const Component7 = () => {
    return (
        <div className="bg-[#F6F8F7] w-full flex flex-col items-center py-[60px]">
            <h3 className="font-bold text-4xl leading-[42.23px] text-[#292E3D] mb-5">
                What can us do for you?
            </h3>
            <p className="w-[539px] text-xl leading-[23.46px] text-[#292E3D] mb-[38px] text-center">
                We are ready to work on a project of any complexity, whether
                it’s commercial or residential.
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 justify-center mb-7">
                <input
                    type="text"
                    placeholder="Your Name*"
                    className="w-[280px] h-[41px] rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2 "
                />
                <input
                    type="text"
                    placeholder="Email*"
                    className="w-[280px] h-[41px] rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2 "
                />
                <input
                    type="text"
                    placeholder="Reason for Contacting*"
                    className="w-[280px] h-[41px] rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2"
                />
                <input
                    type="text"
                    placeholder="Phone"
                    className="w-[280px] h-[41px] rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2"
                />
                {/* <input
          type="text"
          placeholder="Message"
          className="placeholder:relative placeholder:top-[-50px] h-[135px] col-span-2 rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2"
        /> */}
                <textarea
                    name="Message"
                    id="Message"
                    placeholder="Nhập văn bản ở đây..."
                    className=" h-[135px] col-span-2 rounded-[4px] border border-[#E0E3EB] py-[10px] pl-2"
                ></textarea>
                <p className="before:content-['*'] before:text-red-500 before:mr-1 text-[#a3aac2] col-span-2 relative bottom-5 mb-[-20px] ">
                    indicates a required field
                </p>
            </div>
            <button className="w-[271px] h-[53px] bg-[#2947A9] text-lg font-semibold rounded-[2px] text-white">
                Submit
            </button>
        </div>
    );
};
export default Component7;
