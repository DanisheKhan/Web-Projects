import FilterContainer from "./FilterContainer";

const TopContainer = () => {
  return (
    <div className=" backdrop-blur-sm p-4 rounded-lg border-b-2 border-red-800">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">
          F<span className="text-red-800">oo</span>dy Z
          <span className="text-red-800">o</span>ne
        </h1>
        <input
          type="text"
          placeholder="Search Food"
          className="rounded border-2 border-red-800 h-9 p-2 bg-transparent "
        />
      </div>
      <FilterContainer />
    </div>
  );
};

export default TopContainer;
