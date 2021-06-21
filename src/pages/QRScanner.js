import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

export const Scanner = () => {
    const [link, setLink] = useState('No result')
    const [showButton, setShowButton] = useState(false)

    const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
    const productID = urlParams.get('productID')

    const handleScan = data => {
        if (data) {
            setLink(data + '&productID=' + productID )
            setShowButton(true)
        }
    }

    // if(link !== "No result") {
    //     window.open(link, "_self");
    // }
    const handleError = err => {
        console.error(err)
    }
    
    return (
      <div>            
            <center>
                <div style={{marginTop:30}}>
                    <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        style={{ height: 400, width: 400 }}
                    />
                </div>
                {showButton? <button href={link}>Open Link</button> : <p>No Result</p>}
            </center>
      </div>
    );
  }
  
  export default Scanner;
  