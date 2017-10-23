export default function partialApplicationProxy(fn) {
  return new Proxy(fn, {
    get: (target, property, receiver) => {
      const nextFn = (...args) => fn(property, ...args)
      return partialApplicationProxy(nextFn);
    }
  })
}