import volvocarsPage from '../pages/volvocars.page';
import Volvocars from '../pages/volvocars.page';
//import { check as chaiExpect, assert } from 'chai';
import 'chai/register-should';

var check = require('chai').expect

describe("volvocars page", () => {
  //before(() => {
    //volvocampaignPage.open();
  //});
    it("should have the right title", () => {
      //browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
    //  browser.wait(1000);
      //volvocampaignPage.open();
      Volvocars.open();
      expect(browser).toHaveTitle("A million more | Volvo Cars");
    });

    it("should have the right text", () => {
      // browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
       expect(browser).toHaveUrlContaining("a-million-more");
       // it('should save a screenshot of the browser view', function () {
       // browser.saveScreenshot("./test/specs/screenshot.png");
     });

      // Test cases for Left side logo
      it("should be have VOLVO image in navigation bar visible and clickable ", () => {
        //browser.url("https://www.volvocars.com/intl/v/car-safety/a-million-more");
        const elem = $('.b.l.m.o.p.s.t.u');
        expect(elem).toBeClickable();
        expect(elem).toBeVisible();
      });
  
      it("should have a link in VOLVO IMAGE", () => {    
        const image = $('.b.l.m.o.p.s.t.u');
        const attr = image.getAttribute("src");
        console.log(attr);
        expect(image).toHaveUrlContaining("https://www.volvocars.com/intl");
        expect(image).toBeClickable();
        // const elem = $("b dy dz ea ed ei ej ek el em fo fp fq fr fs ft fu");
        //expect(elem).toBeVisible();
      });
  
      it("should have a proper 'VOLVO IMAGE' height", () => {
        const elem = $("img");
        expect(elem).toHaveElementProperty("height", 8);
      });
  
      it('should save a screenshot of the browser view', function () {
        browser.saveScreenshot("./test/specs/screenshot.png");
      });

     // Test cases for site navigation bar and menus
    it("should be visible the navigation, containing text and clickable ", () => {

      const navbar = $('.az.ba.bb.bc.bd.SiteNav-Topbar-CarsMenu') ;
      expect(navbar).toBeDisplayed();
      expect(navbar).toHaveTextContaining("Cars");
      expect(navbar).toBeClickable();
    });
    // Test cases for site navigation bar clickable
    it("should have the navigation view box,clickable", () => {
      const navbar = $('.ah.ak.cu.cv.cw.cx.cy.cz.da.v.x') ;
      expect(navbar).toBeDisplayed();
      expect(navbar).toBeClickable();
    });

  // IconCallouts
  // Speed cap
  it("should have Speed cap and containing text and image", () => {

    expect(Volvocars.icon_Out_Calls).toBeDisplayed();
    //expect(Volvocars.speed_cap_title).toHaveText('Speed cap');
    const string = Volvocars.icon_Out_Calls.getText();
    //console.log(string);
    console.log(string)
    check(string).to.be.a('string');

  });

  // Learn more
  it("should have learn more text displayed ", () => {
    expect(Volvocars.learn_More_Display).toBeDisplayed();
    expect(Volvocars.learn_More_Display).toBeClickable();
    expect(Volvocars.learn_More_Display).toHaveTextContaining('LEARN MORE ABOUT CAR SAFETY');
   
  });

  it("Learn more text should be clickable and contians href  ", () => {
        expect(Volvocars.learn_More_link).toHaveHref("https://www.volvocars.com/intl/v/car-safety");
  });

    it("should have paragraph", () => {
    expect(Volvocars.paragraph).toHaveTextContaining('Features depicted');
});
// video testimonial
it("should have testimonial title", () => {
  expect(Volvocars.video_Testimonials).toBeDisplayed();
  expect(Volvocars.video_Testimonials).toHaveTextContaining('One of a million');
});

it("should have vedio testimonial clickable and contians href  ", () => {
  expect(Volvocars.video_Testimonials_0).toBeDisplayed();
  expect(Volvocars.video_Testimonials_0).toBeClickable();
  expect(Volvocars.video_Testimonials_1).toBeDisplayed();
  expect(Volvocars.video_Testimonials_1).toBeClickable();
  expect(Volvocars.video_Testimonials_2).toBeDisplayed();
  expect(Volvocars.video_Testimonials_2).toBeClickable();
  expect(Volvocars.video_Testimonials_3).toBeDisplayed();
  expect(Volvocars.video_Testimonials_3).toBeClickable();
});

it('should save a screenshot of the browser view', function () {
  browser.saveScreenshot("./test/specs/screenshot.png");
});
//test cases for image with text
it("should have image with text section visibile", () => {
  expect(Volvocars.image_with_text_Section).toBeDisplayed();
});

it("should have image inside image with text", () => {
  expect(Volvocars.image_with_text_link).toBeDisplayed();
  const elem = Volvocars.image_with_text_link.getAttribute("src")
  console.log(elem)
  check(elem).to.be.equal('https://www.volvocars.com/images/v/intl/v/-/media/project/contentplatform/data/media/campaigns/seat-belt_4096x3072.jpg?iar=0&w=1200');
});

it("should have image with text section visibile with description and title", () => {
  expect(Volvocars.image_with_text_description).toBeDisplayed();
  expect(Volvocars.image_with_text_description).toHaveTextContaining('Decades of innovation');
  expect(Volvocars.image_with_text_description).toHaveTextContaining('Ever since our founding in 1927');
});
});

