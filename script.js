const personGenerator = {
    
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Виктория",
            "id_2": "Светлана",
            "id_3": "Маргарита",
            "id_4": "Екатерина",
            "id_5": "Юлия",
            "id_6": "Наталья",
            "id_7": "Анастасия",
            "id_8": "Евгения",
            "id_9": "София",
            "id_10": "Татьяна"
        }
    }`,

    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Ильдаров",
            "id_2": "Иванов",
            "id_3": "Федоров",
            "id_4": "Антонов",
            "id_5": "Сергеев",
            "id_6": "Максимов",
            "id_7": "Павлов",
            "id_8": "Артемов",
            "id_9": "Игорев",
            "id_10": "Алексеев"
        }
    }`,

    occupationMaleJson: `{
        "count": 6,
        "list": {     
            "id_1": "инженер",
            "id_2": "программист",
            "id_3": "энергетик",
            "id_4": "юрист",
            "id_5": "сантехник",
            "id_6": "астроном"
            }
    }`,

    occupationFemaleJson: `{
        "count": 7,
        "list": {     
            "id_1": "биолог",
            "id_2": "генетик",
            "id_3": "воспитательница",
            "id_4": "рекламщица",
            "id_5": "преподаватель",
            "id_6": "маникюрша",
            "id_7": "продавщица"
            }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },


    randomFirstNameMale: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    randomfirstNameFemale: function() {
        return this.randomValue(this.firstNameFemaleJson);
    },

    randomOccupationMale: function () {
        return this.randomValue(this.occupationMaleJson);
    },

    randomOccupationFemale: function () {
        return this.randomValue(this.occupationFemaleJson);
    },

    randomMiddleName: function () {
        return this.randomValue(this.middleNameJson);
    },

    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },
    
    randomGender: function () {
        return this.randomIntNumber() > 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
      
    },

    randomBirthYear: function () {
        return this.randomIntNumber(1950, 2000);
    },


    getPerson: function () {
        this.person = {};
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.gender = this.randomGender();
        this.person.birthYear = this.randomBirthYear();

            if (this.person.gender == this.GENDER_FEMALE) {
                this.person.surname += `a`;
                this.person.firstName = this.randomfirstNameFemale();
                this.person.middleName += `на`;
                this.person.occupation = this.randomOccupationFemale();
            }
            else {
                this.person.firstName = this.randomFirstNameMale();
                this.person.middleName += `ич`;
                this.person.occupation = this.randomOccupationMale();
            }

        return this.person;
    },

};