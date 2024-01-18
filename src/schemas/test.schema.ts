import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';

@Schema()
export class Test {
  @Prop()
  title: string;

  @Prop([String])
  tags: string[];

  @Prop(
    raw({
      title: { type: String },
      description: { type: String },
    }),
  )
  result: IResult;

  @Prop(
    raw([
      {
        text: { type: String },
        type: { type: String },
        answers: { type: [String] },
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
  correctAnswer: string;
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
