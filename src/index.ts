// Bootstrap
import '#bootstrap'
// Dependencies
import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'
// Modules
import routes from '#routes'
import meditation from '#meditation'

const app = new Elysia()
	// Swagger
	.use(swagger())
	// Middleware
	.use(routes)
	.listen(meditation.port)

console.log(`🍀 Meditation is running at ${app.server?.hostname}:${app.server?.port}`)
