const puppeteer = require('puppeteer'); //Chama o Puppeteer

const tirarPrint = async () => {
    const browser = await puppeteer.launch();  
    const page = await browser.newPage();
    await page.goto('https://www.uva.br/'); //Site desejado
    await page.screenshot({path: 'exTirarPrint.png'});  //Onde quer salvar o arquivo
    await browser.close();
  };

  const gerarPDF = async () => {
    const browser = await puppeteer.launch();  
    const page = await browser.newPage();
    await page.goto('https://www.uva.br/'); 
    await page.pdf({ //gerar PDF
        path: 'exGerarPDF.pdf',
        format: 'A4'
    })
    await browser.close();
  };

  const getTitle = async () => {
    const browser = await puppeteer.launch();  
    const page = await browser.newPage();
    await page.goto('https://www.uva.br/');

    const titleEx = await page.evaluate(() => { //Ler os elementos de uma página
        return{
            title: document.title
        };
    });
    console.log(titleEx);

    await browser.close();
  };
  getTitle();

//gerarPDF();

//tirarPrint();

