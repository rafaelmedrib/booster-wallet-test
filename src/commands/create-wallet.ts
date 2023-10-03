import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { WalletCreated } from '../events/wallet-created'

@Command({
  authorize: 'all'
})
export class CreateWallet {
  public constructor(
    readonly userId: string,
  ) {}

  public static async handle(command: CreateWallet , register: Register): Promise<void> {
    register.events(new WalletCreated(
      UUID.generate(),
      command.userId
    ))
  }
}
