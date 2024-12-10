import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";

import AddTeacher from "./pages/AddTeacher";
import UpdateTeacher from "./pages/UpdateTeacher";
import DeleteTeacher from "./pages/DeleteTeacher";
import FindTeacher from "./pages/FindTeacher";
import ListOfTeachers from "./pages/ListOfTeachers";
import ErrorPage from "./pages/ErrorPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route path="AddTeacher" element={<AddTeacher />}></Route>
          <Route path="UpdateTeacher" element={<UpdateTeacher />}></Route> 
          <Route path="DeleteTeacher" element={<DeleteTeacher />}></Route>    
          <Route path="FindTeacher" element={<FindTeacher />}></Route>   
          <Route path="ListOfTeachers" element={<ListOfTeachers />}></Route> 
          <Route path="*" element={<ErrorPage />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

