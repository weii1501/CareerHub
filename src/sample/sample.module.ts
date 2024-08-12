import { Module } from '@nestjs/common';
import * as controllers from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sampletable1 } from '#entity/sampledb1';
import { Sampletable2 } from '#entity/sampledb2';
import * as provider from './providers';


@Module({
  imports: [TypeOrmModule.forFeature([
    Sampletable1,
    Sampletable2
  ])],
  controllers: Object.values(controllers),
  providers: Object.values(provider),
})
export class SampleModule {}
