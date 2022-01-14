import { useState } from 'react'
import PropTypes from 'prop-types'

const SelectGeneral = ({ type, component, handleAddInput }) => {
  const [form, setForm] = useState({ name: '', value: '' })
  const [options, setOptions] = useState([])
  const [name, setName] = useState('')

  function handleChangeInput(e) {
    const { value, name } = e.target

    setForm((pre) => ({
      ...pre,
      [name]: value,
    }))
  }

  function handleSubmitInput(e) {
    e.preventDefault()
    const optionsSend =
      options.length == 0
        ? [
            {
              name: 'Option one',
              value: 'test',
            },
          ]
        : options
    handleAddInput({
      type,
      options: optionsSend,
      name,
    })
    setOptions([])
    setName('')
    setForm({
      value: '',
      name: '',
    })
  }

  function handleSubmitAddOption(e) {
    e.preventDefault()
    setOptions((pre) => [
      ...pre,
      {
        name: form?.name || 'option',
        value: form?.value || 'test',
      },
    ])
    setForm({
      value: '',
      name: '',
    })
  }

  function handleChangeInputName(e) {
    const { value } = e.target
    setName(value)
  }

  return (
    <>
      <h3>Add select</h3>
      <h5>Add options</h5>
      <form onSubmit={handleSubmitAddOption}>
        <input
          type="text"
          placeholder="Name"
          onChange={handleChangeInput}
          name="name"
          value={form.name}
        />
        <input
          type="text"
          placeholder="Value"
          onChange={handleChangeInput}
          name="value"
          value={form.value}
        />
        <input type="submit" value="Add" />
      </form>

      <label>
        <select>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.name}
            </option>
          ))}
          {options?.length == 0 && <option value="test">Add option</option>}
        </select>
        (⬅️test options)
      </label>

      <input
        type="text"
        placeholder="Name select"
        onChange={handleChangeInputName}
        name="name"
        value={name}
      />
      <button onClick={handleSubmitInput} className="btn-select-add">
        Add select
      </button>
    </>
  )
}

SelectGeneral.propTypes = {}

export default SelectGeneral
