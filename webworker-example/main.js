// Auf Buttonklick reagieren
document.getElementById('btn').addEventListener('click', () => {
    // Zahlen aus Eingabefeld holen
    const num1 = +document.getElementById('num1').value;
    const num2 = +document.getElementById('num2').value;

    // Erstellen eines neuen WebWorkers 
    const worker = new Worker('./worker.js');

    // Registrieren einer Funktion, welche Ergebnisse vom Worker verarbeitet
    // und in der UI anzeigt
    worker.onmessage = (event) => {
        document.getElementById('result').innerHTML = `Result: ${event.data}`;
    };

    // Erstellen von zwei Zahlen für die Addition
    const numbers = { num1: num1, num2: num2 };

    // Senden der beiden Zahlen an den WebWorker
    worker.postMessage(numbers);
});

