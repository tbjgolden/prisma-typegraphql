import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "@prisma/client";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class PostAvgAggregateOutputType {
  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  authorId!: number;
}
