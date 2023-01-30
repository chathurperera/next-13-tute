"use client"

const Error = ({error, reset}) => {
  return (
    <>
        <div>This ain't loading up</div>
        <button onClick={() => reset()}>Retry</button>
    </>
  )
}

export default Error