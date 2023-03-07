import Typography from "../../views/components/typography";
import { HomeDiv, Contact } from "../../styles/styles";

const Header = () => {
    return(
        <HomeDiv className="flex justify-around text-center	bg-current py-2">
            <img src="image/logo.jpg" className="w-10 h-10 rounded-full object-cover" alt="" />
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer mt-2">Products</Typography>
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer mt-2">UserCases</Typography>           
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer mt-2">Who We Serve</Typography>
            <Typography type={"body"} color={"dark"} className="text-white cursor-pointer mt-2">About</Typography>            
            <Contact>Contact Us</Contact>   
        </HomeDiv>
    )
};

export default Header;
