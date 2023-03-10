import Image from "next/image";
import NextLink from "next/link";
import { useState } from "react";
import PersonalInformation from "../components/signup/PersonalInformation";
import ProfileSetup from "../components/signup/ProfileSetup";
import Subscription from "../components/signup/Subscription";
import logo from "../public/homepagelogo.png";
import styles from "../styles/Home.module.css";

export default function SignUp() {
  const [currentComponent, setCurrentComponent] = useState(
    "personalInformation"
  );

  const handleContinueButton = () => {
    if (currentComponent === "personalInformation") {
      setCurrentComponent("profileSetup");
    }
    if (currentComponent === "profileSetup") {
      setCurrentComponent("subscription");
    }
    if (currentComponent === "subscription") {
      setCurrentComponent("paymentInformation");
    }
    if (currentComponent === "paymentInformation") {
      setCurrentComponent("summary");
    }
    if (currentComponent === "summary") {
      // api call to store in db
    }
  };
  const handleBackButtonChange = () => {
    if (currentComponent === "profileSetup") {
      setCurrentComponent("personalInformation");
    }
    if (currentComponent === "subscription") {
      setCurrentComponent("profileSetup");
    }
    if (currentComponent === "paymentInformation") {
      setCurrentComponent("subscription");
    }

    if (currentComponent === "summary") {
      setCurrentComponent("paymentInformation");
    }
  };

  const componentDisplay = () => {
    if (currentComponent === "personalInformation") {
      return <PersonalInformation />;
    }
    if (currentComponent === "profileSetup") {
      return <ProfileSetup />;
    }
    if (currentComponent === "subscription") {
      return <Subscription />;
    }
  };
  const backButtonDisplay = () => {
    return (
      <div>
        <ul className="mt-20">
          <li
            className="whitespace-nowrap bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded "
            onClick={() => handleBackButtonChange()}
          >
            Back
          </li>
        </ul>
      </div>
    );
  };
  const continueButtonDisplay = () => {
    return (
      <div>
        <ul className="mt-20">
          <li
            className="whitespace-nowrap bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded "
            onClick={() => handleContinueButton()}
          >
            {currentComponent !== "summary" ? "Continue" : "Submit"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <main className={`${styles.main}`}>
        <div>
          <ul className="text-5xl">
            <li>
              <NextLink className="" href="/">
                <Image
                  className="inline"
                  src={logo}
                  alt="Picture of the logo"
                  width={100}
                  height={100}
                />
                InvestmentBias
              </NextLink>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-4 gap-4 divide-x-2">
          {/* the left side */}
          <div className="col-span-1 space-y-4">
            <div
              onClick={() => {
                setCurrentComponent("personalInformation");
              }}
            >
              <input
                className="mr-4"
                type="radio"
                checked={currentComponent === "personalInformation"}
                name="radio"
                readOnly
              />
              <label>Personal Information</label>
            </div>

            <div
              onClick={() => {
                setCurrentComponent("profileSetup");
              }}
            >
              <input
                className="mr-4"
                type="radio"
                checked={currentComponent === "profileSetup"}
                name="radio"
                readOnly
              />
              <label>Profile Setup</label>
            </div>
            <div
              onClick={() => {
                setCurrentComponent("subscription");
              }}
            >
              <input
                className="mr-4"
                type="radio"
                checked={currentComponent === "subscription"}
                name="radio"
                readOnly
              />
              <label>Subscriptions</label>
            </div>
            <div
              onClick={() => {
                setCurrentComponent("paymentInformation");
              }}
            >
              <input
                className="mr-4"
                type="radio"
                checked={currentComponent === "paymentInformation"}
                name="radio"
                readOnly
              />
              <label>Payment Information</label>
            </div>
            <div
              onClick={() => {
                setCurrentComponent("summary");
              }}
            >
              <input
                className="mr-4"
                type="radio"
                checked={currentComponent === "summary"}
                name="radio"
                readOnly
              />
              <label>Summary</label>
            </div>
          </div>

          {/* the right side  */}
          {componentDisplay()}
          {/* <PersonalInformation />
          <ProfileSetup /> */}
        </div>

        <div className="flex justify-end gap-4">
          {currentComponent !== "personalInformation" && backButtonDisplay()}
          {continueButtonDisplay()}
        </div>
      </main>
    </>
  );
}
