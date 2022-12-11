import React from "react";


const Significance = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
          return meaning.definitions.map((def) => {
            return (
              <>
                <li key={def.definition} className="text-capitalize fs-5 text-start" >
                  {def.definition}
                </li>
                <p id="examples" key={def.example} className="text-capitalize fs-5 text-start">
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