/*! **********************************************************************************************
 * This is the Layout component for the application.
 * The component imports several other components including Home, SelectSex, RecordVideo, SelectAge, AssistPage, Camera, and LanguageBtn.
 * The component uses the React Router to create different routes for each component.
 *
 *
 * Abbott Copywrite 2023
 ************************************************************************************************/
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../homepage";
import HomePages from "../HomePages";
const Layout = () => {

  const location = useLocation();

  return (
    <>
      <Routes location={location}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomePages />} />
      </Routes>
    </>
  );
};

export default Layout;
