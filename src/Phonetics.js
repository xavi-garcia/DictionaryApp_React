import React from "react";
const randomId = Math.floor(Math.random() * 25)

const Phonetics = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return (
            <>
              <div key={randomId} className="text-capitalize fs-5 text-start">
                {value.phonetic}
              </div>
            </>
          );
      })}
    </>
  );
};

export default Phonetics