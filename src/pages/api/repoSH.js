
const repo = async (request, response) => {
    try {
        const { link } = request.query;
        const res = await fetch(`${link}`);
        const data = await res.json();
        response.statusCode = 200
        response.setHeader('Content-Type', 'application/json')
        response.send(data);
    }
    catch {
        response.statusCode = 500;
        response.setHeader('Content-Type', 'application/json');
        response.send({ error: 'Internal server error' });
    }


}

export default repo;