// index.php

<?php

// Create a database connection object
$connection = new PDO("mysql:host=localhost;dbname=tech_heroes", "root", "");

// Check if the connection is successful or not
if ($connection) {

    // Echo a message to indicate success
    echo "<p>Connected to the database successfully.</p>";

} else {

    // Echo a message to indicate failure
    echo "<p>Failed to connect to the database.</p>";

}

// Create a SQL query to select all records from the tech_heroes table
$query = "SELECT * FROM tech_heroes";

// Execute the query and store the result in a variable
$result = $connection->query($query);

// Check if the result is not empty or not
if ($result->rowCount() > 0) {

    // Echo a message to indicate success
    echo "<p>Retrieved data from the database successfully.</p>";

    // Echo an opening table tag
    echo "<table>";

    // Echo a table row with table headers for name, birth date, and achievement
    echo "<tr><th>Name</th><th>Birth Date</th><th>Achievement</th></tr>";

    // Loop through each record in the result
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {

        // Echo a table row with table data for each field in the record
        echo "<tr><td>" . $row["name"] . "</td><td>" . $row["birth_date"] . "</td><td>" . $row["achievement"] . "</td></tr>";

    }

    // Echo a closing table tag
    echo "</table>";

} else {

    // Echo a message to indicate failure
    echo "<p>No data found in the database.</p>";

}

// Close the connection
$connection = null;

?>
