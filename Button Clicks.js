function popup(_msg)
{
    alert(_msg);
};

function captureInput() 
{
    const userInput = document.getElementById('username').value;
    document.getElementById('output').innerText = `You entered: ${userInput}`;
}
 //code for image carousel specificly the next button
 document.getElementById("next").onclick = () =>
{
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
};

