/* eslint-disable react/no-unescaped-entities */

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

const testimonials = [
    {
        id: crypto.randomUUID(),
        image: './images/avatar-anisha.png',
        name: "Anisha Li",
        review: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."
    },
    {
        id: crypto.randomUUID(),
        image: './images/avatar-ali.png',
        name: "Ali Bravo",
        review: "We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused."
    },
    {
        id: crypto.randomUUID(),
        image: './images/avatar-richard.png',
        name: "Richard Watts",
        review: "Manage allows us to provide structure and process. It keeps us organized and focused.I can't stop recommending them to everyone I talk to!"
    },
    {
        id: crypto.randomUUID(),
        image: './images/avatar-shanai.png',
        name: "Shanai Gough",
        review: "Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive."
    }
]



export default function Testimonials() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 4
                }
            }
        ]
    };

    return (
        <div className="flex flex-col justify-center items-center gap-20">
            <h2 className="lg:w-[26rem] text-4xl font-bold text-veryDarkBlue text-center">What they've said</h2>
            <div className={`slider-container w-4/5 m-auto `}>
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            testimonial={testimonial}
                            key={testimonial.id}
                        />
                    ))}
                </Slider>
            </div>
            <Button>
                Get Started
            </Button>
        </div>
    )
}

function TestimonialCard({ testimonial }) {
    const { image, name, review } = testimonial;
    return (
        <div className="mx-4 mt-12 relative bg-veryLightGray m-4 h-64">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 m-auto">
                <img src={image} alt={name} className="size-20" />
            </div>
            <div className="mt-2 w-full h-full relative">
                <div className="text-veryDarkBlue font-bold text-center pt-12">{name}</div>
                <div className="text-darkGrayishBlue text-center absolute top-[40%] px-4">"{review}"</div>
            </div>
        </div>
    );
}



