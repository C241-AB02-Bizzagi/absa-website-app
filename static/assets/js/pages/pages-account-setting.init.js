document.querySelector("#profile-img-file-input")&&document.querySelector("#profile-img-file-input").addEventListener("change",(function(){var e=document.querySelector(".user-profile-image"),i=document.querySelector(".profile-img-file-input").files[0],r=new FileReader;r.addEventListener("load",(function(){e.src=r.result}),!1),i&&r.readAsDataURL(i)}));