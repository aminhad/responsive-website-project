const form = document.getElementById('form');
const fullname = document.getElementById('fullname')
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone')

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

    if(phoneValue === '') {
        setErrorFor(phone, 'Phone number cannot be blank')
    }
}
