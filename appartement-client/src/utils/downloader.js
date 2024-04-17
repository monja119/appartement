import jsPDF from "jspdf";
import { dateFormat } from "../helpers/dateFormatManager";

export const pdfDonwloader = (type, data, y) => {
    const x = 300
    const marginLeft = 10
    const [sizeMin, sizeMid, sizeMax] = [12, 14, 16] 
    const doc = new jsPDF('p', 'px', [x, y]);

    // title
    doc.setFontSize(sizeMax);
    doc.text( type === 'fandaharana' ? data?.date : data?.title, marginLeft, 20, {
        maxWidth: x - 20,
        hight: y - 10,
        oveflow: 'linebreak'
        })
    
    // ref
    doc.setFontSize(sizeMin)
    doc.text(`${type} : ${data?.id}`, marginLeft, 40)
    if(type !== 'fandaharana'){
        doc.text(dateFormat(data?.created_at), marginLeft, 50)
    }
    
    // content 
    doc.setFontSize(sizeMin)
    doc.text(data?.content, marginLeft, 70, {
        maxWidth: x - 20,
        hight: y - 10,
        oveflow: 'linebreak'
    });

    data?.title ? doc.save(`${ type }_${ data?.title }_${ data?.id }.pdf`) : doc.save(`${ type }_${ data?.id }.pdf`) 

}