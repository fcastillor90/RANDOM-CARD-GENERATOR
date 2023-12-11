import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function selectionSort(arr = []) {
  const size = arr.length;
  const result = [];

  result.push([...arr]);

  for (let min = 0; min < size - 1; min++) {
    let minIndex = min;

    for (let i = min + 1; i < size; i++) {
      if (arr[i].number < arr[minIndex].number) {
        minIndex = i;
      }
    }

    if (minIndex !== min) {
      const temp = arr[min];
      arr[min] = arr[minIndex];
      arr[minIndex] = temp;
      // Guarda una copia en cada swap
      result.push([...arr]);
    }
  }

  return result;
}

function generateType() {
  const randomType = Math.floor(Math.random() * 4);
  return randomType;
}

function generateCardNumber() {
  const randomCard = Math.floor(Math.random() * 13) + 1;
  return randomCard;
}

function generateObjectCard(length) {
  const mappingIcon = {
    0: "♦",
    1: "♥",
    2: "♠",
    3: "♣",
  };

  let cardArray = [];

  for (let i = 0; i < length; i++) {
    const type = mappingIcon[generateType()];
    const number = generateCardNumber();

    cardArray.push({
      type,
      number,
    });
  }
  return cardArray;
}

function renderHTML(cardArray) {
  const hook = document.getElementById("hook");
  hook.innerHTML = "";
  const hookSorted = document.getElementById("hook-sorted");
  hookSorted.innerHTML = "";

  const p = document.createElement("p");
  p.innerHTML = "Original:";
  const cards = [...cardArray];
  hook.appendChild(p);

  const map = {
    11: "K",
    12: "Q",
    13: "J",
    1: "A",
  };

  cards.forEach((card) => {
    const displayValue =
      map[card.number] !== undefined ? map[card.number] : card.number;
    const cardDiv = document.createElement("div");
    cardDiv.className = "card bg-light ms-2 mt-3";
    cardDiv.innerHTML = `
      <div class="suit-left text-danger">${card.type}</div>
      <div class="card-body">
        ${displayValue}
      </div>
      <div class="suit-right text-danger">${card.type}</div>
    `;

    hook.appendChild(cardDiv);
  });
}

function renderSortedHTML(cardArray) {
  const sorted = selectionSort(cardArray);
  const hookSorted = document.getElementById("hook-sorted");
  hookSorted.innerHTML = "";

  const map = {
    11: "K",
    12: "Q",
    13: "J",
    1: "A",
  };

  sorted.forEach((s, index) => {
    const row = document.createElement("div");
    row.className = "d-flex flex-wrap mt-5";

    const b = document.createElement("b");
    b.innerHTML = `${index}: `;
    row.appendChild(b);

    s.forEach((c) => {
      const displayValue =
        map[c.number] !== undefined ? map[c.number] : c.number;
      const cardDiv = document.createElement("div");
      cardDiv.className = "card bg-light ms-5 mt-3";
      cardDiv.innerHTML = `
      <div class="suit-left text-danger">${c.type}</div>
      <div class="card-body">
        ${displayValue}
      </div>
      <div class="suit-right text-danger">${c.type}</div>
      `;
      row.appendChild(cardDiv);
    });

    hookSorted.appendChild(row);
  });
}
window.onload = function() {
  let cardArray;
  let displaySortedArray = [];
  const drawButton = document.getElementById("drawButton");
  const sortBUtton = document.getElementById("sortButton");
  const input = document.getElementById("inputCard");

  drawButton.addEventListener("click", function(e) {
    const inputValue = input.value;
    cardArray = generateObjectCard(inputValue);
    input.value = "";
    renderHTML(cardArray);
  });

  sortBUtton.addEventListener("click", function(e) {
    displaySortedArray = [...cardArray];
    renderSortedHTML(displaySortedArray);
  });
};
