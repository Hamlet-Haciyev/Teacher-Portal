import "./App.css";
import Information from "./components/Information";
import Education from "./components/Education";
import { BrowserRouter as Router ,Link} from "react-router-dom";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState("");
  
  // useEffect(() => {
  //   handleOnclick()
  // }, [])
  
  const handleOnclick = (e) => {
    let element = e.target.parentElement.className == "about__section__link" ?  e.target.parentElement :"";
    let firstliElement = document.getElementById("about")
    // firstliElement alternativ varianti asagidakidi
    // let firstliElement = e.target.parentElement.parentElement.firstChild;
    firstliElement.classList.remove("active")

    // if (e.target.parentElement.classList.contains("about__section__link") || e.target.classList.contains("about__section__link")) {
    //   if (data != "") {
    //     data.classList.remove("active")
    //   }
    // } else {
    // }

    setData(element)
    if (data!="") {
      data.classList.remove("active")
    }
    
    if (element) {
       element.classList.add("active")
    }
    
  }
  return (
    <>
    <Router>
       <div className="container">
        <div className="row">
          <div className="w-393 brandBlue h-1024">
            <Information />
          </div>
            <div className="w-1069 bg-gray" style={{ paddingTop: "20px", paddingLeft: "20px", paddingRight: "20px" }}>
              <div className="">
                <nav>
                  <ul style={{ display: "flex" }}>
                    <li  className="about__section__link active" id="about" onClick={ (e) => handleOnclick(e) }>
                      <Link to="/about">Haqqinda</Link>
                    </li>
                    <li className="about__section__link" onClick={(e)=>handleOnclick(e) }>
                      <Link to="/science">Elmi isler</Link>
                    </li>
                    <li className="about__section__link" onClick={(e)=>handleOnclick(e) }>
                      <Link to="/achievement">Nailiyyetler</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <Education/>
          </div>
        </div>
      </div>  
    </Router>
    </>
  );
}

export default App;
