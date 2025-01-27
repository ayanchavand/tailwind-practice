import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      {/*Centering a div using flex*/}
      <div className="flex justify-center items-center h-screen">
        <div className="text-center space-y-4 p-4 m-4">
          <h1 className="bg-amber-200 text-8xl ">TITLE</h1>
          <h2 className="bg-amber-200 text-2xl">SUBheading</h2>
          <button className="btn-primary">
            hii
          </button>

          <p className="font-bold text-3xl leading-relaxed">asdfsda askdfhsdjk</p>
        </div>
      </div>
    </>
  );
}

export default App;
