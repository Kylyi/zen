export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const user = await db
      .user
      .create({ data: body })

    return user
  }
  catch (error: any) {
    zenstackErrorHandler(error)
  }
})
