import { useState } from 'react'

export const useCurrentInputs = () => {
  const [list, setList] = useState([])

  function handleAddInput(input = {}) {
    const id = generateID()

    let newInput = {}
    if (input?.type == 'select') {
      newInput = {
        id,
        type: input?.type,
        name: input?.name || `select ID-${id}`,
        options: input?.options || [
          {
            name: 'Option one',
            value: 'test',
          },
        ],
      }
    } else {
      newInput = {
        id,
        type: input?.type || 'text',
        placeholder: input?.placeholder || 'TEST',
        name: input?.name || `${input?.type} ID-${id}`,
      }
    }

    setList((preList) => [...preList, newInput])
  }

  function handleDeleteInput(id) {
    setList((preList) => preList.filter((input) => input?.id !== id))
  }

  function generateID() {
    const newID = list.length
    const exitsID = list.find(({ id }) => id == newID)

    if (exitsID) {
      return generateID()
    }
    return newID
  }
  return {
    listCurrent: list,
    handleAddInput,
    handleDeleteInput,
  }
}
