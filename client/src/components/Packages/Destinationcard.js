import React from 'react'
import {NavLink } from "react-router-dom"
 

function DestinationCard(props) {
    return (
      <NavLink to="/packages">
        <div className="d_card">
        <img src={props.img} alt="" class="card_img"/>
        <div className="overlay">
          <div class="d_card_text">
            <h4>{props.name}</h4>
            </div>
        </div>
      </div>
      </NavLink>
    )
}

export default DestinationCard
