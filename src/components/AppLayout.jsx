import { useEffect, useRef, useState } from "react";

import About from "./About";
import Details from "./Details";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Ribbon from "./Ribbon";
import ToggleCard from "./ToggleCard";
import Testimonials from "./Testimonials";

function AppLayout() {
    const cardRef = useRef(null);
    const [toggleMenu, setToggleMenu] = useState(false);
    function handleToggleMenu() {
        setToggleMenu(toggleMenu => !toggleMenu)
    }

    useEffect(function () {
        function handleClickOutside(e) {
            if (cardRef.current && !cardRef.current.contains(e.target) && !e.target.closest('.navbar-toggle')) {
                setToggleMenu(false); // Close the card
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [])


    return (
        <>
            <div className="font-beVietnam">
                <div className="w-full relative">
                    {toggleMenu && (
                        <span ref={cardRef} >
                            <ToggleCard />
                        </span>)}
                    <div className="py-10 lg:py-20 flex flex-col gap-24">
                        <NavBar toggleMenu={toggleMenu} onToggleMenu={handleToggleMenu} />
                        <About />
                        <Details />
                    </div >
                    <Testimonials />
                    <Ribbon />
                    <Footer />

                </div>
            </div>
        </>
    )
}

export default AppLayout
