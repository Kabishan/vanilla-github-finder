const gb = new GitHub();
const ui = new UI();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const user = e.target.value;

  if (user !== '') {
    gb.getUser(user).then((data) => {
      if (data.profile.message === 'Not Found')
        ui.showAlert('User not found', 'alert alert-danger');
      else ui.showProfile(data.profile);
    });
  } else ui.clearProfile();
});
