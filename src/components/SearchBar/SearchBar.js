import searchIcon from "./search-icon.png"
import { searchHeroes } from "../../services/searchHeroes.js"
import { Formik } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from 'yup';
import { useState } from "react";
import "./SearchBar.scss"

const schema = Yup.object().shape({
    heroName: Yup.string()
})

export const SearchBar = (props) => {
    const [heroes, setHeroes] = useState([])

    props.getHeroes(heroes)

    return(
        <Formik 
            validationSchema={schema}
            initialValues={{
                    heroName:""
                }}
                onSubmit={ values => {                    
                    searchHeroes(values.heroName)
                        .then(res => {
                                values.heroName = ""
                                if(typeof res === "object"){
                                    setHeroes(heroes.concat(res[0]))
                                }
                                else {
                                    alert("No results!")
                                }
                            }
                        )
                    }
                }
            >
            {({values, handleSubmit, handleChange, errors}) =>
                <Form noValidate onSubmit={e => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                    <Form.Group className="search-bar" controlId="formHeroSearch">
                        <Form.Control
                            autoComplete="off" 
                            type="search" 
                            placeholder="Enter a hero name... (The first result of the search will be fetched.)"
                            name="heroName"
                            value={values.heroName}
                            values={values.heroName}
                            onChange={handleChange}
                            isInvalid={!!errors.heroName}
                        />
                        <Form.Text className="error-message">
                            {errors.heroName}
                        </Form.Text>
                        <img alt="Search icon" className="search-icon" src={searchIcon}/>
                    </Form.Group>
                </Form>
            }
        </Formik>
    )
}