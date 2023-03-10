export default function ProfileSetup() {
  return (
    <form className="pl-20 grid col-span-3 grid-cols-5 gap-4">
      <div className="mb-4 col-span-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div className="mb-4  col-span-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="mb-4 col-span-3">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
        />
      </div>
    </form>
  );
}
