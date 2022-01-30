import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ActionToken, ActionTokenType } from './action-token.entity'
import { User } from '../user/entities/user.entity'

@Injectable()
export class ActionTokensService {
  constructor(
    @InjectRepository(ActionToken)
    private actionTokensRepository: Repository<ActionToken>,
  ) {}

  async createForUser(user: User, action: ActionTokenType, newValue: string = null): Promise<ActionToken> {
    return this.actionTokensRepository.save({ user, action, newValue })
  }

  async find(id: string): Promise<ActionToken> {
    return this.actionTokensRepository.findOneOrFail(id, { relations: ['user'] })
  }

  async delete(id: string): Promise<void> {
    await this.actionTokensRepository.delete(id)
  }
}
