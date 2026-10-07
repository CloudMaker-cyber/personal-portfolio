import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// 字体自托管：打包进项目，不走第三方 CDN，也不会有外链请求阻塞首屏
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
