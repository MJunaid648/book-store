import Footer from "../components/Footer";
import list from "../../public/data.json";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pb-4 pt-20">
        <div className=" items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">{"Here! :)"}</span>
          </h1>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit dolore nesciunt eos ipsam nisi aliquam quaerat
            incidunt, dolorum voluptatem molestiae similique voluptates tenetur
            veniam nemo? Ab recusandae doloribus optio totam atque. Accusantium,
            veritatis alias eius expedita iure facere.
          </p>
          <Link to="/" className="btn bg-pink-500 hover:bg-pink-700 text-white duration-200 mt-4">
            Back
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            return <Card className="" item={item} key={item.id} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
