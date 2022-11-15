import React, { ReactElement } from 'react'
import { Center, Modal } from 'native-base'

type CommonModalProps = {
  children?: ReactElement
  showModal: boolean
  modalHeader?: string | ReactElement
  modalFooterContent?: ReactElement
  onCloseCallback: () => void
  modalBody?:ReactElement
}
export const CommonModal: React.FC<CommonModalProps> = ({
                                                          children,
                                                          showModal,
                                                          onCloseCallback,
                                                          modalHeader = '',
                                                          modalFooterContent,
                                                          modalBody
                                                        }) => {

  return <Center>
    <Modal isOpen={showModal} onClose={onCloseCallback}>
      <Modal.Content>
        {modalHeader && <Modal.CloseButton />}
        {modalHeader && <Modal.Header alignItems={'center'}>{modalHeader}</Modal.Header>}
        {(modalBody ||children)&&<Modal.Body>{modalBody}{children}</Modal.Body>}
        {modalFooterContent && <Modal.Footer>{modalFooterContent}</Modal.Footer>}
      </Modal.Content>
    </Modal>
  </Center>
}