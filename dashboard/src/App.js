import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

import "./style/dark.scss";

import List from "./pages/list/List";
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
import Methotology from "./pages/Methotolgy/methotology"
import UpdateformMetho from "./pages/Methotolgy/updatemetho/updateformMetho";
import Createmetho from "./pages/Methotolgy/createmetho/Createmetho";
import Allinone from "./pages/headsAll/Allinone";
import Updatecardinter from "./pages/InternationalPrograms/cards/updatecarditer/updatecardinter";
import CreateIntroCard from "./pages/InternationalPrograms/cards/updatecarditer/CreateIntroCard";
import ArticleEdit from "./pages/Events/ArticleEdit";
import AddArticles from "./pages/Events/AddArticles"
import Createcom from "./pages/Commuinty/crud/Creatcom";
import Updatecom from "./pages/Commuinty/crud/Updatecom";
import Internationalid from "./pages/InternationalPrograms/internationalid";
import ComunityById from "./pages/Commuinty/ComunityById";
import Subscribe from'./pages/subscribe/Subscribe'
import AboutHomeEdit from './pages/About us/AboutHomeEdit'
import EditEventHome from "./pages/Events/EditEventHome";
import EditContact from "./pages/ContactUs/EditContact";
import AddTeam from "./pages/headsAll/AddTeam";
import EditTeamProfile from "./pages/headsAll/EditTeamProfile";
import UpdateMainPics from "./pages/list/UpdateMainPics";
import SmartEditVideo from "./pages/smartTalk/SmartEditVideo";
import CreateVideo from "./pages/smartTalk/CreateVideo";
import SmartVideo from "./pages/smartTalk/SmartVideo";
import SmartEdit from "./pages/smartTalk/SmartEdit";
import ApplyById from "./pages/ApplyNow/ApplyById";
import FaqCreate from "./pages/FAQ/FaqCreate";
import Login from"./pages/login/Login";


import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

function App() {
  const { user } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

            <Route index  path="/" element={!user ? <Login /> : <Navigate to="/products" />} />
            <Route index path="/login" element={!user ? <Login /> : <Navigate to="/products" />} />
            <Route path="/products" element={user ? <List /> : <Navigate to="/login" />}/>
            <Route index path="/international" element={user ? <International /> : <Navigate to="/login" />}/>

            <Route index path="/community" element={user ? <Community /> : <Navigate to="/login" />}/>
            <Route index path="/faqCreate" element={user ? <FaqCreate /> : <Navigate to="/login" />}/>
            <Route index path="/events" element={user ? <Events /> : <Navigate to="/login" />}/>
            <Route index path="/smartTalk" element={user ? <SmartTalk /> : <Navigate to="/login" />}/>
            <Route index path="/contactUs" element={user ? <ContactUs /> : <Navigate to="/login" />}/>
            <Route index path="/methotology" element={user ? <Methotology /> : <Navigate to="/login" />}/>

            <Route index path="/international/:id" element={user ? <Internationalid /> : <Navigate to="/login" />}/>
            <Route index path="/updateMainPics/:id" element={user ? <UpdateMainPics /> : <Navigate to="/login" />}/>
            <Route index path="/applyById/:id" element={user ? <ApplyById /> : <Navigate to="/login" />}/>
            <Route index path="/comunity/:id" element={user ? <ComunityById /> : <Navigate to="/login" />}/>
            <Route index path="/metho/new" element={user ? <Createmetho /> : <Navigate to="/login" />}/>
            <Route index path="/allinnone" element={user ? <Allinone /> : <Navigate to="/login" />}/>
            <Route index path="/apply" element={user ? <Apply /> : <Navigate to="/login" />}/>
            <Route index path="/faq" element={user ? <FAQ /> : <Navigate to="/login" />}/>
            <Route index path="/aboutEdit/:id" element={user ? <AboutEdit /> : <Navigate to="/login" />}/>
            <Route index path="/aboutHomeEdit/:id" element={user ? <AboutHomeEdit /> : <Navigate to="/login" />}/>
            <Route index path="/smartEditVideo/:id" element={user ? <SmartEditVideo /> : <Navigate to="/login" />}/>
            <Route index path="/MethoEdit/:id" element={user ? <UpdateformMetho /> : <Navigate to="/login" />}/>
            <Route index path="/editEventHome/:id" element={user ? <EditEventHome /> : <Navigate to="/login" />}/>
            <Route index path="/createVideo" element={user ? <CreateVideo /> : <Navigate to="/login" />}/>
            <Route index path="/smartEdit/:id" element={user ? <SmartEdit /> : <Navigate to="/login" />}/>
            <Route index path="/editContact/:id" element={user ? <EditContact /> : <Navigate to="/login" />}/>
            <Route index path="/updateCard/:id" element={user ? <Updatecardinter /> : <Navigate to="/login" />}/>
            <Route index path="/updateCommers/:id" element={user ? <Updatecom /> : <Navigate to="/login" />}/>
            <Route index path="/intro/new" element={user ? <CreateIntroCard /> : <Navigate to="/login" />}/>
            <Route index path="/team/new" element={user ? <AddTeam /> : <Navigate to="/login" />}/>
            <Route index path="/updateTeam/:id" element={user ? <EditTeamProfile /> : <Navigate to="/login" />}/>
            <Route index path="/createcom" element={user ? <Createcom /> : <Navigate to="/login" />}/>
            <Route index path="/faqEdit/:id" element={user ? <FaqEdit /> : <Navigate to="/login" />}/>
            <Route index path="/articleEdit/:id" element={user ? <ArticleEdit /> : <Navigate to="/login" />}/>
            <Route index path="/addArticles" element={user ? <AddArticles /> : <Navigate to="/login" />}/>
            <Route index path="/smartVideo" element={user ? <SmartVideo /> : <Navigate to="/login" />}/>
            <Route index path="/subscribe" element={user ? <Subscribe /> : <Navigate to="/login" />}/>
            <Route index path="/AboutUs" element={user ? <AboutUs /> : <Navigate to="/login" />} />

            
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
