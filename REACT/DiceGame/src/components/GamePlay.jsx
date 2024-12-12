import Button from "./Button";

function GamePlay() {
  return (
    <div>
      <div className="flex place-content-between mx-32 my-8">
        <div className="flex flex-col  items-center">
          <h1 className="text-8xl font-semibold  ">0</h1>
          <p className="text-xl font-semibold">Total Score</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              1
            </h1>
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              2
            </h1>
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              3
            </h1>
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              4
            </h1>
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              5
            </h1>
            <h1 className="font-bold text-xl border-black border-2 rounded  px-7 py-5 items-center justify-center flex  ">
              6
            </h1>
          </div>
          <p className="text-xl font-semibold justify-end flex">
            Select Number
          </p>
        </div>
      </div>
      <div id="mainSection" className="flex flex-col items-center gap-4 justify-center pt-28">
        <div>
          <img src="/images/dice_1.png" alt="" />
        </div>
          <h1 className="font-semibold text-xl">Click on Dice to Roll</h1>
        <div className="flex gap-4">
          <Button label="Reset Score"   className="border-2 border-black py-1 px-9 block  rounded-md"/>
          <Button label="Show Roles" className="border-2 border-black py-1 px-9 block bg-black text-white  rounded-md" />

        </div>
      </div>
    </div>
  );
}

export default GamePlay;
