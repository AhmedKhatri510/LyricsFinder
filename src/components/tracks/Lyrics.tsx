import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Lyrics() {
  const { id } = useParams();
  const [lyrics, setLyrics] = useState({});
  const [track, setTrack] = useState({});

  // useEffect(() => {
  //   fetch(
  //     `http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MM_KEY}`
  //   )
  //     .then((res) => {
  //       console.log(res);
  //       // setLyrics(res.message.body.lyrics_body);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  console.log(lyrics);

  return <div>Lyrics</div>;
}
