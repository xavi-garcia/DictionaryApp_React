import React, { useState, useEffect } from "react";
import Definitions from "./Definitions";

const App = () => {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  const [audio, setAudio] = useState();

  const dataApi = async () => {
    const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const dataJ = await data.json();
    setMean(dataJ);
    setMain(dataJ[0]);
    const url = dataJ[0].phonetics[1].audio;
    setAudio(url);
  };

  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };

  return (
    <>
      <div className="container-fluid" id="main">
        <div className="row" id="main">
          <div className="col-12 text-center fw-bold fs-1 p-3" id="title">
            English Dictionary
          </div>
          <div className="form-floating  py-3 pb-5 d-flex justify-content-center">
            <input
              type="text"
              className="form-control-sm border-0 px-2 col-md-3 col-sm-4"
              placeholder="Type your word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
            <button
              className="btn  text-light col-md-1 col-sm-2 mx-2"
              onClick={Search}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {word === "" ? (
        <Definitions mean={mean} main={main} audio={audio} />
      ) : (
        <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white  extra">
        </div>
      )}
    </>
  );
};

export default App;