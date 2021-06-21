import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

function QRscanner() {

    const [link, setLink] = useState('No result')

    const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
    const productID = urlParams.get('productID')

    const handleScan = data => {
        if (data) {
            setLink(data + '&productID=' + productID)
        }
    }

    if(link!=="No result"){ 
        window.open(link, "_self");
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
                    style={{ height: 500, width: 500 }}
                />
            </div>
            <a href={link}>{link}</a>
            </center>
      </div>
    );
  }
  
  export default QRscanner;
  