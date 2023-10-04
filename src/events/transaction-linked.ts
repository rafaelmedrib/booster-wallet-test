import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class TransactionLinked {
  public constructor(
    readonly transactionId: UUID,
    readonly walletId: UUID,
  ) {}

  public entityID(): UUID {
    return this.walletId;
  }
}
