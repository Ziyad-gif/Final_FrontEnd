import Home from "./pages/Home";
import Hello from "../src/components/Hello/";
import data from "./utils/constants/indonesia"

function App() {
  return (
    <div>
      {/*
       * Render Halaman Home
       * Jika ingin diubah, maka ubah di Halaman Home.
       */}
      <Home />
      <Hello/>
       <div>

       </div>
    </div>
  );
}

export default App;
