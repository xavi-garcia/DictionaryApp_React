import React from "react";
  
const Synonym = ({ mean }) => {
  return (
    <>
      {mean.map((value) => {
        return value.meanings.map((meaning) => {
          return meaning.definitions.map((def) => {
            return def.synonyms.map((paraphrase) => {
              return (
                <>
                  <li key={paraphrase} className="text-capitalize fs-5 mx-4 my-2">
                    {paraphrase}
                  </li>
                </>
              );
            });
          });
        });
      })}
    </>
  );
};
  
export default Synonym;