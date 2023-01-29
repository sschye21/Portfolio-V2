import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link';
import { IconContext } from "react-icons";

export default function ScrollDown () {

    const [showButton, setShowButton] = React.useState(false);
    
    React.useEffect(() => {
        // for reloading of page
        window.pageYOffset === 0 ? setShowButton(true) : setShowButton(false)
        window.addEventListener("scroll", () => {
            window.pageYOffset === 0 ? setShowButton(true) : setShowButton(false)
        });
    }, []);

    return (
        <>
            {showButton && (
                <div className='fadeHeader'>
                    <HashLink smooth to="#about">
                        <IconContext.Provider value={{ className: "text-emerald-300"}}>
                            <BsFillArrowDownCircleFill
                                className="lg:fixed lg:left-1/2 lg:bottom-5 lg:animate-bounce lg:visible invisible"
                                size="2.5em"
                            />
                        </IconContext.Provider>
                    </HashLink>
                </div>
            )}
        </>
        
    )
}
