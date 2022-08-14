import React from 'react'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import { HashLink } from 'react-router-hash-link';
import { IconContext } from "react-icons";

export default function ScrollDown () {

    const [showButton, setShowButton] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    return (
        <>
            {showButton && (
                <HashLink smooth to="#about">
                    <IconContext.Provider value={{ className: "text-emerald-300"}}>
                        <BsFillArrowDownCircleFill 
                            className="lg:fixed lg:left-1/2 lg:bottom-5 lg:animate-bounce lg:visible invisible" 
                            size="2.5em" 
                        />
                    </IconContext.Provider>
                </HashLink>
            )}
        </>
        
    )
}
