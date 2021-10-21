import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  readonly title: string;
  @Field()
  readonly content: string;
  @Field()
  readonly excerpt: string;
  @Field()
  readonly createdAt: string;
  @Field()
  readonly categoryName: string;
  @Field()
  readonly authorName: string;
  @Field()
  readonly authorCountry: string;
}
