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
import { getCurrent } from "../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { deleteSalle, editSalle } from "../../redux/actions/salleAction";

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

export default function CardSalle({ salle }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState(salle.name);
  const [desc, setDesc] = React.useState(salle.desc);
  const [lieu, setLieu] = React.useState(salle.lieu);
  const [pic, setPic] = React.useState(salle.pic);
  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

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
              EDIT SALLE
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                id="standard-basic"
                label="name"
                variant="standard"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <TextField
                id="standard-basic"
                label="desc"
                variant="standard"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
              />
              <TextField
                id="standard-basic"
                label="lieu"
                variant="standard"
                onChange={(e) => setLieu(e.target.value)}
                value={lieu}
              />
              <TextField
                id="standard-basic"
                label="photo"
                variant="standard"
                onChange={(e) => setPic(e.target.value)}
                value={pic}
              />
              <Button
                style={{
                  backgroundColor: "#001f3f",
                  color: "white",
                  marginTop: "15px",
                  marginLeft: "100px",
                  width: "200px",
                }}
                onClick={() =>
                  dispatch(editSalle(salle._id, { name, desc, lieu, pic }))
                }
              >
                Edit
              </Button>
            </Typography>
          </Box>
        </Modal>

        <Button
          size="small"
          style={{ backgroundColor: "#001f3f" }}
          onClick={() => dispatch(deleteSalle(salle._id))}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
