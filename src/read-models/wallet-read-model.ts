import { ReadModel, Projects, Booster } from '@boostercloud/framework-core'
import { UUID, ProjectionResult } from '@boostercloud/framework-types'
import { Wallet } from '../entities/wallet'
import { TransactionReadModel } from './transaction-read-model'

@ReadModel({
  authorize: 'all'
})
export class WalletReadModel {
  public constructor(
    public id: UUID,
    readonly userId: UUID,
    readonly transactionIds: UUID[],
  ) {}

  public get transactions() {
    if(!this.transactionIds) return []

    return this.transactionIds.map((tid) => Booster.readModel(TransactionReadModel)
      .filter({ id: { eq: tid } })
      .search()
    )
  }

  @Projects(Wallet, "id")
  public static projectWallet(entity: Wallet, currentWalletReadModel?: WalletReadModel): ProjectionResult<WalletReadModel> {
    return new WalletReadModel(
      entity.id,
      entity.userId,
      entity.transactionIds
    )
  }
}
