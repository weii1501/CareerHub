import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { CrudService } from '../providers';
import  {CreateDto}  from '../dto';


@Controller('crud')
export class CrudController {
  constructor(private crud: CrudService) {}

  @Post()
  public async create(@Body() body: CreateDto): Promise<{ id: number }> {
    console.log('body', body);
    const result = await this.crud.create(body);
    if (!result.id) {
      throw new InternalServerErrorException('NotCreatedData');
    }

    return { id: result.id };
  }
}
