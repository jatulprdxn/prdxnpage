import React, { Component } from 'react'
import './style.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1><a href="/" >PRDXN</a></h1>
        </div>
      </header>
    )
  }
}
