import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import FrontPage from './Pages/FrontPage';
import DefaultLayout from './components/Layout/DefaultLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route index element={<FrontPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
