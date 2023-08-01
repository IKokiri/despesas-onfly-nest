import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

export function IsNotDateFuture(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "IsNotDateFuture",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const currentDate = new Date();
          currentDate.setUTCHours(0, 0, 0, 0);

          const inputDate = new Date(value);
          inputDate.setUTCHours(0, 0, 0, 0);

          return inputDate <= currentDate;
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} deve ser menor ou igual à data atual.`;
        },
      },
    });
  };
}
