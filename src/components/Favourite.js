import React, { Component } from "react";
import Header from "./Header";
import "../style/Style.css";
import FavouritItem from "./FavouritItem";
export default class Favourite extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.favourites.map((item) => {
            console.log(item);
            return (
              <div className="main-div-fav">
                <FavouritItem
                  name={item.name}
                  address={item.address}
                  price={item.price}
                  area={item.area}
                  deleteFromFavourite={() =>
                    this.props.deleteFromFavourite(item)
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
