// NOTE : This file is used to define default engine and you can change it into meditation.config.ts

// Modules
import meditation from '#meditation'
import { Databases } from '#src/types/general.enum'
import { sqlite, mysql, mariadb, postgres } from '#utils/index'

const engines = {
	[Databases.SQLITE]: sqlite,
	[Databases.MYSQL]: mysql,
	[Databases.MARIADB]: mariadb,
	[Databases.POSTGRES]: postgres,
}

export const engine = engines[meditation.config.default_engine]