import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { theme } from "../../theme";

type Props = {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, onClose, isOpen }: Props) => {
  return (
    <ChakraModal size="6xl" isOpen={isOpen} onClose={onClose} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize={26} color="secondary.500" fontFamily="serif" fontWeight={900}>
          Currency Markets
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
