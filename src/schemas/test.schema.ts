import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Test {
  @Prop({ required: true })
  department: string;

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
        correctAnswer: { type: [String], required: true },
        language: { type: String },
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
  answers: string[];
  type: questionType;
  correctAnswer: string[];
  language?: string;
}

/**
  @description
  Перечень типов вопросов:
  one - вопрос с одним правильны ответом
  many - вопрос с множественныи выбором
  sorting - вопрос с распределением по блокам
  link - вопрос на соединение элементов
  code - вопрос с написанием кода
  free - вопрос со свободным ответом
**/
type questionType = 'one' | 'many' | 'sorting' | 'link' | 'code' | 'free';
