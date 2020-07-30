import React, {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = [
    {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *'},
    {name: 'password', elementName: 'input', type: 'password', placeholder: 'Your Password *'},
]

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="container">
                    <div className="login-form">
                        <div className="row">
                            <h1>Login</h1>
                        </div>
                        <div className="row">
                            <form noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                                <div className="col-md-12">
                                    {fields.map((field, index) => {
                                        return (
                                            <Field 
                                                {...field}
                                                key={index}
                                                values={this.props.values[field.name]}
                                                name={field.name}
                                                onChange={this.props.handleChange}
                                                onBlur={this.props.handleBlur}
                                                touched={(this.props.touched[field.name])}
                                                errors={this.props.errors[field.name]}
                                            /> 
                                        )
                                    })}
                                </div>
                                <div className="col-md-12">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         auth: state.auth
//     }
// }

export default withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validateYupSchema: Yup.object().shape({
        email: Yup.string().email('Please enter a valid email').required('Email field required'),
        password: Yup.string().required('Password field required')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log('Login attempt: ', values);
    }
})(Login);