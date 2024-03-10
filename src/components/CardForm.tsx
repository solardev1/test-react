import { type Card } from 'interfaces/card';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';
import './CardForm.css';

interface CardFormProps {
  onClose: () => void;
  onCardCreated: (card: Card) => void;
}

export const CardForm = ({ onClose, onCardCreated }: CardFormProps) => {
  const [cardData, setCardData] = useState<Card>({
    id: uuidv4(),
    title: '',
    description: '',
    priority: 0,
  });
  return (
    <>
      <Input
        label="Titulo"
        onChange={(e) => {
          setCardData({ ...cardData, title: e.target.value });
        }}
      />
      <Textarea
        label="Descripción"
        onChange={(e) => {
          setCardData({ ...cardData, description: e.target.value });
        }}
      />
      <Select
        label="Prioridad"
        options={[
          { value: 1, title: 'Baja' },
          { value: 2, title: 'Media' },
          { value: 3, title: 'Alta' },
        ]}
        onChange={(e) => {
          setCardData({ ...cardData, priority: parseInt(e.target.value) });
        }}
      />
      <div className="modal-content-buttons-container">
        <button
          disabled={
            cardData.title === '' ||
            cardData.description === '' ||
            cardData.priority === 0
          }
          onClick={() => {
            onCardCreated(cardData);
            onClose();
          }}
        >
          Agregar tarea +
        </button>
        <button className="cancel_button" onClick={onClose}>
          Cancel
        </button>
      </div>
    </>
  );
};
