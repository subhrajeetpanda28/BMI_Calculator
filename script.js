document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultBox = document.getElementById('result');
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      resultBox.textContent = '⚠️ Please enter valid height and weight.';
      resultBox.style.background = '#ffe5ec';
      resultBox.style.color = '#d90429';
      resultBox.classList.remove('hidden');
      resultBox.classList.add('show');
      return;
    }
  
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let message = `Your BMI is ${bmi}. `;
    let color = '';
    let bg = '';
  
    if (bmi <= 18.4) {
      message += '🧍‍♂️ You are underweight.';
      color = '#034078';       // Dark blue text
      bg = '#d0f0ff';           // Light blue background
    } else if (bmi <= 24.9) {
      message += '💪 You are healthy!';
      color = '#155724';        // Dark green text
      bg = '#d4edda';           // Light green background
    } else if (bmi <= 29.9) {
      message += '🍔 You are overweight.';
      color = '#856404';        // Dark yellow text
      bg = '#fff3cd';           // Light yellow background
    } else {
      message += '⚠️ You are obese.';
      color = '#721c24';        // Dark red text
      bg = '#f8d7da';           // Light red/pink background
    }
  
    resultBox.textContent = message;
    resultBox.style.color = color;
    resultBox.style.background = bg;
    resultBox.style.border = `2px solid ${color}`;
  
    resultBox.classList.remove('hidden');
    resultBox.classList.remove('show'); // Reset animation
    void resultBox.offsetWidth;         // Trigger reflow
    resultBox.classList.add('show');    // Add animation
  });
  