import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Cover from "../../Shared/Cover/Cover";
import detailImg from "../../../assets/home/banner.jpg";
import ContactPhone from "../../Shared/ContactPhone/ContactPhone";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../../Order/OrderTab/OrderTab";
import { Link } from "react-router-dom";

const Home = () => {
  const [menu] = useMenu();
  const offers = menu.filter(item => item.category === 'offered');
  const offerItems = offers.slice(0, 3);
  return (
    <div>
      <Helmet>
        <title>Bistro | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Cover
        img={detailImg}
        title={"Bistro Boss"}
        details={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
        }
      ></Cover>
      <PopularMenu></PopularMenu>
      <ContactPhone></ContactPhone>
      <SectionTitle subHeading={"Should Try"} heading={"CHEF RECOMMENDS"}></SectionTitle>
      <OrderTab items={offerItems}></OrderTab>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
