import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import QuizProvider from './context/quiz';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider.QuizProvider>
      <App />
    </QuizProvider.QuizProvider>
  </React.StrictMode>,
);
