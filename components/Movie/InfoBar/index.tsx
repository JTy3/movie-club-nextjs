import AddToWatchlist from "../AddToWatchlist";

const InfoBar = ({ score, ratings }: any) => {
  return (
    <div className="flex justify-between my-5 bg-gray-100 w-full rounded-3xl shadow-lg p-2 px-10 items-center">
      <div>
        <p>{score}/10</p>
      </div>
      <div>
        <p>{ratings} ratings</p>
      </div>
      <div>
        <AddToWatchlist />
      </div>
    </div>
  );
};

export default InfoBar;
