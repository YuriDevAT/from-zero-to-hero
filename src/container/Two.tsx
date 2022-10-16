import Buttons from '../components/Buttons';

const Two = () => {

  const content = [
    "Testing, e.g",
    "Integration tests",
    "E2E tests",
    "Patterns to structure tests",
    "Mocks and spies",
    "Effectively measure test coverage",
    "Tooling",
    "Leverage your IDE",
    "Language fundamentals"
  ]

  return (
    <div className="container mx-auto bg-white rounded-xl min-h-64 shadow-lg">
      <p className="text-5xl font-extrabold py-4 text-center px-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-500">
          Code Quality
        </span>
      </p>
      <div className="flex justify-around flex-wrap">
        <Buttons content={content} />
      </div>
    </div>
  );
}

export default Two;