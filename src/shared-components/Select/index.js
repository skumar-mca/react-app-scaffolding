
import { REQUIRED_MESSAGE } from 'helpers/constants';
import { validDropDown } from "helpers/index";
import { lodashFind } from 'helpers/lodash-wrapper';
import React, { Component } from "react";
import { Field } from "redux-form";

class RenderSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            valueLabel: null,
            opened: false
        };

        this.handleOnChage = this.handleOnChage.bind(this);
    }

    handleOnChage(evt) {
        let val = evt.target.value;
        this.props.onChange && this.props.onChange(val);
        this.props.setValue && this.props.setValue(val, this.props.name);
        this.props.meta.change(this.props.name, val);
        this.setState({ value: val });
    }

    renderField = ({ name, label, placeholder, disabled, data, meta: { touched, error } }) => (
        <div className=""  >
            <label className="field-lbl ddropdown-label">
                {label && <span onClick={(evt) => { evt.preventDefault(); }}>{label}</span>}
                <div className={`select-box ${error && touched ? "k-required error" : ""}`}>
                    <select
                        key={name}
                        tabIndex="0"
                        name={name}
                        className="form-control input-sm"
                        disabled={disabled}
                        onChange={this.handleOnChage}
                        placeholder={placeholder}
                    >
                        <option value={-1}>Select</option>
                        {data.map((itm) => {
                            return <>
                                <option value={itm.id}>{itm.label} </option>
                            </>
                        })}
                    </select>
                </div>
            </label>
        </div>
    )

    render() {
        const { defaultItem, label, data, name, required, disabled, meta, value } = this.props;

        let val = defaultItem;
        if (value != undefined && value != null && (data || []).length > 0) {
            val = lodashFind(data, (itm) => { return itm.id == value });
        }

        return (
            <div className={`${disabled && 'disabled-control'}`}>
                <Field
                    name={name}
                    currentValue={val}
                    data={data}
                    component={this.renderField}
                    label={label}
                    defaultValue={defaultItem}
                    validate={required ? validDropDown : null}
                    onChange={(evt) => this.handleOnChage(evt)}
                    disabled={disabled}
                    meta={meta}
                >
                </Field>
                {required && (value === null || value === undefined || parseInt(value) === -1) && (<span className="k-required">{REQUIRED_MESSAGE}</span>)}
            </div>
        );
    }
}

export default RenderSelect;
