import React from "react";
const randomId = Math.floor(Math.random() * 100)

const Phonetics = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return (
            <>
              <div key={randomId} className="text-capitalize fs-5 text-center">
                {value.phonetic}
              </div>
            </>
          );
      })}
    </>
  );
};

export default Phonetics