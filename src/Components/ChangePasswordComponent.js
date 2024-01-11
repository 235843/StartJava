import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
  } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as Components from '../Components';
import { useDisclosure } from '@chakra-ui/react'
import { baseUrl } from '../utils/paths';
import { useToast } from '@chakra-ui/react';

export default function ChangePasswordComponent({setChangePassword}) {
    const { onOpen, onClose } = useDisclosure()
    const isOpen = true;
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const toast = useToast();
    const toastIdRef = React.useRef();
  
    const passwordChangeValidationSchema = Yup.object().shape({
        password: Yup.string().required('Hasło jest wymagane'),
        newPassword: Yup.string().required('Nowe hasło jest wymagane'),
        confirmNewPassword: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], 'Hasła muszą być takie same')
            .required('Powtórzenie nowego hasła jest wymagane'),
    });

    const changePasswordHandle = async (values, { setSubmitting }) => {
      console.log(values)
      try {
          const authStr = 'Basic ' + btoa(localStorage.getItem("email") + ':' + values.password);
          const response = await fetch(baseUrl + '/loginBasic', {
              method: 'GET',
              headers: {
                  'Authorization' : authStr,
                  'Content-Type': 'application/json',
              }
          });
      
          if (response.ok) {
              const changePasswordRespone = await fetch(baseUrl + '/changePassword', {
                method: 'PATCH',
                headers: {
                    'Authorization' : authStr,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (changePasswordRespone.ok){
              toastIdRef.current = toast({ 
                  title: 'Sukces',
                  description: "Pomyślnie zmieniono hasło",
                  status: 'success',
                  duration: 9000,
                  isClosable: true
              })
             setChangePassword(false)
            }

          } 
      } catch (error) {
          console.error('Error:', error.message);
      }
      return;
    }

    return (
      <>  
       <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Zmiana hasło</ModalHeader>
            <ModalBody pb={6}>
              <Formik
                initialValues={{ password: '', newPassword: '', confirmNewPassword: '' }}
                validationSchema={passwordChangeValidationSchema}
                onSubmit={changePasswordHandle}
              >
                <Form>
                  <Field type='password' name='password' placeholder='Hasło' as={Components.Input} />
                  <ErrorMessage name="password" component="div" />

                  <Field type='password' name='newPassword' placeholder='Nowe hasło' as={Components.Input} />
                  <ErrorMessage name="newPassword" component="div" />

                  <Field type='password' name='confirmNewPassword' placeholder='Powtórz nowe hasło' as={Components.Input} />
                  <ErrorMessage name="confirmNewPassword" component="div" />
                  <ModalFooter>
                    <Button colorScheme='red' mr={3} type="submit">
                      Zmień hasło
                    </Button>
                    <Button onClick={() => setChangePassword(false)}>Cancel</Button>
                  </ModalFooter>
                  </Form>
                </Formik>
              </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
