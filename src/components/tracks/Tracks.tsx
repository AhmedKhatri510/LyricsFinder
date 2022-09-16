import { Consumer } from "../../context";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import Track from "./Track";
import { Container, Grid } from "@mui/material";

export default function Tracks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
      }}
    >
      <Consumer>
        {({ track_list, heading }) => {
          // console.log(value);

          if (track_list.length === 0)
            return <CircularProgress disableShrink />;
          else
            return (
              <div>
                <Container sx={{ py: 8 }} maxWidth="md">
                  <h1 style={{ textAlign: "center" }}>{heading}</h1>
                  {/* End hero unit */}
                  <Grid container spacing={4}>
                    {track_list.map((track: any) => {
                      console.log(track);
                      return <Track track={track.track} />;
                    })}
                  </Grid>
                </Container>
              </div>
            );
        }}
      </Consumer>
    </div>
  );
}
