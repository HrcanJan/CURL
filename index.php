<html lang="sk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" type="image/x-icon" href="fei.png">
    <link rel="stylesheet" href="css/style.css">
    <title>CURL</title>
</head>
<body>
<div id="nav">
    <div id="searchbutton">Search</div>
    <div id="delbutton">Delikanti</div>
    <div id="eatbutton">Eat&Meet</div>
    <div id="fiitbutton">FIITFOOD</div>
</div>

<div class="box">
    <label for="filter">Search:</label>
    <input type="text" id="filter" placeholder="Zadajte meno jedla">
</div>

<div class="box">
    <label for="days">Day:</label>
    <select id="days" onchange="changeValue()">
        <option value="">Celý týždeň</option>
        <option value="Pondelok">Pondelok</option>
        <option value="Utorok">Utorok</option>
        <option value="Streda">Streda</option>
        <option value="Štvrtok">Štvrtok</option>
        <option value="Piatok">Piatok</option>
        <option value="Sobota">Sobota</option>
        <option value="Nedeľa">Nedeľa</option>
    </select>
</div>

<div id="search">
    <table id="searchtable">
        <thead>
        <tr>
            <th>Jedáleň</th>
            <th>Dátum</th>
            <th>Deň</th>
            <th>Menu</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

<div id="del">
    <table id="deltable">
        <thead>
            <tr>
                <th>Dátum</th>
                <th>Deň</th>
                <th>Menu</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

<div id="eat">
    <table id="eattable">
        <thead>
        <tr>
            <th>Dátum</th>
            <th>Deň</th>
            <th>Menu</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

<div id="fiit">
    <table id="fiittable">
        <thead>
        <tr>
            <th>Dátum</th>
            <th>Deň</th>
            <th>Menu</th>
        </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

<br><br>

<script src="js/script.js"></script>
</body>

</html>