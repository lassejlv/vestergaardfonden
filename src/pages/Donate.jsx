import React from "react";
import "../App.css";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Donate() {
  const [isOpen, setIsOpen] = React.useState(false);

  const save = () => {
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const creditCardNumber = document.getElementById("ccn").value;
    const date = document.getElementById("date").value;
    const cvc = document.getElementById("cvc").value;

    const data = {
      email,
      amount,
      creditCardNumber,
      date,
      cvc,
    };

    localStorage.setItem("donation", JSON.stringify(data));
    setIsOpen(false);
    alert("Tak for din donation! ❤️");
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
              to={`/donate?token=${localStorage.getItem("token")}`}
              onClick={() => setIsOpen(true)}
            >
              <i class="fa fa-credit-card"></i> Stripe
            </Link>

            <Link
              className="btn bg-mobilepay text-secondary mt-2 ml-1"
              to={`/donate?token=${localStorage.getItem("token")}`}
              onClick={() => setIsOpen(true)}
            >
              <i class="fa fa-mobile"></i> Mobilepay
            </Link>

            <Link
              className="btn bg-paypal text-secondary mt-2 ml-1"
              to={`/donate?token=${localStorage.getItem("token")}`}
              onClick={() => setIsOpen(true)}
            >
              <i class="fa-brands fa-paypal"></i> Paypal
            </Link>
          </div>
        </div>
        {isOpen && (
          <>
            <form>
              <div class="mb-1 form-group mt-2">
                <label for="amount">Email addresse</label>
                <input
                  type="email"
                  id="email"
                  class="form-control form-invalid form-valid"
                  placeholder="Skriv din email addresse"
                  required
                />
              </div>

              <div class="mb-1 form-group">
                <label for="amount">Beløb</label>
                <input
                  type="number"
                  class="form-control form-invalid form-valid"
                  id="amount"
                  minLength={1}
                  placeholder="Beløb"
                  required
                />
              </div>

              <div class="mb-1 form-group">
                <label for="ccn">Kredit Kort Nummer:</label>
                <input
                  id="ccn"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9\s]{13,19}"
                  autocomplete="cc-number"
                  class="mb-1 form-invalid form-valid"
                  maxlength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                  required
                ></input>

                <p class="font-sm text-gray-light-1">
                  Vi vil aldrig offenliggøre dit kortnummer på nogen måder.
                </p>
              </div>

              <div class="mb-1 form-group">
                <label for="cvc">Kortkode:</label>
                <input
                  id="cvc"
                  type="tel"
                  inputmode="numeric"
                  pattern="[0-9\s]{3,4}"
                  autocomplete="cc-cvc"
                  class="mb-1 form-invalid form-valid"
                  maxlength="3"
                  placeholder="xxx"
                  required
                ></input>
              </div>

              <div class="form-group">
                <label for="exp">Udløbsdato:</label>
                <input
                  id="exp"
                  type="date"
                  inputmode="numeric"
                  pattern="[0-9\s]{4,5}"
                  autocomplete="cc-exp"
                  class="mb-1 form-invalid form-valid"
                  maxlength="5"
                  placeholder="mm/yy"
                  required
                ></input>
              </div>

              <p class="mb-2 text-gray font-sm">
                Powered by{" "}
                <a href="https://example.com" class="text-blue-light-2">
                  Scammed.com
                </a>
              </p>

              <button onClick={save} class="btn bg-donate text-white mb-2">
                <i class="fa-solid fa-circle-arrow-right"></i> Gennemfør
                bettaling
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
}

export default Donate;
