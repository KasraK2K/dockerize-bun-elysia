// Bootstrap
import '#bootstrap'
// Dependencies
import { swagger } from '@elysiajs/swagger'
import { Elysia } from 'elysia'
// Modules
import db from '#db'
import meditation from '#meditation'
import routes from '#routes'

if (!db) console.log('DB not found')
else if (!db.user) console.log('DB.USER not found')
else if (!db.user.findFirst) console.log('DB.USER.Find_First not found')

const app = new Elysia({ prefix: '/api' })
	// Swagger
	.use(
		swagger({
			path: '/swagger',
			documentation: {
				info: { title: 'Meditation Documentation', version: '1.0.0' },
				tags: [{ name: 'User', description: 'User endpoints' }],
			},
		})
	)
	// Routes
	.onAfterHandle((context) => {
		context.response = { result: context.response }
	})
	.all('/health', async () => {
		return await db.$queryRaw`SELECT 1`
	})
	.use(routes)
	.listen(meditation.port)

console.log(`🍀 Meditation is running at ${app.server?.hostname}:${app.server?.port}`)
