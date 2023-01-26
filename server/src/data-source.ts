import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { Post } from './entity/Post'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1234',
  database: 'zero',
  entities: [Post],
  synchronize: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy()
})