import React from "react";

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
};

export const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
};

export const stringNewLine = str => {
  const splitStr = str.split("\n").map(line => {
    return (
      <span>
        {line}
        <br />
      </span>
    );
  });
  return splitStr;
};
