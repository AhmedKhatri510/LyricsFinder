import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { GiMusicalNotes, GiMusicSpell, GiPlayButton } from "react-icons/gi";

import { FC } from "react";

interface trackProps {
  track: any;
}

const Track: FC<trackProps> = ({ track }): JSX.Element => {
  console.log(track);
  return (
    <Grid item key={track.track_id} xs={12} sm={6} md={4}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {track.artist_name}
          </Typography>
          <Typography>
            <strong>
              <GiPlayButton /> Track
            </strong>
            : {track.track_name}
          </Typography>
          <Typography>
            <strong>
              <GiMusicSpell /> Album
            </strong>
            : {track.album_name}
          </Typography>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#1976d2",
          }}
        >
          {/* <Button size="small">View</Button>
          <Button size="small">Edit</Button> */}
          <Link
            to={`lyrics/track/${track.track_id}`}
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <GiMusicalNotes /> <strong>Goto Lyrics</strong>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Track;
