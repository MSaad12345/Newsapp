import React, { Component } from 'react'
import Newsitem from './Newsitem'
import './news.css'
export class news extends Component {
    
   constructor(){
    super();
    this.state ={
        articles:[],
         loading : false

    }
   }
    async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?q=apple&from=2025-05-13&to=2025-05-13&sortBy=popularity&apiKey=aecf1d44734245ad8d19f31f7bf81cb5";
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata)
      this.setState({ articles:parsedata.articles || []})
      
    }  
    render() {
      console.log(this.state.articles)
    return (
      <div className='container my-9 '>
         <div className='row'>
         {this.state.articles?.map((Element)=>{

          return  <div className='col-md-4' key={Element.url} >
        <Newsitem title={Element.title? Element.title.slice(0,37):'no title'} discription={Element.description?Element.description.slice(0,69): 'no discription'} imageurl={Element.urlToImage ? Element.urlToImage : 'https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' } items ={
         Element.url
        } />
           </div>
         })}
          
           </div>
          </div>
        

      
    )
  }
}

export default news
