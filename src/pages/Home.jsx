import React from "react";
import "../App.css";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Home() {
  const token = Math.floor(Math.random() * 1000000);

  const saveToken = () => {
    localStorage.setItem("token", token);
  };

  return (
    <>
      <div className="container bg-primary text-secondary bs-sm">
        <div className="row justify-center">
          <div class="col-12-xs col-5-md">
            <h2>
              <div class="font-xxl mt-2">Vestergaard-</div>
              <div class="font-xxl text-secondary">fonden</div>
            </h2>
            <p class="text-gray-dark-7 mt-2 mb-3">
              Velkommen til <strong>Vestergaardfonden</strong>, hvor vi hjælper
              alle muglige doner alle de penge i doner til os, som går til at
              hjælpe til at gøre verden til et bedere sted. F.eks (ukraine,
              afrika, osv)
            </p>
          </div>
          <div class="col-12-xs col-5-md">
            <img
              src={Logo}
              alt="Logo icon"
              class="mt-2 ml-2"
              width="240rem"
              height="240rem"
            />
          </div>
        </div>
      </div>

      <div class="container mt-2">
        <div class="row">
          <div class="col-12-xs col-5-md">
            <Link
              class="btn bg-heartRed text-secondary bs-lg bs-hover-none tr mb-2"
              to={`/donate?token=${token}`}
              onClick={saveToken}
            >
              <i class="fa fa-heart"></i> Doner idag
            </Link>
            <p class="text-gray font-sm mb-2">
              (når du trykker på knappen, vil du blive sendt til en side, hvor
              du kan doner)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
