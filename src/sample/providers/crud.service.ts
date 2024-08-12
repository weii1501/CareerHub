import { Sampletable1 } from '#entity/sampledb1';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CrudService {
  constructor(
    @InjectRepository(Sampletable1)
    private table: Repository<Sampletable1>,
  ) {}

  public async create(data: Partial<Sampletable1>): Promise<Sampletable1> {
    return this.table.save(data);
  }
}
