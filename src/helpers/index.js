import moment from "moment";
import { DATE_FORMAT, REQUIRED_MESSAGE, ValidationMessage } from './constants';
export const splitPascalString = str => {
  return (str || "").replace(/([a-z0-9])([A-Z])/g, "$1 $2");
};

export const requiredValidation = value => value ? undefined : REQUIRED_MESSAGE;

export const requiredNumberValidation = value => value || value === 0 ? undefined : REQUIRED_MESSAGE;

export const maxLength = (max, name, value) =>
  value && value.length > max
    ? `The ${splitPascalString(name || "").toUpperCase()} needs to be ${max} characters in length, please update the record to continue.`
    : undefined;

export const minLength = (min, name, value) =>
  value && value.length < min
    ? `The ${splitPascalString(name || "").toUpperCase()} needs to be ${min} characters in length, please update the record to continue.`
    : undefined;

export const minValue = (min, name, value) => value && value < min ? `Must be greater ${min}` : undefined

export const sedolValidation = value =>
  value && !/^([a-zA-Z0-9]{6}[0-9])$/.test(value)
    ? ValidationMessage.AlphabetError
    : undefined;

export const alphaNumeric = (value, message) =>
  value && !/^([a-zA-Z0-9]{6}[0-9])$/.test(value)
    ? message || "Only Alphanumeric"
    : undefined;

export const onlyTextAndGivenSpecialCharacters = (value, message) =>
  value && !(/^[a-zA-Z0-9!@#$%^()[\]{}/~?<>\\/*\ ,;:.\'\"\&*-_./\n]+$/.test(value))
    ? message || "Only Alphanumeric"
    : undefined;

export const onlyDecimalWithTwoDigits = (value, message) =>
  value && !(/^[0-9]+(\.[0-9]{1,2})?$/.test(value))
    ? message || "Only Alphanumeric"
    : undefined;

export const emailValidation = (value) =>
  value && !(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value))
    ? ValidationMessage.EmailError
    : undefined;

export const websiteValidation = (value) =>
  value && !(/^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-zA-Z]{2,6}$/.test(value))
    ? ValidationMessage.WebsiteError
    : undefined;

export const validDropDown = (value, message) => {
  return value != undefined && value != null && parseInt(value) !== -1
    ? undefined : message || REQUIRED_MESSAGE;
}

export const formattedDate = (dt, format) => {
  if (!dt) {
    return "";
  }

  format = format || DATE_FORMAT;
  return moment(dt).format(format);
}