const { Line, Tally, Grid, Space } = require('./xs.js')

const one = new Line('foo', 'foo', 'bar')
const two = new Line('foo', 'bar', 'baz')
const three = new Line('bar', 'baz', 'qux')

console.log(one, two, three)
console.log(one.intersect(two, three))
console.log(one, two, three)

let stuff = ['google', 'amazon', 'google', 'apple']
const chart = new Tally(stuff)

console.log(chart)
console.log(chart.add(2, 'microsoft'))
console.log(chart.add(-1, 'google'))
stuff = chart.to([])
console.log(stuff, chart.to({}))

const grid = new Grid(8, 4)
console.log(grid)

const cube = new Space(2, 3)
console.log(cube.value)
console.log(cube.point(1, 0, 1)) // x = 1, y = 0, z = 1