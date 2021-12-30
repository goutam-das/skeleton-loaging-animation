import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts => {
        setData(posts);
        // grid.innerHTML = ''
        // posts.forEach(post => {
        //   const div = cardTemplate.content.cloneNode(true)
        //   div.querySelector('[data-title]').textContent = post.title
        //   div.querySelector('[data-body]').textContent = post.body
        //   grid.append(div)
        // })
      })
  }, [setData])

  return (
    <div className="grid">
      {data?.length ? data?.map(post => <Card {...post} />) : <>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </>}
    </div>
  );
}

export default App;

const Card = ({ title, body }) => (
  <div class="card">
    <div class="header">
      <img class="header-img skeleton" src="https://source.unsplash.com/100x100/?nature" />
      <div class="title" data-title>
        {title ?? <>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </>}
      </div>
    </div>
    <div data-body>
      {body ?? <>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </>}
    </div>
  </div>
)
