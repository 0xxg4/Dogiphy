import React from 'react';

function RenderGifs({gifs}) {
  return ( 
    <>
      {gifs.map((gif, i) => (
	<div key={i}>
	  <img src={gif.url}/>
	</div>
      ))}
    </>
  );
}

export default RenderGifs;
