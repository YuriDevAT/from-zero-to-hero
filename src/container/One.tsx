import Buttons from '../components/Buttons';

const One = () => {

  // maybe change to Type or Interface
  const content: { id: number; title: string; isCompleted: boolean }[] = [
    { id: 1, title: "Web Performance", isCompleted: false },
    { id: 2, title: "Browser API", isCompleted: true },
    { id: 3, title: "Advanced JavaScript", isCompleted: false },
    { id: 4, title: "Software LifeCycle, e.g.", isCompleted: false },
    { id: 5, title: "SL: Deployment", isCompleted: false },
    { id: 6, title: "SL: Monitoring", isCompleted: false },
    { id: 7, title: "SL: Scalability", isCompleted: false },
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