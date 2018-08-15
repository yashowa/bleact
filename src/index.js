import React from 'react';
import ReactDOM from 'react-dom';
import "./css/style.css";
import Header from './header';
import Footer from './footer';

class Articles extends React.Component{

  render(){
    return(
      <div className="bl-posts"></div>
    )
  }

}
class Posts extends React.Component{

  render(){
    return(
      <article>
        <h2 className="post-title">titre</h2>
        <figure className="post-figure-content">
          <img src="img/banner-home.jpg"/>
          <figcaption></figcaption>
        </figure>
        <p className="post-content">

        </p>
      </article>
    )
  }

}

ReactDOM.render(

  <div className='wrapper-home '>
    <Header/>
    <Articles/>
    <Footer/>
  </div>

  , document.getElementById('root')
);
