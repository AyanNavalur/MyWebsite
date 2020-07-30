import React, {Component} from 'react';
import Field from './Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections: [
        [
            {name: 'name', elementName: 'input', type: 'text', placeholder: 'Your Name *'},
            {name: 'email', elementName: 'input', type: 'email', placeholder: 'Your Email *'},
            {name: 'phone', elementName: 'input', type: 'text', placeholder: 'Your Phone *'},
        ],
        [
            {name: 'message', elementName: 'textarea', type: 'text', placeholder: 'Your Message *'}
        ]
    ]
}

class Contact extends Component {

    render() {
        return (
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted"></h3>
                    </div>
                    <form name="sentMessage" noValidate="novalidate" onSubmit={this.props.handleSubmit}>
                        <div className="row align-items-stretch mb-5">
                            {fields.sections.map((section, sectionIndex) => {
                                //console.log("Rendering section ", section);
                                return (
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, index) => {
                                            return <Field 
                                                        {...field} 
                                                        key={index} 
                                                        value={this.props.values[field.name]}
                                                        name={field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur={this.props.handleBlur}
                                                        touched={(this.props.touched[field.name])}
                                                        errors={this.props.errors[field.name]}
                                                    />
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" 
                                id="sendMessageButton" 
                                type="submit"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}



export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: '',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Come on bro, give us your real name').required('Name field required'),
        email: Yup.string().email('Please enter a valid email').required('Email field required'),
        phone: Yup.string().min(10, 'Please provide a valid phone number').max(15, 'Please provide a valid phone number').required('Phone field required'),
        message: Yup.string().max(150, 'Message cannot be more than 150 characters').required('Message field required')
    }),
    handleSubmit: (values, {setSubmitting}) => {
        console.log(values);
        alert("Form Submitted!! We will get back to you soon.");
    }
})(Contact);