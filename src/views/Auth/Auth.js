import { Formik } from "formik";
import * as Yup from 'yup';
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import { logUserIn } from "../../services/login.js"
import { isAuthenticated } from "../../services/isAuthenticated.js"
import "./Auth.scss"

const schema = Yup.object().shape({
    email: Yup.string().min(2, "Too short!").max(40, "Too long!").email("Invalid email").required("Email is required!"),
    password: Yup.string().min(2, "Too short!").max(20, "Too long!").required("Password is required!")
})

export const Auth = () => {
    const history = useHistory()
    let userHasToken = isAuthenticated()

    if(userHasToken === "User is authenticated"){
        history.push("/home")
    }

    return(
        <div className="auth-wrapper">
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={values => {
                    logUserIn(values)
                    .then(res => {
                        if (res === "Se guardó el token.") {
                            history.push("/home")
                        }
                        else {
                            alert("Invalid email adress or password")
                        }
                    })
                }}
            >
                {({values, handleSubmit, handleChange, errors}) => 
                    <Form className="form" noValidate onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                                type="email" 
                                placeholder="Enter your email" 
                                name="email"
                                values={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="Enter your password" 
                                name="password"
                                values={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                            <Form.Text>We'll never share your info with anyone else.</Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                }
            </Formik>
        </div>
    )
}