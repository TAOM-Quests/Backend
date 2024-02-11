import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Test {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  title: string;

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
        correctAnswer: { type: String },
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
  correctAnswer?: string;
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
