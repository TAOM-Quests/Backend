import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Department {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);
