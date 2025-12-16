export default defineEventHandler(async () => {
  const users = await db
    .$qb
    .selectFrom('User')
    .selectAll()
    .execute()

  return users
})

const x: IItem = {}
