import Buttons from '../components/Buttons';

const One = () => {
  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg px-2 py-4">
      <p className="text-5xl font-extrabold pb-4 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          UI Engineering
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
        <Buttons />
      </div>
    </div>
  );
}

export default One;