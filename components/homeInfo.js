import React from 'react'
import '../App.css'
import SignIn from './signIn';
import { ReactComponent as MySVG } from './Infinity-loader.svg';

function homeInfo() {

    const images = [
        { src: 'https://res.cloudinary.com/dlapobd0l/image/upload/v1690984225/communication_1_xsxim1.jpg', alt: 'Tower' },
        { src: 'https://res.cloudinary.com/dlapobd0l/image/upload/v1691225750/communication_2_zzx9i3.jpg', alt: 'peoples' },
        { src: 'https://res.cloudinary.com/dlapobd0l/image/upload/v1691225493/communication_3_h2s7cp.jpg', alt: 'peoples' },
        { src: 'https://res.cloudinary.com/dlapobd0l/image/upload/v1691224986/communication_4_rmewjp.jpg', alt: 'peoples' },
        { src: 'https://res.cloudinary.com/dlapobd0l/image/upload/c_scale,h_2625,q_48,w_3969/v1690984226/communication_5_fwo2rc.jpg', alt: 'peoples' },
      ];

      let imgLoad = ['']
      images.forEach((img) => {
        img.onLoad = () => {
          imgLoad.push('done');
          console.log('done')
        };
      });

      const mainImages = images.slice(0, 2); // First two images
      const stackImages = images.slice(2, 5); // Next three images

  return (
    <div className='home'>
      {Array.isArray(images) && imgLoad.length >= 0 ? (
        <div>
          <div className='homeInfo'>
            <h1>Helping you connect with <br /> like-Minded people.</h1>
            <p>With <b>the CHAd APP</b>, find, build and Manage your Niche Community<br /> as a Member, Influencer, or the Leader.</p>
            <SignIn />
          </div>
          <div className='homeVisuals'>
            {mainImages.map((image, index) => (
              <img key={index} loading='lazy' src={image.src} alt={image.alt} />
            ))}
            <div className='homeVisaualsStack'>
              {stackImages.map((image, index) => (
                <img key={index} loading='lazy' src={image.src} alt={image.alt} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='loader-container'><MySVG /></div>
      )}
    </div>
  )
  
}

// (
//   <div className='home'>
//     {Array.isArray(images) && images.length > 0 ?
//     <div>
//     <div className='homeInfo'>
//         <h1>Helping you connect with <br></br> like-Minded people.</h1>
//         <p>With <b>the CHAd APP</b>, find, build and Manage your Niche Community<br></br> as a Member, Influencer or the Leader.</p>
//         <SignIn/>
//     </div>
//     <div className='homeVisuals'>
//       {/* {images.map((image, index) => (
//         <img loading='lazy' key={index} src={image.src} alt={image.alt} />
//       ))} */}
//       <img loading='lazy' src={images[0].src} alt={images[0].alt}/>
//       <img loading='lazy' src={images[1].src} alt={images[1].alt}/>
//       <div className='homeVisaualsStack'>
//         <img loading='lazy' src={images[3].src} alt={images[3].alt}/>
//         <img loading='lazy' src={images[2].src} alt={images[2].alt}/>
//         <img loading='lazy' src={images[4].src} alt={images[4].alt}/>
//       </div>
//     </div>
//     </div>
//     : <div className='loader-container'><MySVG/></div>}
//   </div>

export default homeInfo