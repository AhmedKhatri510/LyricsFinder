import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Moment from "react-moment";
export default function Lyrics() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState({
    lyrics_body: "",
  });
  const [track, setTrack] = useState({
    track: {
      track_name: "",
      artist_name: "",
      album_id: "",
      primary_genres: {
        music_genre_list: [{ music_genre: { music_genre_name: "" } }],
      },
      explicit: null,
      updated_time: "",
    },
  });

  const getData = async () => {
    await axios
      .get(
        `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(async (res) => {
        console.log(res);

        setLyrics({ lyrics_body: res.data.message.body.lyrics.lyrics_body });
        // console.log(res.data.message.body.lyrics.lyrics_body);
        console.log(lyrics);

        return await axios.get(
          `https://fast-dawn-89938.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then((res) => {
        setTrack({ track: res.data.message.body.track });
        console.log("hello track" + track.track.track_name);
        console.log(Object.keys(track.track).length);
        // setLyrics({ lyrics_body: res.data.message.body.lyrics.lyrics_body });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);

  if (lyrics.lyrics_body === "" || Object.keys(track.track).length === 0)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        <CircularProgress disableShrink />
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          backgroundColor: "#1976d2",
          color: "white",
          padding: "3px 8px",
          alignSelf: "flex-start",
          margin: "20px",
        }}
      >
        Go back
      </Link>
      <Card
        sx={{ minWidth: 275 }}
        style={{ padding: "20px", margin: "0 20px 40px 20px" }}
      >
        <CardActions
          style={{ backgroundColor: "#D3D3D3", justifyContent: "center" }}
        >
          <h5>
            {track.track.track_name} by {track.track.artist_name}
          </h5>
        </CardActions>
        <CardContent>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontSize: 14, fontWeight: "700" }}
            color="text.primary"
            gutterBottom
          >
            {lyrics.lyrics_body}
          </Typography>
        </CardContent>
        <hr />
        <CardActions style={{ flexDirection: "column" }}>
          <h5>Album Id: {track.track.album_id}</h5>

          <h5>
            Song Genre:{" "}
            {
              track.track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name
            }
          </h5>
          <h5>Explicit Words: {track.track.explicit === 0 ? "No" : "Yes"}</h5>
          <h5>
            Release Date:{" "}
            <Moment format="DD/MM/YYYY">{track.track.updated_time}</Moment>
          </h5>
        </CardActions>
      </Card>
    </div>
  );
}
