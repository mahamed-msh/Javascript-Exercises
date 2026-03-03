const image = document.querySelector("#img");

function ChangeImage(){
    
    const url = prompt("enter the url");
    const BorderColor = prompt("enter the Border color");
    const width = prompt("enter the width in px");
    const height = prompt("enter the height in px");
    const BorderRadius = prompt("enter the Border Radius in px");


    image.setAttribute('src',url)
    // image.setAttribute('src','https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png')
    image.style.border = `2px solid ${BorderColor}`;
    image.style.height = `${height}px`;
    image.style.width = `${width}px`;
    image.style.borderRadius = `${BorderRadius}px`;
  
}

