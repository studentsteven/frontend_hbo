function typeText() {
    const textArea = document.getElementById("textArea");
    const author = document.getElementById("author");
    const apiUrl = 'http://localhost:3000/quote';

    fetch(apiUrl)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network error');
            }
            return res.json();
        })
        .then(quote => {
            textArea.textContent = "";
            let index = 0;
            var text = quote.quote;

            const typingEffect = setInterval(() => {
                if (index < text.length) {
                    textArea.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 100);

            author.textContent = quote.author;
        })
        .catch(error => {
            console.error('Error fetching the quote:', error);
        });
}