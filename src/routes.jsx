import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
