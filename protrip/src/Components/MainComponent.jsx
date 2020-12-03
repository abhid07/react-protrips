import React, { Component } from 'react';
import NavComponent from './NavComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeComponent from './HomeComponent';
import AddTrip from './AddTrip';
import DisplayAllTrip from './DisplayAllTrip';


class MainComponent extends Component {
    constructor()
    {
        super()
        this.state = {
            trip: [{ date: "2020-11-10", place: "Bali", type: "Club" },
                { date: "2020-11-10", place: "Bali", type: "Trek" },
                { date: "2020-11-10", place: "Bali", type: "Club" },
                { date: "2020-11-10", place: "Bali", type: "Trek" },
                { date: "2020-11-10", place: "Bali", type: "Tropic" },
                { date: "2020-11-10", place: "Bali", type: "Trek" }]
        }
    }


    addTrip = (e) =>{
        e.preventDefault()
        //adding trip details to array
            if(e.target.place.value==='' || e.target.date.value==='')
            {
                alert("Please Enter All Details")
            }
            else{
            this.setState(prevState=>{
                return {
                    trip:[...prevState.trip,
                    {
                        date:e.target.date.value,
                        place:e.target.place.value,
                        type:e.target.type.value
                    }]
                }
            })
            alert("Details Added")
        }
    }
    render() {
        return (
            <Router>
            <div className="main-container">
                <div className="left-container">
                    <NavComponent/>
                </div>
                <div className="right-container">
                    <Switch>
                        <Route exact path = "/">
                            <HomeComponent trip={this.state.trip}/> 
                        </Route>
                        <Route path="/AddTrip">
                                <AddTrip addTrip={this.addTrip} />
                        </Route>
                        <Route exact path="/DisplayAllTrip">
                            <DisplayAllTrip allTrip = {this.state.trip}/>
                        </Route>
                    </Switch>
                </div>
            </div>
            </Router>
        );
    }
}

export default MainComponent;