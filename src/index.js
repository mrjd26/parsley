import React from 'react';
import ReactDOM from 'react-dom';

const Article = () => {
	  return (
		  <article class="card bg-dark text-center text-white border-0 rounded-0">
          <img class="card-img rounded-0 img-fluid w-100" src="images/featured-post/post-1.jpg" alt="post-thumb"/>
          <div class="card-img-overlay">
            <div class="card-content">
              <p class="text-uppercase">LifeStyle</p>
              <h4 class="card-title mb-4"><a class="text-white" href="blog-single.html">Inserted with React</a></h4>
              <a class="btn btn-outline-light" href="blog-single.html">read more</a>
            </div>
          </div>
        </article>
        )
 }


ReactDOM.render(
  <Article />,
  document.getElementById('article-container')
);
