import React from "react";
import "./Uploaded_data_list.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import banana1 from "./img/labeling_img/banana1.jpg";
import banana2 from "./img/labeling_img/banana2.jpg";
import banana3 from "./img/labeling_img/banana3.jpg";
import banana4 from "./img/labeling_img/banana4.jpg";
import banana5 from "./img/labeling_img/banana5.jpg";
import banana6 from "./img/labeling_img/banana6.jpg";
import banana7 from "./img/labeling_img/banana7.jpg";
import banana8 from "./img/labeling_img/banana8.jpg";
import banana9 from "./img/labeling_img/banana9.jpg";
import banana10 from "./img/labeling_img/banana10.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1300,
    margin: "auto",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 350,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function PinnedSubheaderList() {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={<li />}>
      <ul className={classes.ul} className="banana_list">
        <li className="bananas">
          <div className="banana_set">
            <img id="banana_img" src={banana1}></img>
            <div>banana1.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana2}></img>
            <div className="banana_name">banana2.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana3}></img>
            <div className="banana_name">banana3.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana4}></img>
            <div className="banana_name">banana4.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana5}></img>
            <div className="banana_name">banana5.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana6}></img>
            <div className="banana_name">banana6.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            <img id="banana_img" src={banana7}></img>

            <div className="banana_name">banana7.jpg</div>
          </div>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana8}></img>
            <div className="banana_name">banana8.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana9}></img>
            <div className="banana_name">banana9.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
        <li className="bananas">
          <div className="banana_set">
            {" "}
            <img id="banana_img" src={banana10}></img>
            <div className="banana_name">banana10.jpg</div>
          </div>

          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </li>
      </ul>
    </List>
  );
}
