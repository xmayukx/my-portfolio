// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const profile = async (request, response) => {
  try {
    const res = await fetch(`https://api.github.com/users/xmayukx`);
    const data = await res.json();
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json')
    response.send(data);
  }
  catch {
    response.statusCode = 500
    response.setHeader('Content-Type', 'application/json')
    response.send({ error: 'Failed to fetch root API' });
  }
  // console.log(data);
}

export default profile;