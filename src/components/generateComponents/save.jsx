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

async function download () {
    const element = document.querySelector(".resume"),
        images = element.querySelectorAll("img");
    
    for (let img of images) {
        let urlBase64 = await toDataUrl(img.src);
        img.setAttribute("src", urlBase64);
    }

    import("html2pdf.js").then((html2pdf) => {
    html2pdf.default()
      .set({
        margin: 0.5,
        filename: "resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      })
      .from(element)
      .save();
  });
}

async function toDataUrl (url) {
    //Convert to base64
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
            resolve(reader.result);
        };
        reader.readAsDataURL(xhr.response);
        };
        xhr.onerror = () => {
        reject({
            status: this.status,
            statusText: xhr.statusText,
        });
        };
        xhr.open("GET", url);
        xhr.responseType = "blob";
        xhr.send();
    });
};