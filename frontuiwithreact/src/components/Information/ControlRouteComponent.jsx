import Information from "./Information";
import { Routes, Route } from "react-router-dom";
import EditInfo from "./Edit";
const ControlComponent = () => {
  return (
      <>
        <Routes>
            <Route path="/" element={<Information />}></Route>
            <Route path="/about" element={<Information />}></Route>
            <Route path="/about/edit" element={<EditInfo />}></Route>
            <Route path="/science" element={<Information />}></Route>
            <Route path="/science/edit" element={<EditInfo />}></Route>
            <Route path="/achievement" element={<Information />}></Route>
            <Route
            path="/achievement/edit"
            element={<EditInfo />}
            ></Route>
        </Routes>           
      </>
  )
}

export default ControlComponent