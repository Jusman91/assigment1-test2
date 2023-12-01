import { useState } from "react"

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue(currentValue => typeof value === 'boolean' || typeof value === 'string' ? value : !currentValue);
  }

  return [value, toggleValue]
}