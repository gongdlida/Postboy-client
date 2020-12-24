import { rest } from 'msw'

let id = 1
let history = [
  {
    history_id: 1,
    created_at: Date.now(),
    type: 'GET',
    status: 200
  }
]

export const handlers = [
    rest.post('/signup', (req, res, ctx) => {
        // Persist user's authentication in the session
        if (sessionStorage.getItem(req.body.email)) {
          return res(
            // Respond with a 200 status code
            ctx.status(409),
            ctx.json({
              message: 'Existing email!'
            })
          )
        } else {
          sessionStorage.setItem(req.body.email, req.body.password)
          return res(
            ctx.status(201),
            ctx.json({
              message: 'signup success'
            })
          )
        }

      }),
    rest.post('/signin', (req, res, ctx) => {
      let id = 0
      const infotomatch = sessionStorage.getItem(req.body.email)
      if (infotomatch && infotomatch === req.body.password) {
          sessionStorage.setItem('is-authenticated', true)
          id += 1
          return res(
            ctx.status(200),
            ctx.json({
              id: id,
              nickname: 'GOM',
              username: req.body.email,
              pasword: infotomatch.password,
              created_at: Date.now(),
              updatedAt: Date.now()
            })
          )
      } else {
        return res(
          ctx.status(401),
          ctx.json({
            message: 'Invalid user or Wrong password'
          })
        )
      }
    }),
    rest.post('/signout', (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            message: 'Successfully signed out!'
          })
        )
      }),

    rest.get('/historyget', (req, res, ctx) => {
      const isAuthenticated = sessionStorage.getItem('is-authenticated')
      if (!isAuthenticated) {
        // If not authenticated, respond with a 403 error
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      } else {
          return res(
            ctx.status(200),
            ctx.json({
              history: history
            }),
          )
      }
    }),
    rest.post('/historyadd', (req, res, ctx) => {
      const isAuthenticated = sessionStorage.getItem('is-authenticated')
      if (!isAuthenticated) {
        // If not authenticated, respond with a 403 error
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      } else {
          id += 1
          history.push({
            history_id: id,
            created_at: Date.now(),
            type: req.body.type,
            status: req.body.status
          })
          return res(
            ctx.status(200),
            ctx.json({
              message: 'Added successfully!'
            }),
          )
      }
    }),
    rest.post('/historyclear', (req, res, ctx) => {
      const isAuthenticated = sessionStorage.getItem('is-authenticated')
      if (!isAuthenticated) {
        // If not authenticated, respond with a 403 error
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      } else {
          history = []
          return res(
            ctx.status(200),
            ctx.json({
              message: 'Cleared successfully!'
            }),
          )
      }
    }),
  ]
  
  