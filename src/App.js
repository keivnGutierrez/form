import 'src/styles/index.css'
import InputGeneral from './components/InputGeneral'
import SelectGeneral from './components/SelectGeneral'
import { useCurrentInputs } from './hooks/useCurrentInputs'
import { useDataInputs } from './hooks/useDataInputs'

export default function App() {
  const { list } = useDataInputs()
  const { listCurrent, handleAddInput, handleDeleteInput } = useCurrentInputs()

  const inputs = list.map((input) => {
    const { id, type } = input
    if (type == 'select') {
      return (
        <li key={id} className="item-input">
          <SelectGeneral {...input} handleAddInput={handleAddInput} />
        </li>
      )
    }
    return (
      <li key={id} className="item-input">
        <InputGeneral {...input} handleAddInput={handleAddInput} />
      </li>
    )
  })

  const inputsInForm = listCurrent.map((input) => {
    const { id, type, placeholder, name, options } = input
    if (type == 'select') {
      return (
        <li key={id} className="item-form">
          <select>
            {options.map(({ name, value }, i) => (
              <option key={i} value={value}>
                {name}
              </option>
            ))}
          </select>
        </li>
      )
    }
    if (type == 'text') {
      return (
        <li key={id} className="item-form">
          <input type={type} placeholder={placeholder} name={name} />
        </li>
      )
    }
    if (type == 'radio') {
      return (
        <li key={id} className="item-form">
          <label>
            <input type={type} name={name} />
            {placeholder}
          </label>
        </li>
      )
    }
  })

  const selectedInputs = listCurrent.map((input) => (
    <li
      className="item-delete"
      key={input?.id}
      onClick={() => {
        handleDeleteInput(input?.id)
      }}
    >
      {input.type}: {input.name}
    </li>
  ))

  return (
    <main className="main-page">
      <aside>
        <div>
          <h2>Select inputs for form</h2>
          <ul className="list-inputs">{inputs}</ul>
        </div>
        <div>
          <h2>Delete inputs selected</h2>
          <ul className="list-delete">{selectedInputs}</ul>
          {inputsInForm?.length == 0 && <h5>List is empty</h5>}
        </div>
      </aside>
      <form>
        <h2>Form</h2>
        <ul className="form-list">{inputsInForm}</ul>
        {inputsInForm?.length == 0 && <h5>Form empty</h5>}
      </form>
    </main>
  )
}
