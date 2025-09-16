function startQuiz() {
  document.getElementById("quiz").innerHTML = `
    <p>প্রশ্ন: 2 + 2 = ?</p>
    <button onclick="checkAnswer(4)">4</button>
    <button onclick="checkAnswer(5)">5</button>
  `;
}

function checkAnswer(ans) {
  if(ans === 4) {
    alert("সঠিক উত্তর! 🎉");
  } else {
    alert("ভুল উত্তর 😢 আবার চেষ্টা করুন!");
  }
}
