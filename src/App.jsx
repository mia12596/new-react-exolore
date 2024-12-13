
// import { useState } from 'react'
// import './App.css'
// import Blogs from './assets/components/Blogs/Blogs'
// import Bookmarks from './assets/components/Bookmarks/Bookmarks'
// import Header from './assets/components/Header/Header'


// function App() {
//   const [bookmark, setBookmark] = useState([]);
//   function bookMark(blog) {
//     if (bookmark.length >= 8) {
//       alert('You can only bookmark up to 8 blogs.');
//       return;
//     }
//     // Prevent duplicates
//     if (bookmark.some(b => b.id === blog.id)) {
//       alert('This blog is already bookmarked.');
//       return;
//     }
//     const newBookmark = [...bookmark, blog];
//     setBookmark(newBookmark);
//   }

//   return (
//     <>

//       <Header></Header>
//       <div className='md:flex p-5'>
//         <Blogs bookMark={bookMark}></Blogs>
//         <Bookmarks bookmark={bookmark}></Bookmarks>
//       </div>

//     </>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import Blogs from './assets/components/Blogs/Blogs';
import Bookmarks from './assets/components/Bookmarks/Bookmarks';
import Header from './assets/components/Header/Header';

function App() {
  const [bookmark, setBookmark] = useState([]);
  const limit = 6; // Static maximum limit

  function bookMark(blog) {
    if (bookmark.length >= limit) {
      alert('You can only bookmark up to 6 blogs.');
      return;
    }
    if (bookmark.some(b => b.id === blog.id)) {
      alert('This blog is already bookmarked.');
      return;
    }
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }

  return (
    <>
      <Header />
      <div className="md:flex p-5">
        <Blogs bookMark={bookMark} />
        <Bookmarks bookmark={bookmark} limit={limit} />
      </div>
    </>
  );
}

export default App;

