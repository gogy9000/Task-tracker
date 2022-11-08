import React, { ReactElement } from 'react'
import { Center, Modal } from 'native-base'

type CommonModalProps = {
  children: ReactElement
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  modalHeader?: string
  modalFooterContent?: ReactElement
}
export const CommonModal: React.FC<CommonModalProps> = ({
                                                          children,
                                                          showModal,
                                                          setShowModal,
                                                          modalHeader = '',
                                                          modalFooterContent
                                                        }) => {

  return <Center>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth='400px'>
        <Modal.CloseButton />
        <Modal.Header>{modalHeader}</Modal.Header>
        <Modal.Body>
          {children}
        </Modal.Body>
        {modalFooterContent && <Modal.Footer>
          {modalFooterContent}
        </Modal.Footer>}
      </Modal.Content>
    </Modal>
  </Center>
}