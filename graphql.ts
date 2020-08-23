import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { UserRelationsResolver, UserCrudResolver, PostRelationsResolver, PostCrudResolver } from "./resolvers/generated";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserRelationsResolver, UserCrudResolver,PostRelationsResolver, PostCrudResolver],
    validate: false,
  });
  new GraphQLServer({
    schema: schema as any,
    context: ctx => ({
      ...ctx,
      prisma
    })
  }).start(() => console.log("Server is running on http://localhost:4000"));
}

main();
