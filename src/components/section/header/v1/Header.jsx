import { useModal } from "../../../../utils/ModalContext";
import { useEffect, useState } from "react";
import { FaDiscord, FaWallet } from "react-icons/fa";
import { MdNotes } from "react-icons/md";
import Button from "../../../../common/button";
import NavWrapper from "./Header.style";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../assets/images/Amenta-01.png";

const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };
  useEffect(() => {
    const header = document.getElementById("navbar");
    const handleScroll = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });

    return () => {
      window.removeEventListener("sticky", handleScroll);
    };
  }, []);

  return (
    <>
      <NavWrapper className="bithu_header" id="navbar">
        <div className="container">
          {/* Main Menu Start */}
          <div className="bithu_menu_sect">
            <div className="bithu_menu_left_sect">
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="bithu nft logo" />
                </a>
              </div>
            </div>
            <div className="bithu_menu_right_sect bithu_v1_menu_right_sect">
              <div className="bithu_menu_list">
                <ul>
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  {/* <li>
                    <a href="#about">About</a>
                  </li> */}
                  <li>
                    <a href="#Contact">Contact</a>
                  </li>
                  {/* <li>
                    <a href="#team">Team</a>
                  </li> */}
                  {/* <li>
                    <a href="#faq">FAQ</a>
                  </li> */}
                  <li>
                    <a href="#mint">Mint</a>
                  </li>
                  </ul>
              </div>
              <div className="bithu_menu_btns">
                <button className="menu_btn" onClick={() => handleMobileMenu()}>
                  <MdNotes />
                </button>
                
                <Button
                  sm
                  variant="hovered"
                  className="connect_btn"
                  onClick={() => walletModalHandle()}
                >
                  <FaWallet /> Connect
                </Button>
              </div>
            </div>
          </div>
          {/* <!-- Main Menu END --> */}
        </div>
      </NavWrapper>
      {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
