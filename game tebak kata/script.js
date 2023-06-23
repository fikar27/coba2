// Daftar kata yang akan ditebak
var words = ["apel", "jeruk", "mangga", "pisang", "stroberi"];

// Daftar petunjuk untuk masing-masing kata
var hints = {
  apel: "Buah yang umumnya berwarna merah atau hijau",
  jeruk: "Buah dengan kulit yang tebal dan berwarna oranye",
  mangga: "Buah dengan kulit yang berwarna kuning atau hijau",
  pisang: "Buah yang memiliki kulit berwarna kuning",
  stroberi: "Buah kecil berwarna merah yang enak dimakan segar"
};

// Ambil elemen yang dibutuhkan dari HTML
var wordDisplay = document.getElementById("word-display");
var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var hintButton = document.getElementById("hint-button");
var hintElement = document.getElementById("hint-text");

// Acak kata yang akan ditebak
var randomIndex = Math.floor(Math.random() * words.length);
var selectedWord = words[randomIndex];

// Tampilkan petunjuk kata
hintElement.textContent = hints[selectedWord];

// Membuat array dengan garis-garis untuk menampilkan kata yang belum ditebak
var hiddenWord = [];
for (var i = 0; i < selectedWord.length; i++) {
  hiddenWord.push("-");
}

// Menampilkan kata yang belum ditebak
wordDisplay.textContent = hiddenWord.join(" ");

// Event listener saat tombol Tebak ditekan
guessButton.addEventListener("click", function() {
  var guess = guessInput.value.toLowerCase();

  // Cek apakah tebakan benar
  if (guess.length === 1 && selectedWord.includes(guess)) {
    for (var j = 0; j < selectedWord.length; j++) {
      if (selectedWord[j] === guess) {
        hiddenWord[j] = guess;
      }
    }

    // Perbarui tampilan kata yang belum ditebak
    wordDisplay.textContent = hiddenWord.join(" ");

    // Cek apakah semua huruf sudah ditebak
    if (!hiddenWord.includes("-")) {
      alert("Selamat, kamu berhasil menebak kata!");
      resetGame();
    }
  } else {
    alert("Tebakan salah, coba lagi!");
  }

  // Kosongkan input tebakan
  guessInput.value = "";
});

// Event listener saat tombol Petunjuk 1 Huruf ditekan
hintButton.addEventListener("click", function() {
  var randomIndex = Math.floor(Math.random() * selectedWord.length);
  hiddenWord[randomIndex] = selectedWord[randomIndex];
  wordDisplay.textContent = hiddenWord.join(" ");
});

// Fungsi untuk mengulang permainan
function resetGame() {
  randomIndex = Math.floor(Math.random() * words.length);
  selectedWord = words[randomIndex];
  hiddenWord = [];

  for (var k = 0; k < selectedWord.length; k++) {
    hiddenWord.push("-");
  }

  wordDisplay.textContent = hiddenWord.join(" ");
  hintElement.textContent = hints[selectedWord];
}
