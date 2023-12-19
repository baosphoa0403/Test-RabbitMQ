import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ROLE } from '../../../constant';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ enum: ROLE, type: 'enum', default: ROLE.USER })
  role: ROLE;
}
