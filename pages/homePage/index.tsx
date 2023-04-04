import Typography from "../../views/components/typography";
import { HomeDiv } from "../../styles/styles";
import BurgerMenu from "../../pages/burgerMenu";
// import { Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";
// import { Link, Spacer } from "@nextui-org/react";
const Header = () => {
  // push - ში უნდა ჩავწერო ლინკი სადაც გადავა დროპდაუნზე დაჭერის დროს
  const router = useRouter();

  const prodactPage = (e: any) => {
    e.preventDefault();
    router.push("prodactPage");
  };

  const aboutUs = (e: any) => {
    e.preventDefault();
    router.push("aboutUs");
  };

  const contactFunc = (e: any) => {
    e.preventDefault();
    router.push("contactPage");
  };

  //ჩაშენებული ბიბლიოთეკა რომელიც აკეთებს დროპდაუნს
  return (
    <HomeDiv className="py-2 w-full flex justify-around">
      <img
        src="image/logo.jpg"
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      
      
    <button onClick={prodactPage} className="font-bold">პროდუქტი</button>
    <button onClick={aboutUs} className="font-bold">ჩვენს შესახებ</button>
    <button onClick={contactFunc} className="font-bold">კონტაქტი</button>




    {/* ეს არის დროპდაუნის მენიუ */}
      {/* <Dropdown>
        <Dropdown.Button flat color="secondary">
            Product & Solution
        </Dropdown.Button>
        <Dropdown.Menu color="secondary" aria-label="Actions">
          <Dropdown.Item>
            <Link href="#" isExternal>
              New file
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>Copy link</Dropdown.Item>
          <Dropdown.Item>Edit file</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary">
          User Cases
        </Dropdown.Button>
        <Dropdown.Menu color="secondary" aria-label="Actions">
          <Dropdown.Item>Supermarket</Dropdown.Item>
          <Dropdown.Item>3C</Dropdown.Item>
          <Dropdown.Item>Electrical Store</Dropdown.Item>
          <Dropdown.Item>Smart office</Dropdown.Item>
          <Dropdown.Item>Food Store </Dropdown.Item>
          <Dropdown.Item>Gift Shop</Dropdown.Item>
          <Dropdown.Item>Pharmacy</Dropdown.Item>
          <Dropdown.Item>Industrial</Dropdown.Item>
          <Dropdown.Item>Hospital</Dropdown.Item>
          <Dropdown.Item>Warehousing</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary">
          Who We Serve
        </Dropdown.Button>
        <Dropdown.Menu color="secondary" aria-label="Actions">
          <Dropdown.Item>End User</Dropdown.Item>
          <Dropdown.Item>Traders</Dropdown.Item>
          <Dropdown.Item>System Integration</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary">
          About
        </Dropdown.Button>
        <Dropdown.Menu color="secondary" aria-label="Actions">
          <Dropdown.Item>Thrive Stories</Dropdown.Item>
          <Dropdown.Item>Corporate Profile</Dropdown.Item>
          <Dropdown.Item>Customized Service</Dropdown.Item>
          <Dropdown.Item>Quality Assurance</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Button flat color="secondary">
          Resources
        </Dropdown.Button>
        <Dropdown.Menu color="secondary" aria-label="Actions">
          <Dropdown.Item>Dowloads</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      <BurgerMenu />
    </HomeDiv>
  );
};

export default Header;
