import {Component}  from '@angular/core';


@Component ({
  selector: 'my-event',
  template: `
    <div style="background-color:#E0B13A;;height:100px;"></div>
    <div style="background-color:#5336f3;">
      <img src="images/events-main.jpg" style="width:100%;height:500px;">
    </div>
<div style="padding:30px;width:95%;display:inline-block;">
<marquee>
    <h2>For latest UK event please visit this section</h2>
</marquee>
</div>
<my-footer></my-footer>
  `
})
 export class EventComponent {

 }
