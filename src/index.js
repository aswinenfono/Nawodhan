import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { QueryClient, QueryClientProvider } from 'react-query';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={2}
      preventDuplicate
      action={(snackbarId) => (
        <IconButton size='small' color="inherit" onClick={() => closeSnackbar(snackbarId)}>
          <HighlightOffIcon sx={{ fontSize: 20 }} />
        </IconButton>
      )}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SnackbarProvider>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
