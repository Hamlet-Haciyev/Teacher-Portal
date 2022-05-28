import "./App.css";
import Education from "./components/Education";
import ControlRouteComponent from "./components/Information/ControlRouteComponent";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-lg-4 col-md-12 col-sm-12"
              style={{ padding: "0px" }}
            >
              <div className="brandBlue">
                <ControlRouteComponent />
              </div>
            </div>
            <div
              className="col-lg-8 col-md-12 col-sm-12"
              style={{ padding: "0px" }}
            >
              <div
                className=""
                style={{
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  height: "100vh",
                }}
              >
                <div className="">
                  <Navbar />
                </div>
                <Education />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
