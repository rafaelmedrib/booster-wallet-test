import { WalletLinked } from '../events/wallet-linked'
import { EventHandler } from '@boostercloud/framework-core'
import { Register } from '@boostercloud/framework-types'
import { WalletCreated } from '../events/wallet-created'

@EventHandler(WalletCreated)
export class HandleWalletCreated {
  public static async handle(event: WalletCreated, register: Register): Promise<void> {
    register.events(new WalletLinked(
      event.walletId,
      event.userId
    ))
  }
}
