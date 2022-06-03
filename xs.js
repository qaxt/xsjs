class Line {
  constructor(...items) {
    this.value = []
    for (const item of items) {
      if (!this.value.includes(item)) {
        this.value.push(item)
      }
    }
  }

  unite(...lists) {
    let unision = []
    for (const list of lists) {
      unision = unision.concat(list.value) 
    }
    return this.value.concat(unision)
  }

  subtract(...lists) {
    let sub = []
    for (const list of lists) {
      sub = sub.concat(list.value)
    }
    return this.value.filter(x => !sub.includes(x))
  }

  intersect(...lists) {
    let all = []
    all.concat(this.value)
    for (const list of lists) {
      all = all.concat(list.value)
    }
    const items = all.filter((x) => {
      let common = true
      for (const list of lists) {
        ((!list.value.includes(x)) ? common = false: common = common)
      }
      return common
    })
    return this.value = new Line(...items).value
  }
}

class Tally {
  constructor(list) {
    this.value = new Map()
    for (const item of list) {
      const value = this.value.get(item)
      if (value) {
        this.value.set(item, value + 1)
      } else {
        this.value.set(item, 1)
      }
    }
  }

  add(n, pointer) {
    if (!this.value.get(pointer)) {
      this.value.set(pointer, 0)
    }
    if (this.value.get(pointer) + n < 0) {
      return this.value.set(pointer, 0)
    }
    return this.value.set(pointer, this.value.get(pointer) + n)
  }

  to(type) {
    if (Array.isArray(type)) {
      const list = []
      for (const [key, value] of this.value) {
        for (let i = 0; i < value; i++) {
          list.push(key)
        }
      }
      return list
    } else if (typeof type === 'object') {
      let obj = {}
      for (const [key, value] of this.value) {
        obj[key] = value
      }
      return obj
    }
  }
}

class Grid {
  constructor(w, h) {
    this.value = []
    for (let y = 0; y < h; y++) {
      const row = []
      for (let x = 0; x < w; x++) {
        row.push(y * w + x)
      }
      this.value.push(row)
    }
  }
}

class Space {
  constructor(n, d) {
    this.value = []
    this.length = n
    this.dimensions = d
    for (let i = 0; i < n ** d; i++) {
      this.value.push(i)
    }
  }

  point(...coords) {
    const axes = [...coords]
    if (coords.length !== this.dimensions) {
      for (i = axes.length; i < this.dimensions; i++) {
        
      }
    } else {
      
    }
    let index = 0
    for (let i = 0; i < axes.length; i++) {
      index += axes[i] * this.length ** i
    }
    return this.value[index]
  }
}

module.exports = {
  Line: Line,
  Tally: Tally,
  Grid: Grid,
  Space: Space,
}