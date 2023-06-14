import { PlusCircleIcon } from "@heroicons/react/24/outline";

const AddToWatchlist = () => {
  return (
    <div className="group flex relative">
      <button className="rounded-3xl p-2 shadow-sm bg-white text-red-600 hover:bg-red-600 hover:text-white">
        <PlusCircleIcon className="w-6 h-6" />
      </button>
      <span
        className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute translate-y-full opacity-0"
      >
        Add to watchlist
      </span>
    </div>
  );
};

export default AddToWatchlist;
