// import Buttons from "../components/Buttons";

const Container = () => {

  interface IHeadings {
    name: string;
    color: string;
  }

  const headings: IHeadings[] = [
    { name: "UI Engineering", color: "from-pink-500 to-violet-500" },
    { name: "Code Quality", color: "from-green-400 to-cyan-500" },
    { name: "Software Architecture", color: "from-sky-400 to-indigo-500" },
    { name: " Software Lifecycle", color: "from-amber-300 to-orange-500" },
    { name: "Fullstack Thinking", color: "from-teal-400 to-cyan-400" },
    { name: "Algorithm & Data Structures", color: "from-rose-500 to-pink-500" }
  ];


  return (
    <>
      {headings.map((item: IHeadings) => (
        <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
          <p className="text-5xl font-extrabold py-4 text-center px-2">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
              {item.name}
            </span>
          </p>
          <div className="flex justify-around flex-wrap">
            {/* <Buttons /> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default Container;
















