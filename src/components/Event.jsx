import React from 'react'

function Event(props) {
  return (
    <div className="card my-2 event">
  <div className="card-header" style={{backgroundColor:"#7064fc", color:"white"}}>
    {props.title}
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{props.desc}</p>
      <footer className="blockquote-footer">{props.date} <cite title="Source Title">,{props.venue}</cite></footer>
    </blockquote>
  </div>
</div>
  )
}

export default Event