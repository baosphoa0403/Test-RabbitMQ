import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ROLE } from '../../constant';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ enum: ROLE })
  role: ROLE;
}
