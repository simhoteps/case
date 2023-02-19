window.onload = function () {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById("tab1").style.display = "block";
  document.getElementById("tab-control-1").className += " active";
};

function openTab(evt, tabName, index) {
  var i, tabcontent, tablinks;

  // Hide all tab contents
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Deactivate all tab buttons
  tablinks = document.querySelectorAll(".tab-navigation button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show selected tab content
  document.getElementById(tabName).style.display = "block";

  // Activate the selected tab button
  document.getElementById(index).className += " active";
}

function closeTab(evt, tabName, index) {
  document.getElementById(index).style.display = "none";
  openTab(evt, "tab1", "tab-control-1");
}

function visableTab(evt, tabName, index) {
  document.getElementById(index).style.display = "inline-block";
  openTab(evt, tabName, index);
}

function editTab(evt) {
  document.getElementById("tab-control-3").style.display = "inline-block";
  openTab(evt, "tab3", "tab-control-3");
}

function changeInput() {
  const notConnectedContent = document.getElementById("not-connected-content");
  const connectedContent = document.getElementById("connected-content");
  const notConnectedInput = document.querySelectorAll(
    "#not-connected-content input"
  );
  const notConnectedSelect = document.querySelectorAll(
    "#not-connected-content select"
  );
  const connectedInput = document.querySelectorAll("#connected-content input");
  const connectedSelect = document.querySelectorAll(
    "#connected-content select"
  );

  notConnectedInput.forEach(function (input) {
    input.disabled = false;
  });
  notConnectedSelect.forEach(function (select) {
    select.disabled = false;
  });
  connectedInput.forEach(function (input) {
    input.disabled = true;
  });
  connectedSelect.forEach(function (select) {
    select.disabled = true;
  });
  notConnectedContent.style.backgroundColor = "#ffffff";
  connectedContent.style.backgroundColor = "#52525240";
  document.getElementById("not-connection-title").style.backgroundColor =
    "#ffffff";
  document.getElementById("connection-title").style.backgroundColor = "#D4D4D4";
}

function changeConnectedInput() {
  const notConnectedContent = document.getElementById("not-connected-content");
  const connectedContent = document.getElementById("connected-content");
  const notConnectedInput = document.querySelectorAll(
    "#not-connected-content input"
  );
  const notConnectedSelect = document.querySelectorAll(
    "#not-connected-content select"
  );
  const connectedInput = document.querySelectorAll("#connected-content input");
  const connectedSelect = document.querySelectorAll(
    "#connected-content select"
  );
  notConnectedInput.forEach(function (input) {
    input.disabled = true;
  });
  notConnectedSelect.forEach(function (select) {
    select.disabled = true;
  });
  connectedInput.forEach(function (input) {
    input.disabled = false;
  });
  connectedSelect.forEach(function (select) {
    select.disabled = false;
  });

  notConnectedContent.style.backgroundColor = "#52525240";
  connectedContent.style.backgroundColor = "transparent";
  document.getElementById("not-connection-title").style.backgroundColor =
    "#D4D4D4";
  document.getElementById("connection-title").style.backgroundColor = "#ffffff";
}
