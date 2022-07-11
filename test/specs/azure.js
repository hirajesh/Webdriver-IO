const signin=require('../pageobjects/signin.page')

describe('This test will execute sign in ',()=>{
    it('Signin test',async()=>{

       await signin.landopenurl();
       await signin.land_signIN();
     //  await signin.usersignin('landmarkeod2021@gmail.com','123456');
     //  await signin.land_close_mobileverification();

    })
})
