import Buttons from '../components/Buttons';

const Five = () => {

  const content = [
    "HTTP",
    "Leverage client and frontend side",
    "Web Engineering mechanisms, e.g.CORS, Content Negotiation",
    "Authentication and authorization",
    "Caching",
    "Scalability"
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">
          Fullstack Thinking
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default Five;