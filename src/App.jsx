import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { Login } from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          // Outlet
          <Route path={"/"} element={<MainLayout />}>
            <Route index={true} element={<Home />} />
            <Route path={"contact"} element={<Contact />} />
            <Route path={"products"} element={<Products />} />
            <Route path={"login"} element={<Login />} />
            <Route path={"/*"} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
