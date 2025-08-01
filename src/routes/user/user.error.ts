import { ForbiddenException, UnprocessableEntityException } from '@nestjs/common'

export const UserAlreadyExistsException = new UnprocessableEntityException([
  {
    message: 'Error.UserAlreadyExists',
    path: 'email',
  },
])

export const RoleNotFoundException = new UnprocessableEntityException([
  {
    message: 'Error.RoleNotFound',
    path: 'roleId',
  },
])

export const CannotUpdateOrDeleteYourselfException = new ForbiddenException('Error.CannotUpdateOrDeleteYourself')
