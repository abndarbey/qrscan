import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

function QRscanner() {

    const [link, setLink] = useState('No result');
    const handleScan = data => {
        if (data) {
            setLink("http://" + data)
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
            </center>
            <p>{link}</p>
      </div>
    );
  }
  
  export default QRscanner;
  