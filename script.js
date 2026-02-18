
function register(){

    const user=document.getElementById('username').value 
    const acc=document.getElementById('accountNo').value 
    const pass=document.getElementById('password').value 



    if(username==""||accountNo==""||password==""){
        alert("please fill all details")

    }
    else {

     bank= {
            uname:user,
            acno:acc,
            pas:pass,
            balance: 0
        }
        if(bank.acno in localStorage){
            alert("user aldredy exist")
             window.location="./login.html"

        }
        else{

            localStorage.setItem (bank.acno,JSON.stringify(bank))

            alert("account created successfully")

            username.value=""
            accountNo.value=""
            password.value=""


            window.location="./login.html"
        }


    }

}

function Login(){

    const  uid=document.getElementById('anumber').value
    const  pass=document.getElementById('passwd').value

    if(!uid||!pass){
        alert("fill in the blanks")

        return
    }

    const user = JSON.parse(localStorage.getItem(uid))

    if (!user) {
    alert("Account not found");
    return;
  }

  if (user.pas !== pass) {
    alert("Invalid password");
    return;
  }
  
  
  else {
    alert("Login successful");
    localStorage.setItem("loggeduser", uid);
    window.location = "./new.money.html";
    
}




}

// Get logged user
const loggeduserac = localStorage.getItem("loggeduser");

if (!loggeduserac) {
    window.location = "./login.html";
}

let user = JSON.parse(localStorage.getItem(loggeduserac));

// Name  Balance  heading
function updateHeader() {
    document.getElementById("wel").innerHTML = `
        Welcome, <span class="text-green-400 font-bold">${user.uname}</span><br>
        <span class="text-blue-400 font-semibold">
            Current Balance: $ ${user.balance}
        </span>
    `;
}



function deposit() {

    const amountInput = document.getElementById("amount");
    const amount = Number(amountInput.value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    user.balance += amount;

    localStorage.setItem(loggeduserac, JSON.stringify(user));

    updateBalance();

    amountInput.value = "";
    alert("Deposit successful");

    updateHeader();
}


// withdrow
function withdrow() {

    const withdrawInput = document.getElementById("with");
    const amount = Number(withdrawInput.value);

    if (!amount || amount <= 0) {
        alert("Enter a valid amount");
        return;
    }

    if (amount > user.balance) {
        alert("Insufficient balance");
        return;
    }

    user.balance -= amount;

    localStorage.setItem(loggeduserac, JSON.stringify(user));

    updateBalance();

    withdrawInput.value = "";
    alert("Withdrawal successful");
    updateHeader();
}


//update


function updateBalance() {
    document.getElementById("bala").innerHTML = `
        <h1 class="font-bold text-blue-300">Total Balance</h1>
        <p class="text-2xl">$ ${user.balance}</p>
    `;
    
}


 
