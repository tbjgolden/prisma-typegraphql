import * as TypeGraphQL from "type-graphql";

export enum PostDistinctFieldEnum {
  id = "id",
  title = "title",
  content = "content",
  published = "published",
  authorId = "authorId"
}
TypeGraphQL.registerEnumType(PostDistinctFieldEnum, {
  name: "PostDistinctFieldEnum",
  description: undefined,
});
