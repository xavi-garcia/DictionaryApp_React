import React from "react";

const randomId = Math.floor(Math.random() * 100)

const PartOfSpeech = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
            return (
                <>
                  <li key={randomId}className="text-capitalize fs-5 text-start" id="partOfSpeech">
                    {meaning.partOfSpeech}
                  </li>
                </>
              );
        });
      })}
    </>
  );
};

export default PartOfSpeech