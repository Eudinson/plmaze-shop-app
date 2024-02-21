import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { theme } from './theme/theme.ts'
import { ThemeProvider } from '@mui/material'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './states/store.ts'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PersistGate>
  </Provider>
)
