function isItThea() {
    const phrases = [
        "Tu es sûre Thea ?",
        "Est-ce vraiment réel ?",
        "Sommes-nous dans la matrice ?",
        "Est-ce que c'est réel ?",
        "Je crois que c'est réel.",
        "C'est réel Thea",
        "Est-ce que c'est réel ou juste une illusion ?",
        "Je n'arrive pas à croire que c'est réel !",
        "C'est la réalité, il faut s'y faire.",
        "Est-ce que tout cela est réellement arrivé ?",
        "La ligne entre le rêve et la réalité est parfois floue.",
        "Je ne sais pas si c'est réel ou juste mon imagination.",
        "C'est réel, j'ai les preuves !",
        "La réalité est souvent plus étrange que la fiction.",
        "Comment savoir si c'est réel ou juste un canular ?",
        "Parfois, la réalité dépasse la fiction.",
        "Je ne veux pas y croire, mais c'est la réalité.",
        "Est-ce que tout cela est réel ou juste un cauchemar ?",
        "C'est réel, il faut l'accepter.",
        "La réalité peut être cruelle parfois.",
        "Je suis encore sous le choc, c'est réellement arrivé.",
        "La réalité est souvent plus dure que ce que l'on imagine.",
        "Comment être sûr que c'est réel et pas juste une illusion ?",
        "C'est la réalité, il faut faire avec.",
        "Parfois, je me demande si tout cela est réel.",
        "Est-ce que la réalité dépasse nos rêves les plus fous ?",
        "C'est réel, il n'y a pas de doute possible.",
        "La réalité est parfois difficile à accepter.",
        "Comment faire face à la réalité quand elle est si dure ?",
        "C'est réel, et je ne peux pas le nier.",
        "La réalité peut parfois être merveilleuse.",
        "Est-ce que tout cela est vraiment réel ou juste une illusion ?",
        "C'est la réalité, il faut s'adapter.",
        "La réalité peut parfois nous surprendre.",
        "Comment savoir si c'est réel ou juste une hallucination ?",
        "C'est réel, et c'est incroyable !"
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomIndex];
    const element = document.createElement('H1');
    const textNode = document.createTextNode(randomPhrase);
    element.appendChild(textNode);
    document.body.appendChild(element);
}