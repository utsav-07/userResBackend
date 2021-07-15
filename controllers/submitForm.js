const handleSubmitForm = (req ,res ,db) => {
    const {name ,email ,branch} = req.body;

    if(!name || !email || !branch){
        return res.status(400).json('form is incomplete');
    }
    db('form-submit').insert({
        name : name,
        email : email,
        branch : branch

    }).then(response => {
        
        db.select('*').from('form-submit')
        .where('id', '=' , response).then(data => {
            res.json(data);
        }).catch(err => res.status(400).json("unable to submit"))
    }).catch(err => res.status(400).json("unable to submit"))


}


module.exports ={
    handleSubmitForm: handleSubmitForm
}