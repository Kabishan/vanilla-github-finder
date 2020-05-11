class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    const date = new Date(user.created_at).toDateString();

    this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${
                      user.html_url
                    }" target="_blank" class="btn btn-primary btn-block mb-4">Profile</a>
                </div>
                <div class="col-md-9">
                    <div class="text-center">
                        <span class="badge badge-primary">Public Repos: ${
                          user.public_repos
                        }</span>
                        <span class="badge badge-danger">Public Gists: ${
                          user.public_gists
                        }</span>
                        <span class="badge badge-success">Followers: ${
                          user.followers
                        }</span>
                        <span class="badge badge-info">Following: ${
                          user.following
                        }</span>
                    </div>
                    <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${
                          user.company === null ? 'None' : user.company
                        }</li>
                        <li class="list-group-item">Website/Blog: ${
                          user.blog
                        }</li>
                        <li class="list-group-item">Location: ${
                          user.location
                        }</li>
                        <li class="list-group-item">Member Since: ${date}</li>
                    </ul>
                </div>
            </div>
        </div>
        <br>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

  showAlert(msg, className) {
    this.clearAlert();

    const body = document.querySelector('.searchContainer');
    const card = document.querySelector('.search');

    const alert = document.createElement('div');
    alert.className = className;
    alert.appendChild(document.createTextNode(msg));

    body.insertBefore(alert, card);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const curr = document.querySelector('.alert');

    if (curr) curr.remove();
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }
}
