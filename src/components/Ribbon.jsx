import Button from "./Button"

function Ribbon() {
    return (
        <div className="mt-40 px-20 py-28 bg-red relative overflow-hidden flex flex-col lg:flex-row justify-between gap-10 items-center">
            <img
                src="./images/bg-simplify-section-desktop.svg"
                alt="illustration"
                className="hidden absolute top-0 right-0 lg:block"
            />

            <img
                src="./images/bg-simplify-section-mobile.svg"
                alt="illustration"
                className="block absolute top-12 left-0 lg:hidden"
            />

            <h3 className="z-20 text-5xl lg:text-4xl w-full lg:w-4/12 text-white text-center lg:text-left">Simplify how your team works today</h3>
            <Button backgroundColor="bg-veryLightGray" textColor="text-red">
                Get Started
            </Button>
        </div >
    )
}

export default Ribbon
