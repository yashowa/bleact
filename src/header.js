import React from 'react';
import ReactDOM from 'react-dom'

class Header extends React.Component{
  render(){
    return(
    <header>
      <nav className='bl-menu'>
        <ul>
          <li><a>home</a></li>
          <li><a>contact</a></li>
          <li><a>Who are we</a></li>
          <li><a>prestations</a></li>
        </ul>
      </nav>
    <div className="banner-home wrapper"></div>

    </header>
  )}
}
export default Header;
