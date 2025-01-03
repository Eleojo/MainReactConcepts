import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Products from "./pages/Products";
import { createContext, useState } from "react";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

export const userContext = createContext();
function App() {
  const [username, setUsername] = useState("guest");
  return (
    // <BrowserRouter>
    //   <Nav />

    //   <Routes>
    //     <Route path="/" element={<Homepage />} />
    //     <Route path="/Products/:id" element={<Products />} />
    //     <Route path="/Dashboard" element={<Dashboard />}>
    //       <Route path="Profile" element={<Profile />} />
    //       <Route path="Settings" element={<Settings />} />
    //     </Route>
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </BrowserRouter>
    <div>
      <userContext.Provider value={{ username, setUsername }}>
        <Login />
        <Checkout />
      </userContext.Provider>
    </div>
  );
}

export default App;
