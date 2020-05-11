const gb = new GitHub();
const ui = new UI();
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
  const user = e.target.value;

  if (user !== '') {
    gb.getUser(user).then((data) => {
      if (data.profile.message === 'Not found') {
        //
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    //
  }
});
