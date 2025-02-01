import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faApple, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div>
      {/* navbar */}
      <div id="nav" className="flex justify-between px-10 py-4 items-center">
        <div id="nikeLogo">
          <img src="/public/images/brand_logo.png" alt="nike " />
        </div>

        <div id="options">
          <ul className="flex gap-6 font-semibold">
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div
          id="loginBTN"
          className="border rounded-md px-4 py-2 bg-red-500 text-white"
        >
          <button>LOGIN</button>
        </div>
      </div>

      {/*main*/}
      <div id="main" className="flex  gap-4 items-center pt-[10rem]">
        <div id="left" className="flex flex-col flex-1 ml-9">
          <h1 className="font-bold text-8xl">YOUR FEET DESERVE THE BEST</h1>
          <p className="font-semibold mt-5 mb-5">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div id="btns" className="flex flex-row gap-4 items-center ">
            <div id="shopeNowbtn" className="border rounded-md bg-red-500 px-3 py-2 text-white">
              <button>Shop Now</button>
            </div>
            <div id="categorybtn"className=" border  rounded-md  px-3 py-2">
              <button>Categories</button>
            </div>
          </div>
          <div id="contact" className="pt-7">
            <p className="mb-5">Also Available On</p>
            <div className="flex flex-row gap-4 text-xl">
              <FontAwesomeIcon icon={faApple} />
              <FontAwesomeIcon icon={faMicrosoft} />
              <FontAwesomeIcon icon={faPenNib} />
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </div>

        <div id="right" className="flex flex-1 justify-center">
          <img src="/public/images/shoe_image.png" alt="shoes" />
        </div>
      </div>
    </div>
  );
}

export default App;
