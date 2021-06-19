import React, {useState} from 'react'
import QrScan from 'react-qr-reader'

function QRscanner() {

    const [qrscan, setQrscan] = useState('No result');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    if(qrscan!=="No result"){ 
        window.open(qrscan, "_blank");
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
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>
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
  