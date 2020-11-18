import React from "react";
import "./Uploaded_data_list.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { RESTURL } from "../services/common";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxHeight: "100%",
    maxWidth: 1300,
    marginTop: 20,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "scroll"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  }
}));

export default function PinnedSubheaderList({ uploadImageList, setIndex }) {
  const classes = useStyles();

  const renderList = (item, index) => {
    return (
      <li className="bananas">
        <button
          style={{ backgroundColor: "white", borderWidth: 0 }}
          onClick={() => setIndex(index)}
        >
          <div className="banana_set">
            <img id="banana_img" src={RESTURL + "/" + item.path}></img>
            <span style={{ fontSize: 12 }}>
              {item.path.replace("upload/images/", "")}
            </span>
          </div>
        </button>
      </li>
    );
  };

  return (
    <List className={classes.root} subheader={<li />}>
      <ul className={classes.ul} className="banana_list">
        {uploadImageList.map((item, index) => renderList(item, index))}
      </ul>
    </List>
  );
}
