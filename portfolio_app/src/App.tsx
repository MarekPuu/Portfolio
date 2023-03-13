import { useState } from 'react';
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import Talous from './Pages/Talous';
import DefaultLayout from './components/Layout/DefaultLayout/DefaultLayout';
import DefaultHouseHold from './Pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<DefaultHouseHold />}>
        <Route path="/household/:id/" element={<Talous />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
