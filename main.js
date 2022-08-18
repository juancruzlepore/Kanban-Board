let cardIdAccum = 0;
const cardsFactory = () => {
    const newAssigmentCard = document.createElement("div");
    newAssigmentCard.classList.add("assigment-card");
    const newTaskName = document.createElement("p");
    newTaskName.innerHTML = "New Task Name";
    const newCardStatus = document.createElement("div");
    newCardStatus.classList.add("card-status");
    const newStatusImg = document.createElement("img");
    newStatusImg.src = "Imagenes/stack-icon.png";
    const newPStatus = document.createElement("p");
    newPStatus.innerHTML = "Status";
    newAssigmentCard.append(newTaskName);
    newAssigmentCard.append(newCardStatus);
    newCardStatus.append(newStatusImg);
    newCardStatus.append(newPStatus);

    newAssigmentCard.setAttribute("id", `assigment-card-${cardIdAccum}`)
    return newAssigmentCard;
}

const getArrayOfAddCardButtons = () => {
    let addCardButton = document.getElementsByClassName("column-footer-button");
    let arrayAddCardButton = []
    for (let element of addCardButton) {
        arrayAddCardButton.push(element);
    }
    return arrayAddCardButton;
}
const inicialArrayOfCardButtons = getArrayOfAddCardButtons();
const appendAssigmentCard = (event) => {
    event.target.previousElementSibling.append(cardsFactory());
}
const addAssigmentCard = (button) => {
    button.addEventListener("click", () => {cardIdAccum++})
    button.addEventListener("click", (event) => {appendAssigmentCard(event)})
}
inicialArrayOfCardButtons.forEach(addAssigmentCard);

let columnIdAccum = 4;
const columnFactory = () => {
    const newColumn = document.createElement("div");
    newColumn.classList.add("column");
    newColumn.setAttribute("id", `column-${columnIdAccum}`);
    const newColumnHeader = document.createElement("p");
    newColumnHeader.classList.add("column-header");
    newColumnHeader.innerHTML = "New Column";
    const newColumnContent = document.createElement("div");
    newColumnContent.classList.add("column-content");
    const newColumnFooterButon = document.createElement("button");
    newColumnFooterButon.classList.add("column-footer-button");
    newColumnFooterButon.innerHTML = "Add New Card";
    const newSpanPlusSign = document.createElement("span");
    newSpanPlusSign.classList.add("plus-sign");
    newSpanPlusSign.innerHTML = "&#43;"
    newColumn.append(newColumnHeader);
    newColumn.append(newColumnContent);
    newColumn.append(newColumnFooterButon);
    newColumnFooterButon.insertAdjacentElement("afterbegin", newSpanPlusSign);

    return newColumn;
}
const addColumnButton = document.getElementById("add-column");
addColumnButton.addEventListener("click", () => {columnIdAccum++});
addColumnButton.addEventListener("click", () => {document.getElementById("even-columns").append(columnFactory())});
const arrayOfActualAddCardButtons = () => {
    let arrayOfNewAddCardButton = getArrayOfAddCardButtons().slice(columnIdAccum-1);
    return arrayOfNewAddCardButton;
}
addColumnButton.addEventListener("click", () => {arrayOfActualAddCardButtons().forEach(addAssigmentCard)});