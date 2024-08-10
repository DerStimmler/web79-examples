//Auf Buttonclick reagieren
document.getElementById('btn').addEventListener('click', async () => {
    // Import Objekt für WASM-Modul erstellen
    const importObject = {
        namespace: {
            //Definiere die log-Funktion, welche in WASM Importiert und dort aufgerufen wird
            log: (data) => console.log("From WASM: ", data)
        }
    };

    //WASM-Modul laden und Instanz erzeugen
    const { instance } = await WebAssembly.instantiateStreaming(fetch("./module.wasm"), importObject);

    // Zahlen aus Eingabefeld holen
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;

    // Aus WASM-Modul exportierte Funktion aufrufen um beide Zahlen zu addieren
    const result = instance.exports.add(num1, num2);

    // Ergebnis in der UI anzeigen
    document.getElementById('result').innerHTML = `Result: ${result}`;
});