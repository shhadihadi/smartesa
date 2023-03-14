import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import AboutUs from "./pages/About us/AboutUs";
import International from "./pages/InternationalPrograms/International";
import Community from "./pages/Commuinty/Commuinty"
import Events from './pages/Events/Events'
import SmartTalk from './pages/smartTalk/SmartTalk'
import ContactUs from './pages/ContactUs/Contact'
import Apply from "./pages/ApplyNow/Apply";
import FAQ from './pages/FAQ/FAQ'
import AboutEdit from "./pages/About us/AboutEdit";
import FaqEdit from "./pages/FAQ/FaqEdit";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            
            
            <Route path="aboutus">
              <Route index element={<AboutUs />} />
             
            </Route>
            <Route path="international">
              <Route index element={<International />} />
             
            </Route>
            <Route path="community">
              <Route index element={<Community />} />
             
            </Route>
            <Route path="events">
              <Route index element={<Events />} />

              </Route>
            <Route path="smartTalk">
              <Route index element={<SmartTalk />} />

              </Route>
            <Route path="contactUs">
              <Route index element={<ContactUs />} />

              </Route>
            <Route path="apply">
              <Route index element={<Apply />} />

              </Route>
            <Route path="faq">
              <Route index element={<FAQ />} />
             
              </Route>
            <Route path="/aboutEdit/:id">
              <Route index element={<AboutEdit />} />
               {/* <Route path='/aboutedit/:aboutid' element={<AboutEdit />}></Route> */}

               </Route>
            <Route path="/faqEdit/:id">
              <Route index element={<FaqEdit />} />

            
            </Route>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
