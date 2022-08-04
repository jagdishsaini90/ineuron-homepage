import React from "react";
import { Card } from "@mui/material";
import { data } from "./data";
import { Slide } from "react-reveal";
import "./style.scss";

export default function Products() {
  return (
    <div className="Products-container">
      <h1 className="Products-heading">Our Products</h1>
      <div className="Products-row">
        <Slide cascade bottom>
          {data.map((d, i) => {
            return (
              <Card key={i} className="Products-card">
                <a href={d.link}>
                  <img src={d.img} alt="" />
                  <div>
                    <h1>{d.title}</h1>
                    <p>{d.desc}</p>
                  </div>
                </a>
              </Card>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}
