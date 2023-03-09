import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameOver from './pages/GameOver/GameOver';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
