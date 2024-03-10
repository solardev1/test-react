import Card from 'components/Card';
import { CardModal } from 'components/CardModal';
import { Header } from 'components/Header';
import { type Card as CardType } from 'interfaces/card';
import { useState, type FC } from 'react';
import './Task.css';
import { useTheme } from 'hooks/useTheme';

export const Task: FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const pendings = cards.filter((card) => !card.checkAsFinished);
  const finalized = cards.filter((card) => card.checkAsFinished);

  const handleCardCreated = (newCard: CardType) => {
    setCards([...cards, newCard]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (cardToDelete: CardType) => {
    setCards(cards.filter((card) => card.id !== cardToDelete.id));
  };

  const handleCheckAsFinished = (cardToFinish: CardType) => {
    setCards(
      cards.map((card) =>
        card.id === cardToFinish.id ? { ...card, checkAsFinished: true } : card,
      ),
    );
  };

  return (
    <div className={`task ${theme}`}>
      <Header />
      <div className="task__sub-header">
        <button
          className="task__sub-header-button"
          onClick={() => {
            setOpen(true);
          }}
        >
          Agregar tarea +
        </button>
      </div>
      <div className="task__main">
        <div className="task__main-item">
          <div className="task__main-item--div">
            <h4 className="task__sub-header-h4">{`Tareas (${pendings.length})`}</h4>
          </div>
          <CardModal
            openModal={open}
            onClose={handleClose}
            onCardCreated={handleCardCreated}
          />
          {pendings.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={() => {
                handleDelete(card);
              }}
              onCheckAsFinished={() => {
                handleCheckAsFinished(card);
              }}
            />
          ))}
        </div>
        <div className="task__main-item">
          <div className="task__main-item--div">
            <h4 className="task__sub-header-h4">{`Finalizadas (${finalized.length})`}</h4>
          </div>
          {finalized.map((card) => (
            <Card
              key={card.id}
              card={card}
              onDelete={() => {
                handleDelete(card);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
