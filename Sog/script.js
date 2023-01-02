const options = {
	method: 'GET',
	headers: {
		'X-BingApis-SDK': 'true',
		'X-RapidAPI-Key': 'cc3101b35emshe29cf8331cb2303p15c0cdjsn83707609336f',
		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }
    };

    const searchBtn = document.getElementById('search-btn');
    const search = document.getElementById('searchInp');
    let setSearchValue;
    
    search.oninput = () => {
        setSearchValue = search.value

        displayNews(setSearchValue)
    }

    const displayNews = setSearchValue => {
    fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
        .then(response => response.json())
        .then(data => {
            let news = ''
            data.value.filter(val => {
                if(setSearchValue == ""){
                    return val
                } else if (val.name.includes(setSearchValue)) {
                    console.log(val)
                    return val
                }
            })
            .map(item => { 
            news += `
                <div class='menuItem'>
                    <div class="backgroundImages" style='background-image: url(${item.image.thumbnail.contentUrl})'></div>
                    <h2 class="itemName">${item.name}</h2>
                    <p class="description">${item.description}</p>
                    <div class="text">
                        <p class="datePublished">${item.datePublished}</p>
                        <p class="type"><span class="number-of-page">365</span> ${item._type}</p>
                    </div>
                </div>
            `
            document.getElementById('menuList').innerHTML = news
        })
        }).catch(err => console.error(err));
    }



const btn = document.getElementById('btn');
const sogody = document.getElementsByTagName('a')

btn.addEventListener("click", () => {
    if (sogody.length > 1) {
        sogody[0].innerHTML = "Loading..."
    }
})
