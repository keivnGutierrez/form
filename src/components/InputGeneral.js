import { useState } from 'react'
import PropTypes from 'prop-types'

const InputGeneral = ({ type, component, handleAddInput }) => {
  const [form, setForm] = useState({
    name: '',
    placeholder: '',
  })

  function handleChangeInput(e) {
    const { value, name } = e.target
    console.log({ value, name })
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }))
  }

  function handleSubmitInput(e) {
    e.preventDefault()
    handleAddInput({
      type: type,
      name: form?.name,
      placeholder: form?.placeholder,
    })
    setForm({
      name: '',
      placeholder: '',
    })
  }

  return (
    <>
      <h3>Add input {component}</h3>
      <form onSubmit={handleSubmitInput}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChangeInput}
        />
        <input
          type="text"
          placeholder="placeholder || label"
          name="placeholder"
          value={form.placeholder}
          onChange={handleChangeInput}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  )
}

InputGeneral.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  component: PropTypes.string,
  handleAddInput: PropTypes.func,
}

export default InputGeneral
