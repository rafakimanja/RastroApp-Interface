import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Tabela.css'

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [
  { id: 1, titulo: "Item 1", data: "2025-06-16", categoria: "Financeiro" },
  { id: 2, titulo: "Item 2", data: "2025-06-15", categoria: "Pessoal" },
  { id: 3, titulo: "Item 3", data: "2025-06-14", categoria: "Trabalho" },
  { id: 4, titulo: "Item 4", data: "2025-06-13", categoria: "Outros" },
  { id: 5, titulo: "Item 5", data: "2025-06-12", categoria: "Financeiro" },
  { id: 6, titulo: "Item 6", data: "2025-06-11", categoria: "Trabalho" },
  { id: 7, titulo: "Item 7", data: "2025-06-10", categoria: "Lazer" },
];

export default function Tabela() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align='center'>Titulo</StyledTableCell>
            <StyledTableCell align='center'>Data</StyledTableCell>
            <StyledTableCell align='center'>Categoria</StyledTableCell>
            <StyledTableCell align="right">Options</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align='center'>{row.titulo}</StyledTableCell>
              <StyledTableCell align='center'>{row.data}</StyledTableCell>
              <StyledTableCell align='center'>{row.categoria}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton color='primary'>
                  <EditIcon />
                </IconButton>
                <IconButton color='error'>
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

