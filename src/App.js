import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio"
import SobreMim from "./paginas/SobreMim"
import Post from "./componentes/Post";
import PostPage from "./paginas/PostPage";

export default function App() {

  const params = useParams();
  console.log(params);

  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/sobremim' element={<SobreMim />} />
        <Route path='*' element={<div> <h1>  Error404 - Not Found </h1> </div>}/>
        <Route path='posts/:id' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}
