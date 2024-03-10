import { useEffect, type ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';
import './Modal.css';

export interface ModalProps {
  children: ReactNode;
  title: string;
  openModal: boolean;
  onClose: () => void;
}

export const Modal = ({ children, openModal, title, onClose }: ModalProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement)?.className === 'modal') {
        onClose();
      }
    };

    if (openModal) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [openModal, onClose]);

  return (
    <div>
      {openModal && (
        <div className="modal">
          <div className={`modal-content ${theme}`}>
            <div className="modal-content-title-container">
              <h2 className={`title ${theme}`}>{title}</h2>
              <span
                className="close"
                onClick={() => {
                  onClose();
                }}
              >
                &times;
              </span>
            </div>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
