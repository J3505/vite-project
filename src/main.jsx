import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/Header.jsx'
import Content1 from './components/content/Content1.jsx';
import Content2 from './components/content/Content2.jsx';
import Content3 from './components/content/Content3.jsx';
import Content4 from './components/content/Content4.jsx';
import Content5 from './components/content/Content5.jsx';
import Footer from './components/footer/Footer.jsx';
import './styles/index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Content1/>
    <Content2/>
    <Content3/>
    <Content4/>
    <Content5/>
    <Footer/>
    

  </React.StrictMode>,
)
