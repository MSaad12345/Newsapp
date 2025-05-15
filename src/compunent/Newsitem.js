import React, { Component } from 'react'
import './Newsitem.css'

export class Newsitem extends Component {
  render() {
  let  { title , discription, imageurl, items} = this.props;
    return (
      <div>
        <div className="card" style={{width: "2rem;"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{discription}...</p>
    <a href={items}  className="btn btn-primary d-flex align-middle justify-content-center">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
