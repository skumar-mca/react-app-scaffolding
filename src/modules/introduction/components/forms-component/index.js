import { maxLength, requiredValidation } from 'helpers';
import { ValidationMessage } from "helpers/constants";
import { lodashGet } from 'helpers/lodash-wrapper';
import React from "react";
import { reduxForm } from "redux-form";
import RenderInputField from "shared-components/Input";
import RenderSelect from "shared-components/Select";

class FormsDemoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFormValid: false,
            errorMsg: "",
            firstName: null,
            lastName: null,
            country: null,
            countryOptions: [
                { id: 1, label: "India" },
                { id: 2, label: "USA" }
            ]
        };
    }

    validations = {
        firstName: {
            required: (value) => requiredValidation(value, ValidationMessage.RequiredField),
            maxLength: (value) => maxLength(100, "First Name", value)
        },
        lastName: {
            maxLength: (value) => maxLength(50, "Last Name", value)
        },
        country: {
            required: (value) => requiredValidation(value, ValidationMessage.RequiredField)
        }
    }

    validation = () => {
        this.setState({ formSubmitted: true });
    };

    onDataSubmit = data => {
        this.props.saveFormData(data);
    };

    setValue = (data, fieldName) => {
        this.setState({ [fieldName]: data });
    };

    render() {
        const { handleSubmit } = this.props;
        const { countryOptions, formSubmitted } = this.state;
        const { validations } = this;
        const formValues = lodashGet(this.props, 'formValuesFromRedux.values', {});

        return (
            <div className="row-fluid alert">
                <div className="col-md-12">
                    <form noValidate onSubmit={handleSubmit(data => this.onDataSubmit(data))}>
                        <div className="form-group form-group-sm">
                            <div className="row">
                                <div className="col-md-4 alert alert-info" >
                                    <div className="row">
                                        <div className="col-md-4">
                                            <RenderInputField
                                                name="firstName"
                                                type="text"
                                                label="First Name*"
                                                placeholder="Enter First Name"
                                                maxLength={100}
                                                validate={[validations.firstName.required, validations.firstName.maxLength]}
                                            />

                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-md-4">
                                            <RenderInputField
                                                name="lastName"
                                                type="text"
                                                label="Last name"
                                                placeholder="Enter Last Name"
                                                maxLength={50}
                                                validate={[validations.lastName.maxLength]}
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <RenderSelect
                                                name='country' type='text' label='Country*'
                                                data={countryOptions}
                                                value={this.state.country}
                                                required={formSubmitted}
                                                textField="label"
                                                defaultItem={{ label: 'Select Country' }}
                                                meta={this.props}
                                                setValue={this.setValue}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="col-md-12">
                                                <footer className="align-right">
                                                    <button className="btn btn-primary mr-5" type="submit" onClick={this.validation}>Add</button>
                                                </footer>
                                            </div>
                                            {this.state.errorMsg && <span className="is-error k-required">{this.state.errorMsg}</span>}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <table className="table table-condensed table-bordered">
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Country</th>
                                        </tr>

                                        <tr>
                                            <td>{formValues.firstName}</td>
                                            <td>{formValues.lastName}</td>
                                            <td>{formValues.country}</td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

FormsDemoComponent = reduxForm({ form: "formsDemoForm" })(FormsDemoComponent);
export default FormsDemoComponent;
