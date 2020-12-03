import React, { Component } from 'react';

class DisplayAllTrip extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            updatedTrip : this.props.allTrip
        }
    }

    filter = (e,value) =>{
        console.log("e"+e.target.name)
        console.log("value:"+value);
        
      
        if (e.target.name === 'all') {
            this.setState({
                updatedTrip: this.props.allTrip
            })
        }
        else if (e.target.name === value) {
            let tripFilter = this.props.allTrip.filter(trip => {
                return trip.type === value
            })
            this.setState({
                updatedTrip: tripFilter
            })
        }


        //   else if(e.target.name === 'all')
        // {
        //     let tripFilter = this.props.allTrip.filter(trip=>{
        //         return trip.type === 'Trek'
        //     })
        //     this.setState ({
        //         updatedTrip:tripFilter
        //     })
        // }
        
      
        // else if(e.target.name === 'Trek')
        // {
        //     let tripFilter = this.props.allTrip.filter(trip=>{
        //         return trip.type === 'Trek'
        //     })
        //     this.setState ({
        //         updatedTrip:tripFilter
        //     })
        // }
        // else if (e.target.name === 'Club') {
        //     let tripFilter = this.props.allTrip.filter(trip => {
        //         return trip.type === 'Club'
        //     })
        //     this.setState({
        //         updatedTrip: tripFilter
        //     })
        // }
        // else if (e.target.name === 'Tropic') {
        //     let tripFilter = this.props.allTrip.filter(trip => {
        //         return trip.type === 'Tropic'
        //     })
        //     this.setState({
        //         updatedTrip: tripFilter
        //     })
        // }
    }
    renderAllTrip = () =>{
        let allTrip = this.state.updatedTrip
        let mapRow = allTrip.map(trip=>{
            return(
                <>
                    <tr>
                        <td>{trip.date}</td>
                        <td>{trip.place}</td>
                        <td>{trip.type}</td>
                    </tr>
                </>
            )
        })
        return mapRow
    }
    render() {
        console.log(this.props);
        return (
            <div className="alltrip">
                <h1>All Trips</h1>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                    {this.renderAllTrip()}
                </table>
                <div className="filter">
                    <ul>
                        <p>Filter by: </p>
                        <li><button name="all"onClick={(e)=>this.filter(e,'all')}>All</button></li>
                        <li><button name="Trek"onClick={(e)=>this.filter(e,'Trek')}>Trek</button></li>
                        <li><button name="Club"onClick={(e)=>this.filter(e,'Club')}>Club</button></li>
                        <li><button name="Tropic"onClick={(e)=>this.filter(e,'Tropic')}>Tropics</button></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DisplayAllTrip;