<!DOCTYPE html>

<html lang="en">

<head>

  <meta charset="UTF-8">

  <title>Simple JS Example</title>

</head>

<body>

  <h1>Welcome to My Portfolio</h1>

  <p>Click the button to see a message:</p>

  <button onclick="showMessage()">Click Me</button>

  <p id="message"></p>

  <script>

    function showMessage() {

      document.getElementById("message").textContent = "Hello! I'm Venisha, a future web developer!";

    }

  </script>

</body>

</html>