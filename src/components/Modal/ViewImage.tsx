import {
  Modal,
  ModalOverlay,
  ModalContent,
  Image,
  Link,
  Flex,
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
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="6xl">
      <ModalOverlay />
      <ModalContent bg="pGray.800" maxW="max-content">
        <Flex direction="column">
          <Image
            src={imgUrl}
            objectFit="cover"
            cursor="pointer"
            maxWidth="900px"
            maxHeight="600px"
          />
          <Flex w="100%" h="8" alignItems="center" px="4">
            <Link href={imgUrl} isExternal fontSize="14px">
              Abrir original
            </Link>
          </Flex>
        </Flex>
      </ModalContent>
    </Modal>
  );
}
