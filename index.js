const $drawer = document.querySelector("#drawer");
const $menu = document.querySelector("#menu");
const $menuClose = document.querySelector("#menu_close");
const $menuPlus = document.querySelector("#menu_plus");
const $menuUl = document.querySelector("#menu_ul");
const $setting = document.querySelector("#profile_setting");
const $modalClose = document.querySelector("#modal_close");
const $modalImg = document.querySelector("#modal_img");
const $modalBox = document.querySelector("#modal_box");
const $fileInput = document.querySelector("#file_input");
const $modalName = document.querySelector("#modal_name");
const $modalAddr = document.querySelector("#modal_addr");
const $memoInput = document.querySelector("#memo_input");
const $memoBtn = document.querySelector("#memo_btn");
const $memoReset = document.querySelector("#memo_reset");

$drawer.addEventListener("click", () => {
    $menu.classList.add("active");
    $menu.classList.remove("inactive");
});
$menuClose.addEventListener("click", () => {
    $menu.classList.remove("active");
    $menu.classList.add("inactive");
});
$menuPlus.addEventListener("click", () => {
    if ($menuUl.querySelectorAll("li").length >= 12) {
        alert("메뉴의 개수가 현재 최대입니다!");
        return;
    }
    let prom = prompt("추가할 메뉴의 이름을 입력하세요");
    if (prom == " ") {
        alert("공백은 입력할 수 없습니다!");
        return;
    }
    let list = document.createElement("li");
    let hr = document.createElement("hr");
    let textNode = document.createTextNode(prom);
    list.appendChild(textNode);
    $menuUl.appendChild(list);
    $menuUl.appendChild(hr);
})
$setting.addEventListener("click", () => {
    $modalBox.style.display = "flex";
});
$modalClose.addEventListener("click", () => {
    $modalBox.style.display = "none";
});
$fileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            $modalImg.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});
$memoBtn.addEventListener("click", () => {
    document.getElementById("memo1").innerHTML += $memoInput.value;
    document.getElementById("memo1").innerHTML += "<br>";
})
$memoReset.addEventListener("click", () => {
    document.getElementById("memo1").innerHTML = "";
})
function save() {
    document.querySelector("#profile").src = $modalImg.src;
    document.querySelector("#name").innerHTML = $modalName.value;
    document.querySelector("#addr").innerHTML = $modalAddr.value;
    $modalBox.style.display = "none";
}
