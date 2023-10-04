import { ReadModel, Projects } from '@boostercloud/framework-core'
import { UUID, ProjectionResult } from '@boostercloud/framework-types'
import { Transaction } from '../entities/transaction'

@ReadModel({
  authorize: "all"
})
export class TransactionReadModel {
  public constructor(
    public id: UUID,
    readonly walletId: UUID,
    readonly amount: number
  ) {}

  @Projects(Transaction, "id")
  public static projectTransaction(entity: Transaction, currentTransactionReadModel?: TransactionReadModel): ProjectionResult<TransactionReadModel> {
    return new TransactionReadModel(
      entity.id,
      entity.walletId,
      entity.amount
    )
  }

}
