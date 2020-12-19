
window.onload = () => 
{
    document.querySelector(".dark-mode").onclick = () =>
    {
        window.location = 'demo.html';
    };
    document.querySelector(".light-mode").onclick = () =>
    {
        window.location = 'demo.html';
    };
    // Start Ajax
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = () => {
    if (myRequest.readyState === 4 && myRequest.status === 200) {


        console.log("myRequest.responseText");

    }
    myRequest.open('GET', 'demo.html', true);
    myRequest.send();

};
};