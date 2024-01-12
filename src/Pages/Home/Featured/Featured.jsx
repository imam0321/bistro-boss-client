import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
  return (
    <div className="featured-item text-white pt-16 my-20 bg-fixed">
      <SectionTitle
        subHeading={'Check it out'}
        heading={'FROM OUR MENU'}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-24 px-36">
      <div>
        <img src={featuredImg} alt="" />
      </div>
      <div className="md:ml-10">
        <p>March 20, 2023</p>
        <p>WHERE CAN I GET SOME?</p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
        </p>
        <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </div>
      </div>
    </div>
  );
};

export default Featured;