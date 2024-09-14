import { motion } from "framer-motion"


function ToggleCard() {
    return (

        <motion.div

            className="mt-10 py-10 lg:hidden absolute w-4/5 top-20 left-1/2 transform -translate-x-1/2 m-auto flex flex-col justify-around items-center gap-10 bg-white font-bold text-veryDarkBlue rounded-xl border-2 shadow-2xl"
        >
            <p>Pricing</p>
            <p>Product</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Community</p>
        </motion.div>
    )
}


export default ToggleCard
