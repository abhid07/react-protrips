import React, { Component } from 'react';

class AddTrip extends Component {
    constructor(props)
    {
        super(props)
    }
    render() {
        return (
            <div className="form">
                <h1>Add a trip</h1>
                <form onSubmit={this.props.addTrip}>
                    <h3>Date :   </h3>
                    <input type="date" name="date" id=""/>
                 

                    <h3>Place : </h3>
                    <input type="text" name="place" id="" />
                   

                    <h3>Type :  </h3>
                    <select name="type">
                        <option value="Trek">Trek</option>
                        <option value="Club">Club</option>
                        <option value="Tropic">Tropic</option>
                    </select>
                  

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddTrip;