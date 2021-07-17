import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      isCentered
      size="100%"
      px={60}
    >
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalBody px={60}>
          <Image
            src={imgUrl}
            objectFit="cover"
            borderTopRadius="md"
            cursor="pointer"
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
