let localhost = "https://localhost:3000";
let $formLogin = $("#formLogin");
let $emailLogin = $("#emailLogin");
let $passwordLogin = $("#passwordLogin");

let $formRegister = $("#formRegister");
let $emailRegister = $("#emailRegister");
let $nameRegister = $("#nameregister");
let $passwordRegister = $("#passwordRegister");

let $editButton = $("#editButton");
let $authorEdit = $("#authorEdit");
let $titleEdit = $("#titleEdit");
let $imgURLEdit = $("#imgURLEdit");
let $editForm = $("#editForm");

$formLogin.on("submit", function(e) {
  e.preventdDefault();
  $loginform = $("#loginform").val();
  $emailLogin = $("#emailLogin").val();
  console.log("hallo");
  $.ajax({
    method: "POST",
    url: `${localhost}/login`,
    data: {
      email: $emailLogin.val(),
      password: $passwordLogin.val()
    }
  }).done(result => {
    $formLogin.hide();
  });
});

$formRegister.on("submit", function(e) {
  e.preventdDefault();
  $.ajax({
    method: "POST",
    url: `${localhost}/register`,
    headers: {
      token
    },
    data: {
      email: $emailRegister.val(),
      password: $passwordRegister.val(),
      name: $nameRegister.val()
    }
  }).done(result => {
    $registerForm.hide();
  });
});

$editButton.on("click", function(e) {
  e.preventdDefault();
  $.ajax({
    method: "GET",
    url: `${localhost}/comics/id`,
    headers: {
      token
    }
  }).done(result => {
    $titleEdit.val(result.title);
    $authorEdit.val(result.author);
    $imgURLEdit.val(result.imgURL);
    $idEdit.val(result.id);
  });
});

$editForm.on("submit", function(e) {
  e.preventdDefault();
  $.ajax({
    method: "POST",
    url: `${localhost}/comics`,
    headers: {
      token
    },
    data: {
      title: $titleEdit.val(),
      author: $authorEdit.val(),
      imgURL: $imgURLEdit.val()
    }
  }).done(result => {});
});

let template = `<div class="col-4 mb-4">
                <div class="card text-center">
                <img
                src="https://www.idwpublishing.com/wp-content/uploads/2018/10/aHR0cDovL3d3dy5uZXdzYXJhbWEuY29tL2ltYWdlcy9pLzAwMC8yNDAvNzQ0L29yaWdpbmFsL1NwaWRlcm1hbjAxX2N2ckEuanBn.jpeg"
                class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">The Amazing Spiderman - new Avengers</h5>
                <p class="card-text">Author: J Michael S</p>
                <button class="btn btn-primary" id="editButton">Edit</button>
                </div>
                </div>
                </div>`;
