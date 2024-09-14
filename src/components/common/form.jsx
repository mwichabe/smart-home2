import React, { Component } from "react"
import Joi from "joi-browser"
import Input from "./input"
import Select from "./select"

export default class Form extends Component {
  state = {
    data: {},
    errors: {}
  }

  handleSubmit = e => {
    e.preventDefault()
    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return
    this.doSubmit()
  }

  handleChange = ({ currentTarget: input }) => {
    const errorMessage = this.validateOnChange(input)

    const errors = { ...this.state.errors }
    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = {
      ...this.state.data
    }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  validate() {
    const { error } = Joi.validate(this.state.data, this.schema, {
      abortEarly: false
    })
    if (!error) return null
    const errors = {}
    for (let property of error.details) {
      errors[property.path[0]] = property.message
    }

    return errors
  }

  validateOnChange(input) {
    const targetInput = { [input.name]: input.value } // computed properties in ES6
    const schema = { [input.name]: this.schema[input.name] }
    const { error } = Joi.validate(targetInput, schema)
    return error ? error.details[0].message : null
  }

  renderButton = label => {
    return (
      <button
        type="submit"
        className="btn btn-secondary btn-block my-5"
        disabled={this.validate()}
      >
        {label}
      </button>
    )
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state
    return (
      <Input
        value={data[name]}
        name={name}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        type={type}
      />
    )
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state
    return (
      <Select
        name={name}
        label={label}
        options={options}
        value={data[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    )
  }
}
