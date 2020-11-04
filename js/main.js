"content strict";
{
  const menuItems = document.querySelectorAll(".menu li a");
  const contents = document.querySelectorAll(".content");

  menuItems.forEach((clickItem) => {
    clickItem.addEventListener("click", (e) => {
      e.preventDefault();

      menuItems.forEach((item) => {
        item.classList.remove("active");
      });

      contents.forEach((content) => {
        content.classList.remove("active");
      });
      clickItem.classList.add("active");
      document.getElementById(clickItem.dataset.id).classList.add("active");
    }); //contentのidがクリックされたメニューのdataset.idで取得できる！！
  });
}
//クリックしたらまず全部削除して、後で全部プラスにする！！
