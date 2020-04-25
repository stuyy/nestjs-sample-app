import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import { ObjectSchema } from '@hapi/joi';

@Injectable()
export class UserValidationPipe implements PipeTransform {
  // eslint-disable-next-line no-empty-function
  constructor(private schema: ObjectSchema) {}

  transform(value: any) {
    const { error } = this.schema.validate(value);
    if (error) throw new BadRequestException('Error');
    return value;
  }
}
