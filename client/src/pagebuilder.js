function loadHeadPartial(partialName) {
    fetch(`/client/pages/pagebits/${partialName}.html`) // Adjusted path here
        .then(response => response.text())
        .then(html => {
            document.head.insertAdjacentHTML('beforeend', html);
        })
        .catch(error => {
            console.error('Error loading head partial:', error);
        });
}

function loadPartial(containerId, url) {
    fetch(`/client/pages/pagebits/${url}.html`) // Adjusted path here
        .then(response => response.text())
        .then(html => {
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading partial:', error);
        });
}

function loadPage(page) {
    loadPartial('content', page);
}
function setInnerHTMLForClass(className, url) {
    console.log("Fetching content from:", url);
    fetch(`/client/pages/pagebits/${url}.html`)
        .then(response => response.text())
        .then(html => {
            const elements = document.getElementsByClassName(className);
            Array.from(elements).forEach(element => {
                element.innerHTML = html;
            });
        })
        .catch(error => {
            console.error('Error loading partial:', error);
        });
}



// Load common partials
document.addEventListener('DOMContentLoaded', function() {
    setInnerHTMLForClass('CommonFooter', 'CommonFooter');
   // setInnerHTMLForClass('CommonNavBar', 'CommonNavBar');

    console.log("Footer")
   // setInnerHTMLForClass("CommonFooter", "Footer")
   // loadPartial('footer', 'footer.html');

    //    document.getElementById('homeButton').addEventListener('click', function() { loadPage('home.html');});
});