import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import Avatar from '../../images/Content/avatar.png';
import Board from '../../images/Content/board.png';
import Book1 from '../../images/Content/book-1.png';
import Book2 from '../../images/Content/book-2.png';
import Book3 from '../../images/Content/book-3.png';

import '../Projects/Projects.css';

const Projects = () => {
  const [content, setContentVisible] = useState(false);
  const [activeBook, setActiveBook] = useState(null);

  useEffect(() => {
    const visible = setTimeout(() => {
      setContentVisible(true);
    }, 6000);

    return () => clearTimeout(visible);
  }, []);

  const showContent = {
    'book-1': <div className="content-book" key="book-1"><h3 className="h3-book">Team work</h3></div>,
    'book-2': <div className="content-book" key="book-2"><h3 className="h3-book">Frontend</h3></div>,
    'book-3': <div className="content-book" key="book-3"><h3 className="h3-book">JavaScript</h3></div>,
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
