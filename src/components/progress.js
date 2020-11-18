import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { stringNewLine } from "./utils";
import Gate from "./gate.js";
import { getRandomArbitrary } from "./utils.js";
import { TRAIN_LOG } from "./constants.js";
import { slice, isEmpty } from "lodash";
import Chart from "chart.js";
let myChart;
const lossMax = getRandomArbitrary(2.5, 5.0);
const lossMin = getRandomArbitrary(0.1, 0.5);
let currentLoss = lossMax;

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
  value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
  root: {
    width: "100%"
  }
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
  const chartRef = useRef();
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const logStr = stringNewLine(TRAIN_LOG);
  const [count, setCount] = useState(0);
  const [chartLabel, setChartLabel] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (myChart) {
      myChart.destroy();
    }
    const chart_ctx = chartRef.current.getContext("2d");
    const barChartBackgroundColor = chart_ctx.createLinearGradient(
      0,
      300,
      0,
      0
    );
    barChartBackgroundColor.addColorStop(1, "#779cf7");
    barChartBackgroundColor.addColorStop(0.5, "#4263eb");
    barChartBackgroundColor.addColorStop(0, "#4263eb");

    myChart = new Chart(chart_ctx, {
      type: "line",
      data: {
        datasets: [
          {
            backgroundColor: barChartBackgroundColor,
            borderColor: barChartBackgroundColor,
            data: chartData,
            hitRadius: 10,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false,
                zeroLineColor: "#F0F0F0"
              },
              ticks: {
                display: true,
                fontSize: 10,
                fontColor: "#333333"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 10,
                fontColor: "#333333",
                suggestedMin: lossMin,
                suggestedMax: lossMax
              }
            }
          ]
        },
        legend: {
          display: false
        }
      }
    });
  }, [chartData]);

  useEffect(() => {
    const trainTime = getRandomArbitrary(20, 30);
    let timer = null;
    if (isActive) {
      timer = setTimeout(() => {
        const addProgress = getRandomArbitrary(0, 100 / (trainTime * 10));
        setProgress(prevProgress =>
          prevProgress >= 100 ? 100 : prevProgress + addProgress
        );
        if (count <= 495) {
          setCount(count => count + 10);
        } else {
          setCount(count => count + 1);
        }
        if (count >= 495 && count % 10 === 0) {
          const change = getRandomArbitrary(-0.05, 0.01);
          console.log("currentLoss : ", currentLoss);
          currentLoss = currentLoss + change;
          setChartLabel(prev => [...prev, count]);
          setChartData(prev => [...prev, currentLoss]);
        }
      }, 100);
    } else if (!isActive && progress > 100) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, progress]);
  return (
    <div>
      <div className={classes.root}>
        <LinearProgressWithLabel value={progress} />
      </div>
      <div>
        {progress >= 100 ? (
          <div className="ending_section">
            <div className="ending_ment">학습이 완료되었습니다.</div>
            <Gate />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        <canvas ref={chartRef} id="chart" />
      </div>
      <div style={{ maxHeight: 500, overflow: "auto" }}>
        {slice(logStr, 0, count)}
      </div>
    </div>
  );
}
