import img1 from './images/div1img.webp';
import './css/div1.scss';
import './css/div1android.scss';
import './css/div1tablet.scss';




function Div1(){


    return (
        <div id="div1">
        <div> <h1>arun shandsfnsdnfjsd </h1></div>
<div className="container1" >
    <div className="row" id="row1">
    <div className="col-sm-12 col-xs-12 col-md-6 col-md-pull-6">
        
        <div id="leftcol">
            <h1> AI and CPS for<br></br>
Agriculture Automation</h1>
<p> June 2 - July 16, 2021 </p>
<h3> DST iHub - AWaDH</h3>
<h5> Indian Institute of Technology Ropar</h5>
<br>

</br>

<button className="btn btn-outline-primary" id="btn"> Apply Now </button> 
       </div>
        
        </div>
    
        <div className="col-sm-12 col-xs-12 col-md-6 col-md-push-6">
            <img src={img1} id="img" />
        </div>


    </div>
    <div class="row" id="row2" >
        <div className="col-md-6 col-sm-12 col-xs-12">
        <img src={img1} className="img-fluid" id="img" />
        </div>
        <div className=" col-md-6 col-sm-12 col-xs-12 col-md-pull-6">
        
        <div id="leftcol">
            <h1> AI and CPS for<br></br>
Agriculture Automation</h1>
<p> June 2 - July 16, 2021 </p>
<h3> DST iHub - AWaDH</h3>
<h5> Indian Institute of Technology Ropar</h5>
<br>

</br>

<button className="btn btn-outline-primary" id="btn"> Apply Now </button> 
       </div>
        
        </div>
    
    </div>
</div>
        </div>
    );
}


export default Div1;