import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class WalletLinked {
  public constructor(
    readonly walletId: UUID,
    readonly userId: UUID,
  ) {}

  public entityID(): UUID {
    return this.userId;
  }
}
