import {Component}  from '@angular/core';

@Component ({
  selector: 'my-contact',
  template: `
  <div style="background-color:#E0B13A;;height:100px;"></div>
  <div style="background-color:#5336f3;">
    <img src="images/contactus.jpg" style="width:100%;height:800px;">
  </div>

  <div>
    Thank you for visiting our website! Please use the form on this page to contact us and we will get back to you as soon as possible. For urgent inquiries please call our phone number or email us directly.

    Mailing Address:
    100 Pine Street, Suite 1250,
    San Francisco CA 94111

    E-Mail:
    info@siddhanath.org
</div>
  `
})

export class ContactComponent { }
