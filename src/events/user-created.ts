import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class UserCreated {
  public constructor(
    readonly userId: UUID,
    readonly name: string,
    readonly email: string,
    readonly age: number,
  ) {}

  public entityID(): UUID {
    return this.userId;
  }
}
