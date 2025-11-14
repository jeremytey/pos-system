// Track the items selected before checkout
state = {
    selectedItems: []
}

function addItem(item):
    push item into selectedItems

function removeLastItem():
    pop last element

function clear():
    selectedItems = []

function getItems():
    return selectedItems

function computeTotal():
    sum prices of selectedItems
