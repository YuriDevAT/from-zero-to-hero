import Buttons from '../components/Buttons';

const Four = () => {

  const content = [
    "Deployment best practices",
    "Docker",
    "CI/CD paradigms(deployment styles, availability, etc)"
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-orange-500">
          Software Lifecycle
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default Four;