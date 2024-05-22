import { getAllQuestions, getOneQuestion } from './requests';

const container = document.getElementById('container');
const questions = await getAllQuestions();
const question = await getOneQuestion('664dd0b0a8010c8346e072f7');

// Onderstaande logs kan je aanzetten om te kijken in de objecten
// console.log(questions); // Laat het object zien dat van de backend terug komt (alle vragen dus)
// console.log(question);  // Laat het object zien dat van de backend terug komt (voor 1 vraag dus)

// laat tien vragen zien
for (let i = 0; i < questions.length; i++) {
  const div = document.createElement('div');
  const span = document.createElement('span');

  span.textContent = `Vraag ${i + 1}: ${questions[i].question}`; // hier wordt de vraagstelling in de span geplaatst
  div.appendChild(span);
  container.appendChild(div);
}

// gooi een breakrow in de container
const br = document.createElement('br');
container.appendChild(br);

// maak HTML-onderdelen aan waaruit een vraag is opgebouwd
const div = document.createElement('div');
const span = document.createElement('span');
const img = document.createElement('img');
// geef data op binnen de HTML-onderdelen
span.textContent = `Vraag met id 664dd0b0a8010c8346e072f7: ${question.question}`; // verwijzing naar de vraagstelling
img.src = `/assets/img/${question.image}`; // verwijzing naar de afbeelding
// koppel HTML-onderdelen aan de container
div.appendChild(span);
div.appendChild(img);
container.appendChild(div);
