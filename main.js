import './style.css'

document.querySelector('#app').innerHTML = `
<div class="container">
<header>Currency Converter</header>
<form action="#">

    <div class="drop-list">
        <div class="from">
            <p>From</p>
            <div class="select-box">
                <img src="https://flagcdn.com/48x36/us.png" alt="flag">
                <select> </select>
            </div>
        </div>
        <div class="icon"><i class="fas fa-exchange-alt"></i></div>
        <div class="to">
            <p>To</p>
            <div class="select-box">
                <img src="https://flagcdn.com/48x36/in.png" alt="flag">
                <select> </select>
            </div>
        </div>
    </div>
    <div class="amount">
        <p>Enter Amount</p>
        <input type="text" value="1">
    </div>
    <button>Convert</button>
    <div class="result">Result</div>
    <div class="exchange-rate"></div>
</form>
</div>

`
