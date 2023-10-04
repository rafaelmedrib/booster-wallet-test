import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class TransactionCreated {
  public constructor(
    readonly transactionId: UUID,
    readonly walletId: UUID,
    readonly amount: number,
  ) {}

  public entityID(): UUID {
    return this.transactionId;
  }
}
