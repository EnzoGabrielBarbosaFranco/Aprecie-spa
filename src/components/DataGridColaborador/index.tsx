import { Box, Container } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';


export default function DataGridColaborador() {

  const [colaboradores, setColaboradores] = useState([]);
  const navegar = useNavigate();
  const editarColaborador = (id: GridRowId) => () => {
    navegar(`/cadastro/${id}`);
  };

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'nome', headerName: 'Nome', width: 300 },
    { field: 'opcoes',
      headerName: '',
      width: 50,
      editable: false,
      sortable: false,
      filterable: false,
      hideable: false,
      type: 'actions',
      getActions: ({ id }) => {
        return [
          <GridActionsCellItem
            key={id}
            icon={<EditIcon />}
            label="Editar"
            className="textPrimary"
            onClick={editarColaborador(id)}
            color="inherit"
          />
        ];
      }
    }
  ];

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
      sx={{ width: '100%', height: '100%', }}
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