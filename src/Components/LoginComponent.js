import React from "react";
import * as Components from '../Components';
import Sidebar from "./Sidebar";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { baseUrl, paths } from "../utils/paths";
import { Navigate, useHi } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

function LoginComponent() {
    const [signIn, toggle] = React.useState(true);
    const [redirectTo, setRedirectTo] = React.useState(null);
    const toast = useToast();
    const toastIdRef = React.useRef();

    const loginValidationSchema = Yup.object().shape({
        email: Yup.string().email('Błędny email').required('Email jest wymagany'),
        password: Yup.string().required('Hasło jest wymagane'),
    });

    const signupValidationSchema = Yup.object().shape({
        email: Yup.string().email('Błędny email').required('Email jest wymagany'),
        password: Yup.string().required('Hasło jest wymagane'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same')
            .required('Powtórzenie hasła jest wymagane'),
    });

    const handleLoginSubmit = async (values, { setSubmitting }) => {
        console.log(values)
        try {
            const authStr = 'Basic ' + btoa(values.email + ':' + values.password);
            const response = await fetch(baseUrl + '/loginBasic', {
                method: 'GET',
                headers: {
                    'Authorization' : authStr,
                    'Content-Type': 'application/json',
                }
            });
        
            if (response.ok) {
                toastIdRef.current = toast({ 
                    title: 'Zalogowano',
                    description: "Zalogowano pomyślnie",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                })
                setRedirectTo('/');
                console.log(response);
                const data = await response.json();
                localStorage.setItem("authorization", authStr);
                localStorage.setItem("email", values.email);
                localStorage.setItem("role", data.user_role[0].authority);

                // Perform actions upon successful registration
            } else {
                toastIdRef.current = toast({ 
                    title: 'Logowanie nie powiodło się',
                    description: "Błędne dane logowania",
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                })
                console.error('Login failed:', response.statusText);
                // Handle registration failure
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const handleSignupSubmit = async (values, { setSubmitting }) => {
        console.log(values)
        try {
            const response = await fetch(baseUrl+'/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
        
            if (response.ok) {
                toastIdRef.current = toast({ 
                    title: 'Zarejestrowano',
                    description: "Rejestracja przebiegła pomyślnie",
                    status: 'success',
                    duration: 9000,
                    isClosable: true
                })
                setRedirectTo('/');
                const data = await response.json();
                const authStr = "Basic" + window.btoa(values.email + ":" + values.password);

                localStorage.setItem("authorization", authStr);
                localStorage.setItem("role", response.role);

                console.log('Registration successful:', data);

                return <Navigate replace to={paths.landingPage} />
            } else {
                toastIdRef.current = toast({ 
                    title: 'Rejestracja nie powiodła się',
                    description: "Podany email jest już zajęty",
                    status: 'error',
                    duration: 9000,
                    isClosable: true
                })
                console.error('Registration failed:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    if (redirectTo) {
        window.location.href = redirectTo;
        return null; // Prevent rendering LoginComponent after redirection
    }

    const formStyle = {
        backgroundColor: '#ffffff', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: "0 50px",
        height: '100%',
        textAlign: 'center',
    }

     return(
       
         <Components.Container>
            
            <Components.SignUpContainer signinIn={signIn}>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={signupValidationSchema}
                    onSubmit={handleSignupSubmit}
                >
                    <Form style={formStyle}>
                        <Components.Title>Rejestracja</Components.Title>
                        <ErrorMessage name="email" component="div" />
                        <Field type='email' name='email' placeholder='Email' as={Components.Input} />
                        <ErrorMessage name="password" component="div" />
                        <Field type='password' name='password' placeholder='Hasło' as={Components.Input} />
                        <ErrorMessage name="confirmPassword" component="div" />
                        <Field type='password' name='confirmPassword' placeholder='Potwierdź hasło' as={Components.Input} />
                        <Components.Button type="submit">Zarejestruj</Components.Button>
                    </Form>
                        
                </Formik>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginValidationSchema}
                    onSubmit={handleLoginSubmit}
                >
                    <Form style={formStyle}>
                        <Components.Title>Logowanie</Components.Title>
                        <ErrorMessage name="email" component="div" />
                        <Field type='email' name='email' placeholder='Email' as={Components.Input} />
                        <ErrorMessage name="password" component="div" />
                        <Field type='password' name='password' placeholder='Hasło' as={Components.Input} />
                        <Components.Button type="submit">Zaloguj</Components.Button>
                    </Form>
                        
                </Formik>
        </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Witaj ponownie</Components.Title>
                     <Components.Paragraph>
                         Zaloguj się i kontynuuj naukę Javy!
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Logowanie
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Witaj!</Components.Title>
                       <Components.Paragraph>
                           Zarejestruj się i zacznij swoją przygodę z Java!
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Rejestracja
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default LoginComponent;