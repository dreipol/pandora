const fn = (foo) => {
  const bar = { foo }
  return {
    ...bar,
    foo: undefined,
  }
}

export default fn
