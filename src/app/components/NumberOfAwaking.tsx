import React from 'react'

const NumberOfAwaking = (props: any) => {
  const { numberOfAwaking, setNumberOfAwaking } = props
  return (
    <div>
          <label htmlFor="number-of-awaking">夜中に目覚めた回数</label>
          <input
            onChange={(e) => setNumberOfAwaking(Number(e.target.value))}
            value={numberOfAwaking}
            type="number"
            min="0"
            max="1000"
            id="number-of-awaking"
            name="number-of-awaking"
            required
          />
        </div>
  )
}

export default NumberOfAwaking