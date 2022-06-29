import { Box, Container } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'nome', headerName: 'Nome', width: 350 },
];

export default function DataGridColaborador() {
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/login/obter_colaboradores/')
      .then(resposta => {
        setColaboradores(resposta.data.colaboradores);
      })
      .catch(erro => {
        console.log(erro);
      });
  }, []);
  return (
    <Box
      sx={{
        width: '100%',
        height: 300,
      }}
    >
      <DataGrid
        rows={colaboradores}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        editMode={'row'}
        disableSelectionOnClick={true} />
    </Box>
  );
}