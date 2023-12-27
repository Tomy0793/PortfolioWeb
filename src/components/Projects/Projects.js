import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Avatar from '../../images/Content/avatar.png';
import Board from '../../images/Content/board.png';
import Book1 from '../../images/Content/book-1.png';
import Book2 from '../../images/Content/book-2.png';
import Book3 from '../../images/Content/book-3.png';
import blueBook from "../../images/Content/blue-book.png"
import redBook from "../../images/Content/red-book.png"
import yellowBook from "../../images/Content/yellow-book.png"
import '../Projects/Projects.css';
import { TypeAnimation } from 'react-type-animation';

const Projects = () => {
  const [content, setContentVisible] = useState(false);
  const [activeBook, setActiveBook] = useState("book-0");

  useEffect(() => {
    const visible = setTimeout(() => {
      setContentVisible(true);
    }, 6000);

    return () => clearTimeout(visible);
  }, []);

  const showContent = {
    'book-0': <div className="content-book" key="book-1"><h3 className="h3-book">Click on the books to view projects.This project is built with React.</h3></div> ,
    'book-1': <div className="content-book" key="book-1"><h3 className="h3-book">DreamMetrics: Freelance project under development for a mattress company, allowing access to statistics from various branches</h3><img className='open-book' src={redBook} alt="book" />
    <TypeAnimation
    className='ani'
  sequence={['* Html', 500, '* Css', 500, '* React', 500, '* Node.js', 500]}
  style={{ fontSize: '1em', position:"relative", zIndex:"3", left:"98px", top:"-49px" }}
  repeat={Infinity}
/>  
    </div>,
    'book-2': <div className="content-book" key="book-2"><h3 className="h3-book">Login Design: In this project, I explore how to create a login with animations using transitions.<a id='repo1' href='https://github.com/Tomy0793/login' target='_blank'>Repository</a><br></br><a id='deploy1' href='https://tomy0793.github.io/login/' target='_blank'>Deploy</a></h3><img className='open-book' src={blueBook} alt="book" />
    <TypeAnimation className='ani'
  sequence={['* Html', 500, '* Css', 500]}
  style={{ fontSize: '1em', position:"relative", zIndex:"3", left:"98px", top:"-49px" }}
  repeat={Infinity}
/>
    
    </div>,
    'book-3': <div className="content-book" key="book-3"><h3 className="h3-book">Pokefight:This project is a Pokémon battle simulator implemented in JavaScript.<br></br> <a id='repo2' href='https://tomy0793.github.io/PokeFight/' target='_blank'>Deploy</a></h3><a id='deploy2' href='https://github.com/Tomy0793/PokeFight' target='_blank'>Repository</a><br></br><img className='open-book' src={yellowBook} alt="book" />
    <TypeAnimation
    id='ani1'
  sequence={['* Html', 500, '* Css', 500, '* Js', 500, '* BS', 500]}
  style={{ fontSize: '1em', position:"relative", zIndex:"3", left:"98px", top:"-49px" }}
  repeat={Infinity}
/>
    </div>,
  };

  const activateBook = (id) => {
    console.log(`Activating book ${id}`);
    setActiveBook(id);
  };

  return (
    <div>
      <Loader />
      {content ? (
        <>
          <div className="container-project">
            <img className="board" src={Board} alt="board" />
            <img className="book" src={Book1} alt="book" id="book-1" onClick={() => activateBook('book-1')} />
            <img className="book" src={Book2} alt="book" id="book-2" onClick={() => activateBook('book-2')} />
            <img className="book" src={Book3} alt="book" id="book-3" onClick={() => activateBook('book-3')} />
            {activeBook && showContent[activeBook]}
          </div>

        </>
      ) : null}
    </div>
  );
};

export default Projects;
