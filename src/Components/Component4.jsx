import { API2 } from '../API/API2';
const Component4 = () => {
    return (
        <div className="w-full flex flex-col items-center justify-start bg-[#F6F8F7] pt-[44px]">
            <h3 className="text-4xl font-bold text-center mb-[36px]">Services</h3>
            <div className="grid grid-cols-3 gap-x-[98px] gap-y-[48px] mb-[76px]">
                {API2.map((data) => (
                    <div
                        key={data.id}
                        className={`w-[271px] h-[181px] flex flex-col items-center justify-center ${data.id % 2 == 1 ? 'bg-white' : 'bg-[#2947A9]'}`}
                    >
                        <img className="w-10 h-10 mb-5" src={data.url} alt="" />
                        <hr className="w-[60px] h-[2px] mb-5" />
                        <p className="text-xl">{data.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Component4;
