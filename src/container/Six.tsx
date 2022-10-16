import Buttons from '../components/Buttons';

const Six = () => {

  const content = [
    "Units like Arrays & Hashmaps",
    "Recursion",
    "Big O Notation",
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Algorithm & Datastructures
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default Six;