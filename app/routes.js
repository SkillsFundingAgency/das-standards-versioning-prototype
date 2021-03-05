const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


// Re-direct from multiple  radios showing version options
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




// Re-direct from multiple  radios showing version options
router.post('/sprint-2-beta/epao7/2-options', function (req, res) {

    let choosestandard = req.session.data['choosestandard']

    console.log(req.session.data['choosestandard'])

    //Option 1
    if (choosestandard === 'Gas engineering operative') {
        res.redirect('/sprint-2-beta/epao7/2-options')
    }
    //Option 2
    else if (choosestandard === 'Gas network craftsperson') {
        res.redirect('/sprint-2-beta/epao7/2-options1')
    }

    //end
})






// Re-direct from multiple  radios showing version options
router.post('/sprint-2-beta/epao5/2a-options', function (req, res) {

    let chooseversion = req.session.data['chooseversion']

    console.log(req.session.data['chooseversion'])

    //Option 1
    if (chooseversion === 'Version 1.0') {
        res.redirect('/sprint-2-beta/epao5/2a-options')
    }
    //Option 2
    else if (chooseversion === 'Version 1.1') {
        res.redirect('/sprint-2-beta/epao5/2b-options')
    }

    //end
})




// Re-direct from multiple  radios showing version options
router.post('/sprint-1-beta/epao1/2a-options', function (req, res) {

    let chooseversions = req.session.data['chooseversions']

    console.log(req.session.data['chooseversions'])

    //Option 1
    if (chooseversions=== 'Version 1.0') {
        res.redirect('/sprint-1-beta/epao1/2a-options')
    }
    //Option 2
    else if (chooseversions === 'Version 1.1') {
        res.redirect('/sprint-1-beta/epao1/2b-options')
    }

    //end
})




// Re-direct from multiple  radios showing version options
router.post('/sprint-2-beta/staffadminsearchdraft/6-version', function (req, res) {

    let chooseversions = req.session.data['chooseversion']

    console.log(req.session.data['chooseversion'])

    //Option 1
    if (chooseversions=== '1.0') {
        res.redirect('/sprint-2-beta/staffadminsearchdraft/7a-amend')
    }
    //Option 2
    else if (chooseversions=== '1.1') {
        res.redirect('/sprint-2-beta/staffadminsearchdraft/7b-amend')
    }

    //end
})




// Re-direct from multiple  radios showing version options
router.post('/sprint-2-beta/staffadminsearchsent/6-version', function (req, res) {

    let chooseversions = req.session.data['chooseversion']

    console.log(req.session.data['chooseversion'])

    //Option 1
    if (chooseversions=== '1.0') {
        res.redirect('/sprint-2-beta/staffadminsearchsent/7a-amend')
    }
    //Option 2
    else if (chooseversions=== '1.1') {
        res.redirect('/sprint-2-beta/staffadminsearchsent/7b-amend')
    }

    //end
})









module.exports = router
