import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  PrimaryColumn
} from 'typeorm'

@Entity({ name: 'user'})
export class User {

  @PrimaryGeneratedColumn()
  userIdx: number

  @Column({ unique: true,  length: 50 })
  userId: string

  @Column({ length: 255 }) // 기본 255
  userPw: string

  @Column({ default: '/default.png' })
  userProfileImage: string

  @CreateDateColumn()
  userJoinDt: Date

}