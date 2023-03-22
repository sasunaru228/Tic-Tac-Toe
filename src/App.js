import Authorization from "./Authorization/Authorization";
import {Routes, Route, useNavigate} from "react-router-dom";
import {MainPage} from "./MainPage/MainPage";
import {useEffect} from "react";

function App() {

    let navigate = useNavigate();
    useEffect(() => {
       localStorage.getItem('name') !== null
           ? navigate('/main')
           : navigate('/')
    }, [navigate])

  return (
    <>
      <Routes>
          <Route path="/" element={<Authorization/>} />
          <Route path="/main" element={<MainPage/>}/>
      </Routes>
    </>
  );
}

export default App;
