const mongoose =require("mongoose");
const teamSchema=mongoose.Schema({
    
    name:String,
    stadiumId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stadium"
    },
    owner:String,
    fondation:Number,
    players:[{ type:mongoose.Schema.Types.ObjectId,ref:"Player"}],
});
const team=mongoose.model("Team",teamSchema);
module.exports=team;