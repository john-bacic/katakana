// version 1.26

document.addEventListener('DOMContentLoaded', () => {
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

    // Further Katakana entries...
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
  const scoreElement = document.getElementById('score')
  const triesElement = document.getElementById('tries')
  const scoreContainer = document.getElementById('score-container')
  // const feedbackCheck = document.querySelector('.feedback-check')
  // const feedbackX = document.querySelector('.feedback-x')

  let currentQuestion = null
  let score = 0
  let correctCount = 0
  let wrongCount = 0
  let questionQueue = []

  let timerInterval
  const totalTime = 60
  let timeLeft = totalTime

  const timerCircle = document.querySelector('.timer-circle')
  const timerText = document.querySelector('.timer-text')

  const gameOverOverlay = document.getElementById('game-over-overlay')
  const overlayStartButton = document.getElementById('overlay-start-button')
  const startButtonContainer = document.getElementById('start-button-container')

  let isFirstStart = false

  // Attach event listener to Start button
  overlayStartButton.addEventListener('click', () => {
    startGame()
    // Hide the Start button container by setting display to 'none'
    startButtonContainer.style.display = 'none'
  })

  function startGame() {
    score = 0
    correctCount = 0
    wrongCount = 0
    scoreElement.textContent = score
    triesElement.textContent = 0
    updateScoreBar()

    // Show score container
    scoreContainer.style.display = 'flex'
    hideFeedback()

    // Hide the overlay if it's visible
    gameOverOverlay.classList.remove('show')

    // Ensure the Start button container is hidden
    startButtonContainer.style.display = 'none'

    // Initialize and shuffle the questionQueue
    questionQueue = shuffleArray([...katakanaList])

    // Reset timer
    resetTimer()

    // Load the first question
    loadQuestion()
    startTimer()
  }

  function loadQuestion() {
    if (questionQueue.length === 0) {
      endGame() // End the game when no more unique questions are left
      return
    }
    currentQuestion = questionQueue.pop()
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
      button.addEventListener('touchstart', () => selectAnswer(choice))
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
        button.style.backgroundColor = '#2f2f2f5c'
        button.style.color = '#555'
        button.style.textShadow = 'none'
        button.style.border = 'none'
      }
    })
    if (selected === currentQuestion.romaji) {
      score++
      correctCount++
      scoreElement.textContent = score
      showFeedback('correct')
    } else {
      wrongCount++
      showFeedback('incorrect')
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

  function showFeedback(type) {
    if (type === 'correct') {
      document.getElementById('right-bar').classList.add('show-check')
      document.getElementById('wrong-bar').classList.remove('show-x')
    } else {
      document.getElementById('wrong-bar').classList.add('show-x')
      document.getElementById('right-bar').classList.remove('show-check')
    }
    setTimeout(hideFeedback, 1000)
  }

  function hideFeedback() {
    document.getElementById('right-bar').classList.remove('show-check')
    document.getElementById('wrong-bar').classList.remove('show-x')
  }

  function startTimer() {
    timeLeft = totalTime
    updateTimer()
    if (timerInterval) clearInterval(timerInterval)
    timerInterval = setInterval(() => {
      timeLeft--
      if (timeLeft <= 0) {
        clearInterval(timerInterval)
        endGame()
      }
      updateTimer()
    }, 1000)
  }

  function updateTimer() {
    const circumference = 2 * Math.PI * 45
    const offset = circumference * (timeLeft / totalTime)
    timerCircle.style.strokeDashoffset = circumference - offset
    timerText.textContent = timeLeft
  }

  function resetTimer() {
    clearInterval(timerInterval)
    const circumference = 2 * Math.PI * 45
    timerCircle.style.strokeDashoffset = circumference
    timerText.textContent = totalTime
  }

  function endGame() {
    // Show the overlay background
    gameOverOverlay.classList.add('show')
    // Show the Start button container
    startButtonContainer.style.display = 'flex'
    // Update the button text based on the game state
    if (isFirstStart) {
      isFirstStart = true
      overlayStartButton.textContent = 'スタート'
    } else {
      overlayStartButton.textContent = 'レスタート'
    }
    // Remove hidden-button class to show the Start button
    overlayStartButton.classList.remove('hidden-button')
    resetTimer()
  }

  // Optionally, you can add logic to hide the Start button when the overlay is shown
  gameOverOverlay.addEventListener('click', () => {
    // Example: Click on overlay to restart
    startGame()
  })
})
