import Workitem from "./Workitem";

const data = [
    {
        year: 2023,
        title: 'Extia',
        duration: '1 year',
        details: 'test',
    },
    {
        year: 2021,
        title: 'Lumiplan',
        duration: '2 years',
        details: 'test',
    },
    {
        year: 2020,
        title: 'D2WM',
        duration: '1 year',
        details: 'test',
    },
]
const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
            {data.map((item, idx) => (
                <Workitem 
                    key={idx} 
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    )
}

export default Work;