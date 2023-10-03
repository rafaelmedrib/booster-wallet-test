import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class WalletCreated {
  public constructor(
    readonly walletId: UUID,
    readonly userId: string
  ) { }

  public entityID(): UUID {
    return this.walletId;
  }
}
