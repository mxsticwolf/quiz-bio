const submitButton = document.getElementById('submit');
const scoreDisplay = document.getElementById('score');
submitButton.addEventListener('click', () => {
	let score = 0;
	const answer1 = document.getElementById('answer1');
	const answer2 = document.getElementById('answer5');
    const answer3 = document.getElementById('answer8');
    const answer4 = document.getElementById('answer12');
    const answer5 = document.getElementById('answer14');
    const answer6 = document.getElementById('answer16');
    const answer7 = document.getElementById('answer19');
    const answer8 = document.getElementById('answer23');
    const answer9 = document.getElementById('answer27');
    const answer10 = document.getElementById('answer29');

	if(answer1.checked) {
		score++;
	}

	if(answer2.checked) {
		score++;
	}

    if(answer3.checked) {
		score++;
	}

    if(answer4.checked) {
		score++;
	}

    if(answer5.checked) {
		score++;
	}

    if(answer6.checked) {
		score++;
	}

    if(answer7.checked) {
		score++;
	}

    if(answer8.checked) {
		score++;
	}

    if(answer9.checked) {
		score++;
	}

    if(answer10.checked) {
		score++;
	}

	scoreDisplay.innerText = score;
});