import React from 'react'

function Card({details}) {
  return (
    <div className="card" style={{width:"25rem"}}>
  <img src={details.picture?.large} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Name: {details.name?.first} {details.name?.last}</h5>
    <h6 className="card-title">Email: {details.email}</h6>
    <h6 className="card-title">Phone: {details.phone}</h6>
    <h6 className="card-title">Location: {details.location?.city}, {details.location?.country}</h6>
  </div>
</div>

  )
}

export default Card