// import Buttons from "../components/Buttons";

const Container = () => {
  const headings: { name: string, color: string }[] = [
    { name: "UI Engineering", color: "from-pink-500 to-violet-500" },
    { name: "Code Quality", color: "from-green-400 to-cyan-500" },
    { name: "Software Architecture", color: "from-sky-400 to-indigo-500" },
    { name: " Software Lifecycle", color: "from-amber-300 to-orange-500" },
    { name: "Fullstack Thinking", color: "from-teal-400 to-cyan-400" },
    { name: "Algorithm & Data Structures", color: "from-pink-400 to-violet-400" }
  ];


  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${headings[0].color}`}>
          {headings[0].name}
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        {/* <Buttons /> */}
      </div>
    </div>
  )
}

export default Container;
















