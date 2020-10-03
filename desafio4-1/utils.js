module.exports = {
    education: function (education_level){
        if (education_level == "high_school"){
            return "Ensino Médio Completo"
        } else if(education_level == "college"){
            return "Ensino Superior Completo" 
        } else if(education_level == "masters"){
            return "Mestrado" 
        } else {
            return "Doutorado" 
        }
    }
}