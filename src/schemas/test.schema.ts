import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

@Schema()
export class Test {
  @Prop({ type: SchemaTypes.ObjectId, required: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  group: string;

  @Prop([String])
  tags: string[];

  @Prop({ required: true })
  difficult: number;

  @Prop(
    raw([
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ]),
  )
  results: IResult[];

  @Prop(
    raw([
      {
        text: { type: String, required: true },
        type: { type: String, required: true },
        answers: { type: [String], required: true },
        images: { type: [String] },
        language: { type: String },
        correctAnswer: { type: [String] },
      },
    ]),
  )
  questions: IQuestion[];
}

export const TestSchema = SchemaFactory.createForClass(Test);

interface IResult {
  title: string;
  description: string;
}

interface IQuestion {
  text: string;
  type: questionType;
  answers: string[];
  images?: string[];
  language?: string;
  correctAnswer?: string[];
}

/**
  @description
  Перечень типов вопросов:
  one - вопрос с одним правильны ответом
  many - вопрос с множественныи выбором

  @todo
  Добавить другие типы вопросов
**/
type questionType = 'one' | 'many';
