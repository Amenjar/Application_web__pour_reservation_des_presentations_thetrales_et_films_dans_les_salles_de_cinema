import * as React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CheckIcon from "@mui/icons-material/Check";

import ClearIcon from "@mui/icons-material/Clear";

import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";

import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCurrent } from "../../../redux/actions/authAction";
import {
  deleteReservation,
  getReservation,
} from "../../../redux/actions/resvAction";
import ModUser from "./ModelUser";
import TicketPrint from "./TicketPrint";
import ModalPayment from "./ModalPayment";
//import ComponentToPrint from './ComponenetToPrint';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableofReservationUser() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  const user = useSelector((state) => state.AuthReducer.user);

  const rows = useSelector((state) => state.ResvReducer.reservations);

  return (
    <TableContainer component={Paper} style={{ marginTop: "5px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>List of Reservation</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>
            <StyledTableCell align="right">Payement</StyledTableCell>
            <StyledTableCell align="right">Nom Post</StyledTableCell>
            <StyledTableCell align="right">
              Numéro de carte d'identité
            </StyledTableCell>
            <StyledTableCell align="right">Etat</StyledTableCell>
            <StyledTableCell align="right">delete</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Payer(10$)</StyledTableCell>
            <StyledTableCell align="right">Print</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .filter((el) => el.userId === user._id)
              .map((row, i) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell component="th" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.nom}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.mode_payement}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.nomPost}</StyledTableCell>
                  <StyledTableCell align="right">{row.num_cin}</StyledTableCell>
                  {row.etat === "validé" ? (
                    <StyledTableCell align="right">
                      <CheckIcon style={{ color: "green" }}></CheckIcon>{" "}
                    </StyledTableCell>
                  ) : row.etat === "non validé" ? (
                    <StyledTableCell align="right">
                      <ClearIcon style={{ color: "red" }}></ClearIcon>{" "}
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="right">
                      <MoreTimeOutlinedIcon></MoreTimeOutlinedIcon>{" "}
                    </StyledTableCell>
                  )}

                  {row.etat === "en attente" || row.etat === "non validé" ? (
                    <StyledTableCell align="right">
                      <IconButton
                        aria-label="delete"
                        onClick={() => dispatch(deleteReservation(row._id))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="right"></StyledTableCell>
                  )}

                  {row.etat === "en attente" || row.etat === "non validé" ? (
                    <StyledTableCell align="right">
                      <ModUser row={row} />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="right"></StyledTableCell>
                  )}
                  {row.etat === "en attente" &&
                  row.mode_payement === "en ligne" ? (
                    <StyledTableCell align="right">
                      <ModalPayment></ModalPayment>
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="right"></StyledTableCell>
                  )}

                  {row.etat === "validé" ? (
                    <StyledTableCell align="right">
                      <TicketPrint row={row} />
                    </StyledTableCell>
                  ) : (
                    <StyledTableCell align="right"></StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
