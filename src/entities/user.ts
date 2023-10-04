import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { UserCreated } from '../events/user-created'
import { WalletLinked } from '../events/wallet-linked'

@Entity
export class User {
  public constructor(
    public id: UUID,
    readonly name: string,
    readonly email: string,
    readonly age: number,
    readonly walletId?: UUID
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

  @Reduces(WalletLinked)
  public static reduceWalletLinked(event: WalletLinked, currentUser: User): User {    
    return new User(
      currentUser.id,
      currentUser.name,
      currentUser.email,
      currentUser.age,
      event.walletId
    )
  }
}
