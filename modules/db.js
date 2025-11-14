// Abstract away all IndexedDB mess into clean async functions.
function openDB():
    if DB exists return connection
    else create DB named "salesDB"
        create object store "receipts" with autoIncrement key
        resolve db connection

function addSale(receipt):
    openDB()
    begin transaction write
    store.add(receipt)
    resolve success

function getAllSales():
    openDB()
    begin transaction read
    get all entries from "receipts"
    return array

function clearSales():
    openDB()
    clear object store
