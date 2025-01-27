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
        <div className="text-center p-6 w-lg h-44 bg-slate-400 rounded-2xl border shadow-md ">
          <h1>Name</h1>
        </div>
      </div>
    </>
  );
}

export default App;
