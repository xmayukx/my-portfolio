import { Octokit } from "octokit";

const profile = async (req, res) => {
  try {

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    })

    const repo = await octokit.request('GET /user/repos', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      },
      visibility: 'public',
      affiliation: ['owner'],
    })
    res.send(repo.data);

  }
  catch {
    res.statusCode = 500
    res.setHeader('Content-Type', 'application/json')
    res.send({ error: 'Failed to fetch repos' });
  }
}

export default profile;