var options=new List("friendList",{valueNames:["friend_name","username","date","status"]}),sorttableDropdown=document.querySelectorAll(".sortble-dropdown");sorttableDropdown&&sorttableDropdown.forEach((function(e){e.querySelectorAll(".dropdown-menu .dropdown-item").forEach((function(o){o.addEventListener("click",(function(){var n=o.innerHTML;e.querySelector(".dropdown-title").innerHTML=n}))}))}));