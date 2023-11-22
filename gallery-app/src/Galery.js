//gallery-app//

import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
    const images = [{
        id: 1,
        imagesrc: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8fA%3D%3D'

    }
        , {
        id: 2,
        imagesrc: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    }
        , {
        id: 3,
        imagesrc: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D'

    }
        , {
        id: 4,
        imagesrc: 'https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D'

    }
        , {
        id: 5,
        imagesrc: 'https://replicate.delivery/mgxm/0958ab0c-8d26-45f8-a5f1-a27a1f2259cc/baby.jpg'

    }
        , {
        id: 6,
        imagesrc: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    }
        , {
        id: 7,
       imagesrc:'https://photoscissors.com/images/samples/3-before.jpg'
    }
        ,
    {
        id: 8,
        imagesrc:'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_1280.jpg'
    }
        , {
        id: 9,
        imagesrc:'https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'
    }
        , {
        id: 10,
        imagesrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwK_441XjMRGJuvD88BI0b4r8zb9cF_QRaw&usqp=CAU'
    }
        , {
        id: 11,
        imagesrc:'https://images.ctfassets.net/hrltx12pl8hq/qGOnNvgfJIe2MytFdIcTQ/429dd7e2cb176f93bf9b21a8f89edc77/Images.jpg'
    }
        , {
        id: 12,
        imagesrc:'https://www.lifewire.com/thmb/nABgUWcLKd6QW8g-0mRjYl2Vjeo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-fix-it-when-whatsapp-images-and-videos-arent-showing-in-gallery-cd3fbdebb44d4e659b7f867ac0541884.jpg'
    }
        , {
        id: 13,
        imagesrc:'https://spaceplace.nasa.gov/gallery-sun/en/solar-flare.en.jpg'
    }
        , {
        id: 14,
        imagesrc:'https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6'
    }
        ,
        
    ]
    const [model, setModel] = useState(false);
    const [tembImage, setTembImage] = useState('');

    const getImg = (imagesrc) => {
        console.log('Image clicked:', imagesrc);
        setTembImage(imagesrc);
        setModel(true);
    };

    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tembImage} alt="" />
                <CloseIcon onClick={()=>{setModel(false)}} />
            </div>
            <div className="gallery">
                {images.map((x, index) => (
                    <div className="pics" key={index} onClick={() => getImg(x.imagesrc)}>
                        <img src={x.imagesrc} alt="" style={{ width: '100%' }} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery
