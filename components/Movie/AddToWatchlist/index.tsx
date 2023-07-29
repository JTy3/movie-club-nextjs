import { PlusCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useSession } from "next-auth/react";
import router from "next/router";

const AddToWatchlist = () => {
  const { data: session } = useSession();
  const { id } = router.query;

  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios
      .post(`/api/users/movies`, {
        tmdbId: id,
        userId: session?.user?.id as string
      })
      .then(() => {
        router.push(`/app`);
      });
  };

  return (
    <div className="group flex relative">
      <button
        onClick={handleSubmit}
        disabled={!session}
        className={`rounded-3xl p-2 shadow-sm bg-white text-red-600 ${
          session ? `hover:bg-red-600 hover:text-white` : `opacity-50`
        }`}
      >
        <PlusCircleIcon className="w-6 h-6" />
      </button>
      <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute translate-y-full opacity-0">
        Add to watchlist
      </span>
    </div>
  );
};

export default AddToWatchlist;
