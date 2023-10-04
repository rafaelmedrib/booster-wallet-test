import { Booster, Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { UserReadModel } from '../read-models/user-read-model'
import { TransactionCreated } from '../events/transaction-created';

@Command({
  authorize: 'all'
})
export class CreateTransaction {
  public constructor(
    readonly email: string,
    readonly amount: number,
  ) {}

  public static async handle(command: CreateTransaction , register: Register): Promise<void> {
    const { walletId } = await Booster.readModel(UserReadModel).filter({
      email: {eq: command.email}
    }).searchOne();

    if(!walletId) {
      throw new Error('User or wallet not found');
    }

    register.events(new TransactionCreated(
      UUID.generate(),
      walletId,
      command.amount
    ))
  }
}
