import Typography from "../../views/components/typography";
import { HomeDiv, Contact } from "../../styles/styles";
import BurgerMenu from "../../pages/burgerMenu";

const Header = () => {
  return (
    <HomeDiv className=" pl-20 bg-current py-2 w-full">
      <img
        src="image/logo.jpg"
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <div className="flex justify-around w-full max-[740px]:hidden">
        <Typography
          type={"body"}
          color={"dark"}
          className="text-white cursor-pointer mt-2"
        >
          Products
        </Typography>
        <Typography
          type={"body"}
          color={"dark"}
          className="text-white cursor-pointer mt-2"
        >
          UserCases
        </Typography>
        <Typography
          type={"body"}
          color={"dark"}
          className="text-white cursor-pointer mt-2"
        >
          Who We Serve
        </Typography>
        <Typography
          type={"body"}
          color={"dark"}
          className="text-white cursor-pointer mt-2"
        >
          About
        </Typography>
        <Contact>Contact Us</Contact>
      </div>
      <BurgerMenu />
    </HomeDiv>
  );
};

export default Header;
