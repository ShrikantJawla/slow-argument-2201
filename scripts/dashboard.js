let emailName = JSON.parse(localStorage.getItem("isSignedIn"));

document.querySelector(".email-span").innerText = emailName.email;


(()=> {
    let email = emailName.email;
    if (email.length > 17) {
        let str = '';
        for (let i = 0; i < 17; i++) {
            str += email[i];
        }
        str += '...';
        document.querySelector(".email-info-bigger-font").innerText = str;
    }
})();




document.querySelector(".email-info-smaller-font").innerText = emailName.email;