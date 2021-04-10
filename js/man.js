var acordeao = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acordeao.length; i++) 
{
  acordeao[i].addEventListener("click", function() 
  {
    this.classList.toggle("active");

    var texto_acordeao = this.nextElementSibling;

    if (texto_acordeao.style.display === "block") 
    {
      texto_acordeao.style.display = "none";
    } 
    else 
    {
      texto_acordeao.style.display = "block";
    }

  });

}