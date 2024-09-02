import React from 'react';
import ReactDOM from 'react-dom';
import Youtube from './youtube';
function MyYoutube()
{
  return(
    <div>
      <Youtube/>
    </div>
  )
}
ReactDOM.render(<MyYoutube/>,document.getElementById("root"));