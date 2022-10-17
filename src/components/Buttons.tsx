import { useState } from 'react';
// import close from '../assets/close.svg';
/** TO DO: 
 * SVG not showing up in the browser
 */

const Buttons = ({ content }: any) => {
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    setComplete(!complete);
  };

  return (
    <>
      {content.map((item: any) => (
        <button
          className={`rounded-full p-4 max-w-xs flex justify-around m-2 ${complete ? "bg-purple-500" : "bg-gray-100"}`}
          type="button"
          onClick={handleClick}
        >
          {complete ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          {/* <img src={close} alt="" className="w-6 h-6" aria-label="Issue not finished." /> */}
          <span>
            {item}
          </span>
        </button>
      ))
      }
    </>
  )
}

export default Buttons;