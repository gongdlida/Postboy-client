export default function ResponseStatus({ responseData }) {
  const code = responseData ? Math.floor(responseData.status / 100) : 0;
  return (
    <div className="">
      {responseData ? (
        <div className="flex space-x-1 items-center">
          <div
            className={`rounded-full w-3 h-3 mr-0.5 ${
              code === 2
                ? "bg-green-500"
                : code === 4 || code === 5
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          ></div>
          <p className="">{responseData.status}</p>
          <p className="">{responseData.statusText}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
