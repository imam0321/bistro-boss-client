import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import pizzasImg from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      {/* menu cover */}
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        details={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        title="dessert"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={dessertImg}
        items={desserts}
      ></MenuCategory>
      {/* soups menu items */}
      <MenuCategory
        title="soup"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={soupsImg}
        items={soups}
      ></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
        title="salad"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={saladsImg}
        items={salads}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        title="pizza"
        details="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={pizzasImg}
        items={pizzas}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
