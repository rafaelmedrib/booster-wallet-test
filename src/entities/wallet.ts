import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { WalletCreated } from '../events/wallet-created'

@Entity
export class Wallet {
  public constructor(
    public id: UUID,
    readonly userId: UUID
  ) {}

  @Reduces(WalletCreated)
  public static reduceWalletCreated(event: WalletCreated, currentWallet?: Wallet): Wallet {
    return new Wallet(
      event.walletId,
      event.userId
    )
  }

}
