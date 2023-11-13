import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import LoginPage from "../pages/LoginPage";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
