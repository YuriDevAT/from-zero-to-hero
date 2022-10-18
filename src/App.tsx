import './App.css';
import ProgressBar from './components/ProgressBar';
import Five from './container/Five';
import Four from './container/Four';
import TechArea from './container/TechArea';
import Three from './container/Three';
import Two from './container/Two';
import Six from './container/Six';

function App() {
  return (
    <div className="w-screen h-full p-6 bg-slate-50">
      <header className="p-6">
        <h1 className="font-mono text-2xl leading-normal text-center pb-6">
          Getting from Junior to Senior with Laszlo Senpai in 3 2 1 ... 🥳
        </h1>
        <ProgressBar />
      </header>
      <main className="p-10 grid gap-12 grid-cols-2">
        <TechArea />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
      </main>
    </div>
  );
}

export default App;
