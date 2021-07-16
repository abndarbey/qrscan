import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

export const Scanner = () => {
    const [link, setLink] = useState('No result')
    // const [showLink, setShowLink] = useState(false)

    const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
    const productID = urlParams.get('productID')

    const handleScan = data => {
        if (data) {
            setLink(data + '&productID=' + productID)
            // setShowLink(true)
        }
    }

    if(link !== "No result") {
        window.location.open(link)
    }
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
                        style={{ height: "100%", width: "100%" }}
                    />
                </div>
                {/* {showLink? <a href={link}>Open Link</a> : <p>No Result</p>} */}
            </center>
      </div>
    );
  }
  
  export default Scanner;
  