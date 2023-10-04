import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { TransactionCreated } from '../events/transaction-created'

@Entity
export class Transaction {
  public constructor(
    public id: UUID,
    readonly walletId: UUID,
    readonly amount: number
  ) {}

  @Reduces(TransactionCreated)
  public static reduceTransactionCreated(event: TransactionCreated, currentTransaction?: Transaction): Transaction {
    return new Transaction(
      event.transactionId,
      event.walletId,
      event.amount
    )
  }
}
