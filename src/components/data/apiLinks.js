import GeneralKnowledge from './../img/GeneralKnowledge.jpg';
import ScienceNature from './../img/ScienceNature.jpg';
import Mythology from './../img/Mythology.jpg';
import Sports from './../img/Sports.jpg';
import Geography from './../img/Geography.jpg';
import History from './../img/History.jpg';
import Politics from './../img/Politics.jpg';
import Art from './../img/Art.jpg';
import Animals from './../img/Animals.jpg';
//API links for different categories

const apiLinks = [
  {
    id: 1,
    theme: 'General Knowledge',
    url: 'https://opentdb.com/api.php?amount=50&category=9&type=multiple',
    img: GeneralKnowledge,
  },
  {
    id: 2,
    theme: 'Science & Nature',
    url: 'https://opentdb.com/api.php?amount=50&category=17&type=multiple',
    img: ScienceNature,
  },
  {
    id: 3,
    theme: 'Mythology',
    url: 'https://opentdb.com/api.php?amount=50&category=20&type=multiple',
    img: Mythology,
  },
  {
    id: 4,
    theme: 'Sports',
    url: 'https://opentdb.com/api.php?amount=50&category=21&type=multiple',
    img: Sports,
  },
  {
    id: 5,
    theme: 'Geography',
    url: 'https://opentdb.com/api.php?amount=50&category=22&type=multiple',
    img: Geography,
  },
  {
    id: 6,
    theme: 'History',
    url: 'https://opentdb.com/api.php?amount=50&category=23&type=multiple',
    img: History,
  },
  {
    id: 7,
    theme: 'Politics',
    url: 'https://opentdb.com/api.php?amount=41&category=24&type=multiple',
    img: Politics,
  },
  {
    id: 8,
    theme: 'Art',
    url: 'https://opentdb.com/api.php?amount=27&category=25&type=multiple',
    img: Art,
  },
  {
    id: 9,
    theme: 'Animals',
    url: 'https://opentdb.com/api.php?amount=50&category=27&type=multiple',
    img: Animals,
  },
];

export default apiLinks;
