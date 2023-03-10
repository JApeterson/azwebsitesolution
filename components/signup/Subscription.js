export default function Subscription() {
  return (
    <div className="flex whitespace-nowrap space-x-6">
      <div className=" space-y-4 ml-10 rounded-md border-2 border-black p-4">
        <p className="text-3xl">Basic</p>
        <p>Access to stock only market level analytics.</p>
        <p>Access to five tickers.</p>
        <p>Create two custom dashboards.</p>
        <button className="bg-black hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">
          Free
        </button>
      </div>

      <div className="text-white bg-black space-y-4 ml-10 rounded-md border-2 border-white p-4">
        <p className="text-3xl">Pro</p>
        <p>Access to stock only market level analytics.</p>
        <p>Access to five tickers.</p>
        <p>Create two custom dashboards.</p>
        <button className="bg-white hover:bg-slate-600 text-black font-bold py-2 px-4 rounded">
          $29.99
        </button>
      </div>
    </div>
  );
}
