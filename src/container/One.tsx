import Buttons from '../components/Buttons';

const One = () => {

  const content = [
    { title: "Web Performance", isCompleted: false, id: 1 },
    { title: "Browser API", isCompleted: true, id: 2 },
    { title: "Advanced JavaScript", isCompleted: false, id: 3 },
    { title: "Software LifeCycle, e.g.", isCompleted: false, id: 4 },
    { title: "SL: Deployment", isCompleted: false, id: 5 },
    { title: "SL: Monitoring", isCompleted: false, id: 6 },
    { title: "SL: Scalability", isCompleted: false, id: 7 },
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg px-2 py-4">
      <p className="text-5xl font-extrabold pb-4 text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          UI Engineering
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default One;