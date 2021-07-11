function add(n1: number, n2: number): number {
  return n1 + n2
}

const results = add(2, 90)

const Container = document.getElementById('content')!
Container.innerHTML = `<p>${results}</p>`
