const express=require('express');
const web=require('../models/web')
const router=express.Router();
const Web=require('../models/web')
router.get('/',(req, res, next)=>{
    Web.find((err,docs)=>{
        res.render('home',{web:docs});
    }).catch(err=>{
        console.log("something wrong with mongodb");
    })
    router.post('/add',(req,res,next)=>{
        const url=req.body.url;
        console.log(url);
        const newWeb = new web({
            url
            
        });
        newWeb.save((err)=>{
            if(err){
                console.log("Something went wrong to save data to database");
            }else{
            console.log("Data is stored");
            res.redirect('/')
            }
            
            })
                })

    //COUNT
                router.get('/add',(req,res,next)=>{
           
                       
                    count.save((err)=>{
                    if(err){
                        console.log("Something went wrong to save data to database");
                    }else{
                    console.log("Data is stored"+count);
                    res.redirect('/')
                      }
                })})
    
})
//DELETE
router.get('/delete/:id',(req,res,next)=>{
    Web.findByIdAndDelete({_id: req.params.id},req.body,(err,docs)=>{
        if(err){
            console.log("something went wrong to delete");
            next(err)
        }else{
        console.log('Deleted Successfully')
        res.redirect('/');  
        }
    })
})
//FAVOURITE
router.get('/favourite/:id',(req,res,next)=>{
    const fav="true"
    console.log(fav);
    
    const newWeb1 = new web({
    fav
  
        
    });
    newWeb1.save((error)=>{
        if(error){
            console.log("Something went wrong to save to DB");
        }else{
        console.log("Data is stored");
        res.redirect('/')
        }
        
        })
            })
   
    
           



module.exports= router;