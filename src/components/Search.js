import React, { Component } from "react";
import Restaurant from "./Restaurant";
import "../style/Style.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      restaurants: [],
      cities: [],
      selectedCity: "Chicago",
    };
  }

  componentDidMount() {
    let url = "https://opentable.herokuapp.com/api/cities";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ ...this.state, cities: result.cities });
      });
  }

  setCityName = (e) => {
    this.setState({ ...this.state, selectedCity: e.target.value });
  };
  loadRestaurant = (e) => {
    let urlRestaurant = `https://opentable.herokuapp.com/api/restaurants?city=${this.state.selectedCity}`;
    fetch(urlRestaurant)
      .then((res) => res.json())
      .then((result) => {
        this.setState({ ...this.state, restaurants: result.restaurants });
      });
  };
  render() {
    return (
      <div>
        <div className="search">
          <select name="city" id="city" onChange={this.setCityName}>
            <option value="Chicago">Chicago</option>
            {this.state.cities.map((city) => {
              return (
                <option value={city} key={city.id}>
                  {city}
                </option>
              );
            })}
          </select>
          <button id="btn" onClick={this.loadRestaurant}>
            Try Your Chance!
          </button>
        </div>
        <div className="main">
          {this.state.restaurants.map((item) => {
            console.log(item);
            return (
              <Restaurant
                name={item.name}
                price={item.price}
                address={item.address}
                area={item.area}
                link={item.reserve_url}
                addToFavourite={() => this.props.addToFavourite(item)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
