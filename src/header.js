import React from 'react';
import ReactDOM from 'react-dom'

class Header extends React.Component{
  render(){
    return(
    <header>
    <div><img className='banner' src="banner-home.jpg"/></div>
      <nav class='bl-menu'>
        <ul>
          <li><a>home</a></li>
          <li><a>contact</a></li>
          <li><a>Who are we</a></li>
          <li><a>prestations</a></li>
        </ul>
      </nav>
    </header>
  )}
}
export default Header
