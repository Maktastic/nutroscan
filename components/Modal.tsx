import { Modal, Button, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/react';

interface MealPlanModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  mealPlan: string;
}

const MealPlanModal: React.FC<MealPlanModalProps> = ({ isModalOpen, onClose, mealPlan }) => {
  return (
    <Modal
      closeButton
      isOpen={isModalOpen}
      onClose={onClose}
      aria-labelledby="meal-plan-modal"
    >
      <ModalHeader>
        <span className='text-2xl'>Your Personalized Meal Plan</span>
      </ModalHeader>
      <ModalBody>
        <pre className="whitespace-pre-wrap">{mealPlan}</pre>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default MealPlanModal;
