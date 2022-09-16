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

export default function Search() {
  return (
    <Consumer>
      {(value) => {
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
              <form>
                <TextField
                  id="search-bar"
                  className="text"
                  // onInput={(e) => {
                  //   // setSearchQuery(e.target.value);
                  // }}
                  label="Song title..."
                  variant="outlined"
                  placeholder="Search..."
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
