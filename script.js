let newQouteButton=document.getElementById('new-qoute')
let shareQouteButton=document.getElementById('share-qoute')
let qoute=document.getElementById('qoute')
let author=document.getElementById('author')
let qouteContainer=document.getElementById('qoute-container')
let loader=document.getElementById('loader')

const showLoadingSpinner=()=>{
loader.hidden=false;
qouteContainer.hidden=true;
}
const hideLoadingSpinner=()=>{
    loader.hidden=true;
    qouteContainer.hidden=false;
    }

const shareOnWhatsApp=()=>{
    let content=qoute.textContent
    let authorContent=author.textContent
    let urlEncodedText=encodeURIComponent(`${content} - ${authorContent}`)
    let whatssppUrl=`https://wa.me/?text=${urlEncodedText}`
    window.open(whatssppUrl,'_blank')
}


shareQouteButton.addEventListener('click',()=>{
    shareOnWhatsApp()
})


newQouteButton.addEventListener('click',()=>{
    showLoadingSpinner()
    fetch("https://api.api-ninjas.com/v1/quotes?category=happiness",{headers:{ 'X-Api-Key': 'TJdEX4Ngf414ZCw4Zg1hJA==8wMh9IMhmAbEsS4M'}}).then(res=>{
       return res.json()
    }).then((data)=>{
        const responseDataArray=data
        qoute.textContent=responseDataArray[0].quote
        author.textContent=responseDataArray[0].author
        hideLoadingSpinner()

    }).catch((error)=>{
        console.error(error)
        console.log("somthing went wrong")
        hideLoadingSpinner()
    })
    
})


