import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

export const Scanner = () => {
    const [link, setLink] = useState('No result')

    const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
    const productID = urlParams.get('productID')

    const handleScan = data => {
        if (data) {
            setLink(data)
        }
    }
    if(link!=="No result"){
        let newLink = link + '&productID=' + productID 
        window.open(newLink, "_self");
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
                        style={{ height: 400, width: 400 }}
                    />
                </div>
            </center>
      </div>
    );
  }
  
  export default Scanner;
  