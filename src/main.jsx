import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { 
  createBrowserRouter,
  routerProvider,
  Route,
  Link 
} from 'react-router-dom'
import HomePage from './routes/HomePage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import SinglePostPage from './routes/SinglePostPage.jsx'
import WritePage from './routes/WritePage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'

// create router
// Add routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomePage />
    ),
  },
  {
    path:"/posts",
    element: <PostListPage />
  },
  {
    path:"/slug",
    element: <SinglePostPage />
  },
  {
    path:"/write",
    element: <WritePage />
  },
  {
    path:"/login",
    element: <LoginPage />
  },
  {
    path:"/register",
    element: <RegisterPage />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
