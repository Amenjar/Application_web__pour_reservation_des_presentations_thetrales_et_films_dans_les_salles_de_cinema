import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteuser, getuserApp } from "../../redux/actions/authAction";
import { Avatar, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useEffect } from "react";

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

export default function TableofUser() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getuserApp());
  }, [dispatch]);

  const rows = useSelector((state) => state.AuthReducer.usersApp);
  return (
    <TableContainer component={Paper} style={{ marginTop: "5px" }}>
      {console.log(rows)}
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>List of userApp</StyledTableCell>
            <StyledTableCell>Photo</StyledTableCell>
            <StyledTableCell align="right">name</StyledTableCell>
            <StyledTableCell align="right">Adress Email</StyledTableCell>
            <StyledTableCell align="right">Nom Salle</StyledTableCell>
            <StyledTableCell align="right">
              Numéro de carte d'identité
            </StyledTableCell>

            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.map((row, i) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell component="th" scope="row">
                  {i + 1}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Avatar alt={row.name} src={row.pic} />
                </StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.nomSalle}</StyledTableCell>
                <StyledTableCell align="right">{row.cin}</StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(deleteuser(row._id))}
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
