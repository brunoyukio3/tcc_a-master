
export default function validarId(id) {
    
    if (isNaN(id)) 
        throw new Error("O id deve ser um numero");
    
    return id
}