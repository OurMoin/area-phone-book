
// list one

// login button event handler
var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});


// logout button event handler
var loginBtn = document.getElementById('logout');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'block';

    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'none';
});





// list two:

// login button event handler
var pageBtn = document.getElementById('page');
pageBtn.addEventListener('click', function () {
    var pageArea = document.getElementById('login-area');
    pageArea.style.display = 'none';

    var pageArea = document.getElementById('page-area');
    pageArea.style.display = 'block';
});

// logout button event handler
var loginBtn = document.getElementById('logout2');
loginBtn.addEventListener('click', function () {
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = 'block';

    var transactionArea = document.getElementById('page-area');
    transactionArea.style.display = 'none';
});