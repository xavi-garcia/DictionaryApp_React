import React from "react";
import Significance from "./Significance.js";
import Synonym from "./Synonyms";
import Antonym from "./Antonyms";
import PartOfSpeech from "./PartOfSpeech";
import Phonetics from "./Phonetics.js";

const randomId = Math.floor(Math.random() * 25)

const Definitions = ({ mean, main, audio }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row theme">
          <div className="col-12 text-center text-capitalize fs-1 fw-bold  mb-4" id="word">
            {main.word}
          </div>
          {audio ? (
            <audio
              controls
              className="color mb-4 text-center col-12"
              src={audio}
            ></audio>
          ) : (
            <div className="color fs-3 text-center" id="notFound">Audio not found</div>
          )}
          <div className="text-start my-3 text-capitalize fs-4 fw-bold">
            Phonetics:
          </div>
          <div id="notFound">
              <Phonetics mean={mean} />
          </div>
          <div className="text-start my-3 text-capitalize fs-4 fw-bold">
            Part Of Speech:
          </div>
          <div id="notFound">
              <PartOfSpeech mean={mean} />
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            Definitions:
          </div>
          <div>
            <ol>
              <Significance  key={randomId} mean={mean} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            Synonyms :
          </div>
          <div>
            <ol key={randomId} className="col-12 li">
              <Synonym mean={mean} />
            </ol>
          </div>
          <div className="col-12 text-start my-3 text-capitalize fs-4 fw-bold">
            Antonyms :
          </div>
          <div>
            <ol key={randomId} className="col-12 li">
              <Antonym mean={mean} />
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Definitions;