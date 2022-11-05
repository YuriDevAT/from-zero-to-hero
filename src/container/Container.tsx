import Buttons from "../components/Buttons";
import IButtons, { buttons } from "../interfaces/buttons";
import { headings } from "../interfaces/headings";

const Container = () => {

  /**
   * To Do 
   * Only show buttons from buttons array whose title matches the heading
   */

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
            {buttons.map((button: IButtons) => (
              button.title === item.name && <Buttons />
            ))}
            {/* <Buttons /> */}
          </div>
        </div>
      ))}
    </>
  )
}

export default Container;