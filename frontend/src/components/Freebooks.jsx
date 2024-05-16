import list from "../../public/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
const Freebooks = () => {
  const filteredData = list.filter((data) => {
    return data.category === "Free";
  });
  // console.log(filteredData)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  pb-10">
      <h2 className="font-semibold text-xl pb-2">Free Offered Courses</h2>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptates at in dolore aliquid molestiae.
      </p>
      <div className="slider-container">
        <Slider {...settings}>
          {filteredData.map((item) => {
            return <Card item={item} key={item.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Freebooks;
