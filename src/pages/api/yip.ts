export const config = {
  runtime: 'edge',
}

export default async function YipResponse(req: any) {
  // @ts-expect-error
  return Response.json({
    message: 'Yip!',
  })
}
