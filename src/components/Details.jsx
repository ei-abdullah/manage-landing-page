import Button from "./Button";

function Details() {
    return (
        <section className="relative">
            <img
                src="./images/bg-tablet-pattern.svg"
                alt="illustration"
                className="hidden absolute overflow-clip -left-[46rem] top-[16rem] -z-10 md:block"
            />
            <div className="flex flex-col gap-12 justify-evenly items-center lg:items-start lg:flex-row lg:gap-0">
                <div className=" flex flex-col justify-center items-center w-11/12 lg:w-2/5 lg:block ">
                    <h2 className="lg:w-[26rem] text-4xl font-bold text-veryDarkBlue"> What's different about Manage?</h2>
                    <p className="text-left sm:text-center md:text-left text-darkGrayishBlue pt-10 lg:w-[22rem]">
                        Manage provides all the functionality your team needs, without the
                        complexity. Our software is tailor-made for modern digital product
                        teams.
                    </p>
                </div>
                <div className="w-full px-4 sm:w-2/3 lg:w-2/5 flex flex-col gap-8">
                    <div className="flex">
                        <Button hover={false}>01</Button>
                        <div className="pl-6">
                            <h2 className="text-veryDarkBlue text-xl font-bold pt-2">Track company-wide progress</h2>
                            <p className="text-darkGrayishBlue pt-4 w-11/12 max-w-96 text-left md:text-justify">
                                See how your day-to-day tasks fit into the wider vision. Go from
                                tracking progress at the milestone level all the way done to the
                                smallest of details. Never lose sight of the bigger picture
                                again.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <Button hover={false}>02</Button>
                        <div className="pl-6">
                            <h2 className="text-veryDarkBlue text-xl font-bold pt-2"> Advanced built-in reports</h2>
                            <p className="text-darkGrayishBlue pt-4 w-11/12 max-w-96 text-left md:text-justify">
                                Set internal delivery estimates and track progress toward
                                company goals. Our customisable dashboard helps you build out
                                the reports you need to keep key stakeholders informed.
                            </p>
                        </div>
                    </div>
                    <div className="flex">
                        <Button hover={false}>03</Button>
                        <div className="pl-6">
                            <h2 className="text-veryDarkBlue text-xl font-bold pt-2">Everything you need in one place</h2>
                            <p className="text-darkGrayishBlue pt-4 w-11/12 max-w-96 text-left md:text-justify">
                                Stop jumping from one service to another to communicate, store
                                files, track tasks and share documents. Manage offers an
                                all-in-one team productivity solution.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Details;
