import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn 
} from 'typeorm'

@Entity({
  name: 'post'
})
export class Post {

  @PrimaryGeneratedColumn()
  postNo: number

  @Column({
    length: 100,
  })
  title: string

  @Column('text')
  description: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
  
}