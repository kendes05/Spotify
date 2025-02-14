import Header from "./components/header"
import Main from "./components/Main"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Artist from "./pages/Artist"
import Artists from "./pages/Artists"
import Songs from "./pages/Songs"
import Song from "./pages/Song"


function App(nome) {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/artists" element={<Artist/>}></Route>
        <Route path="/artist/:id" element={<Artists/>}></Route>
        <Route path="/songs" element={<Songs/>}></Route>
        <Route path="/song/:id" element={<Song/>}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
