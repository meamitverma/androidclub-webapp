import React from 'react'

function Event(props) {
  return (
    <div className="card-container">
      <div className="card event">
        <img src={props.imageurl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.desc}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.schedule}</li>
          </ul>
          <div className="card-body">
            {/* <a href="#" className="card-link">Card link</a> */}
            <a href={props.linktojoin} target="_" className='btn btn-sm btn-primary'>Register</a>
          </div>
    </div>
  </div>
  )
}

export default Event