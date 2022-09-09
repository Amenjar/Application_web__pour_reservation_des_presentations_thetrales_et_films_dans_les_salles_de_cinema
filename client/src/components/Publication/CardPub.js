import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import logo from "../logo.png";
import { getCurrent } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import {
  deletePublication,
  editPublication,
} from "../../redux/actions/pubAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #001f3f",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

export default function CardPub({ pub }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = React.useState(pub.title);
  const [description, setDescription] = React.useState(pub.description);
  const [price, setPrice] = React.useState(pub.price);
  const [picture, setPicture] = React.useState(pub.picture);
  const [rate, setRate] = React.useState(pub.rate);
  const [nb_place, setNb_place] = React.useState(pub.nb_place);
  const [date, setDate] = React.useState(pub.date);

  React.useEffect(() => {
    dispatch(getCurrent());
  }, []);
  const user = useSelector((state) => state.AuthReducer.user);

  return (
    <Card
      style={{
        marginTop: "20px",
        marginLeft: "10px",
        boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "600px",
        width: "345px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={pub.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pub.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pub.desc} <br />
          {pub.date} <br />
          <h3>Place : {pub.nb_place}</h3>
          <div style={{ display: "flex" }}>
            <div style={{ fontSize: "30px" }}>{pub.price}</div>
            <h3 style={{ marginTop: "0px", marginLeft: "5px" }}>TND</h3>
          </div>
          <Rating name="read-only" value={pub.rate} readOnly />
        </Typography>
      </CardContent>
      <CardActions>
        {user._id === pub.userId ? (
          <div style={{ marginRight: "5px" }}>
            <Button
              size="small"
              style={{ backgroundColor: "#001f3f" }}
              onClick={handleOpen}
            >
              Edit
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box
                sx={style}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <img src={logo} alt="logo" style={{ width: "200px" }} />
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <TextField
                    id="standard-basic"
                    label="title"
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                  <TextField
                    id="standard-basic"
                    label="desc"
                    variant="standard"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                  <TextField
                    id="standard-basic"
                    label="Price"
                    variant="standard"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                  <TextField
                    id="standard-basic"
                    label="photo"
                    variant="standard"
                    onChange={(e) => setPicture(e.target.value)}
                    value={picture}
                  />
                  <TextField
                    id="standard-basic"
                    label="Rate"
                    variant="standard"
                    onChange={(e) => setRate(e.target.value)}
                    value={rate}
                  />
                  <TextField
                    id="standard-basic"
                    label="place"
                    variant="standard"
                    onChange={(e) => setNb_place(e.target.value)}
                    value={nb_place}
                  />
                  <TextField
                    id="standard-basic"
                    label="date"
                    variant="standard"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                  />
                  <Button
                    style={{
                      backgroundColor: "#001f3f",
                      color: "white",
                      marginTop: "15px",
                      marginLeft: "10px",
                      width: "200px",
                    }}
                    onClick={() =>
                      dispatch(
                        editPublication(pub._id, {
                          title,
                          description,
                          price,
                          picture,
                          rate,
                          nb_place,
                          date,
                        })
                      )
                    }
                  >
                    Edit
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </div>
        ) : null}

        {user._id === pub.userId ? (
          <Button
            size="small"
            style={{ backgroundColor: "#001f3f" }}
            onClick={() => dispatch(deletePublication(pub._id))}
          >
            Delete
          </Button>
        ) : null}
      </CardActions>
    </Card>
  );
}
