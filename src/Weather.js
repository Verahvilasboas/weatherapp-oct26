import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
<h1>Lisbon</h1>
<button type="button" class="btn-solid theme-primary">Primary</button>
<ul>
<li>
wednesday, 15:00
</li>
<li>
Mostly sunny
</li>
</ul>

<div className="row">
<div className="col-6">
<img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny" /> 6°C
</div>
<div className="col-6">
<ul>
<li> precipitation: 0%</li>
<li> humidity: 0%</li>
<li> wind: 0 km/h</li>
</ul>
      </div>   
        </div>  
        </div>

    );
}
