import React from "react";
  
const Antonyms = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
          return meaning.definitions.map((def) => {
            return def.antonyms.map((ant) => {
              return (
                <>
                {ant ? (
                  <li className="text-capitalize fs-5 mx-4 my-2">
                    {ant}
                  </li>
                ) : (
                  <p>Audio not found</p>
                )}
                </>
              );
            });
          });
        });
      })}
    </>
  );
};
  
export default Antonyms;