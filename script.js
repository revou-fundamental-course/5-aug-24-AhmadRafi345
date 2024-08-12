const form = document.getElementById('bmi-form'); // Formulir untuk perhitungan BMI
const weightInput = document.getElementById('weight'); // Input untuk berat badan
const heightInput = document.getElementById('height'); // input untuk tinggi badan
const bmiValue = document.getElementById('bmi-value'); // Elemen untuk menampilkan nilai BMI
const bmiCategory = document.getElementById('bmi-category'); // Elemen untuk menampilkan kateori BMI

// Menmabahkan event listener pada formulir ketika tombol submit ditekan
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah formulir untuk melakukan submit secara default (refresh halaman)

    // Mengambil nilai berat dan tinggi dari input dan mengkonversinya menjadi angka
    const weight = parseFloat(weightInput.value); // Mengkonversi input berat ke float
    const height = parseFloat(heightInput.value) / 100; // Mengkonversi input tinggu ke float

    // Menghitung BMI menggunakan fungsi calculateBMI
    const bmi = calculateBMI(weight, height);
    bmiValue.textContent = bmi.toFixed(2); // Menampilkan nilai BMI dengan 2 angka desimal 
    bmiCategory.textContent = getBMICategory(bmi); // Menentukan dan menampilkan kategori BMI berdasarakan hasil perhitungan 
});


// Fungsi untuk menghitung BMI (Body Mass Index)
function calculateBMI(weight, height) {
    return weight / (height * height); // Rumus BMI : berat (kg) dibagi dengan tinggi (m) kuadrat
}

// Fungsi untuk menentukan kategori BMI berdasarkan nilai BMI
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Berat Badan Kurang"; // Kategori untuk BMI kurang dari 18.5
    } else if (bmi < 25) {
        return "Berat Badan Normal"; // Kategori untuk BMI antara 18.5 dan 24.9
    } else if (bmi < 30) {
        return "Gemuk"; // Kategori untuk BMI antara 25 dan 29.9
    } else {
        return "Obesitas"; // Kategori untuk BMI 30 atau lebih
    }
}