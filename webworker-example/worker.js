// Reagieren auf Nachrichten vom Hauptthread
onmessage = event => {
    // Deconstruction der empfangenen Daten
    const { num1, num2 } = event.data;

    // Addieren der zwei Zahlen 
    const result = num1 + num2;

    // Senden des Ergebnisses zurück an den Hauptthread 
    postMessage(result);
}; 