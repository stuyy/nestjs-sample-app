import * as Joi from '@hapi/joi';

export const UserDtoSchema = Joi.object({
  name: Joi
    .string()
    .required(),
  age: Joi
    .number()
    .required(),
  email: Joi
    .string()
    .required(),
});
