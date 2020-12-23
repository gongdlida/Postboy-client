import { rest } from 'msw'

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
          id += 1
          return res(
            ctx.status(200),
            ctx.json({
              id: id,
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
          ctx.status(205),
          ctx.json({
            message: 'Successfully signed out!'
          })
        )
      }),

    rest.get('/user', (req, res, ctx) => {
      // Check if the user is authenticated in this session
      const isAuthenticated = sessionStorage.getItem('is-authenticated')
      if (!isAuthenticated) {
        // If not authenticated, respond with a 403 error
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          }),
        )
      }
      // If authenticated, return a mocked user details
      return res(
        ctx.status(200),
        ctx.json({
          username: 'admin',
        }),
      )
    }),
  ]
  
  