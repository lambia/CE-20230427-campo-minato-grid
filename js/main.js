document.getElementById("playBtn").addEventListener("click", initGame );
// var gameInit = false;

function initGame() {
    // if(gameInit == false) {
        console.log("Gioco avviato");

        //Creiamo la griglia (div.grid)
        const grid = createElement("div", "grid", "");
        
        //Creiamo n celle
        let numeroDiCelleTotali = document.getElementById("livelloDifficolta").value;
        let numeroDiCellePerLato = Math.ceil( Math.sqrt(numeroDiCelleTotali) );
        let dimensione = `calc(100% / ${numeroDiCellePerLato})`;

        for (let i = 0; i < numeroDiCelleTotali; i++) {
            let cella = createElement("div", "cell", i+1 );
            cella.style.width = dimensione;
            cella.style.height = dimensione;

            cella.addEventListener("click", function() {
                console.log("Cliccato", this);
                this.classList.toggle("clicked");
            });

            grid.appendChild( cella );
        }

        //Appendiamo la griglia al main
        const mainEl = document.querySelector("main");
        mainEl.innerHTML = "";
        mainEl.appendChild(grid);

        //Aggiunge gli event listener sugli elementi DOPO che sono stati scritti
        //Ripete due volte il ciclo quindi è ridondante
        // let celle = document.getElementsByClassName("cell");
        // for (let i = 0; i < celle.length; i++) {
        //     celle[i].addEventListener("click", function() {
        //         console.log("Cliccato", this);
        //         this.classList.toggle("clicked");
        //     });
        // }

        console.log("Griglia: ", grid);
        gameInit = true;
    // } else {
        // console.log("Gioco già inizializzato");
    // }
}

function createElement(tagHtml, classe, contenuto) {
    
    //Creiamo una cella
    const cell = document.createElement(tagHtml);
    cell.classList.add(classe);
    cell.innerText = contenuto;

    return cell;

}