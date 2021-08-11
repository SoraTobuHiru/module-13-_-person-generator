window.onload = function() {

    document.getElementById('btnGenerate').addEventListener('click', function () {
        var initPerson = personGenerator.getPerson();
        document.getElementById('surnameOutput').innerText = initPerson.surname;
        document.getElementById('firstNameOutput').innerText = initPerson.firstName;
        document.getElementById('middleNameOutput').innerText = initPerson.middleName;
        document.getElementById('genderOutput').innerText = initPerson.gender;
        document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
        document.getElementById('occupationOutput').innerText = initPerson.occupation;  
    })
    document.getElementById('btnСlear').addEventListener('click', function () {
        document.getElementById('surnameOutput').innerText = '';
        document.getElementById('firstNameOutput').innerText = '';
        document.getElementById('middleNameOutput').innerText = '';
        document.getElementById('genderOutput').innerText = '';
        document.getElementById('birthYearOutput').innerText = '';
        document.getElementById('occupationOutput').innerText = '';        
    })

};