//entry file
// import items from data
import db functions
import state
import ui

on DOM ready:
    ui.renderItemButtons(items)

when user clicks an item:
    state.addItem(item)
    ui.updateReceiptList(state.getItems())
    ui.updateTotal(state.computeTotal())

when user clicks Clear:
    state.clear()
    ui.clearReceiptPanel()

when user clicks Checkout:
    build receipt object:
        { timestamp, items: state.getItems(), total }
    await db.addSale(receipt)
    ui.clearReceiptPanel()
    state.clear()

when user clicks Daily Sales:
    sales = await db.getAllSales()
    ui.showDailySales(sales)

when user clicks Clear All:
    await db.clearSales()
    ui.clearReceiptPanel()
