const katakanaList = [
  // Basic Vowels
  { katakana: 'ア', romaji: 'a' },
  { katakana: 'イ', romaji: 'i' },
  { katakana: 'ウ', romaji: 'u' },
  { katakana: 'エ', romaji: 'e' },
  { katakana: 'オ', romaji: 'o' },

  // K Series
  { katakana: 'カ', romaji: 'ka' },
  { katakana: 'キ', romaji: 'ki' },
  { katakana: 'ク', romaji: 'ku' },
  { katakana: 'ケ', romaji: 'ke' },
  { katakana: 'コ', romaji: 'ko' },
  { katakana: 'ガ', romaji: 'ga' },
  { katakana: 'ギ', romaji: 'gi' },
  { katakana: 'グ', romaji: 'gu' },
  { katakana: 'ゲ', romaji: 'ge' },
  { katakana: 'ゴ', romaji: 'go' },

  // S Series
  { katakana: 'サ', romaji: 'sa' },
  { katakana: 'シ', romaji: 'shi' },
  { katakana: 'ス', romaji: 'su' },
  { katakana: 'セ', romaji: 'se' },
  { katakana: 'ソ', romaji: 'so' },
  { katakana: 'ザ', romaji: 'za' },
  { katakana: 'ジ', romaji: 'ji' },
  { katakana: 'ズ', romaji: 'zu' },
  { katakana: 'ゼ', romaji: 'ze' },
  { katakana: 'ゾ', romaji: 'zo' },

  // T Series
  { katakana: 'タ', romaji: 'ta' },
  { katakana: 'チ', romaji: 'chi' },
  { katakana: 'ツ', romaji: 'tsu' },
  { katakana: 'テ', romaji: 'te' },
  { katakana: 'ト', romaji: 'to' },
  { katakana: 'ダ', romaji: 'da' },
  { katakana: 'ヂ', romaji: 'ji' },
  { katakana: 'ヅ', romaji: 'zu' },
  { katakana: 'デ', romaji: 'de' },
  { katakana: 'ド', romaji: 'do' },

  // N Series
  { katakana: 'ナ', romaji: 'na' },
  { katakana: 'ニ', romaji: 'ni' },
  { katakana: 'ヌ', romaji: 'nu' },
  { katakana: 'ネ', romaji: 'ne' },
  { katakana: 'ノ', romaji: 'no' },

  // H Series
  { katakana: 'ハ', romaji: 'ha' },
  { katakana: 'ヒ', romaji: 'hi' },
  { katakana: 'フ', romaji: 'fu' },
  { katakana: 'ヘ', romaji: 'he' },
  { katakana: 'ホ', romaji: 'ho' },
  { katakana: 'バ', romaji: 'ba' },
  { katakana: 'ビ', romaji: 'bi' },
  { katakana: 'ブ', romaji: 'bu' },
  { katakana: 'ベ', romaji: 'be' },
  { katakana: 'ボ', romaji: 'bo' },
  { katakana: 'パ', romaji: 'pa' },
  { katakana: 'ピ', romaji: 'pi' },
  { katakana: 'プ', romaji: 'pu' },
  { katakana: 'ペ', romaji: 'pe' },
  { katakana: 'ポ', romaji: 'po' },

  // M Series
  { katakana: 'マ', romaji: 'ma' },
  { katakana: 'ミ', romaji: 'mi' },
  { katakana: 'ム', romaji: 'mu' },
  { katakana: 'メ', romaji: 'me' },
  { katakana: 'モ', romaji: 'mo' },

  // Y Series
  { katakana: 'ヤ', romaji: 'ya' },
  { katakana: 'ユ', romaji: 'yu' },
  { katakana: 'ヨ', romaji: 'yo' },

  // R Series
  { katakana: 'ラ', romaji: 'ra' },
  { katakana: 'リ', romaji: 'ri' },
  { katakana: 'ル', romaji: 'ru' },
  { katakana: 'レ', romaji: 're' },
  { katakana: 'ロ', romaji: 'ro' },

  // W Series
  { katakana: 'ワ', romaji: 'wa' },
  { katakana: 'ヲ', romaji: 'wo' },
  { katakana: 'ン', romaji: 'n' },

  // Combination Characters
  { katakana: 'キャ', romaji: 'kya' },
  { katakana: 'キュ', romaji: 'kyu' },
  { katakana: 'キョ', romaji: 'kyo' },
  { katakana: 'シャ', romaji: 'sha' },
  { katakana: 'シュ', romaji: 'shu' },
  { katakana: 'ショ', romaji: 'sho' },
  { katakana: 'チャ', romaji: 'cha' },
  { katakana: 'チュ', romaji: 'chu' },
  { katakana: 'チョ', romaji: 'cho' },
  { katakana: 'ニャ', romaji: 'nya' },
  { katakana: 'ニュ', romaji: 'nyu' },
  { katakana: 'ニョ', romaji: 'nyo' },
  { katakana: 'ヒャ', romaji: 'hya' },
  { katakana: 'ヒュ', romaji: 'hyu' },
  { katakana: 'ヒョ', romaji: 'hyo' },
  { katakana: 'ミャ', romaji: 'mya' },
  { katakana: 'ミュ', romaji: 'myu' },
  { katakana: 'ミョ', romaji: 'myo' },
  { katakana: 'リャ', romaji: 'rya' },
  { katakana: 'リュ', romaji: 'ryu' },
  { katakana: 'リョ', romaji: 'ryo' },

  // Handakuten Combination Characters
  { katakana: 'ピャ', romaji: 'pya' },
  { katakana: 'ピュ', romaji: 'pyu' },
  { katakana: 'ピョ', romaji: 'pyo' },

  // Add more combinations if needed
]

