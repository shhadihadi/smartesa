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
import SmartVideo from "./pages/smartTalk/SmartVideo";
import Subscribe from'./pages/subscribe/Subscribe'




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
              <Route path="methotology">
              <Route index element={<Methotology />} />

              </Route>

              <Route path="international/:id">
              <Route index element={<Internationalid />} />

              </Route>

              <Route path="comunity/:id">
              <Route index element={<ComunityById />} />

              </Route>
              <Route path="allinnone">
              <Route index element={<Allinone />} />

              </Route>
              <Route path="/metho/new">
              <Route index element={<Createmetho />} />

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
               <Route path="/MethoEdit/:id">
              <Route index element={<UpdateformMetho />} />
               {/* <Route path='/aboutedit/:aboutid' element={<AboutEdit />}></Route> */}

               </Route>

               <Route path="/updateCard/:id">
              <Route index element={<Updatecardinter />} />
               </Route>
               
               <Route path="/updateCommers/:id">
              <Route index element={<Updatecom />} />
               </Route>

               <Route path="/intro/new">
              <Route index element={<CreateIntroCard />} />
               </Route>
               <Route path="/createcom">
              <Route index element={<Createcom />} />

              </Route>

            <Route path="/faqEdit/:id">
              <Route index element={<FaqEdit />} />

              </Route>
            <Route path="/articleEdit/:id">
              <Route index element={<ArticleEdit />} />

              </Route>
            <Route path="/addArticles">
              <Route index element={<AddArticles />} />


              </Route>
            <Route path="/smartVideo">
              <Route index element={<SmartVideo />} />


              </Route>
            <Route path="/subscribe">
              <Route index element={<Subscribe />} />
            </Route>
            </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
