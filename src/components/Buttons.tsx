import { useState } from 'react';
import IButtons, { buttons } from '../interfaces/buttons';
import { ReactComponent as Check } from '../assets/check.svg';
import { ReactComponent as Close } from '../assets/close.svg';

const Buttons = () => {

  const [completed, setCompleted] = useState({ buttons: buttons });

  // const contentID = content.map((item: any) => {
  //   return item.id
  // });

  /**
  * TO DO
  * handleClick function not working
  */


  const handleClick = () => {
    const newState = changeState();
    setCompleted(newState);
  };

  function changeState() {
    completed.buttons.map((button: IButtons, key: number) => {
      if (button.content[key].id === key) {
        return {
          ...button,
          state: !button.content[key].state,
        };
      }
      return button;
    });
    return completed;
  }

  /**
  * To Do
  * Only show buttons from buttons array whose title matches the heading
  */

  return (
    <>
      {buttons.map((button: IButtons) => (
        button.content.map((item: { id: number, name: string, state: boolean }) => (
          <li key={item.id} style={{ listStyleType: "none" }}>
            <button
              className={`rounded-full p-4 max-w-xs flex justify-around m-2 ${item.state ? "bg-purple-500" : "bg-gray-100 hover:bg-gray-300"}`}
              type="button"
              onClick={handleClick}
            >
              {item.state ? (
                /**
                 * To Do
                 * Check if implementing SVG here is the best way to do this
                 */
                <div className="w-6 h-6">
                  <Check />
                </div>
              ) : (
                <div className="w-6 h-6">
                  <Close />
                </div>
              )}
              <span>
                {item.name}
              </span>
            </button>
          </li>
        ))))
      }
    </>
  )
}

export default Buttons;