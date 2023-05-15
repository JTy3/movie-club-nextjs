import Button from "../Button";

const Card: React.FC = () => {
  return (
    <a href="#" className="block rounded-xl p-4 shadow-sm shadow-indigo-100">
      <img
        alt="Home"
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Rating</dt>
            <dd className="text-sm text-gray-500">4.5/5</dd>
          </div>

          <div>
            <dd className="font-medium">Some movie</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Button variant="primary">Upvote</Button>
          </div>

          <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
            <Button variant="secondary">Downvote</Button>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
