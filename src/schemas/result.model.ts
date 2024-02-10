import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Result {
  @Prop(
    raw([
      {
        title: { type: String, required: true },
        tags: { type: [String], required: true },
        group: { type: String, required: true },
        difficult: { type: String, required: true },
      },
    ]),
  )
  test: ITestDTO;

  @Prop({ type: [String], required: true })
  answers: string[];
}

export const ResultSchema = SchemaFactory.createForClass(Result);

interface ITestDTO {
  title: string;
  tags: string[];
  group: string;
  difficult: string;
}
