import React, {Component} from 'react';

class Field extends Component {
    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input className="form-control" 
                        id={this.props.name}
                        type={this.props.type} 
                        placeholder={this.props.placeholder}
                        required="required" 
                        data-validation-required-message="Please enter your details." 
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    />

                    :
                    <textarea className="form-control" 
                        id={this.props.name}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        data-validation-required-message="Please enter a message."
                        name={this.props.name}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                    ></textarea>
                }
                <p className="help-block text-danger">
                    
                    {/* Unable to figure out this error. Trying to show 'Field required' message on field blur and if it does not contain any text in it
                        Throws an error 'Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.' upon running this block of code
                        Anyways it runs another js script for validation but only upon submitting of form.
                        Hope future me will figure this out :)
                    */}
                    {(this.props.touched && this.props.errors) &&
                        <span>{this.props.errors}</span>
                    }
                </p>
            </div>
        )
    }
}

export default Field;