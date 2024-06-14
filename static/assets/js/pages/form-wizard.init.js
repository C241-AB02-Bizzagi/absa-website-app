document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll("ul.form-wizard a[data-tab-toggle]"),r=document.querySelectorAll(".tab-pane"),t=document.querySelector('[data-action="prev"]'),s=document.querySelector('[data-action="next"]');let d=1;function i(i){!function(e){document.querySelectorAll(".form-wizard li a").forEach((r=>{r.getAttribute("data-tab-id")==e?r.parentElement.classList.add("active"):r.parentElement.classList.remove("active")}));const r=document.querySelector(".form-wizard li.active");if(r){let e=[],t=r.previousElementSibling;for(;t;)e.push(t),t=t.previousElementSibling;e.forEach((e=>{e.classList.add("done")}))}}(i),e.forEach((e=>e.classList.remove("active"))),r.forEach((e=>e.classList.add("hidden"))),r.forEach((e=>{e.getAttribute("data-tab-id")==i&&e.classList.remove("hidden")})),d=i,t.disabled=0==d,d==r.length?s.classList.add("hidden"):s.classList.remove("hidden")}function n(e,r,t){const s=document.getElementById(e),d=document.getElementById(r);let i=!0;return""===s.value.trim()&&(i=!1,d.innerText=t),i}e.forEach((e=>{e.addEventListener("click",(function(r){var t=e.getAttribute("data-tab-id");r.preventDefault(),i(t)}))})),t.addEventListener("click",(function(e){e.preventDefault(),d>1&&i(d-1)})),s.addEventListener("click",(function(e){e.preventDefault(),function(){var e=!0;const r=document.getElementsByClassName("tab-pane")[d-1].getElementsByTagName("input");for(let s=0;s<r.length;s++)if("radio"===r[s].type){const e=document.getElementsByName(r[s].name);if(!Array.from(e).some((e=>e.checked)))return!1}else if(""===r[s].value)return e=!1,t=void 0,t=!0,t=n("nameInput","nameError","Name is required")&&t,t=n("usernameInput","usernameError","UserName is required")&&t,t=n("phoneNumberInput","phoneNumberError","Phone Number is required")&&t,t=n("emailAddressInput","emailError","Email is required")&&t,t=n("passwordInput","passwordError","Password is required")&&t,t=n("passwordConfirmInput","cpasswordError","Confirm Password is required")&&t,t=n("FirstNameInput","FirstNameInputError","First Name is required")&&t,t=n("lastNameInput","lastNameInputError","Last Name is required")&&t,t=n("positionInput","positionInputError","position is required")&&t,t=n("phoneNumberPersonalInput","phoneNumberPersonalInputError","Phone Number is required")&&t,t=n("emailPersonalInput","emailPersonalInputError","Email is required")&&t,t=n("joiningDateInput","joiningDateInputError","date is required")&&t,t=n("birthDateInput","birthDateInputError","date is required")&&t,t=n("FirstNameAddressInput","FirstNameAddressInputError","First Name is required")&&t,t=n("middleNameAddressInput","middleNameAddressInputError","Middle Name is required")&&t,t=n("lastNameAddressInput","lastNameAddressInputError","Last Name is required")&&t,t=n("phoneNumberAddressInput","phoneNumberAddressInputError","Phone Number is required")&&t,t=n("emailAddress2Input","emailAddress2InputError","Email is required")&&t,t=n("addressLineInput","addressLineInputError","Address Line 1 is required")&&t,t=n("addressLine2","addressLine2Error","Address Line 2 is required")&&t,t=n("cityAddressInput","cityAddressInputError","City is required")&&t,t=n("stateAddressInput","stateAddressInputError","State is required")&&t,t=n("countryAddressInput","countryAddressInputError","Country is required")&&t,t=n("zipcodeAddressInput","zipcodeAddressInputError","Zipcode is required")&&t,t=n("vtaAddressInput","vtaAddressInputError","VTA is required")&&t,t=n("prefixAddressInput","prefixAddressInputError","Prefix is required")&&t,e;var t;return e}()&&(i(++d),document.querySelectorAll("div.text-red-500").forEach((e=>{e.innerText=""})))}))}));