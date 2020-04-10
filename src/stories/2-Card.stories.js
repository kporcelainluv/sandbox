import React from "react";
import "../index.css";

import { Card } from "../components/Card";
export const Default = () => (
  <Card
    description="Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even
others for their massive size."
    date={"23 september"}
    time={"21:11"}
    hashtags={"#helloWorld"}
  />
);

export default {
  title: "Card"
};
