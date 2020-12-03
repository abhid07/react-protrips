import React, { Component } from 'react'

export default class HomeComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            Trek:0,
            Club:0,
            Tropic:0
        }
        // console.log(props.trip);
    }

    renderCounts=()=>{
      let trek = 0
      let club = 0 
      let tropic= 0

      this.props.trip.forEach(trip => {
          if(trip.type === 'Trek')
          {
              trek++
              console.log(trek);
          }
          else if (trip.type === 'Club')
          {
              club++
              console.log(club);
          }
          else if(trip.type === 'Tropic')
          {
              tropic++
              console.log(tropic);
          }
      });
      return(
         <div className="home">
            <h1>{this.props.trip.length} <span>trips</span> </h1>
            <div className="type-container">
                  <h3>{tropic} <span><i className="fa fa-sun" aria-hidden="true"></i></span></h3>
                  <h3>{trek} <span><i class='fas fa-mountain'></i></span></h3>
                  <h3>{club} <span><i className="fa fa-beer" aria-hidden="true"></i></span></h3>
            </div>
         </div>
      )
    }
  
    render() {
        console.log(this.state.Trek);
        return (
            <div>
                {this.renderCounts()}
            </div>
        )
    }
}
