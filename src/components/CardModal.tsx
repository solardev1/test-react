import { type Card } from 'interfaces/card';
import { CardForm } from './CardForm';
import { Modal } from './Modal';

interface CardModalProps {
  openModal: boolean;
  onClose: () => void;
  onCardCreated: (created: Card) => void;
}

export const CardModal = ({
  openModal,
  onClose,
  onCardCreated,
}: CardModalProps) => {
  return (
    <Modal openModal={openModal} title="Agregar Tarea" onClose={onClose}>
      <CardForm onClose={onClose} onCardCreated={onCardCreated} />
    </Modal>
  );
};
