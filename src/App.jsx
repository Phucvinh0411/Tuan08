import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SideBar from "./component/SideBar";
import Header from "./component/Header";
import MainContent from "./component/MainContent";
import DetailReport from "./component/DetailReport";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-between w-full">
        <div className="h-full sidebar w-[20%]">
          <SideBar />
        </div>
        <div className="content w-[80%] h-full">
          <Header/>
          <MainContent/>
          <DetailReport/>
        </div>
      </div>
    </>
  );
}

export default App;
