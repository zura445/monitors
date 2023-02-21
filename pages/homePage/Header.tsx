import Typography from "../views/components/typography";
import { HomeDiv, Contact } from "./styles";

const Header = () => {
    return(
        <HomeDiv className="flex justify-around bg-current py-2">
            <img src="image/logo.png" className="w-10 h-10 rounded-full" alt="" />
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer">Products</Typography>
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer">UserCases</Typography>           
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer">Who We Serve</Typography>
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer">About</Typography>            
            <Contact>Contact Us</Contact>         
        </HomeDiv>
    )
};

export default Header;
