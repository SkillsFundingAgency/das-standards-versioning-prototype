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

module.exports = router
