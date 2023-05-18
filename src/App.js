import React, {useState} from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
const App=()=>  {
  const apikey=process.env.REACT_APP_NEWS_API;
 const [progress, setProgress] = useState(0)
 
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} />
          <Routes>
    
          <Route  path="/" element={<News  setProgress={setProgress} apikey={apikey}  key="general" category="general"/>} />
          <Route  path="/business" element={<News  setProgress={setProgress} apikey={apikey}  key="business" category="business"/>} />
          <Route  path="/entertainment" element={<News  setProgress={setProgress} apikey={apikey}  key="entertainment" category="entertainment"/>} />
          <Route  path="/health" element={<News  setProgress={setProgress} apikey={apikey}  key="health" category="health"/>} />
          <Route  path="/science" element={<News  setProgress={setProgress} apikey={apikey}  key="science" category="science"/>} />
          <Route  path="/sports" element={<News  setProgress={setProgress} apikey={apikey}  key="sports" category="sports"/>} />
          <Route  path="/technology" element={<News  setProgress={setProgress} apikey={apikey}  key="technology" category="technology"/>} />
                    
          </Routes>
        </BrowserRouter>

   
      </>
    );
 
}
export default App 