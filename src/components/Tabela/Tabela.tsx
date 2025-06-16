import Paper from '@mui/material/Paper'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'

const colunas: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'titulo', headerName: 'Título', width: 130 },
  { field: 'data', headerName: 'Data', width: 100 },
  { field: 'categoria', headerName: 'Categoria', width: 130 },
];

const linhas = [
  { id: 1, titulo: "Item 1", data: "2025-06-16", categoria: "Financeiro" },
  { id: 2, titulo: "Item 2", data: "2025-06-15", categoria: "Pessoal" },
  { id: 3, titulo: "Item 3", data: "2025-06-14", categoria: "Trabalho" },
  { id: 4, titulo: "Item 4", data: "2025-06-13", categoria: "Outros" },
  { id: 5, titulo: "Item 5", data: "2025-06-12", categoria: "Financeiro" },
  { id: 6, titulo: "Item 6", data: "2025-06-11", categoria: "Trabalho" },
  { id: 7, titulo: "Item 7", data: "2025-06-10", categoria: "Lazer" },
];

const paginationModel = { page: 0, pageSize: 5 }

export default function Tabela() {
  return(
    <Paper sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={linhas}
        columns={colunas}
        initialState={{ pagination: { paginationModel }}}
        pageSizeOptions={[5, 10]}
       />
    </Paper>
  )
}
