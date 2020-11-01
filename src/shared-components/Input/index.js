import React, { Component } from "react";
import { Field } from "redux-form";

class RenderInputField extends Component {
    constructor(props) {
        super(props);
    }

    onKeyPress = event => {
        if (event.charCode === 13 || event.which === 13) {
            event.preventDefault();
        }
    };

    renderField = ({ input, label, placeholder, type, maxLength, meta: { touched, error, warning } }) => (
        <label className="input-field">
            {label && <span>{label}</span>}
            <div className={error && touched ? "k-required error" : ""}>
                <input class="form-control input-sm" {...input} maxLength={maxLength} placeholder={placeholder} onKeyPress={this.onKeyPress} type={type} />
                {touched && ((error && <span className="k-required">{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </label>
    )

    render() {
        const { label, name, type, required, placeholder, className, meta, disabled, value, maxLength, onBlur, validate } = this.props;
        return (
            <Field
                name={name}
                value={value}
                component={this.renderField}
                type={type}
                label={label}
                required={required}
                placeholder={placeholder}
                onKeyPress={this.onKeyPress}
                validate={validate || null}
                className={meta && meta.error ? className : ""}
                disabled={disabled}
                maxLength={maxLength}
                onBlur={onBlur}
            />
        );
    }
}

export default RenderInputField;
