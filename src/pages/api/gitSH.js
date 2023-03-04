// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async (request, respond) => {

  const res = await fetch("https://api.github.com/users/xmayukx");
  const data = await res.json();
  respond.statusCode = 200
  respond.setHeader('Content-Type', 'application/json')
  respond.send(data);
}