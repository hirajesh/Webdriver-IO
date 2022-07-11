class signin {


  get lansignIn() {
    return $("#account-actions-signin");
  }
  get lanpassWord() {
    return $('//*[@id="standalone-j_password"]');
  }
  get lanuserName() {
    return $('//*[@id="standalone-j_username"]');
  }
  get lanlogin() {
    return $("#standalone-signin-form-submit");
  }
  get lancloseverify() {
    return $('//*[@id="device-id-close"]');
  }
  get lanbasket() {
    return $('//*[text()="Basket"]');
  }

  async usersignin(user, pass) {
//    await browser.setTimeout({ pageLoad: 50000 });
    await this.lanuserName.setValue(user);
    await this.lanpassWord.setValue(pass);
    await this.lanlogin.click();
  }
  async land_signIN() {
    await this.lansignIn.click();
    browser.saveScreenshot("./signinpage.png");
    await browser.setTimeout({ pageLoad: 50000 });
  }
  async landopenurl() {
    await browser.maximizeWindow();
    await browser.url("https://lms.com:L@digital@uat1.homecentre.com/ae/en/");
   // await browser.url("https://www.homecentre.com/ae/en/");
    browser.saveScreenshot("./homepage.png");
  }
  async land_close_mobileverification() {
    await this.lancloseverify.click();
  }

}

module.exports = new signin();
