var styleElem = document.head.appendChild(document.createElement("style"));
var menu_btn = document.getElementById("menu_btn");

//Menu Btn functions

openMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-close.svg" onclick="closeMenu();" alt="menu_btn" width="100%" height="50%">`;
	styleElem.innerHTML = `
			@media (max-width: 375px){
				#menu{
					display: block;
					background-color: var(--White);
					padding: 2rem;
					position: absolute;
					top: 100%;
					left: 0;
					margin: 2rem 1rem 0rem 1rem;
					width: 90%;
					text-align: center;
					box-shadow: 5px 20px 10px 10px #8888;
					border-radius: 5px;
					z-index: 200000;
					transition: display 0.2s linear;
				}
			}
		`;
}

closeMenu = () =>{
	menu_btn.innerHTML = `<img src="images/icon-hamburger.svg" onclick="openMenu();" alt="menu_btn" width="100%" height="50%">`;
	styleElem.innerHTML = `
			@media (max-width: 375px){
				#menu{
					display: none;
					background-color: var(--White);
					padding: 2rem;
					position: absolute;
					top: 100%;
					left: 0;
					margin: 2rem 1rem 0rem 1rem;
					width: 90%;
					text-align: center;
					box-shadow: 5px 20px 10px 10px #8888;
					border-radius: 5px;
					z-index: 200000;
					transition: display 0.2s linear;

				}
			}
		`;

}