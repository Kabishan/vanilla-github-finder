class GitHub {
  constructor() {
    this.client_id = '71b8f639a1ecf7957bfa';
    this.client_secret = 'dc6040a0124997f0cb447cf52033ebb801db8243';
    this.respos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const res = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoRes = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.respos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const data = await res.json();
    const repoData = await repoRes.json();

    return { profile: data, repos: repoData };
  }
}
