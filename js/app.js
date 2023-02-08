const marvel = {
    render:() => {
        // 1f0edf263669f373fc92516ef2814618a3c009091f20951535ca9b9d12ccaa4d64729a340


        const urlApi ="https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=f20951535ca9b9d12ccaa4d64729a340&hash=725940a8a31d134a80ae670810f6bd41";
        const container = document.querySelector("#marvelRow");
        let contentHTML = "";
        
        fetch(urlApi)
        .then(res => res.json())
        .then((json) => {
            // console.log(json, "res.jjjjj")
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                contentHTML+= `
                <div class="col-md-4">
                    <a href="${urlHero}" target="_blank">
                        <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                    </a>
                    <h2 class="title"> ${hero.name}</h2>
                </div>`;
            }

            container.innerHTML = contentHTML;
        })
    }
};

marvel.render();