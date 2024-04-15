const isWordpress = async (url) => {
    const responce = await fetch(url)
    const html = await responce.text()

    return html
}

const answerUrl = prompt('введите url')
const proxyLink = 'https://cors-anywhere.herokuapp.com/'

isWordpress(proxyLink + answerUrl)
    .then((res) => {
        if(res.includes('wp-content')){
            console.log('сайт реализован на wordpress');
        } else{
            console.log('сайт не реализован на wordpress');
        }
    })
    .catch(error => {
        console.error(error);
    })
