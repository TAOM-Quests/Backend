import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Result {
  @Prop(
    raw([
      {
        title: { type: String, required: true },
        tags: { type: [String] },
        group: { type: String, required: true },
        difficult: { type: String, required: true },
      },
    ]),
  )
  test: ITestDTO;

  @Prop(
    raw([
      {
        type: { type: String, required: true },
        answer: { type: [String], required: true },
      },
    ]),
  )
  answers: IAnswer[];
}

export const ResultSchema = SchemaFactory.createForClass(Result);

interface ITestDTO {
  title: string;
  tags: string[];
  group: string;
  difficult: string;
}

interface IAnswer {
  type: string;
  answer: string[];
}
