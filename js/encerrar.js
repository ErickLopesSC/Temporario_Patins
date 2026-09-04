// Encerrar Aluguel — interactions
// Recalculates the total when the damage fee is toggled,
// and manages the payment-method radio visual state.

(function () {
    const damageCheck = document.getElementById('damage-check');
    const totalValueDisplay = document.getElementById('total-value');
    const damageFeeRow = document.getElementById('damage-fee-row');

    const baseTotal = 45.00;
    const damageFee = 50.00;

    if (damageCheck) {
        damageCheck.addEventListener('change', function (e) {
            if (e.target.checked) {
                totalValueDisplay.textContent = (baseTotal + damageFee).toFixed(2).replace('.', ',');
                damageFeeRow.classList.remove('hidden');
                damageFeeRow.classList.add('flex');
            } else {
                totalValueDisplay.textContent = baseTotal.toFixed(2).replace('.', ',');
                damageFeeRow.classList.add('hidden');
                damageFeeRow.classList.remove('flex');
            }
        });
    }

    // Payment-method radio visual state
    const radios = document.querySelectorAll('input[name="payment"]');
    radios.forEach(function (radio) {
        radio.addEventListener('change', function () {
            document.querySelectorAll('input[name="payment"] + div .rounded-full').forEach(function (circle) {
                circle.style.backgroundColor = 'transparent';
            });
            if (radio.checked) {
                radio.nextElementSibling.querySelector('.rounded-full').style.backgroundColor = '#1b1c1c';
            }
        });
    });

    // Init active radio
    const checked = document.querySelector('input[name="payment"]:checked + div .rounded-full');
    if (checked) {
        checked.style.backgroundColor = '#1b1c1c';
    }
})();
