import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete';
import './Tabela.css'

const colunas: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'titulo', headerName: 'Título', align: 'center', headerAlign: 'center', width: 130 },
  { field: 'data', headerName: 'Data', align: 'center', headerAlign: 'center', width: 130 },
  { field: 'categoria', headerName: 'Categoria', align: 'center', headerAlign: 'center', width: 130 },
  { 
    field: 'opcoes', 
    headerName: 'Opções',
    headerAlign: 'center',
    width: 150,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '0.5rem' }}>
        <IconButton color='primary'>
          <EditIcon />
        </IconButton>
        <IconButton color='error'>
          <DeleteIcon />
        </IconButton>
      </div>
    )
  }
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
    <div className="bg-tabela">
      <DataGrid 
        rows={linhas}
        columns={colunas}
        initialState={{ pagination: { paginationModel }}}
        pageSizeOptions={[5, 10]}
        sx={{
          '& .MuiDataGrid-columnContainer': {
            backgroundColor: 'var(--card-bg)'
          },
          '& .MuiDataGrid-cell': {
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text)'
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text)'
          },
          '& .MuiTablePagination-root': {
            color: 'var(--text)',
          },
        }}
        />
    </div>
  )
}
