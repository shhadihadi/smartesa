import React from "react"

const Head = () => {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/SmartESABooster', '_blank');
  }
  const handleinstaClick = () => {
    window.open("https://www.instagram.com/smart.esa/", '_blank');
  }
  const handleTwitterClick = () => {
    window.open("https://twitter.com/smart_esa", '_blank');
  }
  const handleYouTubeClick = () => {
    window.open("https://www.youtube.com/@smartesa7734", '_blank');
  }
  const handleLinkInClick = () => {
    window.open("https://www.linkedin.com/company/smart-esa/", '_blank');
  }

  
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>SMART</h1>
            <h1 style={{paddingLeft:'17px',marginTop:"-12px",}}>ESA</h1>
            {/* <span>ONLINE EDUCATION & LEARNING</span> */}
          </div>

          <div className='social'>
            <a onClick={handleFacebookClick}><i className='fab fa-facebook-f icon'></i></a>
            <a onClick={handleinstaClick}><i className='fab fa-instagram icon'></i></a>
            <a onClick={handleTwitterClick}><i className='fab fa-twitter icon'></i></a>
            <a onClick={handleLinkInClick}><i className='fab fa-linkedin icon'></i></a>
            <a onClick={handleYouTubeClick}><i className='fab fa-youtube icon'></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
