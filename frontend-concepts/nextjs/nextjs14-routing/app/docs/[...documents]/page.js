import React from 'react'

const Docs = ({params}) => {

    console.log(params)

    if (params.documents.length === 2) {
        return (
          <h1>
            Viewing docs for feature {params.documents[0]} and concept {params.documents[1]}
          </h1>
        );
      } else if (params.documents.length === 1) {
        return <h1>Viewing docs for feature {params.documents[0]}</h1>;
      }
      return <h1>Docs home page</h1>;
}

export default Docs