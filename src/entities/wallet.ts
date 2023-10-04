import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { WalletCreated } from '../events/wallet-created'
import { TransactionLinked } from '../events/transaction-linked'

@Entity
export class Wallet {
  public constructor(
    public id: UUID,
    readonly userId: UUID,
    readonly transactionIds: UUID[]
  ) {}

  @Reduces(WalletCreated)
  public static reduceWalletCreated(event: WalletCreated, currentWallet?: Wallet): Wallet {
    return new Wallet(
      event.walletId,
      event.userId,
      []
    )
  }

  @Reduces(TransactionLinked)
  public static reduceTransactionLinked(event: TransactionLinked, currentWallet: Wallet) {
    return new Wallet(
      event.walletId,
      currentWallet.userId,
      currentWallet?.transactionIds ? [...currentWallet.transactionIds, event.transactionId] : [event.transactionId]
    )
  }
}
