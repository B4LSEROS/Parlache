import React, {useState, useEffect} from 'react';
import './bannerEstilo.css';

function BannerPrincipal(){
    const [anchoActual, setAncho] = useState(false);

    function actualizarBanner() {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 29) {
            setAncho(true);
        }
        else {
            setAncho(false);
        }
        window.addEventListener('scroll', actualizarBanner);

    };

    useEffect(() => {
        actualizarBanner();

        return () => {
            window.removeEventListener('scroll', actualizarBanner)
        }
    }, []);

    return(
        <div className='banner' style={{width: anchoActual ? "80%" : "90%",
        transform: anchoActual ? "translate(25%)" : "none",
        }}>
            <video controls autoPlay loop muted width="100%" height="100%">

                <source src= "/El Zarco.mp4" type="video/mp4"   />

            </video>

        </div>
    )

};

export default BannerPrincipal;
