import Image from "next/image";
import NextLink from "next/link";
import logo from "../public/homepagelogo.png";

export default function GetStarted() {
  return (
    <>
      <main
        className={`min-h-screen flex space-y-14 flex-col justify-between text-center`}
      >
        <div>
          <p className=" text-3xl">Welcome to</p>
          <p className="text-5xl">
            <Image
              className="inline"
              src={logo}
              alt="Picture of the logo"
              width={100}
              height={100}
            />
            InvestmentBias
          </p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-black">
          <div>
            <p>New Users</p>
            <p>Get started by clicking here</p>
            <ul className="mt-20">
              <li>
                <NextLink
                  className="whitespace-nowrap bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded "
                  href="/SignUp"
                >
                  Sign Up
                </NextLink>
              </li>
            </ul>
          </div>
          <div>
            <p>Existing Users</p>
            <p>Go to MyDash by logging in here</p>
            <ul className="mt-20">
              <li>
                <NextLink
                  className="whitespace-nowrap bg-white hover:bg-slate-600 text-black font-bold py-2 px-4 rounded border border-black"
                  href="/LogIn"
                >
                  Login
                </NextLink>
              </li>
            </ul>
          </div>
        </div>
        <p>
          Investment Bias, LLC provides investment data and analytics to
          investors to aid their decision making. Investment Bias, LLC or its
          constituents are not liable for gains or losses incurred by its user
          base. Trading and investing are risky and come with no promise of
          profits, nor remedies of losses. Profits and losses are incurred,
          owned, and are the full responsibility of said users. Investment Bias,
          LLC does not give trading or investing advice, nor should any data or
          analytics be viewed as such.
        </p>
      </main>
    </>
  );
}
