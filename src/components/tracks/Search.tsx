import { Consumer } from "../../context";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import axios from "axios";

export default function Search() {
  const [trackTitle, setTrackTitle] = useState("Search a song");

  const findTrack = async (dispatch: any, e: any) => {
    e.preventDefault();

    if (e.target.value === "") return;

    await axios
      .get(
        `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then((res) =>
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list,
        })
      )
      .catch((err) => console.log(err));
  };

  return (
    <Consumer>
      {({ dispatch }) => {
        return (
          <Card sx={{ minWidth: 275 }}>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1>
                <BsMusicNoteBeamed />
                Search For a Song
              </h1>
              <Typography variant="h5" component="div">
                Get the lyrics, by searching a song
              </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "center" }}>
              <form onSubmit={(e) => findTrack(dispatch, e)}>
                <TextField
                  id="search-bar"
                  className="text"
                  // onInput={(e) => {
                  //   // setSearchQuery(e.target.value);
                  // }}
                  onChange={(e) => {
                    setTrackTitle(e.target.value);
                  }}
                  label="Song title..."
                  variant="outlined"
                  placeholder="Search..."
                  value={trackTitle}
                  size="small"
                />
                <IconButton type="submit" aria-label="search">
                  <FaSearch style={{ fill: "#1976d2" }} />
                </IconButton>
              </form>
            </CardActions>
          </Card>
        );
      }}
    </Consumer>
  );
}
