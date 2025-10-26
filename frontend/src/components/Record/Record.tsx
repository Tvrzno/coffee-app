import { Link } from 'react-router';
import type { Coffee } from '../../types/coffee';
import './Record.scss';

interface RecordProps {
  coffee: Coffee;
}

export const Record = ({ coffee }: RecordProps) => {
  const { name, origin, coffee_pk } = coffee;

  return (
    <Link className="record" to={`/detail/${coffee_pk}`}>
      <h2 className="record__name">{name}</h2>
      <p className="record__desc">{origin}</p>
    </Link>
  );
};
