const express = require('express')
const router = new express.Router()

router.use('/', (req, res, next) => {
  req.feature = req.originalUrl.split('/')[1] + '/' + req.originalUrl.split('/')[2] + '/' + req.originalUrl.split('/')[3] + '/' + req.originalUrl.split('/')[4]
  res.locals.feature = req.feature
  next()
})

// Route index page
router.get('/', function (req, res) {
  res.redirect('../')
})

// provider manage your apprentices
router.use('/research/provider-portal/manage-your-apprentices', (req, res, next) => {
  require(`./research/provider-portal/manage-your-apprentices/routes`)(req, res, next);
})





// Re-direct from multiple nested radios showing version options
router.post('/sprint-11/epao3/2-confirm-apprentice1', function (req, res) {

    let chooseversionoption = req.session.data['chooseversionoption']

    console.log(req.session.data['chooseversionoption'])

    //Option 1
    if (chooseversionoption === 'Version 1.0') {
        res.redirect('/sprint-11/epao3/2-confirm-apprentice1')
    }
    //Option 2
    else if (chooseversionoption === 'Version 1.1') {
        res.redirect('/sprint-11/epao3/2-confirm-apprentice2')
    }
    //Option 3
    else if (chooseversionoption === 'Version 1.2') {
        res.redirect('/sprint-11/epao3/2-confirm-apprentice3')
    }
    //end
})


// Profile 3 directions
router.post('/booking/noti-contact', function (req, res) {

    let direct = req.session.data['direct']

    console.log(req.session.data['direct'])

    //Option 1
    if (direct === 'contact-candidate') {
        res.redirect('/booking/noti-contact')
    }
    //Option 2
    else if (direct === 'cancel-booking') {
        res.redirect('/booking/noti-cancel')
    }
    //end
})

module.exports = router
