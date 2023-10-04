import { TransactionCreated } from '../events/transaction-created'
import { EventHandler } from '@boostercloud/framework-core'
import { Register } from '@boostercloud/framework-types'
import { TransactionLinked } from '../events/transaction-linked'

@EventHandler(TransactionCreated)
export class HandleTransactionCreated {
  public static async handle(event: TransactionCreated, register: Register): Promise<void> {
    register.events(new TransactionLinked(
      event.transactionId,
      event.walletId
    ))
  }
}
