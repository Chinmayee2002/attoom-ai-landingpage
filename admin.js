// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyDzGFeX8o34isOkFtTnMlUmSQXYMu_gKlY",
  authDomain: "attoom-ai-9b1e3.firebaseapp.com",
  databaseURL: "https://attoom-ai-9b1e3-default-rtdb.firebaseio.com",
  projectId: "attoom-ai-9b1e3",
  storageBucket: "attoom-ai-9b1e3.firebasestorage.app",
  messagingSenderId: "88981979980",
  appId: "1:88981979980:web:0e802021b276b4f25005e9",
};

firebase.initializeApp(firebaseConfig);

// Reference the database
var contactFormDB = firebase.database().ref("contactForm");

// ===== LOGIN =====
function adminLogin() {
  let user = document.getElementById("adminUser").value;
  let pass = document.getElementById("adminPass").value;

  const ADMIN_USER = "admin";
  const ADMIN_PASS = "admin123";

  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById("login").style.display = "none";
    document.getElementById("contentArea").style.display = "block";
    loadData();
  } else {
    document.getElementById("loginError").style.display = "block";
  }
}

// ===== FETCH DATA FROM FIREBASE =====
function loadData() {
  contactFormDB.on("value", (snapshot) => {
    let tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    snapshot.forEach((child) => {
      let data = child.val();

      let row = document.createElement("tr");
      row.classList.add("table-row");

      row.innerHTML = `
        <td class="table-cell">${data.topic}</td>
        <td class="table-cell">${data.name}</td>
        <td class="table-cell">${data.email}</td>
        <td class="table-cell">${data.phone}</td>
        <td class="table-cell">${data.msgContent}</td>
      `;

      tableBody.appendChild(row);
    });
  });
}
