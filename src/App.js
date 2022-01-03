import './App.css';
import TodoAdd from './components/TodoAdd';
import { Typography, Container, Box, Paper } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Paper elevation={3}>
          <Box bgcolor="primary.main">
            <Typography variant="h4" style={{ color: 'white', textAlign: 'center' }}>Todo List</Typography>
          </Box>
          <TodoAdd />
        </Paper>
      </Container>
    </div>
  );
}

export default App;
