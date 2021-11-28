function alertbutton() {
    alert("Привет")
}


function alertbutton1() {
    alert("Как")
}

function alertbutton2() {
    alert("Дела?")
}


const element = (
    <div>
        <h1>Привет
            <button onClick={alertbutton}>PUSH</button>
        </h1>
        <h1>Как
            <button onClick={alertbutton1}>PUSH</button>
        </h1>
        <h1>Дела?
            <button onClick={alertbutton2}>PUSH</button>
        </h1>
    </div>
);


export default function Firstex(){
    return(
        element
    )
}