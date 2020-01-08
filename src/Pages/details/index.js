import React, { Component } from 'react'
import './style.scss'

export default class Details extends Component {
constructor(props) {
  super(props);
    this.state = {
      tab:['Handbook',"Home","About"],
      toShow:[
        { title:'Handbook',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt ex" },
        { title:'Home',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt ex" },
        { title:'About',description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt ex" } 
      ],
      currentTab:[]
    }
}

 Tab = () => {   // this is to side tab
  return (
    <div className="tab">
     {
        this.state.tab.map((item,index) => {
        return index === 0?
         <button className="tablink" id="defaultopen" onClick={(e) =>this.openTab(e,item)}>{item}</button>:
         <button className="tablink" onClick={(e) =>this.openTab(e,item)}>{item}</button>
        })
     }
     </div> 
  )
}

openTab = (e,title) => {     // filter tab and show current clicked tab
  let { currentTab } =  this.state;
   currentTab = this.state.toShow.filter((item,i) => item.title === title?item:null)
      this.setState({
        currentTab
      })
    }
  

  render() {
    return (
      <section className="details">
        <div className="wrapper">
            <h1>Details</h1>
            <div className="currentTab">
              {this.Tab()}
              {
                this.state.currentTab.map(item => {
              return( 
                <div className="tabcontent active">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p> 
                </div>)
                })
              }
          </div>
        </div>
      </section>
    )
  }
}
