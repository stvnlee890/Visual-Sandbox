import { Route, Routes } from "react-router-dom"
import DummyData from "./components/DummyData"
import { Home } from "./components/Home"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/dummy' element={<DummyData />} />
      </Routes>
    </>
  )
}

export default App
