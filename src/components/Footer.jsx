import Search from "./Search"
import Button from "./Button"

function Footer() {
    //? Change the height of the footer by changing the pixel's size
    return (
        <div className="relative h-[500px] bg-veryDarkBlue"
            style={{
                clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"
            }}>
            <div className="relative h-[calc(100vh+500px)] -top-[100vh]">
                <div className="sticky top-[calc(100vh-500px)] h-[500px]">
                    <FooterContent />
                </div>
            </div>
        </div >
    )
}

function FooterContent() {
    return (
        <div className="h-full relative flex flex-col-reverse lg:flex-row justify-evenly items-center">
            <div className="flex flex-col justify-evenly h-fit gap-12 lg:gap-24">
                <img src="./images/logo-white.svg" alt="logo" className="" />
                <ul className="flex gap-4">
                    <li><img src="./images/icon-facebook.svg" alt="facebook" className="fill-stone-200" /></li>
                    <li><img src="./images/icon-youtube.svg" alt="facebook" /></li>
                    <li><img src="./images/icon-twitter.svg" alt="facebook" /></li>
                    <li><img src="./images/icon-pinterest.svg" alt="facebook" /></li>
                    <li><img src="./images/icon-instagram.svg" alt="facebook" /></li>
                </ul>
            </div>
            {/* Grid to be used */}
            <ul className="grid grid-rows-4 grid-cols-2 gap-4 gap-x-24 xl:gap-x-56 text-white [&_li]:cursor-pointer">
                <li className="hover:text-red">Home</li>
                <li className="hover:text-red">Careers</li>
                <li className="hover:text-red">Pricing</li>
                <li className="hover:text-red">Community</li>
                <li className="hover:text-red">Products</li>
                <li className="hover:text-red">Privacy Policy</li>
                <li className="hover:text-red">About Us</li>
            </ul>
            <div className="flex gap-4">
                <Search />
                <Button>Go</Button>
            </div>
            <div className="absolute bottom-2 text-darkGrayishBlue">Copyright {new Date().getFullYear()}. All Rights Reserved</div>
        </div>
    )
}

export default Footer
