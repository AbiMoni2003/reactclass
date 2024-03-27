import * as htmlToImage from 'html-to-image';


import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
function Download(){
 
  const ref = useRef("Abi")

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
   
    return(
        <div>
           <div ref={ref}>

  <p>YouTube is a global online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.</p>
        

           </div>
          <>
      
      <button onClick={onButtonClick}>Click me</button>
    </>
        </div>
    );
}
export default Download;