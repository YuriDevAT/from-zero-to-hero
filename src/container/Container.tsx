import Buttons from "../components/Buttons";
import { headings } from "../interfaces/headings";

const Container = () => {

  return (
    <>
      {headings.map((item, key) => (
        <div key={key} className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
          <p className="text-5xl font-extrabold py-4 text-center px-2">
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${item.color}`}>
              {item.name}
            </span>
          </p>
          <div className="flex justify-around flex-wrap">
            <Buttons />
          </div>
        </div>
      ))}
    </>
  )
}

export default Container;