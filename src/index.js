import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Header from './header';
import Footer from './footer';

class Articles extends React.Component{

  render(){
    return(
      <input type="text" name="login"/>
    )
  }

}
class Posts extends React.Component{

  render(){
    return(
      <article>
        <h2 className="post-title">titre</h2>
        <figure className="post-figure-content">
          <img src=""/>
          <figcaption></figcaption>
        </figure>
        <p className="post-content">

        </p>
      </article>
    )
  }

}

ReactDOM.render(
  <div>
    <Header/>
    <Articles/>
    <Footer/>
  </div>
  , document.getElementById('root')
);
