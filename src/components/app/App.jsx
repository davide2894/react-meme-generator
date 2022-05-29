import './App.scss';
import Header from '../header/Header';
import Meme from '../meme/Meme';

export default function App() {
  return (
    <div className="app">
      <Header/>
      <Meme />
    </div>
  );
}