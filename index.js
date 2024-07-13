// 1. Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
function reverseAlphabet(str) {
  const letters = str
    .match(/[a-zA-Z]/g)
    .reverse()
    .join("");
  const digits = str.match(/\d+/g).join("");
  return letters + digits;
}

const str = "NEGIE1";
console.log(reverseAlphabet(str));

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `${longestWord}: ${longestWord.length} characters`;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
function countOccurrences(input, query) {
  return query.map((q) => input.filter((word) => word === q).length);
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countOccurrences(INPUT, QUERY));

// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN
function diagonalDifference(matrix) {
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    primaryDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][matrix.length - 1 - i];
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalDifference(matrix));
