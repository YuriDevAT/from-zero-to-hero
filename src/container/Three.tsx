import Buttons from '../components/Buttons';

const Three = () => {

  const content = [
    "Architecture styles",
    "Tradeoffs analysis"
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
          Software Architecture
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default Three;