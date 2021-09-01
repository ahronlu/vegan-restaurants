import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { alpha, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#212121" }}>
        <Toolbar>
          <Link href="/">
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              style={{ cursor: "pointer" }}
            >
              VF
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
