import React, { Component } from "react";
import './Search.css';

const lurl = "https://developerfunnel.herokuapp.com/location";
const hurl = "https://developerfunnel.herokuapp.com/hotels?city=";

class Search extends Component {
    // 1 This gets called
    constructor() {
        super();
        this.state = {
            location: '',
            hotels:''
        }
    }

    // TO display city
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.city}>
                        {item.city.name}
                    </option>
                )
            })
        }

    }

    // To display hotel
    handleCity = (event) => {
        const cityId = event.target.value;
        const url = hurl + cityId;
        fetch(url, {method:'GET'})
        .then((response) => response.json())
        // .then((data) => this.setState({hotels: data}))
    }

    // 2 This gets called secondary
    render() {
        return (
            <div className="imageContainer">
                <div id="logo">
                    <b>D!</b>
                </div>
                <div className="heading">
                    Share your coding problems to us
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown" onChange={this.handleCity}>
                        <option>---------SELECT CITY---------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>---------SELECT HOTEL---------</option>
                    </select>
                </div>
            </div>
        )
    }

    // 2 This gets called where the API has been loaded
    componentDidMount() {
        fetch(lurl, { method: 'GET' })
            .then((res) => res.json)
            .then((data) => { this.setState({ location: data }) })
            .catch((err) => console.log(err))
    }
}

export default Search;