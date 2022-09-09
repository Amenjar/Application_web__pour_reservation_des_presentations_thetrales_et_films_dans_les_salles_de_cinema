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

import { useDispatch } from "react-redux";
import { addPublication } from "../../redux/actions/pubAction";

import FooterUserApp from "../FooterUserApp";
import { getReservation } from "../../redux/actions/resvAction";
import { Link } from "react-router-dom";
import { getonesalle } from "../../redux/actions/salleAction";

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

export default function CardSalleUserApp({ salle }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    dispatch(getonesalle(salle._id));
  }, [dispatch]);

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState();
  const [picture, setPicture] = React.useState("");
  const [rate, setRate] = React.useState();
  const [nb_place, setNb_place] = React.useState();
  const [nomSalle, setNomSalle] = React.useState(salle.name);
  const [date, setDate] = React.useState();

  return (
    <Card
      style={{
        marginTop: "20px",
        marginLeft: "10px",
        boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "650px",
      }}
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
      <CardActions>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link to="/ProfileUserApp/Reservation">
            {" "}
            <Button
              style={{
                backgroundColor: "#001f3f",
                width: "300px",
                height: "50px",
                marginTop: "100px",
                marginRight: "10px",
              }}
              onClick={() => dispatch(getReservation(salle._id))}
            >
              Reservations
            </Button>
          </Link>
          <Button
            size="small"
            style={{
              backgroundColor: "#001f3f",
              width: "300px",
              height: "50px",
              marginTop: "100px",
            }}
            onClick={handleOpen}
          >
            Add Post
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
                  label="nom Salle"
                  variant="standard"
                  value={nomSalle}
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
                    marginTop: "25px",
                    marginLeft: "10px",
                    width: "200px",
                  }}
                  onClick={() => {
                    dispatch(
                      addPublication(salle._id, {
                        title,
                        description,
                        price,
                        picture,
                        rate,
                        nb_place,
                        nomSalle,
                        date,
                      })
                    );
                    handleClose();
                  }}
                >
                  AddPost
                </Button>
              </Typography>
            </Box>
          </Modal>
        </div>
      </CardActions>
      <FooterUserApp></FooterUserApp>
    </Card>
  );
}
