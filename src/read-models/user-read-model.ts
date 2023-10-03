import { ReadModel, Projects } from '@boostercloud/framework-core'
import { UUID, ProjectionResult } from '@boostercloud/framework-types'
import { User } from '../entities/user'

@ReadModel({
  authorize: 'all'
})
export class UserReadModel {
  public constructor(
    public id: UUID,
    readonly name: string,
    readonly email: string,
    readonly age: number,
    readonly walletId: UUID | null
  ) {}

  @Projects(User, "id")
  public static projectUser(entity: User, currentUserReadModel?: UserReadModel): ProjectionResult<UserReadModel> {
    return new UserReadModel(
      entity.id,
      entity.name,
      entity.email,
      entity.age,
      entity.walletId || null
    )
  }
}
