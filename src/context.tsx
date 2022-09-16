import React, { Component } from "react";
import axios from "axios";

export const Context = React.createContext<any>(null);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Result",
      };

    default:
      return state;
  }
};

export class Provider extends Component<
  { children: any },
  { track_list: Object[]; heading: string }
> {
  state = {
    track_list: [],
    heading: "Top 10 Tracks",
    dispatch: (action: any) => this.setState((state) => reducer(state, action)),
  };
  //
  //https://cors-anywhere.herokuapp.com/
  componentDidMount() {
    axios
      .get(
        `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=in&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) => {
        console.log(res);
        this.setState({ track_list: res.data.message.body.track_list });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
