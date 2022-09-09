import React from "react";
import { useDispatch } from "react-redux";
import { updateReservation } from "../../../redux/actions/resvAction";
import EditIcon from "@mui/icons-material/Edit";
import logo from "../../logo.png";
const {
  Modal,
  Typography,
  MenuItem,
  Button,
  InputLabel,
  Select,
  IconButton,
} = require("@mui/material");
const { Box } = require("@mui/system");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModUser({ row }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [mode_payement, setModePayement] = React.useState("");

  return (
    <div>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon></EditIcon>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: "white" }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <img src={logo} alt="logo" style={{ width: "200px" }} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <InputLabel
              id="demo-simple-select-standard-label"
              style={{ marginTop: "20px", width: "50px" }}
            >
              mode_payement
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={mode_payement}
              onChange={(e) => setModePayement(e.target.value)}
              label="mode_payement"
              style={{ width: "200px" }}
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={"en present"}>en present</MenuItem>
              <MenuItem value={"en ligne"}>en ligne</MenuItem>
            </Select>
            <Button
              size="small"
              style={{
                backgroundColor: "#001f3f",
                width: "200px",
                height: "50px",
                marginTop: "10px",
              }}
              onClick={() => {
                dispatch(updateReservation(row._id, { mode_payement }));
                handleClose();
              }}
            >
              Edit
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default ModUser;
