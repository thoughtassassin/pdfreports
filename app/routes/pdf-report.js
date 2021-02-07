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
      lineGap: 40,
    })
    .fontSize(14)
    .text("XTO", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 05, 2021, 1:21 pm")
    .fontSize(10)
    .text("Josh Carty, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Martin County… Visited with Chad, Ernie and Alex on location. All good no complaints"
    )
    .text(" ", { lineGap: 30 })
    .fontSize(14)
    .text("Apache", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 04, 2021, 11:51 am")
    .fontSize(10)
    .text("David Paschal, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Eunice/Monument visited with Production Foreman Heath Dean he has taken over the areas North of Jal all the way to Lovington & All of Monument. He currently has 4 Pulling Units working 3 - PA’s & 1 - WO’s/Failures. No issues with any Don/Nan services!!"
    )
    .text(" ", { lineGap: 30 })
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
    )
    .text(" ", { lineGap: 30 })
    .fontSize(14)
    .text("Riley Permian", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 03, 2021, 12:59 pm")
    .fontSize(10)
    .text("David Paschal, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Plains visited with Production Foreman Shayne Jeter he is trying to maintain Production with some Field Maintenance and has 2 Pulling Units working 1 - Completions & 1 - Beam Failure. No issues with any Don/Nan services!"
    )
    .text(" ", { lineGap: 30 })
    .fontSize(14)
    .text("XTO", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 03, 2021, 12:06 pm")
    .fontSize(10)
    .text("David Paschal, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Denver City visited with Sr Wellwork Advisor Gary Long he still has 19 Pulling Units working on the North End & Relief Production Foreman Roy Rangel is just trying to maintain Production by doing some Field Maintenance with 2 Pulling Units working at Cornell//Mahoney with 900 BO down due to Failures. No issues with any Don/Nan services!"
    )
    .text(" ", { lineGap: 30 })
    .fontSize(14)
    .text("XTO", {
      lineGap: 5,
    })
    .fontSize(10)
    .text("Feb 03, 2021, 8:53 am")
    .fontSize(10)
    .text("David Paschal, CORP", {
      lineGap: 20,
    })
    .fontSize(12)
    .text(
      "Means visited with Production Foreman Ryan Jarrett he currently has 2 Pulling Units working on Compliance Injection wells & Beam Failures. He will be picking up another rig next week to help repair 26 Beam Failures that he plans on having repaired by the end of April. No issues with any Don/Nan services!"
    )
    .text(" ", { lineGap: 30 });
  document.end();
});

export default router;
