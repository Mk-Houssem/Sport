const mongoose =require("mongoose");
const playerSchema=mongoose.Schema({

    name:String,
    position:String,
    nbr:Number, 
    avatar:String,
    teamId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Team"
    }
});
const player=mongoose.model("Player",playerSchema);
module.exports=player;