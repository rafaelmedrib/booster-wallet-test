import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { UserCreated } from '../events/user-created'

@Command({
  authorize: 'all'
})
export class CreateUser {
  public constructor(
    readonly name: string,
    readonly email: string,
    readonly age: number,
  ) {}

  public static async handle(command: CreateUser , register: Register): Promise<void> {
    register.events(new UserCreated(
      UUID.generate(),
      command.name,
      command.email,
      command.age
    ))
  }
}
