import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import Popup_2 from "./Popup_2.js";
import Gate from "./gate.js";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className={classes.root}>
        <LinearProgressWithLabel value={progress} />
      </div>
      <div>
        {progress >= 100 ? (
          <div className="ending_section">
            <div className="ending_ment">학습이 완료되었습니다.</div>
            {/* <div className="ending_btn__aa">
              <button id="ending_btn" onClick={this.togglePopup.bind(this)}>
                Save
              </button>
              {this.state.showPopup ? (
                <Popup_2 closePopup={this.togglePopup.bind(this)} />
              ) : null}
            </div> */}
            <Gate />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
