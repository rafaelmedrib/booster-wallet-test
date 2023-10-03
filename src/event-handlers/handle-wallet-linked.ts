import { WalletLinked } from '../events/wallet-linked'
import { EventHandler } from '@boostercloud/framework-core'
import { Register } from '@boostercloud/framework-types'

@EventHandler(WalletLinked)
export class HandleWalletLinked {
  public static async handle(event: WalletLinked, register: Register): Promise<void> {
    register.events(new WalletLinked(
      event.walletId,
      event.userId
    ))
  }
}
