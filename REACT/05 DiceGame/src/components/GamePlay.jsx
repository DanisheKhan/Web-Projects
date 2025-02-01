import Button from "./Button";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

function GamePlay() {
  return (
    <div>
      <div className="flex place-content-between mx-32 my-8">
        <TotalScore />
        <NumberSelector />
      </div>
      <div
        id="mainSection"
        className="flex flex-col items-center gap-4 justify-center pt-28"
      >
        <div>
          <img src="/images/dice_1.png" alt="" />
        </div>
        <h1 className="font-semibold text-xl">Click on Dice to Roll</h1>
        <div className="flex gap-4">
          <Button
            label="Reset Score"
            className="border-2 border-black py-1 px-9 block  rounded-md"
          />
          <Button
            label="Show Roles"
            className="border-2 border-black py-1 px-9 block bg-black text-white  rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default GamePlay;
