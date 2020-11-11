import { bookList } from "../paginator/data.js";

const list_element = document.querySelector(".section-box");
const pagination_element = document.getElementById("pagenumbers");

let current_page = 1;
let rows = 5;

function DisplayList(items, wrapper, rows_per_page, page) {
  wrapper.innerHTML = "";
  page -= 1;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let item_element = document.createElement("div");
    item_element.classList.add("title-book-section");
    item_element.innerHTML = paginatedItems[i].nameBook;
    let item_element2 = document.createElement("img");
    item_element2.classList.add("section-box-item-image");
    item_element2.src = paginatedItems[i].urlImage;
    let main_element = document.createElement("div");
    main_element.classList.add("section-box-item");
    main_element.append(item_element);
    main_element.append(item_element2);
    wrapper.append(main_element);
  }
}

function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";
  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.append(btn);
  }
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    DisplayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector("#pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}

DisplayList(bookList, list_element, rows, current_page);
SetupPagination(bookList, pagination_element, rows);

export function startPagination() {
  DisplayList(bookList, list_element, rows, current_page);
  SetupPagination(bookList, pagination_element, rows);
}
