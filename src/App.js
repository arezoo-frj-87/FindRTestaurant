import React, { Component } from "react";
import Headers from "./components/Header";
import Search from "./components/Search";
import { HashRouter, Route, Switch } from "react-router-dom";
import Favourite from "./components/Favourite";
export default class App extends Component {
  state = { favourites: [] };
  addToFavouriteList = (obj) => {
    this.setState(
      { ...this.state, favourites: [...this.state.favourites, obj] },
      () => {
        localStorage.setItem("favList", JSON.stringify(this.state.favourites));
      }
    );
    console.log("addToFavouriteList", this.state);
  };
  deleteFromFavourite = (obj) => {
    let remainRestaurant = this.state.favourites.filter(
      (item) => item.id !== obj.id
    );
    this.setState({ ...this.state, favourites: remainRestaurant }, () => {
      localStorage.setItem("favList", JSON.stringify(this.state.favourites));
    });
  };
  componentDidMount() {
    let data = localStorage.getItem("favList");
    if (data) {
      let convertedData = JSON.parse(data);
      this.setState({
        favourites: convertedData,
      });
    }
  }
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path="/">
              <Headers />
              <Search addToFavourite={this.addToFavouriteList} />
            </Route>
            <Route
              path="/favourite"
              render={(props) => (
                <Favourite
                  {...props}
                  favourites={this.state.favourites}
                  deleteFromFavourite={this.deleteFromFavourite}
                />
              )}
            ></Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
