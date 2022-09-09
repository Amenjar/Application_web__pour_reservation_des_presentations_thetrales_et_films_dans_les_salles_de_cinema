import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { getonesalle } from "../../redux/actions/salleAction";
import { Link } from "react-router-dom";

export default function CardSalleUser({ salle }) {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getonesalle(salle._id));
  }, [dispatch]);

  return (
    <Link to={`/Profile/salle/${salle._id}`}>
      <Card
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          height: "365px",
        }}
        onClick={() => dispatch(getonesalle(salle._id))}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={salle.pic}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {salle.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {salle.desc} <br />
            <br />
            {salle.lieu}
          </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Link>
  );
}