const questionElement = document.getElementById('question')
const choicesContainer = document.getElementById('choices-container')
const startButton = document.getElementById('start-button')
const scoreElement = document.getElementById('score')
const triesElement = document.getElementById('tries')
const scoreContainer = document.getElementById('score-container')

let currentQuestion = null
let score = 0
let correctCount = 0
let wrongCount = 0

startButton.addEventListener('click', startGame)

function startGame() {
  score = 0
  correctCount = 0
  wrongCount = 0
  scoreElement.textContent = score
  triesElement.textContent = 0
  updateScoreBar()

  // Show score container
  scoreContainer.style.display = 'flex'

  startButton.style.display = 'none'
  loadQuestion()
}

function loadQuestion() {
  const randomIndex = Math.floor(Math.random() * katakanaList.length)
  currentQuestion = katakanaList[randomIndex]
  questionElement.textContent = `${currentQuestion.katakana}`

  // Generate choices
  const choices = generateChoices(currentQuestion.romaji)
  displayChoices(choices)
}

function generateChoices(correctAnswer) {
  const choices = [correctAnswer]
  while (choices.length < 4) {
    const random =
      katakanaList[Math.floor(Math.random() * katakanaList.length)].romaji
    if (!choices.includes(random)) {
      choices.push(random)
    }
  }
  return shuffleArray(choices)
}

function displayChoices(choices) {
  choicesContainer.innerHTML = ''
  choices.forEach((choice) => {
    const button = document.createElement('button')
    button.classList.add('choice-button')
    button.textContent = choice
    button.addEventListener('click', () => selectAnswer(choice))
    choicesContainer.appendChild(button)
  })
}

function selectAnswer(selected) {
  const buttons = document.querySelectorAll('.choice-button')
  buttons.forEach((button) => {
    button.disabled = true
    if (button.textContent === currentQuestion.romaji) {
      button.classList.add('correct')
    } else if (button.textContent === selected) {
      button.classList.add('incorrect')
    } else {
      button.style.backgroundColor = '#000'
      button.style.color = '#fff'
    }
  })
  if (selected === currentQuestion.romaji) {
    score++
    correctCount++
    scoreElement.textContent = score
  } else {
    wrongCount++
  }
  updateScoreBar()
  setTimeout(loadQuestion, 1000)
}

function updateScoreBar() {
  const total = correctCount + wrongCount
  const rightPercent = total ? (correctCount / total) * 100 : 0
  const wrongPercent = total ? (wrongCount / total) * 100 : 0
  document.getElementById('right-bar').style.width = `${rightPercent}%`
  document.getElementById('wrong-bar').style.width = `${wrongPercent}%`
  triesElement.textContent = total
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
