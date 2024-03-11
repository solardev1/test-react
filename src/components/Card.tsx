import trashWhite from 'assets/trash-white.svg';
import trash from 'assets/trash.svg';
import { priorityColor } from 'constants/priorityColor';
import { prioritySelected } from 'constants/priorityStates';
import { useTheme } from 'hooks/useTheme';
import { type Card as CardType } from 'interfaces/card';
import { type FC } from 'react';
import './Card.css';

export interface CardProps {
  card: CardType;
  onDelete: () => void;
  onCheckAsFinished?: () => void;
}

const Card: FC<CardProps> = ({ card, onDelete, onCheckAsFinished }) => {
  const { theme } = useTheme();
  const icon = theme === 'light' ? trashWhite : trash;

  const handleCheckAsFinished = () => {
    onCheckAsFinished && onCheckAsFinished();
  };

  return (
    <div className="card">
      <h2 className="card__text">{card.title}</h2>
      <p className="card__text">{card.description}</p>
      <div className="card__content">
        <div>
          <label htmlFor="state" className="card__label">
            Finalizada
          </label>
          <input
            type="checkbox"
            id="state"
            name="state"
            className="control card__checkbox"
            onChange={handleCheckAsFinished}
            checked={card.checkAsFinished}
            readOnly={false}
          />
        </div>
        <div className="card__content">
          <div className="card__content">
            <p className="card__label">{`Prioridad: ${prioritySelected[card.priority]}`}</p>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: priorityColor[card.priority],
              }}
            />
          </div>
          <img
            src={icon}
            alt="trash"
            onClick={onDelete}
            className="card__icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
