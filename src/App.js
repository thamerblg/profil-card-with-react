import Address from "./components/Address";
import FullName from "./components/FullName";
import ProfilePhoto from "./components/ProfilePhoto";
import bgCard from "./bg.jpg";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card p-2 shadow text-center">
              <img className="card-img-top" src={bgCard} alt="Card_image_cap" />
              <ProfilePhoto />

              <div>
                <div className="my-2">
                  <FullName />
                  <Address />
                </div>
                <ul className="social-list mb-1">
                  <li>
                    <FaFacebook />
                  </li>
                  <li>
                    <FaTwitter />
                  </li>
                  <li>
                    <FaInstagram />
                  </li>
                  <li>
                    <FaLinkedin />
                  </li>
                  <li>
                    <FaGoogle />
                  </li>
                </ul>
                <div className="px-4 mt-1">
                  <p className="small">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center mt-4 px-4">
                  <div className="stats">
                    <h6 className="mb-0">Followers</h6>
                    <span>8,797</span>
                  </div>
                  <div className="stats">
                    <h6 className="mb-0">Projects</h6>
                    <span>142</span>
                  </div>
                  <div className="stats">
                    <h6 className="mb-0">Evaluation</h6>
                    <span>92%</span>
                  </div>

                  <div className="stats">
                    <h6 className="mb-0">Ranks</h6>
                    <span>129</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
