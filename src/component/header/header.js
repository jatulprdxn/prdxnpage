import React, { Component } from 'react'
import './style.scss';

import { Redirect } from "react-router-dom"; 

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
