function isItThea() {
    const phrases = [
        "Tu es sûre Thea ?",
        "Est-ce vraiment réel ?",
        "Sommes-nous dans la matrice ?",
        "Est-ce que c'est réel ?",
        "Je crois que c'est réel.",
        "C'est réel Thea"
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    const element = document.createElement('H1');
    const textNode = document.createTextNode(randomPhrase);
    element.appendChild(textNode);
    document.body.appendChild(element);
}