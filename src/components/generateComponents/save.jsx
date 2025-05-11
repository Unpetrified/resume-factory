export default function Buttons () {
    return <div className="download-btn">
        <PrintBtn/> <DownloadBtn/>
    </div>
}

function PrintBtn () {
    function print() {
        window.print();
    }

    return <button onClick={print}>Print CV</button>
}

function DownloadBtn () {
    return <button onClick={download}>Download CV</button>
}

function download () {

}