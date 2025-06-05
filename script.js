function plantTree() {
  const message = document.getElementById("tree-message");
  message.textContent = "🎉 You just planted a virtual tree!";
  setTimeout(() => {
    message.textContent = "";
  }, 3000);
}
