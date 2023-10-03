import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { UserCreated } from '../events/user-created'

@Entity
export class User {
  public constructor(
    public id: UUID,
    readonly name: string,
    readonly email: string,
    readonly age: number,
  ) {}

  @Reduces(UserCreated)
  public static reduceUserCreated(event: UserCreated, currentUser?: User): User {
    return new User(
      event.userId,
      event.name,
      event.email,
      event.age
    )
  }

}
