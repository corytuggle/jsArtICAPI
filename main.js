let artwork;
let artInfo;

/**
 * @param img_index
 * @param item_index
 */

async function clickedEvent(img_index) {
    // Get name of art piece
    let artID = document.getElementById('img')[img_index].attributes[2].value;

    let request = new Request(
        `https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,${artID}`, {
        method: 'GET'
    });

    let result = await fetch(request);

    let response = await result.json();

    // let artwork = response.

    console.log(response)
}

/**
 * @param id
 * @param event
 */

function getArtwork(id) {
    switch(id) {
        // case 'fig1': { // AIC Banner
        //     // event.stopPropagation();
        //     clickedEvent(0)
        //     break;
        // }
        case 'fig2': { // Water Lilies by Claude Monet, ref# 1933.1157 id# 16568
            // event.stopPropagation();
            clickedEvent(16568)
            break;
        }
        case 'fig3': { //Self Portrait by Vincent Van Gogh, ref# 1954.326 id# 80607
            // event.stopPropagation();
            clickedEvent(80607)
            break;
        }
        case 'fig4': { // Water Lily Pond by Claude Monet, ref# 1933.441 id# 87088
            // event.stopPropagation();
            clickedEvent(87088)
            break;
        }
        case 'fig5': { // The Poet's Garden by Vincent Van Gogh, ref# 1933.433 id# 14586
            // event.stopPropagation();
            clickedEvent(14586)
            break;
        }
        case 'fig6': { // Under the Wave Off Kanagawa by Katsushika Hokusai, ref# 1925.3245 id# 24645
            // event.stopPropagation();
            clickedEvent(24645)
            break;
        }
        case 'fig7': { // Chrysanthemums and Bee by Katsushika Hokusai, ref# 1925.3373 id# 25110
            // event.stopPropagation();
            clickedEvent(25110)
            break;
        }
    }
}