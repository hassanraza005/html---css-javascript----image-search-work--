const accesskey = "KNUePSavNfWud7S04Pt8CGdCNCu49TBYI9HxtkErueE";
const searchForm = document.getElementById('serach-form');
const searchBox = document.getElementById('serach-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn= document.getElementById('show-more-btn');

let keyword = "";
let page = 1;

async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}
    &client_id=${accesskey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResult.innerHTML= "";
    }

    const results = data.results;
    results.map((result) =>{
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imagelink = document.createElement('a');
        imagelink.href = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchResult.appendChild(imagelink);
    })

    showMoreBtn.style.display = "block";

}

searchForm.addEventListener("submit" , (e) =>{
    e.preventDefault();
    page = 1;
    searchImages()
});
showMoreBtn.addEventListener('click' , () =>{
    page++;
    searchImages()
})