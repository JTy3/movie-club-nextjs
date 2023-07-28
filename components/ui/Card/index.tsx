import Button from '../Button';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, title, className }) => (
  <div
    className={`${
      className ? className : ''
    } border border-gray-200 bg-white rounded-lg space-y-4 py-4 my-4`}
    data-testid="card"
  >
    {title && (
      <div className="px-4">
        <h2 className="text-base font-semibold leading-6 text-gray-900">
          {title}
        </h2>
      </div>
    )}
    <div className="px-4 max-w-full">{children}</div>
  </div>
);

export default Card;
