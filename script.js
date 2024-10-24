// version 1.40

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

  let isFirstStart = true

  // Attach event listeners to Start button for both click and touchstart
  overlayStartButton.addEventListener('click', () => {
    startGame()
  })

  overlayStartButton.addEventListener('touchstart', () => {
    startGame()
  })

  function startGame() {
    score = 0
    correctCount = 0
    wrongCount = 0
    scoreElement.textContent = score
    triesElement.textContent = 0
    updateScoreBar()

    // Reset the correct bar
    const rightBar = document.getElementById('right-bar')
    rightBar.style.width = '0%'

    // Show score container
    scoreContainer.style.display = 'flex'
    hideFeedback()

    // Hide the overlay and start button
    gameOverOverlay.classList.remove('show')
    gameOverOverlay.classList.add('hidden')
    startButtonContainer.style.display = 'none'

    // Re-enable interactions with the game container
    document.querySelector('.container').style.pointerEvents = 'auto'

    // Initialize question queue with tracking
    updateQuestionQueue()

    // Reset timer
    resetTimer()

    // Load the first question
    loadQuestion()
    startTimer()

    // Remove the initial position class and add restart position
    startButtonContainer.classList.remove('initial-position')
  }

  function endGame() {
    // Show the overlay background
    gameOverOverlay.classList.remove('hidden')
    gameOverOverlay.classList.add('show')

    // Show the Start button container in bottom position
    startButtonContainer.style.display = 'flex'
    startButtonContainer.classList.remove('initial-position')

    // Update the button text based on the game state
    overlayStartButton.textContent = isFirstStart ? 'スタート' : 'レスタート'
    isFirstStart = false

    // Remove hidden-button class to show the Start button
    overlayStartButton.classList.remove('hidden-button')

    resetTimer()

    // Stop the timer
    clearInterval(timerInterval)

    // Disable all choice buttons
    const buttons = document.querySelectorAll('.choice-button')
    buttons.forEach((button) => {
      button.disabled = true
    })

    // Disable interactions with the rest of the game container
    document.querySelector('.container').style.pointerEvents = 'none'
  }

  function loadQuestion() {
    if (questionQueue.length === 0) {
      updateQuestionQueue()
      if (questionQueue.length === 0) {
        endGame()
        return
      }
    }
    if (timeLeft <= 0) {
      endGame()
      return
    }

    currentQuestion = questionQueue.pop()

    // Track shown character
    const shownCharacters =
      JSON.parse(localStorage.getItem('shownCharacters')) || []
    if (!shownCharacters.includes(currentQuestion.katakana)) {
      shownCharacters.push(currentQuestion.katakana)
      localStorage.setItem('shownCharacters', JSON.stringify(shownCharacters))
    }

    questionElement.textContent = `${currentQuestion.katakana}`
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
    const rightBar = document.getElementById('right-bar')
    let currentWidth = parseFloat(rightBar.style.width) || 0

    if (selected === currentQuestion.romaji) {
      score++
      correctCount++
      scoreElement.textContent = score
      // Increase correct bar by 5%
      rightBar.style.width = `${Math.min(currentWidth + 5, 100)}%`
      showFeedback('correct')
    } else {
      wrongCount++
      // Reduce correct bar by 5%
      rightBar.style.width = `${Math.max(currentWidth - 5, 0)}%`
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

    // Hide spacer if either right or wrong is 100%
    const spacer = document.getElementById('spacer')
    if (rightPercent === 100 || wrongPercent === 100) {
      spacer.style.display = 'none'
    } else {
      spacer.style.display = 'block'
    }
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
    }, 1000) // Changed from 100ms to 1000ms
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

  // Add these functions at the same scope level as other functions
  function initializeKatakanaTracking() {
    let trackedKatakana =
      JSON.parse(localStorage.getItem('trackedKatakana')) || {}

    // Reset tracking if all characters have been shown twice
    if (Object.values(trackedKatakana).every((count) => count >= 2)) {
      localStorage.removeItem('trackedKatakana')
      trackedKatakana = {}
    }

    return trackedKatakana
  }

  function updateQuestionQueue() {
    // Get shown characters from localStorage
    const shownCharacters =
      JSON.parse(localStorage.getItem('shownCharacters')) || []

    // If all characters have been shown, reset the list
    if (shownCharacters.length >= katakanaList.length) {
      localStorage.removeItem('shownCharacters')
      questionQueue = shuffleArray([...katakanaList])
      return
    }

    // Filter out already shown characters
    const availableKatakana = katakanaList.filter(
      (item) => !shownCharacters.includes(item.katakana)
    )

    questionQueue = shuffleArray([...availableKatakana])
  }

  // Add initial position class when page loads
  startButtonContainer.classList.add('initial-position')
})
