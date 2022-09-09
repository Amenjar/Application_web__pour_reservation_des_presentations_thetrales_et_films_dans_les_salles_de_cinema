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
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";
import logo from "../logo.png";

import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";
import { addReservation } from "../../redux/actions/resvAction";
import { getCurrent } from "../../redux/actions/authAction";
import { editPublication } from "../../redux/actions/pubAction";

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

export default function CardPubUser({ pub }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  const userc = useSelector((state) => state.AuthReducer.user);
  const onesalle = useSelector((state) => state.SalleReducer.onesalle);
  const [nom, setNom] = React.useState(userc.name);
  const [num_cin, setNum_cin] = React.useState(userc.cin);
  const [nameOfSalle, setNameOfSalle] = React.useState(onesalle.name);
  const [nomPost, setNomPost] = React.useState(pub.title);
  const [mode_payement, setMode_payement] = React.useState("");
  const [Prix, setPrix] = React.useState(pub.price);
  const [image, setImage] = React.useState(pub.picture);
  const [date, setDatepublication] = React.useState(pub.date);
  const [nb_place, setNb_place] = React.useState(pub.nb_place);

  function editNb_Place() {
    setNb_place(nb_place - 1);
    dispatch(editPublication(pub._id, { nb_place }));
  }

  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        marginTop: "20px",
        marginLeft: "10px",
        boxShadow: "12px 12px 12px 12px rgba(56, 56, 56, 0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={pub.picture}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pub.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {pub.description}
          <br />

          <h3>Date : {pub.date}</h3>

          <h3>Place : {pub.nb_place}</h3>

          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "5px", fontSize: "30px" }}>
              {pub.price}
            </div>
            <h3 style={{ marginTop: "0px", marginLeft: "5px" }}>TND</h3>
          </div>

          <Rating name="read-only" value={pub.rate} readOnly />
        </Typography>
      </CardContent>
      <CardActions>
        {nb_place > 0 ? (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              size="small"
              style={{
                backgroundColor: "#001f3f",
                marginRight: "10px",
                color: "white",
              }}
              onClick={handleOpen}
            >
              new reservation
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
                    label="nom"
                    variant="standard"
                    onChange={(e) => setNom(e.target.value)}
                    value={nom}
                  />
                  <TextField
                    id="standard-basic"
                    label="cin"
                    variant="standard"
                    onChange={(e) => setNum_cin(e.target.value)}
                    value={num_cin}
                  />
                  <TextField
                    id="standard-basic"
                    label="NomSalle"
                    variant="standard"
                    onChange={(e) => setNameOfSalle(e.target.value)}
                    value={nameOfSalle}
                  />
                  <TextField
                    id="standard-basic"
                    label="NomPost"
                    variant="standard"
                    onChange={(e) => setNomPost(e.target.value)}
                    value={nomPost}
                  />

                  <TextField
                    id="standard-basic"
                    label="price"
                    variant="standard"
                    value={Prix}
                  />
                  <TextField
                    id="standard-basic"
                    label="image_pub"
                    variant="standard"
                    value={image}
                  />
                  <TextField
                    id="standard-basic"
                    label="date_pub"
                    variant="standard"
                    value={date}
                  />
                  <InputLabel
                    id="demo-simple-select-standard-label"
                    style={{ marginTop: "20px" }}
                  >
                    mode_payement
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={mode_payement}
                    onChange={(e) => setMode_payement(e.target.value)}
                    label="mode_payement"
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={"en ligne"}>en ligne</MenuItem>
                    <MenuItem value={"en present"}>en present</MenuItem>
                  </Select>
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
                        addReservation(pub._id, {
                          nom,
                          nameOfSalle,
                          nomPost,
                          num_cin,
                          mode_payement,
                          Prix,
                          image,
                          date,
                        })
                      );
                      editNb_Place();
                      handleClose();
                    }}
                  >
                    Reserver
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </div>
        ) : null}
      </CardActions>
    </Card>
  );
}
