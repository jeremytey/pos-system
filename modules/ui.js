// DOM references: purchasePanel, receiptPanel, receiptItems, receiptTotal

function renderItemButtons(items):
    for each item:
        create button showing id, desc, price
        attach click handler provided by app.js

    also create:
        "Clear" button
        "Checkout" button

function updateReceiptList(selectedItems):
    clear receipt panel
    for each item:
        show description + price

function updateTotal(total):
    update total DOM

function showDailySales(sales):
    clear receipt panel
    loop through all receipts
        show date + each item + price
    compute grand total
    render

function clearReceiptPanel():
    empty items + total
