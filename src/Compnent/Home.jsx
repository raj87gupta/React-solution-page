import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Soultion to all your Problem</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            {" "}
            We are your one and only solution to the tech Problem you face every
            day. We are leading tach company whose aim is to increase the
            problem solving ability in chldern.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veniam impedit, obcaecati fuga eaque accusamus similique itaque
            asperiores? Exercitationem quasi consequatur incidunt est cupiditate
            saepe nesciunt, dolore sapiente quos harum. Corrupti sint maxime
            culpa, nostrum delectus velit voluptate labore quaerat nobis
            voluptatibus et itaque reprehenderit illum! Nemo officiis, nihil
            delectus recusandae officia fugiat reprehenderit. Molestiae debitis
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instragram</p>
            </div>
            <div
              style={{
                animationDelay: "0.1s",
              }}
            >
              <AiFillYoutube />
              <p>YouTube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
