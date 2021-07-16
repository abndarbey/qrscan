import React, {useState} from 'react'
import QrScan from 'react-qr-reader'
import ProfileUi from 'react-profile-card'
import Loader from "react-loader-spinner"
// import WINE from "../asset/img/wine.jpg"

function QRscanner() {

    const [link, setLink] = useState('Scanning...')
    const [scanner, setScanner] = useState(false)

    const queryString = window.location.search
	const urlParams = new URLSearchParams(queryString)
    const productID = urlParams.get('productID')

    const handleScan = data => {
        if (data) {
            setLink(data + '&productID=' + productID)
        }
    }

    if(link!=="Scanning..."){ 
        setScanner(true)
        setTimeout(() => {
            window.open(link, "_self");
        }, 3000);
        
    }
    const handleError = err => {
        console.error(err)
    }

    const previewStyle = {
        height: "100%",
        width: "100%",
      }
    return (  
      <div style={{ minHeight:"100vh"}}> 
          <h3 >BLOCKCHAIN AUTHENTICATION</h3>        
            <center>
                <div style={{marginTop:10}}>
                    <QrScan
                        delay={300}
                        onError={handleError}
                        onScan={handleScan}
                        showViewFinder={false}
                        style={previewStyle}
                        resolution={600}
                    />
                </div>
                
                <div style={{zIndex:9, width:"100%",height: "100%",position: "absolute",top:400,left: 0,opacity: 0.8}}>
                    {!scanner? 
                <div>   
                    <Loader type="Puff" color="rgb(255, 255, 255)" height={80} width={80} />
                    <a href={link} style={{color: '#FFF',textDecoration: 'none'}}>{link}</a>
                </div>
                :
                <ProfileUi 
                        imgUrl='https://genesis.flatworldinfotech.com/api/files/?id=fffae589-db9f-4aea-b6ac-d20c6e84caac'
                        name='Wine' 
                        designation='BlockChain Closed' 
                        height={70} width={70}
                    />}
                </div>
            </center>
      </div>
    );
  }
  
  export default QRscanner;
  