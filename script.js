const quizData = [
    {
        pertanyaan: 'Berapa Umur Saya',
        a: '10',
        b: '20',
        c: '24',
        d: '30',
        jBenar: 'b'
    }, {
        pertanyaan: 'bahasa pemograman yang saya pakai ?',
        a: 'Phyton',
        b: 'Golang',
        c: 'Javascript',
        d: 'C++',
        jBenar: 'c'
    }, {
        pertanyaan: 'Siapa vokalis band Paramore ?',
        a: 'Hayley Williams',
        b: 'Raisa',
        c: 'Taylor Swift',
        d: 'Sia',
        jBenar: 'a'
    }, {
        pertanyaan: 'Mata uang negara Amerika ?',
        a: 'Rupiah',
        b: 'Ringgit',
        c: 'Bath',
        d: 'Dollar',
        jBenar: 'd'
    }, {
        pertanyaan: 'Kepanjangan dari kata OTW ?',
        a: 'Oke Tunggu Woy',
        b: 'On The Way',
        c: 'Ohh Ternyata Wahyu',
        d: 'Oalah Tu Wayang',
        jBenar: 'b'
    }, {
        pertanyaan: 'Pertandingan game dengan jumlah hadiah terbanyak adalah ?',
        a: 'Dota',
        b: 'Point Blank',
        c: 'Tekken',
        d: 'PUBG',
        jBenar: 'a'
    }, {
        pertanyaan: 'Jumlah penduduk negara China Tahun 2022 ?',
        a: '1.439.323.773',
        b: '1.439.323.772',
        c: '1.439.323.776',
        d: '1.439.223.776',
        jBenar: 'c'
    }, {
        pertanyaan: 'Pasukan khusus angkatan darat negara Indonesia ?',
        a: 'Batalyon Raider',
        b: 'Kopassus',
        c: 'Kopaska',
        d: 'Sat 81/Gultor',
        jBenar: 'b'
    }, {
        pertanyaan: 'Siapa Penemu Obat Nyamuk ?',
        a: 'Albert Einstein',
        b: 'Thomas Alva Edison',
        c: 'Nikola Tesla',
        d: 'Eiichiro Ueyama',
        jBenar: 'd'
    }, {
        pertanyaan: 'Gedung tertinggi di Dunia ?',
        a: 'Burj Khalifa',
        b: 'Monas',
        c: 'Shanghai Tower',
        d: 'Central Park Tower',
        jBenar: 'a'
    }
];

const jawabEl = document.querySelectorAll('.jawaban');
const quiz = document.getElementById('quiz');
const soalQuiz= document.getElementById("soalQuiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnSubmit = document.getElementById('submit');
const variasi = document.getElementById('variasi');
const img = document.querySelectorAll('#variasi img');

let quizSaatIni = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelected();
    const quizSaatIniData = quizData[quizSaatIni];
    
    soalQuiz.innerText = quizSaatIniData.pertanyaan
    a_text.innerText = quizSaatIniData.a;
    b_text.innerText = quizSaatIniData.b;
    c_text.innerText = quizSaatIniData.c;
    d_text.innerText = quizSaatIniData.d;
    
}

function getSelected() {
    let jawab = undefined;
    jawabEl.forEach((jawabEl) => {
        if(jawabEl.checked) {
            jawab = jawabEl.id;
        }
    });
    return jawab;
}

function deSelected() {
    jawabEl.forEach((jawabEl) => {
        jawabEl.checked = false
    });
}

function getVariasi() {
    img.forEach((img) => {
        if(score < 7) {
            img.src = 'img/emoji.png'
        }
    })
    variasi.style.display = 'block';
}

btnSubmit.addEventListener("click", () => {
    const jawab = getSelected()
    if(jawab) {
            if(jawab === quizData[quizSaatIni].jBenar) {
                score++; 
            }

            quizSaatIni++;
            if(quizSaatIni < quizData.length) {
                loadQuiz()
            }else {
                quiz.innerHTML = `<h3>Soal Habis<br> Hasil Kamu: ${score}/${quizData.length}</h3><button onClick="location.reload()">Coba Lagi?</button>`;
                getVariasi()
            }
        }
})