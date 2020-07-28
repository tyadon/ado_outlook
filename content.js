setTimeout(injectTab, 5000);

function injectTab() {
    var tabsList = document.getElementsByClassName("work-item-form-tabs");
    var tabs = tabsList[0];
    var ul = tabs.getElementsByTagName('ul')[0];
    var firstLi = ul.getElementsByTagName('li')[1];

    var copyLi = firstLi.cloneNode(true);
    copyLi.getElementsByTagName("span")[0].innerHTML = "Email";
    copyLi.getElementsByTagName("span")[0].setAttribute("aria-label", "Email");
    copyLi.getElementsByTagName("span")[0].setAttribute("id", "99");
    copyLi.getElementsByTagName("span")[1].setAttribute("id", "100");

    ul.appendChild(copyLi);

    console.log(firstLi);
}


