import { API1 } from '../API/API1';
const Component2 = () => {
    return (
        <div className="flex flex-col pt-[60px]">
            <h3 className="text-4xl font-bold mb-[50px]">Our Reputation</h3>
            <div className="flex flex-row gap-x-[66px] mx-auto">
                {API1.map((data) => (
                    <div
                        key={data.id}
                        className="w-[292px] h-[197px] pl-5 flex flex-col justify-center gap-y-[18px] mb-[84px] text-start border"
                    >
                        <img className="w-10 h-10" src={data.url} alt="" />
                        <h3 className="text-xl font-bold">{data.title}</h3>
                        <p className="text-base">{data.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Component2;
