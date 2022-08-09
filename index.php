<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="style.css" rel="stylesheet">
    <title>Resistance</title>
</head>
<body>
    <h1>Welcome to the resistance color code helper</h1>
    <div class="container">
            <div class="category">
                <h2>first band</h2>
                <div class="values">
                    <input id="unite" name="units" type="text" placeholder="unite"/>
                    <button id="unit" type="button">Unite</button>
                </div>
                </div>    
            <div class="category">
            <h2>second band</h2>
            <div class="values">
                <input id="dizaine" type="text" placeholder="dizaine"/>
                <button id="diz" type="button">dizaine</button>
            </div>
            </div>
            <div class="category">
                <h2>third band</h2> 
                <div class="values">
                    <input id="centaine" type="text" placeholder="centaine"/>
                    <button id="cent" type="button">centaine</button>
                </div>
            </div>
            <div class="category">
            <h2>forth band</h2>
                <div class="values">
                    <input id="milier" type="text" placeholder="milier"/>  
                    <button id="mil" type="button">milier</button>
                </div>
            </div>
            <div class="category">
                <h2>multiplier</h2>
                <div class="values">
                    <input id="multi" type="text" placeholder="multiplier"/>  
                    <button id="mul" type="button">multiplier</button>
                </div>
            </div>
            <div class="category">
                <h2>tolerance</h2>
                <div class="values">
                    <input id="tol" type="text" placeholder="tolerance"/>  
                    <button id="tole" type="button">tolerance</button>
                </div>
            </div>
    </div>
    
    <div id="tag-id"></div>
    <div>
        <h3>your resistor's values</h3>
    </div>
    <ul id="list">
            
    </ul>
    
    </div>
    
    <script src="script/script.js"></script>
</body>
</html>