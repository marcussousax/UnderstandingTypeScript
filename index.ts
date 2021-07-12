function add(n1: number, n2: number): number {
  return n1 + n2
}

const results = add(2, 90)

// Flat Array
const data = [[1], [2, 3, 4], [[[5]]]]
const flatData = data.flat(3)

const Container = document.getElementById('content')!
Container.innerHTML = `
  <p>${results}</p> 
  <hr />
  <h2>Flat Array </h2>
  <p>${JSON.stringify(flatData)}</p>
`
