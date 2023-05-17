import React, { Component } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News";
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API;
state={
  progress:0
}
setProgress=(progress)=>{

  this.setState({progress:progress})
}
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar />
          <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} />
          <Routes>
            {/* <h1>{this.setprogress}</h1> */}
          <Route  path="/" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="general" category="general"/>} />
          <Route  path="/business" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="business" category="business"/>} />
          <Route  path="/entertainment" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="entertainment" category="entertainment"/>} />
          <Route  path="/health" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="health" category="health"/>} />
          <Route  path="/science" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="science" category="science"/>} />
          <Route  path="/sports" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="sports" category="sports"/>} />
          <Route  path="/technology" element={<News  setProgress={this.setProgress} apikey={this.apikey}  key="technology" category="technology"/>} />
                    
          </Routes>
        </BrowserRouter>

   
      </>
    );
  }
}
