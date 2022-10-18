import Buttons from '../components/Buttons';
import One from './One';

const TechArea = () => {
  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg px-2 py-4">
      <p className="text-5xl font-extrabold pb-4 text-center">
        <One />
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons />
      </div>
    </div>
  )
}

export default TechArea;