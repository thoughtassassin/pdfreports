import express from "express";
import PDFDocument from "pdfkit";

const router = express.Router();

router.get("/", function (req, res, next) {
  const document = new PDFDocument({ bufferPages: true });

  let buffers = [];
  document.on("data", buffers.push.bind(buffers));
  document.on("end", () => {
    const pdfData = Buffer.concat(buffers);
    res
      .writeHead(200, {
        "Content-Length": Buffer.byteLength(pdfData),
        "Content-Type": "application/pdf",
        "Content-disposition": "attachment;filename=report.pdf",
      })
      .end(pdfData);
  });

  document
    .font("Helvetica")
    .fontSize(18)
    .text("Don-Nan Report", {
      lineGap: 20,
    })
    .fontSize(14)
    .text("Forty Acres Energy", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 04, 2021, 9:23 am")
    .fontSize(10)
    .text("David Paschal, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Eunice visited with Production Foreman James Martinez he is still maintaining Production by doing some Field Maintenance & Battery Upgrades. He has 1 Pulling Unit working on injector CO & will be moving in a Drilling Rig in 2 weeks South of Jal to drill 4 injectors & 2 Producers. No issues with any Don/Nan services!!"
    );
  document.end();
});

export default router;
