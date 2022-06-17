import React from "react";
import "../App.css";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Donate() {
  const [valid, isValid] = React.useState(false);

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
              Tak for at doner til Vestergaardfonden.❤ Du kan vælge
              bettalingsmetode nedenfor.
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

      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12">
            <h1>Doner med:</h1>
            <p className="text-gray font-sm">
              Du kan doner med (mobilepay, stripe, paypal)
            </p>

            <Link
              className="btn bg-stripe text-secondary mt-2 ml-1"
              to={`/donate/stripe`}
            >
              <i class="fa fa-credit-card"></i> Stripe
            </Link>

            <Link
              className="btn bg-mobilepay text-secondary mt-2 ml-1"
              to={`/donate/mobilepay`}
            >
              <i class="fa fa-mobile"></i> Mobilepay
            </Link>

            <Link
              className="btn bg-paypal text-secondary mt-2 ml-1"
              to={`/donate/paypal`}
            >
              <i class="fa-brands fa-paypal"></i> Paypal
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donate;
