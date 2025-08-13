import { createRoot } from 'react-dom/client'
// main.jsx
import { HelmetProvider } from 'react-helmet-async';

import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<HelmetProvider><App /></HelmetProvider>);

