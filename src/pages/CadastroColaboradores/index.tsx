import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import FormularioCadastroColaborador from '../../components/FormularioCadastroColaborador';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


interface Props {
    token: any
}

export default function CadastroColababoradores({ token }: Props) {
  const navegar = useNavigate();

  return (
    <Box>
      <FormularioCadastroColaborador token={token} />
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        endIcon={<KeyboardBackspaceIcon />}
        onClick={() => navegar(-1)} />
    </Box>
  );
}