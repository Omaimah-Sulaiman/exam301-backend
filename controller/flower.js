const {floweredModel}=require('../models/flower.model')

const axios = require('axios');


const getFlowersData=()=>{
    axios.get(`https://flowers-api-13.herokuapp.com/getFlowers`)
    .then(response=>{
        response.send()
    }).catch(err=>{console.log(err)});
}

const addFlower=(request, response)=>{
    const {name,instructions,photo}=requset.body;
    const newFlower=new floowerModel({
        name:name, instructions:instructions, photo:photo,
    })
    newFlower.save()
}

const getFlowerFav=(req, res)=>{
    floweredModel.find({},(err,data)=>{
        res.send(datat)
    })

}

const deleteFlowerFav=(req, res)=>{
    const id=req.params.id;
    floweredModel.delete({id:id},(err,datat)=>
    res.send(data))

    
}

const updataFlower=(req,res)=>{ 
 const id=res.req.params.flower_id;
 const {name,instructions,photo}=req.body
 floweredModel.findByIdAndUpdate({_id:id},{name:name,instructions:instructions,photo:photo},{new:true},(err,data)=>{
     res.send(data)
 })
}    

module.exports = {getFlowersData,addFlower,getFlowerFav,deleteFlowerFav,updataFlower}