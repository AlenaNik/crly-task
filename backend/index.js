const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

users = [
  {
    name: 'Username',
    surname: 'Surname',
    slug: 'info1',
    transactions: [
      'today',
      'tomorrow'
    ],
    id: 1
  },
  {
    name: 'Username2',
    surname: 'Surname2',
    slug: 'info2',
    transactions: [
      'today2',
      'tomorrow2'
    ],
    id: 2
  },
  {
    name: 'Username3',
    surname: 'Surname3',
    slug: 'info3',
    transactions: [
      'today3',
      'tomorrow3'
    ],
    id: 3
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/users', (req, res) => {
  res.json(users)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
