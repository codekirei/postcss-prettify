import postcss from 'postcss'
import prettify from './index.js'
import test from 'tape'

test('postcss prettify', t => {
  t.ok(prettify())
  t.end()
})

test('should prettify at rule spacing after name', t => {
  const input = `@charset"UTF-8";

@font-face  {
  font-family: foo;
  src: local("foo")
}
`
  const expected = `

@charset "UTF-8";

@font-face {
  font-family: foo;
  src: local("foo")
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, `prettifies at rule spacing after name`)
  t.end()
})

test('should prettify at rule spacing between', t => {
  const input = `@charset "UTF-8" ;

@media (min-width: 600px){
  body {
    background: red;
  }
}
`
  const expected = `

@charset "UTF-8";

@media (min-width: 600px) {
  body {
    background: red;
  }
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, 'prettifies at rule spacing between')
  t.end()
})

test('should prettify at rule spacing colon', t => {
  const input = `@page :first {
  margin: 1in;
}

@media (min-width:600px) {
  body {
    background: red;
  }
}

@media (min-width: 600px) {
  body {
    background: red;
  }
}
`
  const expected = `

@page :first {
  margin: 1in;
}

@media (min-width: 600px) {
  body {
    background: red;
  }
}

@media (min-width: 600px) {
  body {
    background: red;
  }
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, 'prettifies at rule spacing colon')
  t.end()
})

test('should prettify double space', t => {
  const input = `.foo {
  background: red;
}
.bar {
  background: green;
}
/* a comment */
@media (min-width: 600px) {
  /* another comment */
  .foo {
    background: blue;
  }
  .bar {
    background: yellow;
  }
}
`
  const expected = `

.foo {
  background: red;
}

.bar {
  background: green;
}

/* a comment */

@media (min-width: 600px) {
  /* another comment */
  .foo {
    background: blue;
  }
  .bar {
    background: yellow;
  }
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, 'prettifies double space')
  t.end()
})


test('should prettify indent', t => {
  const input = `@media (min-width: 600px) {
  .foo {
    animation: Demo 1s;
    -webkit-animation: Demo 1s;
  }
  @supports (display: flex) {
    .foo {
      display: flex;
    }
  }
}
`
  const expected = `

@media (min-width: 600px) {
  .foo {
    animation: Demo 1s;
    -webkit-animation: Demo 1s;
  }
  @supports (display: flex) {
    .foo {
      display: flex;
    }
  }
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, 'prettifies indent')
  t.end()
})

test('should prettify one selector per line', t => {
  const input = `.foo, .bar {
  background: blue;
}
`
  const expected = `

.foo,
.bar {
  background: blue;
}
`

  const actual = postcss([
    prettify()
  ])
    .process(input, { from: 'undefined' })
    .toString()

  t.equal(actual, expected, 'prettifies one selector per line')
  t.end()
})
