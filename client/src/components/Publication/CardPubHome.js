import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { Rating } from "@mui/material";

export default function CardPubHome({ pub }) {
  return (
    <Card
      style={{
        marginTop: "20px",
        marginLeft: "10px",
        boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "250px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={pub.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pub.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "5px", fontSize: "30px" }}>
              {pub.price}
            </div>
            <h3 style={{ marginTop: "0px", marginLeft: "5px" }}>TND</h3>
          </div>

          <Rating name="read-only" value={pub.rate} readOnly />
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
