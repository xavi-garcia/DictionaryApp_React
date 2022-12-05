import React from "react";
const randomId = Math.floor(Math.random() * 25)

const Significance = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
          return meaning.definitions.map((def) => {
            return (
              <>
                <li key={randomId} className="text-capitalize fs-5 text-start">
                  {def.definition}
                </li>
                <p id="examples" key={randomId} className="text-capitalize fs-5 text-start">
                {def.example}
                </p>
                <hr />
              </>
            );
          });
        });
      })}
    </>
  );
};

export default Significance;