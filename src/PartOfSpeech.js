import React from "react";

const randomId = Math.floor(Math.random() * 25)

const PartOfSpeech = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
            return (
                <>
                  <div key={randomId}className="text-capitalize fs-5 text-start">
                    {meaning.partOfSpeech}
                  </div>
                </>
              );
        });
      })}
    </>
  );
};

export default PartOfSpeech