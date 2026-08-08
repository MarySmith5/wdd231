

const translateButton = document.querySelector('#translate-btn');

export async function translate(text, text_sp, name) {

    
        try {
            const translator = await Translator.create({
                sourceLanguage: 'en',
                targetLanguage: 'es',
            });
            if (text_sp) {
                text.textContent = text_sp;
            } else {
                const output = await translator.translate(text.textContent);
                console.log(output);
                text.textContent = output;
                localStorage.setItem(name, output);
            }


        } catch (error) {
            console.error("Translation failed:", error);
        }
    
}

