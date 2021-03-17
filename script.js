const person = [
    {
        name: 'Sammy M Stoll',
        city: 'Wellsville, New York(NY), 14895',
        about: 'Social media junkie. Avid food nerd. Professional travel fan. Tv fanatic. Bacon geek. Web fanatic.',
        image: 'profile-images/17.jpg'
    },
    {
        name: 'James C Young',
        city: '2597 Meadowbrook Mall Road',
        about: 'Certified food specialist. Pop culture geek. Typical travel evangelist. Award-winning analyst. Zombie lover.',
        image: 'profile-images/46.jpg'
    },
    {
        name: 'Deanna I Martin',
        city: 'Worthington, Ohio(OH), 43085',
        about: 'Zombie ninja. Wannabe internet buff. Proud introvert. Bacon expert. Social media trailblazer.',
        image: 'profile-images/16.jpg'
    },
    {
        name: 'Bruce K Collins',
        city: 'Westhampton Beach, New York(NY), 11978',
        about: 'Wannabe social media aficionado. Thinker. Unapologetic beer guru. Internet lover. Avid food buff.',
        image: 'profile-images/55.jpg'
    },
    {
        name: 'Claudette G Hann',
        city: 'Philadelphia, Pennsylvania(PA), 19108',
        about: 'Twitter practitioner. Devoted thinker. Hipster-friendly problem solver. Social media expert.',
        image: 'profile-images/34.jpg'
    },
    {
        name: 'Robert Langdon',
        city: '15 Eagle Way. AL10 8RD',
        about: 'Typical gamer. Friendly coffee practitioner. Alcohol buff. Extreme pop cultureaholic.',
        image: 'profile-images/51.jpg'
    },
    {
        name: 'Amber C Pantoja',
        city: 'Nashville, Tennessee(TN), 37209',
        about: 'Wannabe pop culture expert. Alcohol fanatic. Unapologetic introvert. Subtly charming communicator.',
        image: 'profile-images/21.jpg'
    },
    {
        name: 'Adriana E Hubert',
        city: 'Burlington, North Carolina(NC), 27215',
        about: 'Pop culture fanatic. Hardcore analyst. Infuriatingly humble reader. Incurable troublemaker.',
        image: 'profile-images/23.jpg'
    },
];

const parentBox = document.querySelector('div');

person.forEach((eachPerson) => {
    const childBox = document.createElement('div');
    childBox.classList = 'childBox';
    const structure = `<img src="${eachPerson.image}">
            <h4>${eachPerson.name}</h4>
            <p><i class="fas fa-location-arrow location"></i> ${eachPerson.city}</p>
            <p class="textAbout">${eachPerson.about}</p>
        </div>
        <p>Get connected</p>
        <div class="logo">
            <i class="fab fa-facebook-f socialIcons"></i>
            <i class="fab fa-twitter socialIcons"></i>
            <i class="fab fa-google socialIcons"></i>
            <i class="fab fa-instagram socialIcons"></i>
        </div>`;

    childBox.innerHTML = structure;
    parentBox.appendChild(childBox);

});
