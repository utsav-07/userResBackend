const handleGetAllDetalis = (req ,res , db) =>{

    db.select('*').from('form-submit').then(data => {
        res.json(data);
    }).catch(err => res.status(400).json("unable to get details"))
}


module.exports ={
    handleGetAllDetalis: handleGetAllDetalis
}