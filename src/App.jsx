import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Menubar/>
      </div>
    </>
  );
}

export default App;
