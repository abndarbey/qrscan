import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

function QRscanner() {

    const [link, setLink] = useState('No result');
    const handleScan = data => {
        if (data) {
            setLink(data)
        }
    }
    if(link!=="No result"){ 
        window.open(link, "_blank");
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
            {/* <TextareaAutosize
                
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue={qrscan}
                value={qrscan}
            /> */}
      </div>
    );
  }
  
  export default QRscanner;
  