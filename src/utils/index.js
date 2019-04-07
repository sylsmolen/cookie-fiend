export const log = (...args) => console.log(...args)
export const logErr = txt => err => console.error(txt, err)
export const head = arr => arr[0]

export const thunk = func => data => () => func(data)
export const forEach = func => data => data.forEach(func)
export const reduceToNewArr = func => data => data.reduce(func, [])
export const timeout = time => func => setTimeout(func, time)
export const interval = time => func => setInterval(func, time)
export const getTail = arr => arr[arr.length - 1]
export const map = func => data => data.map(func)

export const compose = (...fns) => (...args) =>
  fns.reduceRight((res, fn) => [fn(...res)], args)[0]

export const composePromise = (...functions) => initialValue =>
  functions.reduceRight(
    (sum, fn) => Promise.resolve(sum).then(fn),
    initialValue
  )

export const getProp = prop => obj => {
  if (obj && obj.hasOwnProperty(prop)) {
    return obj[prop]
  }
  console.log('obj:', obj, "doesn't have prop:", prop)
  return obj
}

export const inspect = value => {
  console.log(value)
  return value
}

export const mapTo = compose(
  map,
  getProp
)

export const copy = compose(
  JSON.parse,
  JSON.stringify
)
