const Task = require("../models/task").Task

module.exports={
    index:async(req,res)=>{
        const  data = await Task.find({});
        // res.send(data)
        res.render("index",{todotasks : data})
    },

    create:(req,res)=>{
        // insert
        Task.create({title: req.body.title}).then(()=>{
            console.log("done")
        })
        res.redirect('/')
    },

    destroy:async(req,res)=>{
        await Task.deleteOne({_id:req.params.id})
        res.redirect("/")
    },
    
    edit:async(req,res)=>{
        const id =req.params.id
        const title = await Task.findById(id)
        console.log(title.title)
        res.render("todoEdit",{id:id , title : title.title})
    },
    update:async(req,res)=>{
        const newTitle = req.body.title
        try {
            await Task.updateOne({_id:req.params.id},{$set:{'title':newTitle}})
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
    }
}