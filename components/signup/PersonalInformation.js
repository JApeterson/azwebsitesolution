export default function SignUp() {
  return (
    <form className="pl-20 grid col-span-3 grid-cols-5 gap-4">
      <div className="mb-4 col-span-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          placeholder="First Name"
        />
      </div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="middleInitial"
          type="text"
          placeholder="M.I."
        />
      </div>
      <div className="mb-4 col-span-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-4 col-span-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="country"
          type="text"
          placeholder="Country of Residence"
        />
      </div>
      <div className="mb-4 col-span-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="state"
          type="text"
          placeholder="State or Providence"
        />
      </div>
      <div className="mb-4 col-span-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email Address"
        />
      </div>
      <div className="mb-4 col-span-2">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="text"
          placeholder="Phone Number"
        />
      </div>
    </form>
  );
}
