import React from "react";
import { useRef } from "react";

import PrintIcon from "@mui/icons-material/Print";
import { useReactToPrint } from "react-to-print";

import ComponentToPrint from "./ComponenetToPrint";

const {
  Modal,
  Typography,

  Button,
  IconButton,
} = require("@mui/material");
const { Box } = require("@mui/system");
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,

  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function TicketPrint({ row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <PrintIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} style={{ backgroundColor: "white" }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          ></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ComponentToPrint ref={componentRef} row={row} />
            <Button
              onClick={handlePrint}
              style={{
                marginLeft: "220px",
                backgroundColor: "#001f3f",
                color: "white",
                marginTop: "10px",
                width: "200px",
              }}
            >
              Print
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default TicketPrint;
