const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'さいたまは摂氏212度で,暑かった. :insertx: は散歩に出かけた. しばらくして :inserty:　に到着したが, 彼らは目を見合わせて, それから :insertz:. Bob は事の顛末を見たが, 驚かなかった. — :insertx: は目を覚まし, そしてそれは夢だったと気づいた.';
const insertX = ['えのき', 'エリンギ', 'まいたけ'];
const insertY = ['鬼ヶ島', '竜宮城', '軍艦島'];
const insertZ = ['100回 腹筋した', '200回 背筋した, '300 回スクワットした'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("日本語").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 回', 億回);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
