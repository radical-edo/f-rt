import React from 'react';

const feed = require('./feed.json');
import './ArticlesPage.css';


function ArticlesPage(props) {
  return (
    <main className="ArticlesPage--main">
      <ul className="ArticlesPage--article-list">
        {
          feed.map((feed, id) => {
            return (
              <li className="ArticlesPage--article-list__list-item" key={id}>
                <a className="ArticlesPage--list-item__link" href={feed.url}>
                  <article className="ArticlesPage--article">
                    <aside className="ArticlesPage--article__thumbnail-container">
                      {
                        feed.thumbnail ?
                          <img className="ArticlesPage--thumbnail" src={feed.thumbnail} alt="Article thumbnail"/>
                          :
                          <span className="ArticlesPage--thumbnail ArticlesPage--no-thumbnail">
                            No Image<br />Available
                          </span>
                      }
                    </aside>
                    <section className="ArticlesPage--article__section">
                      <header className="ArticlesPage--section__header">
                        { feed.title }
                      </header>
                      <p className="ArticlesPage--section__description">
                        { feed.description }
                      </p>
                    </section>
                  </article>
                </a>
              </li>
            );
          })
        }
      </ul>
    </main>
  );
}

export default ArticlesPage;

