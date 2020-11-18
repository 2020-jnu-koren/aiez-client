import React from "react";
import "./Uploaded_data_list.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { RESTURL } from "../services/common";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 1300,
    margin: "auto",
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 350
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

export default function PinnedSubheaderList({ uploadImageList }) {
  const classes = useStyles();

  const renderImage = item => {
    const pathSplit = item.path.split("/");
    return (
      <li className="bananas">
        <div className="banana_set">
          <img id="banana_img" src={RESTURL + "/" + item.path}></img>
          <div>{pathSplit[pathSplit.length - 1]}</div>
        </div>

        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </li>
    );
  };

  return (
    <List className={classes.root} subheader={<li />}>
      <ul className={classes.ul} className="banana_list">
        {uploadImageList.map(item => renderImage(item))}
      </ul>
    </List>
  );
}
