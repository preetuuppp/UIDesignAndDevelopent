import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const data = [
    {
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      name: "Md Nasir",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://ucarecdn.com/d8ebbd7a-5790-4afc-86f1-60d8e2f60011/-/crop/face/200px200p/-/scale_crop/550x550/center/",
      name: "Rohit Bhati",
      description:
        "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pradeep Kumar",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/1*BEY7PZ3z0p6hxKLjYRdyvw.png",
      name: "Surjit Kumar",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo",
      name: "Md Nasir",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      name: "Md Nasir",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      name: "Md Nasir",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
    {
      image:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      name: "Md Nasir",
      description:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional service...",
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mt-20">
        <Slider {...settings} S>
          {data.map((e) => (
            <div className="bg-white h-[300px] w-[300px] text-black rounded-xl card-border">
              <div className="rounded-t-xl flex justify-start p-4">
                <img src={e.image} alt="" className="h-20 w-20 rounded-full" />
                <p className="text-lg m-3">{e.name}</p>
              </div>

              <div className="flex flex-col justify-cente items-center gap-4 p-4">
                <p>{e.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CardSlider;
