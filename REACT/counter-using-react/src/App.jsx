import "./App.css";

function App() {
  return (
    <>
     
      <div id="container" className="h-screen flex gap-5  flex-col justify-center items-center ">
      <h1 className="text-4xl font-bold text-center">Counter App</h1>
        {/* reload svg */}
        <div id="top">
          <svg
            className="h-5 w-fit "
            fill="#ffffff"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 489.645 489.645"
            xml:space="preserve"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3 c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5 c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8 c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2 C414.856,432.511,548.256,314.811,460.656,132.911z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        {/* counter */}
        <div id="middle" className="h-[20rem] rounded-3xl  bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-[15rem] flex flex-col items-center justify-center" >
          <h1>1</h1>
        </div>

        {/* buttons */}
        <div id="bottom" className="flex flex-row gap-5">
          <button className="border px-4 rounded-md py-2">Increase</button>
          <button className="border px-4 rounded-md py-2">Decrease</button>
        </div>
      </div>
    </>
  );
}

export default App;
