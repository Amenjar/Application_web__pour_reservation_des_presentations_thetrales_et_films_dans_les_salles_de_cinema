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
import MoreTimeOutlinedIcon from "@mui/icons-material/MoreTimeOutlined";
import ClearIcon from "@mui/icons-material/Clear";

import { useDispatch, useSelector } from "react-redux";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteReservation,
  getReservation,
} from "../../../redux/actions/resvAction";
import Mod from "./Modal";

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

export default function TableofReservationUserApp() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);

  const salle = useSelector((state) => state.SalleReducer.onesalle);

  const rows = useSelector((state) => state.ResvReducer.reservations);
  console.log(rows);
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
            <StyledTableCell align="right">etat</StyledTableCell>
            <StyledTableCell align="right">Validation/Non</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows
              .filter((el) => el.nameOfSalle === salle.name)
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

                  <StyledTableCell align="right">
                    <Mod row={row} />
                  </StyledTableCell>

                  <StyledTableCell align="right">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        console.log(row._id);
                        dispatch(deleteReservation(row._id));
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
