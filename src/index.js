import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/header';
import Footer from './components/footer'



function Root() {
  return (
    <React.StrictMode>
      <Header />
      <App />
      <Footer />
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
