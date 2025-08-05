import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function EmiPdf(data) {
  console.log(data);
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  doc.setFontSize(14);
  const h1 = "Repayment Schedule";
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.text(h1, (pageWidth - doc.getTextWidth(h1)) / 2, 12);

  doc.text("Intrest Rate:" + data.intrestRate + " per annum", 10, 22);
  doc.text("Number of Installment:" + data.emis.length, 10, 28);
  doc.text("Frequency:" + "Weekly", 10, 34);
  doc.text("Installment Amount:" + data.emis[0].emiAmount, 10, 40);
  doc.text("Loan Amount:" + data.loanAmount, 10, 46);
  doc.text("Borrower Name:" + data.name, 90, 22);

  const tableColumn = [
    "Due Date",
    "Installment #",
    "Installment Amount",
    "Principal",
    "Intrest",
    "Paid Amount",
    "Paid Date",
    "Balance",
  ];

  const tableRows = data.emis.map((item) => {
    const temp = [
      "emiDate",
      "emiNo",
      "emiAmount",
      "principal",
      "interest",
      "paidAmount",
      "paidDate",
      "remainingPrincipal",
    ].map((i) => {
      if (i == "emiDate" || i == "paidDate") {
        if (item[i]) {
          return new Date(item[i]).toLocaleDateString("en-GB");
        }
      } else {
        return item[i];
      }
    });

    return temp;
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 50,
    styles: {
      halign: "center",
      valign: "middle",
      fontSize: 12,
    },
  });

  doc.save(data.name + " - " + data._id + ".pdf");
}

export function SinglePdf(data) {
  console.log(data);
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  doc.setFontSize(14);
  const h1 = "Repayment Schedule";
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.text(h1, (pageWidth - doc.getTextWidth(h1)) / 2, 12);

  doc.text("Borrower Name:" + data.name, 10, 22);
  doc.text("Loan ID:" + data._id, 10, 28);
  doc.text("Status:" + (data.loanStatus ? "Active" : "Inactive"), 10, 34);
  doc.text("Intrest Amount:" + data.intrestAmount, 10, 40);
  doc.text(
    "Loan Date:" + new Date(data.loanDate).toLocaleDateString("en-GB"),
    10,
    46
  );

  doc.text("Customer ID:" + data.cusId, 90, 22);
  doc.text(
    "Due Date:" + new Date(data.dueDate).toLocaleDateString("en-GB"),
    90,
    28
  );
  doc.text("Loan Amount:" + data.loanAmount, 90, 34);
  doc.text("Balance:" + data.balance, 90, 40);

  const tableColumn = ["Date", "Description", "Credit", "Debit", "Balance"];

  const tableRows = data.passbook.map((item) => {
    const temp = ["date", "desc", "credit", "debit", "balance"].map((i) => {
      if (i == "date" || i == "paidDate") {
        if (item[i]) {
          return new Date(item[i]).toLocaleDateString("en-GB");
        }
      } else {
        return item[i];
      }
    });

    return temp;
  });

  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 50,
    styles: {
      halign: "center",
      valign: "middle",
      fontSize: 12,
    },
  });

  doc.save(data.name + " - " + data._id + ".pdf");
}

export function LoanPdf(data, formData) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  const heading = "Loans List";
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.text(heading, (pageWidth - doc.getTextWidth(heading)) / 2, 10);
  doc.text(
    "From: " + new Date(formData.from).toLocaleDateString("en-GB"),
    10,
    20
  );
  doc.text("To: " + new Date(formData.to).toLocaleDateString("en-GB"), 10, 30);

  doc.text("Type: " + formData.type, 80, 20);

  const tableColumn1 = [
    "Sr. No",
    "Client Name",
    "Loan Id",
    "Loan Amount",
    "Due Amount",
    "Loan Date",
    "Mobile No",
  ];

  const tableColumn2 = [
    "Sr. No",
    "Client Name",
    "Loan Id",
    "Total EMIs",
    "Paid EMIs",
    "EMI Amount",
    "Mobile No",
  ];

  const tableRows = data.map((item, index) => {
    if (formData.type == "single") {
      return [
        index + 1,
        item.name,
        item._id,
        item.loanAmount,
        item.balance,
        new Date(item.loanDate).toLocaleDateString("en-GB"),
        item.cusId,
      ];
    } else {
      return [
        index + 1,
        item.name,
        item._id,
        item.totalEmi,
        item.paidEmis,
        item.emiAmount,
        item.cusId,
      ];
    }
  });

  autoTable(doc, {
    head: [formData.type === "single" ? tableColumn1 : tableColumn2],
    body: tableRows,
    startY: 40,
    styles: {
      halign: "center",
      valign: "middle",
      fontSize: 12,
    },
  });

  doc.save("LoansList.pdf");
}
