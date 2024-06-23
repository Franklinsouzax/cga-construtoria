var list = document.getElementById('list');

function handleclick() {
    if (list.style.display === 'none') {
        list.style.display = 'flex'; 
    } else {
        list.style.display = 'none'; 
    }
}
