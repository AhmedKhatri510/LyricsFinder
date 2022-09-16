import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Navbar() {
  return (
    <AppBar style={{ position: "relative", textAlign: "center" }}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          Lyrics Finder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
