import React from "react";
import { AppContext } from "./App";

export const Block = () => {
  return (
    <AppContext.Consumer>
      {value => (
        <div
          style={{
            height: "200px",
            width: "200px",
            backgroundColor: value.color,
            margin: "20px 0"
          }}
        >
          <h2
            style={{
              color: "yellow",
              margin: "0"
            }}
          >
            Hello world! {value.color}
          </h2>
        </div>
      )}
    </AppContext.Consumer>
  );
};
