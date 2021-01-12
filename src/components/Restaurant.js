import React from "react";
import "../style/Style.css";
import Logo from "../images/res.jpeg";
export default class Restaurant extends React.Component {
  showCostLevel = (num) => {
    let result = "";

    if (num) {
      for (let i = 0; i < num; i++) {
        result += "$";
      }

      return result;
    }
    return null;
  };

  render() {
    return (
      <div className="show-items">
        <img src={Logo} alt="pic" id="image" />

        <div id="details">
          <p id="name"> {this.props.name}</p>
          <p>
            {" "}
            price level :{" "}
            <p id="price">{this.showCostLevel(this.props.price)} </p>
          </p>
          <button
            id="favourite"
            type="button"
            onClick={this.props.addToFavourite}
          >
            Add to Favoirite List
          </button>
          <p>Address: {this.props.address}</p>
          <p>Area: {this.props.area}</p>
          <a href={this.props.link} id="link">
            Reserve Now !
          </a>
        </div>
      </div>
    );
  }
}
