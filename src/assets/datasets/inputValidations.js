const inputValidations = {
  string: {
    regex: /[^A-Za-z0-9]+/,
    min: 5,
    max: 50
  },
  phone: {
    regex: /[^0-9]+/,
    min: 10,
    max: 15
  },
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    min: 5,
    max: 50,
    not: true
  },
  date: {
    regex: /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/,
    min: 10,
    max: 10
  },
  containerNumber: {
    regex: /[^A-Za-z0-9]+/,
    min: 11,
    max: 11
  },
  vCode: {
    regex: /[^0-9]+/,
    min: 15,
    max: 15
  }
}

export default inputValidations