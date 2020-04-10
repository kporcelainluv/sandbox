import React from "react";
import { Card } from "./components/Card";

export const App = () => {
  return (
    <div className="container">
      <Card
        description="Read redux article"
        date={"11 april"}
        time={"13:00"}
        hashtags={"#interview"}
      />
    </div>
  );
};
