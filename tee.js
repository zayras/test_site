function func() {
    var names = document.getElementById('name').value;
    console.log('test');
    if (names == null || names == "") {
        console.log('No name given')
    }
    else {
        console.log(names);
    }
    
}