// function to open the AIC homepage in new tab
function openInNewTab(url) {
    var win = window.open(url, 'blank');
    win.focus();
}

// function to open each image as a modal once it is clicked
function openModal(event) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById("expandedImg").setAttribute('src', event.target.getAttribute("src"));
}
 
// function to close the image modal
function closeModal(event) {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}



// // // // // // // // // // // // // // // // // // // // // // // // // // // 
//                                                                            //
//            functions and methods to pull data for art pieces               //
//                                                                            //

let showArtInfo;

/**
 * @param art_id
 * 
 * function to pull the info on the art from AIC
 */

async function clickedEvent(art_id) {
    // Get id of artwork
    // console.log('hi')   
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(
        `https://api.artic.edu/api/v1/artworks/
        ${art_id}?fields=id,title,artist_display,date_display`, {
        method: 'GET',
        headers: headers
    });
    // console.log(request)

    let result = await fetch(request);
    let response = await result.json();
    // console.log(response)

    if (showArtInfo) {
        stopShow();
    } else {
        let title = response.data.title;
        let artist = response.data['artist_display'];
        let date = response.data['date_display'];
        let div = document.getElementById('info');
        div.innerHTML = 
            `<br><strong><u>Title</u>:</strong> ${title}
            <br><strong><u>Artist</u>:</strong> ${artist}
            <br><strong><u>Date</u>:</strong> ${date}`;
        elem.parentElement.appendChild(div);
    };
}

/**
 * @param id // art id
 * @param event // 'onClick' event
 * 
 * function to display the pulled info of the artpiece when clicked on
 */

function getArtwork(id, event) {
    // console.log('hello')
    // console.log(id)
    event.stopPropagation();
    clickedEvent(id)
}